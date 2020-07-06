using System;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.SceneManagement;

namespace Mirror
{
    public interface INetworkSceneManager
    {
        void ClientSceneMessage(INetworkConnection conn, SceneMessage msg);

        void ChangeServerScene(string newSceneName);

        void Ready(INetworkConnection conn);
    }

    public class NetworkSceneManager : MonoBehaviour, INetworkSceneManager
    {
        static readonly ILogger logger = LogFactory.GetLogger(typeof(NetworkSceneManager));

        [Serializable] public class ClientSceneChangeEvent : UnityEvent<string, SceneOperation, bool> { }
        [Serializable] public class NetworkSceneEvent : UnityEvent<string> { }

        public NetworkClient client;
        public NetworkServer server;

        /// <summary>
        /// Event fires when the Client starts changing scene.
        /// </summary>
        public ClientSceneChangeEvent ClientChangeScene = new ClientSceneChangeEvent();

        /// <summary>
        /// Event fires after the Client has completed its scene change.
        /// </summary>
        public NetworkConnectionEvent ClientSceneChanged = new NetworkConnectionEvent();

        /// <summary>
        /// Event fires before Server changes scene.
        /// </summary>
        public NetworkSceneEvent ServerChangeScene = new NetworkSceneEvent();

        /// <summary>
        /// Event fires after Server has completed scene change.
        /// </summary>
        public NetworkSceneEvent ServerSceneChanged = new NetworkSceneEvent();

        /// <summary>
        /// The name of the current network scene.
        /// </summary>
        /// <remarks>
        /// <para>This should not be changed directly. Calls to ServerChangeScene() cause this to change. New clients that connect to a server will automatically load this scene.</para>
        /// <para>This is used to make sure that all scene changes are initialized by Mirror.</para>
        /// <para>Loading a scene manually wont set networkSceneName, so Mirror would still load it again on start.</para>
        /// </remarks>
        public string networkSceneName = "";

        public AsyncOperation loadingSceneAsync;

        /// <summary>
        /// Returns true when a client's connection has been set to ready.
        /// <para>A client that is ready recieves state updates from the server, while a client that is not ready does not. This useful when the state of the game is not normal, such as a scene change or end-of-game.</para>
        /// <para>This is read-only. To change the ready state of a client, use ClientScene.Ready(). The server is able to set the ready state of clients using NetworkServer.SetClientReady(), NetworkServer.SetClientNotReady() and NetworkServer.SetAllClientsNotReady().</para>
        /// <para>This is done when changing scenes so that clients don't receive state update messages during scene loading.</para>
        /// </summary>
        public bool ready { get; internal set; }

        public void Start()
        {
            DontDestroyOnLoad(gameObject);

            SceneManager.sceneLoaded += OnSceneLoaded;

            if (client != null)
            {
                client.Authenticated.AddListener(OnClientAuthenticated);
            }
            if (server != null)
            {
                server.Authenticated.AddListener(OnServerAuthenticated);
            }
        }

        public virtual void LateUpdate()
        {
            UpdateScene();
        }

        void UpdateScene()
        {
            if (loadingSceneAsync != null && loadingSceneAsync.isDone)
            {
                FinishLoadScene();
                loadingSceneAsync.allowSceneActivation = true;
                loadingSceneAsync = null;
            }
        }

        void RegisterClientMessages(INetworkConnection connection)
        {
            connection.RegisterHandler<NotReadyMessage>(OnClientNotReadyMessageInternal);
            connection.RegisterHandler<SceneMessage>(ClientSceneMessage);
        }

        // support additive scene loads:
        //   * ClientScene.PrepareToSpawnSceneObjects enables them again on the
        //     client after the server sends ObjectSpawnStartedMessage to client
        //     in SpawnObserversForConnection. This is only called when the
        //     client joins, so we need to rebuild scene objects manually again.
        void OnSceneLoaded(Scene scene, LoadSceneMode mode)
        {
            if (mode == LoadSceneMode.Additive)
            {
                if(client.Active)
                {
                    client.PrepareToSpawnSceneObjects();
                    if (logger.LogEnabled()) logger.Log("Rebuild Client spawnableObjects after additive scene load: " + scene.name);
                }

                if (server.Active)
                {
                    server.SpawnObjects();
                    if (logger.LogEnabled()) logger.Log("Respawned Server objects after additive scene load: " + scene.name);
                }
            }
        }

        void FinishLoadScene()
        {
            // NOTE: this cannot use NetworkClient.allClients[0] - that client may be for a completely different purpose.

            // process queued messages that we received while loading the scene
            logger.Log("FinishLoadScene: resuming handlers after scene was loading.");
            // host mode?
            if (client.IsLocalClient)
            {
                FinishLoadSceneHost();
            }
            // server-only mode?
            else if (server.Active)
            {
                FinishLoadSceneServerOnly();
            }
            // client-only mode?
            else if (client.Active)
            {
                FinishLoadSceneClientOnly();
            }
        }

        void FinishStartHost()
        {
            // server scene was loaded. now spawn all the objects
            server.SpawnObjects();

            // connect client and call OnStartClient AFTER server scene was
            // loaded and all objects were spawned.
            // DO NOT do this earlier. it would cause race conditions where a
            // client will do things before the server is even fully started.
            logger.Log("StartHostClient called");

            server.ActivateHostScene();
        }

        // finish load scene part for host mode. makes code easier and is
        // necessary for FinishStartHost later.
        // (the 3 things have to happen in that exact order)
        void FinishLoadSceneHost()
        {
            // debug message is very important. if we ever break anything then
            // it's very obvious to notice.
            logger.Log("Finished loading scene in host mode.");

            if (client.Connection != null)
            {
                client.OnAuthenticated(client.Connection);
            }

            FinishStartHost();

            // call OnServerSceneChanged
            OnServerSceneChanged(networkSceneName);

            if (client.IsConnected)
            {
                // let client know that we changed scene
                OnClientSceneChanged(client.Connection);
            }
        }

        // finish load scene part for client-only. makes code easier and is
        // necessary for FinishStartClient later.
        void FinishLoadSceneClientOnly()
        {
            // debug message is very important. if we ever break anything then
            // it's very obvious to notice.
            logger.Log("Finished loading scene in client-only mode.");

            if (client.Connection != null)
            {
                client.OnAuthenticated(client.Connection);
            }

            if (client.IsConnected)
            {
                OnClientSceneChanged(client.Connection);
            }
        }

        // finish load scene part for server-only. . makes code easier and is
        // necessary for FinishStartServer later.
        void FinishLoadSceneServerOnly()
        {
            // debug message is very important. if we ever break anything then
            // it's very obvious to notice.
            logger.Log("Finished loading scene in server-only mode.");

            server.SpawnObjects();
            OnServerSceneChanged(networkSceneName);
        }

        #region Client

        // called after successful authentication
        void OnClientAuthenticated(INetworkConnection conn)
        {
            RegisterClientMessages(conn);

            logger.Log("NetworkSceneManager.OnClientAuthenticated");
        }

        public void ClientSceneMessage(INetworkConnection conn, SceneMessage msg)
        {
            if (!client.IsConnected || server.Active)
                return;

            if (string.IsNullOrEmpty(msg.sceneName))
            {
                throw new ArgumentNullException(msg.sceneName, "ClientChangeScene: " + msg.sceneName + " cannot be empty or null");
            }

            if (logger.LogEnabled()) logger.Log("ClientChangeScene newSceneName:" + msg.sceneName + " networkSceneName:" + networkSceneName);

            // Let client prepare for scene change
            OnClientChangeScene(msg.sceneName, msg.sceneOperation, msg.customHandling);

            // scene handling will happen in overrides of OnClientChangeScene and/or OnClientSceneChanged
            if (msg.customHandling)
            {
                FinishLoadScene();
                return;
            }

            switch (msg.sceneOperation)
            {
                case SceneOperation.Normal:
                    loadingSceneAsync = SceneManager.LoadSceneAsync(msg.sceneName);
                    break;
                case SceneOperation.LoadAdditive:
                    // Ensure additive scene is not already loaded on client by name or path
                    // since we don't know which was passed in the Scene message
                    if (!SceneManager.GetSceneByName(msg.sceneName).IsValid() && !SceneManager.GetSceneByPath(msg.sceneName).IsValid())
                        loadingSceneAsync = SceneManager.LoadSceneAsync(msg.sceneName, LoadSceneMode.Additive);
                    else
                    {
                        logger.LogWarning($"Scene {msg.sceneName} is already loaded");
                    }
                    break;
                case SceneOperation.UnloadAdditive:
                    // Ensure additive scene is actually loaded on client by name or path
                    // since we don't know which was passed in the Scene message
                    if (SceneManager.GetSceneByName(msg.sceneName).IsValid() || SceneManager.GetSceneByPath(msg.sceneName).IsValid())
                        loadingSceneAsync = SceneManager.UnloadSceneAsync(msg.sceneName, UnloadSceneOptions.UnloadAllEmbeddedSceneObjects);
                    else
                    {
                        logger.LogWarning($"Cannot unload {msg.sceneName} with UnloadAdditive operation");
                    }
                    break;
            }

            // don't change the client's current networkSceneName when loading additive scene content
            if (msg.sceneOperation == SceneOperation.Normal)
                networkSceneName = msg.sceneName;
        }

        void OnClientNotReadyMessageInternal(INetworkConnection conn, NotReadyMessage msg)
        {
            logger.Log("NetworkSceneManager.OnClientNotReadyMessageInternal");

            ready = false;
            client.OnClientNotReady(conn);
        }

        /// <summary>
        /// Called from ClientChangeScene immediately before SceneManager.LoadSceneAsync is executed
        /// <para>This allows client to do work / cleanup / prep before the scene changes.</para>
        /// </summary>
        /// <param name="newSceneName">Name of the scene that's about to be loaded</param>
        /// <param name="sceneOperation">Scene operation that's about to happen</param>
        /// <param name="customHandling">true to indicate that scene loading will be handled through overrides</param>
        internal void OnClientChangeScene(string sceneName, SceneOperation sceneOperation, bool customHandling)
        {
            ClientChangeScene.Invoke(sceneName, sceneOperation, customHandling);
        }

        /// <summary>
        /// Called on clients when a scene has completed loaded, when the scene load was initiated by the server.
        /// <para>Non-Additive Scene changes will cause player objects to be destroyed. The default implementation of OnClientSceneChanged in the NetworkSceneManager is to add a player object for the connection if no player object exists.</para>
        /// </summary>
        /// <param name="conn">The network connection that the scene change message arrived on.</param>
        internal void OnClientSceneChanged(INetworkConnection conn)
        {
            //set ready after scene change has completed
            if (!ready)
                Ready(conn);

            ClientSceneChanged.Invoke(conn);
        }

        #endregion

        #region Server

        // called after successful authentication
        void OnServerAuthenticated(INetworkConnection conn)
        {
            logger.Log("NetworkSceneManager.OnServerAuthenticated");

            // proceed with the login handshake by calling OnServerConnect
            if (!string.IsNullOrEmpty(networkSceneName))
            {
                var msg = new SceneMessage { sceneName = networkSceneName };
                conn.Send(msg);
            }
        }

        /// <summary>
        /// This causes the server to switch scenes and sets the networkSceneName.
        /// <para>Clients that connect to this server will automatically switch to this scene. This automatically sets clients to be not-ready. The clients must call Ready() again to participate in the new scene.</para>
        /// </summary>
        /// <param name="newSceneName"></param>
        public void ChangeServerScene(string newSceneName)
        {
            if (string.IsNullOrEmpty(newSceneName))
            {
                throw new ArgumentNullException(nameof(newSceneName), "ServerChangeScene: " + nameof(newSceneName) + " cannot be empty or null");
            }

            if (logger.LogEnabled()) logger.Log("ServerChangeScene " + newSceneName);
            server.SetAllClientsNotReady();
            networkSceneName = newSceneName;

            // Let server prepare for scene change
            OnServerChangeScene(newSceneName);

            loadingSceneAsync = SceneManager.LoadSceneAsync(newSceneName);

            // notify all clients about the new scene
            server.SendToAll(new SceneMessage { sceneName = newSceneName });
        }

        /// <summary>
        /// Called from ChangeServerScene immediately before NetworkSceneManager's LoadSceneAsync is executed
        /// <para>This allows server to do work / cleanup / prep before the scene changes.</para>
        /// </summary>
        /// <param name="newSceneName">Name of the scene that's about to be loaded</param>
        internal void OnServerChangeScene(string newSceneName)
        {
            ServerChangeScene.Invoke(newSceneName);
        }

        /// <summary>
        /// Called on the server when a scene is completed loaded, when the scene load was initiated by the server with ChangeServerScene().
        /// </summary>
        /// <param name="sceneName">The name of the new scene.</param>
        internal void OnServerSceneChanged(string sceneName)
        {
            ServerSceneChanged.Invoke(sceneName);
        }

        /// <summary>
        /// Signal that the client connection is ready to enter the game.
        /// <para>This could be for example when a client enters an ongoing game and has finished loading the current scene. The server should respond to the message with an appropriate handler which instantiates the players object for example.</para>
        /// </summary>
        /// <param name="conn">The client connection which is ready.</param>
        public void Ready(INetworkConnection conn)
        {
            if (ready)
            {
                throw new InvalidOperationException("A connection has already been set as ready. There can only be one.");
            }

            if (conn == null)
                throw new InvalidOperationException("Ready() called with invalid connection object: conn=null");

            if (logger.LogEnabled()) logger.Log("ClientScene.Ready() called with connection [" + conn + "]");

            // Set these before sending the ReadyMessage, otherwise host client
            // will fail in InternalAddPlayer with null readyConnection.
            ready = true;
            client.Connection.IsReady = true;

            // Tell server we're ready to have a player object spawned
            conn.Send(new ReadyMessage());
        }

        #endregion

    }
}
