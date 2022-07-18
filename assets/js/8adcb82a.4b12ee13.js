"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[3421],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=r,g=h["".concat(l,".").concat(m)]||h[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},11504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:5,title:"Spawn Object"},o="Spawning Game Objects",s={unversionedId:"guides/game-objects/spawn-object",id:"guides/game-objects/spawn-object",title:"Spawn Object",description:"In Unity, you usually \u201cspawn\u201d (that is, create) new game objects with Instantiate. However, in Mirage, the word \u201cspawn\u201d means something more specific. In the server-authoritative model of the Mirage, to \u201cspawn\u201d a game object on the server means that the game object is created on clients connected to the server, and is managed by the spawning system.",source:"@site/docs/guides/game-objects/spawn-object.md",sourceDirName:"guides/game-objects",slug:"/guides/game-objects/spawn-object",permalink:"/Mirage/docs/guides/game-objects/spawn-object",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/guides/game-objects/spawn-object.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Spawn Object"},sidebar:"docs",previous:{title:"Spawn Player - Custom",permalink:"/Mirage/docs/guides/game-objects/spawn-player-custom"},next:{title:"Spawn Object - Custom",permalink:"/Mirage/docs/guides/game-objects/spawn-object-custom"}},l={},c=[{value:"Spawning Without Network Manager",id:"spawning-without-network-manager",level:2},{value:"Constraints",id:"constraints",level:3},{value:"Game Object Creation Flow",id:"game-object-creation-flow",level:2},{value:"Player Game Objects",id:"player-game-objects",level:3},{value:"Spawning Game Objects with Client Authority",id:"spawning-game-objects-with-client-authority",level:2}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spawning-game-objects"},"Spawning Game Objects"),(0,r.kt)("p",null,"In Unity, you usually \u201cspawn\u201d (that is, create) new game objects with ",(0,r.kt)("inlineCode",{parentName:"p"},"Instantiate"),". However, in Mirage, the word \u201cspawn\u201d means something more specific. In the server-authoritative model of the Mirage, to \u201cspawn\u201d a game object on the server means that the game object is created on clients connected to the server, and is managed by the spawning system."),(0,r.kt)("p",null,"To spawn an object on the server you need to ",(0,r.kt)("inlineCode",{parentName:"p"},"Instantiate")," the prefab and then call ",(0,r.kt)("inlineCode",{parentName:"p"},"Spawn")," on the new object. This will assign a ",(0,r.kt)("inlineCode",{parentName:"p"},"NetId")," to the object and send a ",(0,r.kt)("inlineCode",{parentName:"p"},"SpawnMessage")," to clients."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"var boxGo = Instantiate(boxPrefab);\nServerObjectManager.Spawn(boxGo);\n")),(0,r.kt)("p",null,"Once the game object is spawned using this system, state updates are sent to clients whenever the game object changes on the server. When Mirage destroys the game object on the server, it also destroys it on the clients. The server manages spawned game objects alongside all other networked game objects, so that if another client joins the game later, the server can spawn the game objects on that client. These spawned game objects have a unique network instance ID called \u201cnetId\u201d that is the same on the server and clients for each game object. The unique network instance ID is used to route messages set across the network to game objects, and to identify game objects."),(0,r.kt)("p",null,"When the server spawns a game object with a Network Identity component, the game object spawned on the client has the same \u201cstate\u201d. This means it is identical to the game object on the server; it has the same Transform, movement state, and (if Network Transform and SyncVars are used) synchronized variables. Therefore, client game objects are always up-to-date when Mirage creates them. This avoids issues such as game objects spawning at the wrong initial location, then reappearing at their correct position when a state update arrives."),(0,r.kt)("p",null,"A game object Prefab must have a Network Identity component before trying to register it with the Network Manager."),(0,r.kt)("p",null,"To register a Prefab with the Client Object Manager in the Editor, select the Network Manager game object, and in the Inspector, navigate to the Client Object Manager component. Click the triangle next to Spawn Prefabs to open the settings, click the plus (+) button. Drag and drop Prefabs into the empty field to assign them to the list.\nFor automatic registering click the Register all prefabs button."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This searches entire project for prefabs / objects that have a network identity component on it and register it for you.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Registered Spawnable Prefabs",src:n(26269).Z,width:"592",height:"231"})),(0,r.kt)("h2",{id:"spawning-without-network-manager"},"Spawning Without Network Manager"),(0,r.kt)("p",null,"For more advanced users, you may find that you want to register Prefabs and spawn game objects without using the Network Manager component."),(0,r.kt)("p",null,"To spawn game objects without using the Network Manager, you can handle the Prefab registration yourself via script. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientScene.RegisterPrefab")," method to register Prefabs to the Network Manager."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using UnityEngine;\nusing Mirage;\n\npublic class MyNetworkManager : MonoBehaviour \n{\n    public GameObject treePrefab;\n    public ClientObjectManager;\n    public NetworkClient;\n    public NetworkServer;\n    public ServerObjectManager;\n\n    void Start()\n    {\n        ClientObjectManager = FindObjectOfType<ClientObjectManager>();\n        NetworkClient = FindObjectOfType<NetworkClient>();\n        NetworkServer = FindObjectOfType<NetworkServer>();\n        ServerObjectManager = FindObjectOfType<NetworkServer>();\n    }\n\n    // Register prefab and connect to the server  \n    public void ClientConnect()\n    {\n        ClientObjectManager.spawnPrefabs.Add(treePrefab);\n        NetworkClient.Connect("localhost");\n        NetworkClient.MessageHandler.RegisterHandler<ConnectMessage>(OnClientConnect);\n    }\n\n    void OnClientConnect(NetworkConnection conn, ConnectMessage msg)\n    {\n        Debug.Log("Connected to server: " + conn);\n    }\n}\n')),(0,r.kt)("p",null,"In this example, you create an empty game object to act as the Network Manager, then create and attach the ",(0,r.kt)("inlineCode",{parentName:"p"},"MyNetworkManager")," script (above) to that game object. Create a prefab that has a Network Identity component attached to it, and drag that onto the ",(0,r.kt)("inlineCode",{parentName:"p"},"treePrefab")," slot on the ",(0,r.kt)("inlineCode",{parentName:"p"},"MyNetworkManager")," component in the Inspector. This ensures that when the server spawns the tree game object, it also creates the same kind of game object on the clients."),(0,r.kt)("p",null,"Registering prefabs ensures that there is no stalling or loading time for creating the Asset."),(0,r.kt)("p",null,"For the script to work, you also need to add code for the server. Add this to the ",(0,r.kt)("inlineCode",{parentName:"p"},"MyNetworkManager")," script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'public void ServerListen()\n{\n    // start listening, and allow up to 4 connections\n    NetworkServer.StartServer();\n\n    NetworkServer.MessageHandler.RegisterHandler<ConnectMessage>(OnServerConnect);\n    NetworkServer.MessageHandler.RegisterHandler<ReadyMessage>(OnClientReady);\n}\n\n// When client is ready spawn a few trees  \nvoid OnClientReady(NetworkConnection conn, ReadyMessage msg)\n{\n    Debug.Log("Client is ready to start: " + conn);\n    SpawnTrees();\n}\n\nvoid SpawnTrees()\n{\n    int x = 0;\n    for (int i = 0; i < 5; ++i)\n    {\n        GameObject treeGo = Instantiate(treePrefab, new Vector3(x++, 0, 0), Quaternion.identity);\n        ServerObjectManager.Spawn(treeGo);\n    }\n}\n\nvoid OnServerConnect(NetworkConnection conn, ConnectMessage msg)\n{\n    Debug.Log("New client connected: " + conn);\n}\n')),(0,r.kt)("p",null,"The server does not need to register anything, as it knows what game object is being spawned (and the asset ID is sent in the spawn message). The client needs to be able to look up the game object, so it must be registered on the client."),(0,r.kt)("p",null,"When writing your own network manager, it\u2019s important to make the client ready to receive state updates before calling the spawn command on the server, otherwise they won\u2019t be sent. If you\u2019re using Mirage\u2019s built-in Network Manager component, this happens automatically."),(0,r.kt)("p",null,"For more advanced uses, such as object pools or dynamically created Assets, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientObjectManager.RegisterSpawnHandler")," method, which allows callback functions to be registered for client-side spawning. See documentation on Custom Spawn Functions for an example of this."),(0,r.kt)("p",null,"If the game object has a network state like synchronized variables, then that state is synchronized with the spawn message. In the following example, this script is attached to the tree Prefab:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using UnityEngine;\nusing Mirage;\n\npublic class Tree : NetworkBehaviour\n{\n    [SyncVar]\n    public int numLeaves;\n\n    void Start()\n    {\n        Identity.OnStartClient.AddLisenter(OnStartClient);\n    }\n\n    public override void OnStartClient()\n    {\n        Debug.Log("Tree spawned with leaf count " + numLeaves);\n    }\n}\n')),(0,r.kt)("p",null,"With this script attached, you can change the ",(0,r.kt)("inlineCode",{parentName:"p"},"numLeaves")," variable and modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"SpawnTrees")," function to see it accurately reflected on the client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'void SpawnTrees()\n{\n    int x = 0;\n    for (int i = 0; i < 5; ++i)\n    {\n        GameObject treeGo = Instantiate(treePrefab, new Vector3(x++, 0, 0), Quaternion.identity);\n        Tree tree = treeGo.GetComponent<Tree>();\n        tree.numLeaves = Random.Range(10,200);\n        Debug.Log("Spawning leaf with leaf count " + tree.numLeaves);\n        ServerObjectManager.Spawn(treeGo);\n    }\n}\n')),(0,r.kt)("p",null,"Attach the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tree")," script to the ",(0,r.kt)("inlineCode",{parentName:"p"},"treePrefab")," script created earlier to see this in action."),(0,r.kt)("h3",{id:"constraints"},"Constraints"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A NetworkIdentity must be on the root game object of a spawnable Prefab. Without this, the Network Manager can\u2019t register the Prefab.")),(0,r.kt)("h2",{id:"game-object-creation-flow"},"Game Object Creation Flow"),(0,r.kt)("p",null,"The actual flow of internal operations that takes place for spawning game objects is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prefab with Network Identity component is registered as spawnable."),(0,r.kt)("li",{parentName:"ul"},"game object is instantiated from the Prefab on the server."),(0,r.kt)("li",{parentName:"ul"},"Game code sets initial values on the instance (note that 3D physics forces applied here do not take effect immediately)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ServerObjectManager.Spawn")," is called with the instance."),(0,r.kt)("li",{parentName:"ul"},"The state of the SyncVars on the instance on the server are collected by calling ",(0,r.kt)("inlineCode",{parentName:"li"},"OnSerialize")," on ","[Network Behaviour]"," components."),(0,r.kt)("li",{parentName:"ul"},"A network message of type ",(0,r.kt)("inlineCode",{parentName:"li"},"ObjectSpawn")," is sent to connected clients that includes the SyncVar data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OnStartServer")," is called on the instance on the server, and ",(0,r.kt)("inlineCode",{parentName:"li"},"isServer")," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"Clients receive the ",(0,r.kt)("inlineCode",{parentName:"li"},"ObjectSpawn")," message and create a new instance from the registered Prefab."),(0,r.kt)("li",{parentName:"ul"},"The SyncVar data is applied to the new instance on the client by calling OnDeserialize on Network Behaviour components."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OnStartClient")," is called on the instance on each client, and ",(0,r.kt)("inlineCode",{parentName:"li"},"isClient")," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"As game play progresses, changes to SyncVar values are automatically synchronized to clients. This continues until game ends."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ServerObjectManager.Destroy")," is called on the instance on the server."),(0,r.kt)("li",{parentName:"ul"},"A network message of type ",(0,r.kt)("inlineCode",{parentName:"li"},"ObjectDestroy")," is sent to clients."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OnNetworkDestroy")," is called on the instance on clients, then the instance is destroyed.")),(0,r.kt)("h3",{id:"player-game-objects"},"Player Game Objects"),(0,r.kt)("p",null,"Player game objects in the HLAPI work slightly differently to non-player game objects. The flow for spawning player game objects with the Network Manager is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prefab with ",(0,r.kt)("inlineCode",{parentName:"li"},"NetworkIdentity")," is registered as the ",(0,r.kt)("inlineCode",{parentName:"li"},"PlayerPrefab")),(0,r.kt)("li",{parentName:"ul"},"Client connects to the server"),(0,r.kt)("li",{parentName:"ul"},"Client calls ",(0,r.kt)("inlineCode",{parentName:"li"},"AddPlayer"),", network message of type ",(0,r.kt)("inlineCode",{parentName:"li"},"MsgType.AddPlayer")," is sent to the server"),(0,r.kt)("li",{parentName:"ul"},"Server receives message and calls ",(0,r.kt)("inlineCode",{parentName:"li"},"CharacterSpawner.OnServerAddPlayer")),(0,r.kt)("li",{parentName:"ul"},"game object is instantiated from the Player Prefab on the server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ServerObjectManager.AddCharacter")," is called with the new player instance on the server"),(0,r.kt)("li",{parentName:"ul"},"The player instance is spawned - you do not have to call ",(0,r.kt)("inlineCode",{parentName:"li"},"ServerObjectManager.Spawn")," for the player instance. The spawn message is sent to all clients like on a normal spawn."),(0,r.kt)("li",{parentName:"ul"},"A network message of type ",(0,r.kt)("inlineCode",{parentName:"li"},"Owner")," is sent to the client that added the player (only that client!)"),(0,r.kt)("li",{parentName:"ul"},"The original client receives the network message"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OnStartLocalPlayer")," is called on the player instance on the original client, and ",(0,r.kt)("inlineCode",{parentName:"li"},"IsLocalPlayer")," is set to true")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"OnStartLocalPlayer")," is called after ",(0,r.kt)("inlineCode",{parentName:"p"},"OnStartClient"),", because it only happens when the ownership message arrives from the server after the player game object is spawned, so ",(0,r.kt)("inlineCode",{parentName:"p"},"IsLocalPlayer")," is not set in ",(0,r.kt)("inlineCode",{parentName:"p"},"OnStartClient"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Because ",(0,r.kt)("inlineCode",{parentName:"p"},"OnStartLocalPlayer")," is only called for the client\u2019s local player game object, it is a good place to perform initialization that should only be done for the local player. This could include enabling input processing, and enabling camera tracking for the player game object.")),(0,r.kt)("h2",{id:"spawning-game-objects-with-client-authority"},"Spawning Game Objects with Client Authority"),(0,r.kt)("p",null,"To spawn game objects and assign authority of those game objects to a particular client, use ",(0,r.kt)("inlineCode",{parentName:"p"},"ServerObjectManager.Spawn"),", which takes as an argument the ",(0,r.kt)("inlineCode",{parentName:"p"},"INetworkPlayer")," of the client that is to be made the authority."),(0,r.kt)("p",null,"For these game objects, the property ",(0,r.kt)("inlineCode",{parentName:"p"},"HasAuthority")," is true on the client with authority, and ",(0,r.kt)("inlineCode",{parentName:"p"},"OnStartAuthority")," is called on the client with authority. That client can issue Server RPCs for that game object. On other clients (and on the host), ",(0,r.kt)("inlineCode",{parentName:"p"},"HasAuthority")," is false."),(0,r.kt)("p",null,"For example, the tree spawn example above can be modified to allow the tree to have client authority like this (note that we now need to pass in a Network Player game object for the owning client\u2019s connection):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'void SpawnTrees(INetworkPlayer player)\n{\n    int x = 0;\n    for (int i = 0; i < 5; ++i)\n    {\n        GameObject treeGo = Instantiate(treePrefab, new Vector3(x++, 0, 0), Quaternion.identity);\n        Tree tree = treeGo.GetComponent<Tree>();\n        tree.numLeaves = Random.Range(10,200);\n        Debug.Log("Spawning leaf with leaf count " + tree.numLeaves);\n        ServerObjectManager.Spawn(treeGo, player);\n    }\n}\n')),(0,r.kt)("p",null,"The Tree script can now be modified to send a Server RPC Call to the server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'    public void ClientConnect()\n    {\n        ClientObjectManager.spawnPrefabs.Add(treePrefab);\n        NetworkClient.Connect("localhost");\n        NetworkClient.MessageHandler.RegisterHandler<ConnectMessage>(OnClientConnect);\n\n        NetworkClient.Player.Identity.OnAuthorityChanged.AddListener(OnStartAuthority);\n    }\n\npublic override void OnStartAuthority(bool changed)\n{\n    CmdMessageFromTree("Tree with " + numLeaves + " reporting in");\n}\n\n[ServerRpc]\nvoid CmdMessageFromTree(string msg)\n{\n    Debug.Log("Client sent a tree message: " + msg);\n}\n')),(0,r.kt)("p",null,"Note that you can\u2019t just add the ",(0,r.kt)("inlineCode",{parentName:"p"},"CmdMessageFromTree")," call into ",(0,r.kt)("inlineCode",{parentName:"p"},"OnStartClient"),", because at that point the authority has not been set yet, so the call would fail."))}d.isMDXComponent=!0},26269:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/spawn-objects-6ae976e2c154a524d14a4205dfb220d9.png"}}]);