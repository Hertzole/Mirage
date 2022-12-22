"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[9608],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=s(a),u=r,m=k["".concat(d,".").concat(u)]||k[u]||p[u]||l;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},37698:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={id:"NetworkPlayer",title:"NetworkPlayer"},i="Class NetworkPlayer",o={unversionedId:"reference/Mirage/NetworkPlayer",id:"reference/Mirage/NetworkPlayer",title:"NetworkPlayer",description:"A High level network connection. This is used for connections from client-to-server and for connection from server-to-client.",source:"@site/docs/reference/Mirage/NetworkPlayer.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/NetworkPlayer",permalink:"/Mirage/docs/reference/Mirage/NetworkPlayer",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage/NetworkPlayer.md",tags:[],version:"current",frontMatter:{id:"NetworkPlayer",title:"NetworkPlayer"},sidebar:"api",previous:{title:"NetworkPingMessage",permalink:"/Mirage/docs/reference/Mirage/NetworkPingMessage"},next:{title:"NetworkPongMessage",permalink:"/Mirage/docs/reference/Mirage/NetworkPongMessage"}},d={},s=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Constructors",id:"constructors",level:3},{value:"NetworkPlayer(IConnection)",id:"networkplayericonnection",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Properties",id:"properties",level:3},{value:"IsAuthenticated",id:"isauthenticated",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"AuthenticationData",id:"authenticationdata",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"SceneIsReady",id:"sceneisready",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"HasCharacter",id:"hascharacter",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"Address",id:"address",level:4},{value:"Declaration",id:"declaration-5",level:5},{value:"Connection",id:"connection",level:4},{value:"Declaration",id:"declaration-6",level:5},{value:"VisList",id:"vislist",level:4},{value:"Declaration",id:"declaration-7",level:5},{value:"Identity",id:"identity",level:4},{value:"Declaration",id:"declaration-8",level:5},{value:"Methods",id:"methods",level:3},{value:"Disconnect()",id:"disconnect",level:4},{value:"Declaration",id:"declaration-9",level:5},{value:"MarkAsDisconnected()",id:"markasdisconnected",level:4},{value:"Declaration",id:"declaration-10",level:5},{value:"Send&lt;T&gt;(T, Int32)",id:"sendtt-int32",level:4},{value:"Declaration",id:"declaration-11",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"Send(ArraySegment&lt;Byte&gt;, Int32)",id:"sendarraysegmentbyte-int32",level:4},{value:"Declaration",id:"declaration-12",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:"Send&lt;T&gt;(T, INotifyCallBack)",id:"sendtt-inotifycallback",level:4},{value:"Declaration",id:"declaration-13",level:5},{value:"Parameters",id:"parameters-3",level:5},{value:"ToString()",id:"tostring",level:4},{value:"Declaration",id:"declaration-14",level:5},{value:"Returns",id:"returns",level:5},{value:"AddToVisList(NetworkIdentity)",id:"addtovislistnetworkidentity",level:4},{value:"Declaration",id:"declaration-15",level:5},{value:"Parameters",id:"parameters-4",level:5},{value:"RemoveFromVisList(NetworkIdentity)",id:"removefromvislistnetworkidentity",level:4},{value:"Declaration",id:"declaration-16",level:5},{value:"Parameters",id:"parameters-5",level:5},{value:"ContainsInVisList(NetworkIdentity)",id:"containsinvislistnetworkidentity",level:4},{value:"Declaration",id:"declaration-17",level:5},{value:"Parameters",id:"parameters-6",level:5},{value:"Returns",id:"returns-1",level:5},{value:"RemoveAllVisibleObjects()",id:"removeallvisibleobjects",level:4},{value:"Declaration",id:"declaration-18",level:5},{value:"AddOwnedObject(NetworkIdentity)",id:"addownedobjectnetworkidentity",level:4},{value:"Declaration",id:"declaration-19",level:5},{value:"Parameters",id:"parameters-7",level:5},{value:"RemoveOwnedObject(NetworkIdentity)",id:"removeownedobjectnetworkidentity",level:4},{value:"Declaration",id:"declaration-20",level:5},{value:"Parameters",id:"parameters-8",level:5},{value:"DestroyOwnedObjects()",id:"destroyownedobjects",level:4},{value:"Declaration",id:"declaration-21",level:5}],c={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"class-networkplayer"},"Class NetworkPlayer"),(0,r.kt)("p",null,"A High level network connection. This is used for connections from client-to-server and for connection from server-to-client."),(0,r.kt)("div",{class:"inheritance"},(0,r.kt)("h5",{id:"inheritance"},"Inheritance"),(0,r.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,r.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show")),(0,r.kt)("h5",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public sealed class NetworkPlayer : INetworkPlayer, IMessageSender, IVisibilityTracker, IObjectOwner, IAuthenticatedObject, ISceneLoader\n")),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("h4",{id:"networkplayericonnection"},"NetworkPlayer(IConnection)"),(0,r.kt)("p",null,"Creates a new NetworkConnection with the specified address and connectionId"),(0,r.kt)("h5",{id:"declaration"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public NetworkPlayer(IConnection connection)\n")),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.SocketLayer.IConnection"),(0,r.kt)("td",{parentName:"tr",align:null},"connection"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"isauthenticated"},"IsAuthenticated"),(0,r.kt)("p",null,"Marks if this player has been accepted by a "),(0,r.kt)("h5",{id:"declaration-1"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public bool IsAuthenticated { get; set; }\n")),(0,r.kt)("h4",{id:"authenticationdata"},"AuthenticationData"),(0,r.kt)("p",null,"General purpose object to hold authentication data, character selection, tokens, etc.\nassociated with the connection for reference after Authentication completes."),(0,r.kt)("h5",{id:"declaration-2"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public object AuthenticationData { get; set; }\n")),(0,r.kt)("h4",{id:"sceneisready"},"SceneIsReady"),(0,r.kt)("p",null,"Flag that tells us if the scene has fully loaded in for player.\nThis property is read-only. It is set by the system on the client when the scene has fully loaded, and set by the system on the server when a ready message is received from a client.\nA client that is ready is sent spawned objects by the server and updates to the state of spawned objects. A client that is not ready is not sent spawned objects.\nStarts as true, when a client connects it is assumed that it is already in a ready scene. It will be set to not ready if NetworkSceneManager loads a scene"),(0,r.kt)("h5",{id:"declaration-3"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public bool SceneIsReady { get; set; }\n")),(0,r.kt)("h4",{id:"hascharacter"},"HasCharacter"),(0,r.kt)("p",null,"Checks if this player has a "),(0,r.kt)("h5",{id:"declaration-4"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public bool HasCharacter { get; }\n")),(0,r.kt)("h4",{id:"address"},"Address"),(0,r.kt)("p",null,"The IP address / URL / FQDN associated with the connection.\nCan be useful for a game master to do IP Bans etc."),(0,r.kt)("h5",{id:"declaration-5"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public IEndPoint Address { get; }\n")),(0,r.kt)("h4",{id:"connection"},"Connection"),(0,r.kt)("h5",{id:"declaration-6"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public IConnection Connection { get; }\n")),(0,r.kt)("h4",{id:"vislist"},"VisList"),(0,r.kt)("p",null,"List of all networkIdentity that this player can see\nOnly valid on server"),(0,r.kt)("h5",{id:"declaration-7"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public IReadOnlyCollection<NetworkIdentity> VisList { get; }\n")),(0,r.kt)("h4",{id:"identity"},"Identity"),(0,r.kt)("p",null,"The NetworkIdentity for this connection."),(0,r.kt)("h5",{id:"declaration-8"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public NetworkIdentity Identity { get; set; }\n")),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("h4",{id:"disconnect"},"Disconnect()"),(0,r.kt)("p",null,"Disconnects the player.\nA disconnected player can not send messages"),(0,r.kt)("h5",{id:"declaration-9"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void Disconnect()\n")),(0,r.kt)("h4",{id:"markasdisconnected"},"MarkAsDisconnected()"),(0,r.kt)("p",null,"Marks player as disconnected, used when the disconnect call is from peer\nA disconnected player can not send messages"),(0,r.kt)("h5",{id:"declaration-10"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void MarkAsDisconnected()\n")),(0,r.kt)("h4",{id:"sendtt-int32"},"Send","<","T",">","(T, Int32)"),(0,r.kt)("p",null,"This sends a network message to the connection."),(0,r.kt)("h5",{id:"declaration-11"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void Send<T>(T message, int channelId = 0)\n")),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"T"),(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,r.kt)("td",{parentName:"tr",align:null},"channelId"),(0,r.kt)("td",{parentName:"tr",align:null},"The transport layer channel to send on.")))),(0,r.kt)("h4",{id:"sendarraysegmentbyte-int32"},"Send(ArraySegment","<","Byte",">",", Int32)"),(0,r.kt)("p",null,"Sends a block of data\nOnly use this method if data has message Id already included, otherwise receives wont know how to handle it. Otherwise use "),(0,r.kt)("h5",{id:"declaration-12"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void Send(ArraySegment<byte> segment, int channelId = 0)\n")),(0,r.kt)("h5",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.ArraySegment","<","System.Byte",">"),(0,r.kt)("td",{parentName:"tr",align:null},"segment"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,r.kt)("td",{parentName:"tr",align:null},"channelId"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"sendtt-inotifycallback"},"Send","<","T",">","(T, INotifyCallBack)"),(0,r.kt)("p",null,"This sends a network message to the connection."),(0,r.kt)("h5",{id:"declaration-13"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void Send<T>(T message, INotifyCallBack callBacks)\n")),(0,r.kt)("h5",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"T"),(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.SocketLayer.INotifyCallBack"),(0,r.kt)("td",{parentName:"tr",align:null},"callBacks"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"tostring"},"ToString()"),(0,r.kt)("h5",{id:"declaration-14"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public override string ToString()\n")),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.String"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"addtovislistnetworkidentity"},"AddToVisList(NetworkIdentity)"),(0,r.kt)("h5",{id:"declaration-15"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void AddToVisList(NetworkIdentity identity)\n")),(0,r.kt)("h5",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkIdentity"),(0,r.kt)("td",{parentName:"tr",align:null},"identity"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"removefromvislistnetworkidentity"},"RemoveFromVisList(NetworkIdentity)"),(0,r.kt)("h5",{id:"declaration-16"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void RemoveFromVisList(NetworkIdentity identity)\n")),(0,r.kt)("h5",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkIdentity"),(0,r.kt)("td",{parentName:"tr",align:null},"identity"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"containsinvislistnetworkidentity"},"ContainsInVisList(NetworkIdentity)"),(0,r.kt)("p",null,"Checks if player can see NetworkIdentity"),(0,r.kt)("h5",{id:"declaration-17"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public bool ContainsInVisList(NetworkIdentity identity)\n")),(0,r.kt)("h5",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkIdentity"),(0,r.kt)("td",{parentName:"tr",align:null},"identity"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"removeallvisibleobjects"},"RemoveAllVisibleObjects()"),(0,r.kt)("p",null,"Removes all objects that this player can see\nThis is called when loading a new scene"),(0,r.kt)("h5",{id:"declaration-18"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void RemoveAllVisibleObjects()\n")),(0,r.kt)("h4",{id:"addownedobjectnetworkidentity"},"AddOwnedObject(NetworkIdentity)"),(0,r.kt)("h5",{id:"declaration-19"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void AddOwnedObject(NetworkIdentity identity)\n")),(0,r.kt)("h5",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkIdentity"),(0,r.kt)("td",{parentName:"tr",align:null},"identity"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"removeownedobjectnetworkidentity"},"RemoveOwnedObject(NetworkIdentity)"),(0,r.kt)("h5",{id:"declaration-20"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void RemoveOwnedObject(NetworkIdentity identity)\n")),(0,r.kt)("h5",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkIdentity"),(0,r.kt)("td",{parentName:"tr",align:null},"identity"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"destroyownedobjects"},"DestroyOwnedObjects()"),(0,r.kt)("p",null,"Destroy all objects owned by this player\nNOTE: only destroyed objects that are currently spawned"),(0,r.kt)("h5",{id:"declaration-21"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void DestroyOwnedObjects()\n")))}p.isMDXComponent=!0}}]);