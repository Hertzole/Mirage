"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[3138],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),p=l,h=d["".concat(c,".").concat(p)]||d[p]||k[p]||n;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function p(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,i=new Array(n);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},28240:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var a=r(87462),l=(r(67294),r(3905));const n={id:"NetworkMatchChecker",title:"NetworkMatchChecker"},i="Class NetworkMatchChecker",o={unversionedId:"reference/Mirage/NetworkMatchChecker",id:"reference/Mirage/NetworkMatchChecker",title:"NetworkMatchChecker",description:"Component that controls visibility of networked objects based on match id.",source:"@site/docs/reference/Mirage/NetworkMatchChecker.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/NetworkMatchChecker",permalink:"/Mirage/docs/reference/Mirage/NetworkMatchChecker",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage/NetworkMatchChecker.md",tags:[],version:"current",frontMatter:{id:"NetworkMatchChecker",title:"NetworkMatchChecker"},sidebar:"api",previous:{title:"NetworkManagerMode",permalink:"/Mirage/docs/reference/Mirage/NetworkManagerMode"},next:{title:"NetworkMessageAttribute",permalink:"/Mirage/docs/reference/Mirage/NetworkMessageAttribute"}},c={},s=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Fields",id:"fields",level:3},{value:"currentMatchDebug",id:"currentmatchdebug",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Properties",id:"properties",level:3},{value:"MatchId",id:"matchid",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Methods",id:"methods",level:3},{value:"Awake()",id:"awake",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"OnStartServer()",id:"onstartserver",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"OnCheckObserver(INetworkPlayer)",id:"oncheckobserverinetworkplayer",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"OnRebuildObservers(HashSet&lt;INetworkPlayer&gt;, Boolean)",id:"onrebuildobservershashsetinetworkplayer-boolean",level:4},{value:"Declaration",id:"declaration-5",level:5},{value:"Parameters",id:"parameters-1",level:5}],u={toc:s};function k(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"class-networkmatchchecker"},"Class NetworkMatchChecker"),(0,l.kt)("p",null,"Component that controls visibility of networked objects based on match id.\nAny object with this component on it will only be visible to other objects in the same match.\nThis would be used to isolate players to their respective matches within a single game server instance. "),(0,l.kt)("div",{class:"inheritance"},(0,l.kt)("h5",{id:"inheritance"},"Inheritance"),(0,l.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object"),(0,l.kt)("div",{class:"level",style:{"--data-index":1}},"Mirage.NetworkBehaviour"),(0,l.kt)("div",{class:"level",style:{"--data-index":2}},"Mirage.NetworkVisibility")),(0,l.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Show"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.syncMode"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.syncInterval"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.IsServer"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.IsClient"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.IsLocalClient"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.IsLocalPlayer"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.IsServerOnly"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.IsClientOnly"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.HasAuthority"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.NetId"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.Server"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.ServerObjectManager"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.Client"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.ClientObjectManager"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.Owner"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.World"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.NetworkTime"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.SyncVarDirtyBits"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.syncObjects"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.Identity"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.COMPONENT_INDEX_NOT_FOUND"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.ComponentIndex"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.InitSyncObject(Mirage.Collections.ISyncObject)"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.SyncVarEqual","<","T",">","(T, T)"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.ClearAllDirtyBits()"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.IsDirty()"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.StillDirty()"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.SerializeObjectsAll(Mirage.Serialization.NetworkWriter)"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.SerializeObjectsDelta(Mirage.Serialization.NetworkWriter)"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.GetRpcCount()"),(0,l.kt)("p",null,"Mirage.NetworkBehaviour.remoteCallCollection")),(0,l.kt)("h5",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public class NetworkMatchChecker : NetworkVisibility\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"currentmatchdebug"},"currentMatchDebug"),(0,l.kt)("h5",{id:"declaration"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public string currentMatchDebug\n")),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("h4",{id:"matchid"},"MatchId"),(0,l.kt)("p",null,"Set this to the same value on all networked objects that belong to a given match"),(0,l.kt)("h5",{id:"declaration-1"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public Guid MatchId { get; set; }\n")),(0,l.kt)("h3",{id:"methods"},"Methods"),(0,l.kt)("h4",{id:"awake"},"Awake()"),(0,l.kt)("h5",{id:"declaration-2"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void Awake()\n")),(0,l.kt)("h4",{id:"onstartserver"},"OnStartServer()"),(0,l.kt)("h5",{id:"declaration-3"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void OnStartServer()\n")),(0,l.kt)("h4",{id:"oncheckobserverinetworkplayer"},"OnCheckObserver(INetworkPlayer)"),(0,l.kt)("p",null,"Callback used by the visibility system to determine if an observer (player) can see this object.\nIf this function returns true, the network connection will be added as an observer."),(0,l.kt)("h5",{id:"declaration-4"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public override bool OnCheckObserver(INetworkPlayer player)\n")),(0,l.kt)("h5",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.INetworkPlayer"),(0,l.kt)("td",{parentName:"tr",align:null},"player"),(0,l.kt)("td",{parentName:"tr",align:null},"Network connection of a player.")))),(0,l.kt)("h5",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"True if the player can see this object.")))),(0,l.kt)("h4",{id:"onrebuildobservershashsetinetworkplayer-boolean"},"OnRebuildObservers(HashSet","<","INetworkPlayer",">",", Boolean)"),(0,l.kt)("p",null,"Callback used by the visibility system to (re)construct the set of observers that can see this object.\nImplementations of this callback should add network connections of players that can see this object to the observers set."),(0,l.kt)("h5",{id:"declaration-5"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public override void OnRebuildObservers(HashSet<INetworkPlayer> observers, bool initialize)\n")),(0,l.kt)("h5",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.HashSet","<","Mirage.INetworkPlayer",">"),(0,l.kt)("td",{parentName:"tr",align:null},"observers"),(0,l.kt)("td",{parentName:"tr",align:null},"The new set of observers for this object.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"initialize"),(0,l.kt)("td",{parentName:"tr",align:null},"True if the set of observers is being built for the first time.")))))}k.isMDXComponent=!0}}]);