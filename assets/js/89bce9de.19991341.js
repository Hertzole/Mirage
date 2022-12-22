"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[4201],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),k=c(a),u=r,m=k["".concat(o,".").concat(u)]||k[u]||p[u]||l;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},83609:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={id:"NetworkSceneManager",title:"NetworkSceneManager"},i="Class NetworkSceneManager",s={unversionedId:"reference/Mirage/NetworkSceneManager",id:"reference/Mirage/NetworkSceneManager",title:"NetworkSceneManager",description:"NetworkSceneManager is an optional component that helps keep scene in sync between server and client.",source:"@site/docs/reference/Mirage/NetworkSceneManager.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/NetworkSceneManager",permalink:"/Mirage/docs/reference/Mirage/NetworkSceneManager",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage/NetworkSceneManager.md",tags:[],version:"current",frontMatter:{id:"NetworkSceneManager",title:"NetworkSceneManager"},sidebar:"api",previous:{title:"NetworkSceneChecker",permalink:"/Mirage/docs/reference/Mirage/NetworkSceneChecker"},next:{title:"NetworkServer",permalink:"/Mirage/docs/reference/Mirage/NetworkServer"}},o={},c=[{value:"Inheritance",id:"inheritance",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Fields",id:"fields",level:3},{value:"Client",id:"client",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Server",id:"server",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"DontDestroy",id:"dontdestroy",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"SceneLoadingAsyncOperationInfo",id:"sceneloadingasyncoperationinfo",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"Properties",id:"properties",level:3},{value:"ActiveScenePath",id:"activescenepath",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"ServerSceneData",id:"serverscenedata",level:4},{value:"Declaration",id:"declaration-5",level:5},{value:"OnClientStartedSceneChange",id:"onclientstartedscenechange",level:4},{value:"Declaration",id:"declaration-6",level:5},{value:"OnClientFinishedSceneChange",id:"onclientfinishedscenechange",level:4},{value:"Declaration",id:"declaration-7",level:5},{value:"OnServerStartedSceneChange",id:"onserverstartedscenechange",level:4},{value:"Declaration",id:"declaration-8",level:5},{value:"OnServerFinishedSceneChange",id:"onserverfinishedscenechange",level:4},{value:"Declaration",id:"declaration-9",level:5},{value:"OnPlayerSceneReady",id:"onplayersceneready",level:4},{value:"Declaration",id:"declaration-10",level:5},{value:"Methods",id:"methods",level:3},{value:"Start()",id:"start",level:4},{value:"Declaration",id:"declaration-11",level:5},{value:"OnDestroy()",id:"ondestroy",level:4},{value:"Declaration",id:"declaration-12",level:5},{value:"IsPlayerInScene(Scene, INetworkPlayer)",id:"isplayerinscenescene-inetworkplayer",level:4},{value:"Declaration",id:"declaration-13",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"ScenesPlayerIsIn(INetworkPlayer)",id:"scenesplayerisininetworkplayer",level:4},{value:"Declaration",id:"declaration-14",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"ScenesPlayerIsInNonAlloc(INetworkPlayer, List&lt;Scene&gt;)",id:"scenesplayerisinnonallocinetworkplayer-listscene",level:4},{value:"Declaration",id:"declaration-15",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:"ClientStartSceneMessage(INetworkPlayer, SceneMessage)",id:"clientstartscenemessageinetworkplayer-scenemessage",level:4},{value:"Declaration",id:"declaration-16",level:5},{value:"Parameters",id:"parameters-3",level:5},{value:"ClientFinishedLoadingSceneMessage(INetworkPlayer, SceneReadyMessage)",id:"clientfinishedloadingscenemessageinetworkplayer-scenereadymessage",level:4},{value:"Declaration",id:"declaration-17",level:5},{value:"Parameters",id:"parameters-4",level:5},{value:"ClientNotReadyMessage(INetworkPlayer, SceneNotReadyMessage)",id:"clientnotreadymessageinetworkplayer-scenenotreadymessage",level:4},{value:"Declaration",id:"declaration-18",level:5},{value:"Parameters",id:"parameters-5",level:5},{value:"SetSceneIsReady()",id:"setsceneisready",level:4},{value:"Declaration",id:"declaration-19",level:5},{value:"ServerLoadSceneNormal(String, Nullable&lt;LoadSceneParameters&gt;)",id:"serverloadscenenormalstring-nullableloadsceneparameters",level:4},{value:"Declaration",id:"declaration-20",level:5},{value:"Parameters",id:"parameters-6",level:5},{value:"ServerLoadSceneAdditively(String, IEnumerable&lt;INetworkPlayer&gt;, Boolean, Nullable&lt;LoadSceneParameters&gt;)",id:"serverloadsceneadditivelystring-ienumerableinetworkplayer-boolean-nullableloadsceneparameters",level:4},{value:"Declaration",id:"declaration-21",level:5},{value:"Parameters",id:"parameters-7",level:5},{value:"ServerUnloadSceneAdditively(Scene, IEnumerable&lt;INetworkPlayer&gt;)",id:"serverunloadsceneadditivelyscene-ienumerableinetworkplayer",level:4},{value:"Declaration",id:"declaration-22",level:5},{value:"Parameters",id:"parameters-8",level:5},{value:"OnServerAuthenticated(INetworkPlayer)",id:"onserverauthenticatedinetworkplayer",level:4},{value:"Declaration",id:"declaration-23",level:5},{value:"Parameters",id:"parameters-9",level:5},{value:"OnServerPlayerDisconnected(INetworkPlayer)",id:"onserverplayerdisconnectedinetworkplayer",level:4},{value:"Declaration",id:"declaration-24",level:5},{value:"Parameters",id:"parameters-10",level:5},{value:"SetAllClientsNotReady(IEnumerable&lt;INetworkPlayer&gt;)",id:"setallclientsnotreadyienumerableinetworkplayer",level:4},{value:"Declaration",id:"declaration-25",level:5},{value:"Parameters",id:"parameters-11",level:5},{value:"SetClientNotReady(INetworkPlayer)",id:"setclientnotreadyinetworkplayer",level:4},{value:"Declaration",id:"declaration-26",level:5},{value:"Parameters",id:"parameters-12",level:5},{value:"GetSceneByPathOrName(String)",id:"getscenebypathornamestring",level:4},{value:"Declaration",id:"declaration-27",level:5},{value:"Parameters",id:"parameters-13",level:5},{value:"Returns",id:"returns-2",level:5}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"class-networkscenemanager"},"Class NetworkSceneManager"),(0,r.kt)("p",null,"NetworkSceneManager is an optional component that helps keep scene in sync between server and client.\nThe  loads scenes as instructed by the .\nThe  controls the currently active Scene and any additive Load/Unload.\nwhen a client connect NetworkSceneManager will send a message telling the new client to load the scene that is active on the server"),(0,r.kt)("div",{class:"inheritance"},(0,r.kt)("h5",{id:"inheritance"},"Inheritance"),(0,r.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,r.kt)("h5",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public class NetworkSceneManager : MonoBehaviour\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"client"},"Client"),(0,r.kt)("h5",{id:"declaration"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public NetworkClient Client\n")),(0,r.kt)("h4",{id:"server"},"Server"),(0,r.kt)("h5",{id:"declaration-1"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public NetworkServer Server\n")),(0,r.kt)("h4",{id:"dontdestroy"},"DontDestroy"),(0,r.kt)("p",null,"Sets the NetworksSceneManagers GameObject to DontDestroyOnLoad. Default = true."),(0,r.kt)("h5",{id:"declaration-2"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public bool DontDestroy\n")),(0,r.kt)("h4",{id:"sceneloadingasyncoperationinfo"},"SceneLoadingAsyncOperationInfo"),(0,r.kt)("p",null,"Information on any scene that is currently being loaded."),(0,r.kt)("h5",{id:"declaration-3"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public AsyncOperation SceneLoadingAsyncOperationInfo\n")),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"activescenepath"},"ActiveScenePath"),(0,r.kt)("p",null,"The path of the current active scene.\nIf using additive scenes this will be the first scene.\nValue from   "),(0,r.kt)("h5",{id:"declaration-4"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public string ActiveScenePath { get; }\n")),(0,r.kt)("h4",{id:"serverscenedata"},"ServerSceneData"),(0,r.kt)("p",null,"Collection of scenes and which player","'","s are in those scenes."),(0,r.kt)("h5",{id:"declaration-5"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public IReadOnlyDictionary<Scene, HashSet<INetworkPlayer>> ServerSceneData { get; }\n")),(0,r.kt)("h4",{id:"onclientstartedscenechange"},"OnClientStartedSceneChange"),(0,r.kt)("p",null,"Event fires when the Client starts changing scene."),(0,r.kt)("h5",{id:"declaration-6"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public SceneChangeStartedEvent OnClientStartedSceneChange { get; }\n")),(0,r.kt)("h4",{id:"onclientfinishedscenechange"},"OnClientFinishedSceneChange"),(0,r.kt)("p",null,"Event fires after the Client has completed its scene change."),(0,r.kt)("h5",{id:"declaration-7"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public SceneChangeFinishedEvent OnClientFinishedSceneChange { get; }\n")),(0,r.kt)("h4",{id:"onserverstartedscenechange"},"OnServerStartedSceneChange"),(0,r.kt)("p",null,"Event fires before Server changes scene."),(0,r.kt)("h5",{id:"declaration-8"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public SceneChangeStartedEvent OnServerStartedSceneChange { get; }\n")),(0,r.kt)("h4",{id:"onserverfinishedscenechange"},"OnServerFinishedSceneChange"),(0,r.kt)("p",null,"Event fires after Server has completed scene change."),(0,r.kt)("h5",{id:"declaration-9"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public SceneChangeFinishedEvent OnServerFinishedSceneChange { get; }\n")),(0,r.kt)("h4",{id:"onplayersceneready"},"OnPlayerSceneReady"),(0,r.kt)("p",null,"Event fires On the server, after Client sends  to the server"),(0,r.kt)("h5",{id:"declaration-10"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public PlayerSceneChangeEvent OnPlayerSceneReady { get; }\n")),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("h4",{id:"start"},"Start()"),(0,r.kt)("h5",{id:"declaration-11"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public virtual void Start()\n")),(0,r.kt)("h4",{id:"ondestroy"},"OnDestroy()"),(0,r.kt)("h5",{id:"declaration-12"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public virtual void OnDestroy()\n")),(0,r.kt)("h4",{id:"isplayerinscenescene-inetworkplayer"},"IsPlayerInScene(Scene, INetworkPlayer)"),(0,r.kt)("p",null,"Check whether or not the player is in a specific scene or not."),(0,r.kt)("h5",{id:"declaration-13"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public bool IsPlayerInScene(Scene scene, INetworkPlayer player)\n")),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Scene"),(0,r.kt)("td",{parentName:"tr",align:null},"scene"),(0,r.kt)("td",{parentName:"tr",align:null},"The scene we want to check in.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.INetworkPlayer"),(0,r.kt)("td",{parentName:"tr",align:null},"player"),(0,r.kt)("td",{parentName:"tr",align:null},"The player we want to check for.")))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns true or false if the player is in the scene specified.")))),(0,r.kt)("h4",{id:"scenesplayerisininetworkplayer"},"ScenesPlayerIsIn(INetworkPlayer)"),(0,r.kt)("p",null,"What scene is this specific player currently in."),(0,r.kt)("h5",{id:"declaration-14"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public Scene[] ScenesPlayerIsIn(INetworkPlayer player)\n")),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.INetworkPlayer"),(0,r.kt)("td",{parentName:"tr",align:null},"player"),(0,r.kt)("td",{parentName:"tr",align:null},"The player we want to check against.")))),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Scene[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns back a array of scene","'","s the player is currently in.")))),(0,r.kt)("h4",{id:"scenesplayerisinnonallocinetworkplayer-listscene"},"ScenesPlayerIsInNonAlloc(INetworkPlayer, List","<","Scene",">",")"),(0,r.kt)("h5",{id:"declaration-15"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void ScenesPlayerIsInNonAlloc(INetworkPlayer player, List<Scene> scenes)\n")),(0,r.kt)("h5",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.INetworkPlayer"),(0,r.kt)("td",{parentName:"tr",align:null},"player"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.List","<","Scene",">"),(0,r.kt)("td",{parentName:"tr",align:null},"scenes"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"clientstartscenemessageinetworkplayer-scenemessage"},"ClientStartSceneMessage(INetworkPlayer, SceneMessage)"),(0,r.kt)("p",null,"Received message from server to start loading scene or scenes."),(0,r.kt)("p",null,"Default implementation is to load main activate scene server is using and load any\nother additive scenes in background and notify event handler. If this is not intended\nbehavior you need please override this function."),(0,r.kt)("h5",{id:"declaration-16"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public virtual void ClientStartSceneMessage(INetworkPlayer player, SceneMessage message)\n")),(0,r.kt)("h5",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.INetworkPlayer"),(0,r.kt)("td",{parentName:"tr",align:null},"player"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.SceneMessage"),(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"clientfinishedloadingscenemessageinetworkplayer-scenereadymessage"},"ClientFinishedLoadingSceneMessage(INetworkPlayer, SceneReadyMessage)"),(0,r.kt)("p",null,"Received message from server that it has finished loading the scene."),(0,r.kt)("p",null,"Default implementation will set AllowSceneActivation = true and invoke event handler.\nIf this is not good enough intended behavior then override this method."),(0,r.kt)("h5",{id:"declaration-17"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"protected virtual void ClientFinishedLoadingSceneMessage(INetworkPlayer player, SceneReadyMessage message)\n")),(0,r.kt)("h5",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.INetworkPlayer"),(0,r.kt)("td",{parentName:"tr",align:null},"player"),(0,r.kt)("td",{parentName:"tr",align:null},"The player who sent the message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.SceneReadyMessage"),(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"The message data coming back from server.")))),(0,r.kt)("h4",{id:"clientnotreadymessageinetworkplayer-scenenotreadymessage"},"ClientNotReadyMessage(INetworkPlayer, SceneNotReadyMessage)"),(0,r.kt)("p",null,"Received message that player is not ready."),(0,r.kt)("p",null,"Default implementation is to set player to not ready."),(0,r.kt)("h5",{id:"declaration-18"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"protected virtual void ClientNotReadyMessage(INetworkPlayer player, SceneNotReadyMessage message)\n")),(0,r.kt)("h5",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.INetworkPlayer"),(0,r.kt)("td",{parentName:"tr",align:null},"player"),(0,r.kt)("td",{parentName:"tr",align:null},"The player that is currently not ready.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.SceneNotReadyMessage"),(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"The message data coming in.")))),(0,r.kt)("h4",{id:"setsceneisready"},"SetSceneIsReady()"),(0,r.kt)("p",null,"Signal that the client connection is ready to enter the game.\nThis could be for example when a client enters an ongoing game and has finished loading the current scene. The server should respond to the message with an appropriate handler which instantiates the players object for example."),(0,r.kt)("h5",{id:"declaration-19"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void SetSceneIsReady()\n")),(0,r.kt)("h4",{id:"serverloadscenenormalstring-nullableloadsceneparameters"},"ServerLoadSceneNormal(String, Nullable","<","LoadSceneParameters",">",")"),(0,r.kt)("p",null,"Allows server to fully load in a new scene and override current active scene."),(0,r.kt)("h5",{id:"declaration-20"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void ServerLoadSceneNormal(string scenePath, LoadSceneParameters? sceneLoadParameters = default(LoadSceneParameters? ))\n")),(0,r.kt)("h5",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.String"),(0,r.kt)("td",{parentName:"tr",align:null},"scenePath"),(0,r.kt)("td",{parentName:"tr",align:null},"The full path to the scene file or the name of the scene.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Nullable","<","LoadSceneParameters",">"),(0,r.kt)("td",{parentName:"tr",align:null},"sceneLoadParameters"),(0,r.kt)("td",{parentName:"tr",align:null},"What settings should we be using for physics scene loading.")))),(0,r.kt)("h4",{id:"serverloadsceneadditivelystring-ienumerableinetworkplayer-boolean-nullableloadsceneparameters"},"ServerLoadSceneAdditively(String, IEnumerable","<","INetworkPlayer",">",", Boolean, Nullable","<","LoadSceneParameters",">",")"),(0,r.kt)("p",null,"Allows server to fully load in another scene on top of current active scene."),(0,r.kt)("h5",{id:"declaration-21"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void ServerLoadSceneAdditively(string scenePath, IEnumerable<INetworkPlayer> players, bool shouldClientLoadNormally = false, LoadSceneParameters? sceneLoadParameters = default(LoadSceneParameters? ))\n")),(0,r.kt)("h5",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.String"),(0,r.kt)("td",{parentName:"tr",align:null},"scenePath"),(0,r.kt)("td",{parentName:"tr",align:null},"The full path to the scene file or the name of the scene.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.IEnumerable","<","Mirage.INetworkPlayer",">"),(0,r.kt)("td",{parentName:"tr",align:null},"players"),(0,r.kt)("td",{parentName:"tr",align:null},"Collection of player","'","s that are receiving the new scene load.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"shouldClientLoadNormally"),(0,r.kt)("td",{parentName:"tr",align:null},"Should the clients load this additively too or load it full normal scene change.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Nullable","<","LoadSceneParameters",">"),(0,r.kt)("td",{parentName:"tr",align:null},"sceneLoadParameters"),(0,r.kt)("td",{parentName:"tr",align:null},"What settings should we be using for physics scene loading.")))),(0,r.kt)("h4",{id:"serverunloadsceneadditivelyscene-ienumerableinetworkplayer"},"ServerUnloadSceneAdditively(Scene, IEnumerable","<","INetworkPlayer",">",")"),(0,r.kt)("p",null,"Allows server to fully unload a scene additively."),(0,r.kt)("h5",{id:"declaration-22"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void ServerUnloadSceneAdditively(Scene scene, IEnumerable<INetworkPlayer> players)\n")),(0,r.kt)("h5",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Scene"),(0,r.kt)("td",{parentName:"tr",align:null},"scene"),(0,r.kt)("td",{parentName:"tr",align:null},"The scene handle which we want to unload additively.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.IEnumerable","<","Mirage.INetworkPlayer",">"),(0,r.kt)("td",{parentName:"tr",align:null},"players"),(0,r.kt)("td",{parentName:"tr",align:null},"Collection of player","'","s that are receiving the new scene unload.")))),(0,r.kt)("h4",{id:"onserverauthenticatedinetworkplayer"},"OnServerAuthenticated(INetworkPlayer)"),(0,r.kt)("p",null,"When player authenticates to server we send a message to them to load up main scene and\nany other scenes that are loaded on server."),(0,r.kt)("p",null,"Default implementation takes main activate scene as main and any other loaded scenes and sends it to player","'","s\nPlease override this function if this is not intended behavior for you."),(0,r.kt)("h5",{id:"declaration-23"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"protected virtual void OnServerAuthenticated(INetworkPlayer player)\n")),(0,r.kt)("h5",{id:"parameters-9"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.INetworkPlayer"),(0,r.kt)("td",{parentName:"tr",align:null},"player"),(0,r.kt)("td",{parentName:"tr",align:null},"The current player that finished authenticating.")))),(0,r.kt)("h4",{id:"onserverplayerdisconnectedinetworkplayer"},"OnServerPlayerDisconnected(INetworkPlayer)"),(0,r.kt)("p",null,"When player disconnects from server we will need to clean up info in scenes related to user.\nDefault implementation we loop through list of scenes and find where this player was in and removed them from list."),(0,r.kt)("h5",{id:"declaration-24"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"protected virtual void OnServerPlayerDisconnected(INetworkPlayer disconnectedPlayer)\n")),(0,r.kt)("h5",{id:"parameters-10"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.INetworkPlayer"),(0,r.kt)("td",{parentName:"tr",align:null},"disconnectedPlayer"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"setallclientsnotreadyienumerableinetworkplayer"},"SetAllClientsNotReady(IEnumerable","<","INetworkPlayer",">",")"),(0,r.kt)("p",null,"Marks all connected clients as no longer ready."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"All clients will no longer be sent state synchronization updates.\nThe player&apos;s clients can call ClientManager.Ready() again to re-enter the ready state.\nThis is useful when switching scenes.\n")),(0,r.kt)("h5",{id:"declaration-25"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void SetAllClientsNotReady(IEnumerable<INetworkPlayer> players = null)\n")),(0,r.kt)("h5",{id:"parameters-11"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.IEnumerable","<","Mirage.INetworkPlayer",">"),(0,r.kt)("td",{parentName:"tr",align:null},"players"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"setclientnotreadyinetworkplayer"},"SetClientNotReady(INetworkPlayer)"),(0,r.kt)("p",null,"Sets a player as not ready and removes all visible objects\nPlayers that are not ready will not be sent spawn message or state updates.\nPlayers that are not ready do not receive spawned objects or state synchronization updates. They client can be made ready again by calling SetClientReady()."),(0,r.kt)("h5",{id:"declaration-26"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void SetClientNotReady(INetworkPlayer player)\n")),(0,r.kt)("h5",{id:"parameters-12"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.INetworkPlayer"),(0,r.kt)("td",{parentName:"tr",align:null},"player"),(0,r.kt)("td",{parentName:"tr",align:null},"The player to make not ready.")))),(0,r.kt)("h4",{id:"getscenebypathornamestring"},"GetSceneByPathOrName(String)"),(0,r.kt)("p",null,"Let","'","s us get scene by full path or by its name."),(0,r.kt)("h5",{id:"declaration-27"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public Scene GetSceneByPathOrName(string scenePath)\n")),(0,r.kt)("h5",{id:"parameters-13"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.String"),(0,r.kt)("td",{parentName:"tr",align:null},"scenePath"),(0,r.kt)("td",{parentName:"tr",align:null},"The path or name representing the scene.")))),(0,r.kt)("h5",{id:"returns-2"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Scene"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns back correct scene data.")))))}p.isMDXComponent=!0}}]);