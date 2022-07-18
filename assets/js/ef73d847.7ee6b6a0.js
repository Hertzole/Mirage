"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[6716],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65898:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:2},o="Network Behaviour",l={unversionedId:"guides/game-objects/network-behaviour",id:"guides/game-objects/network-behaviour",title:"Network Behaviour",description:"See also NetworkBehaviour in the API Reference.",source:"@site/docs/guides/game-objects/network-behaviour.md",sourceDirName:"guides/game-objects",slug:"/guides/game-objects/network-behaviour",permalink:"/Mirage/docs/guides/game-objects/network-behaviour",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/guides/game-objects/network-behaviour.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Lifecycle",permalink:"/Mirage/docs/guides/game-objects/lifecycle"},next:{title:"Spawn Player",permalink:"/Mirage/docs/guides/game-objects/spawn-player"}},s={},c=[{value:"Synchronized variables",id:"synchronized-variables",level:2},{value:"Server and Client functions",id:"server-and-client-functions",level:2},{value:"Server RPC Calls",id:"server-rpc-calls",level:2},{value:"Client RPC Calls",id:"client-rpc-calls",level:2},{value:"Network Callbacks",id:"network-callbacks",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"network-behaviour"},"Network Behaviour"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See also ",(0,a.kt)("a",{parentName:"strong",href:"/docs/reference/Mirage/NetworkBehaviour"},"NetworkBehaviour")," in the API Reference.")),(0,a.kt)("p",null,"Network Behaviour scripts work with game objects that have a NetworkIdentity component. These scripts can perform high-level API functions such as ServerRpcs, ClientRpcs and SyncVars."),(0,a.kt)("p",null,"With the server-authoritative system of Mirage, the server must use the ",(0,a.kt)("inlineCode",{parentName:"p"},"NetworkServer.Spawn")," function to spawn game objects with Network Identity components. Spawning them this way assigns them a ",(0,a.kt)("inlineCode",{parentName:"p"},"netId")," and creates them on clients connected to the server."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," This is not a component that you can add to a game object directly. Instead, you must create a script which inherits from ",(0,a.kt)("inlineCode",{parentName:"p"},"NetworkBehaviour")," (instead of the default ",(0,a.kt)("inlineCode",{parentName:"p"},"MonoBehaviour"),"), then you can add your script as a component to a game object."),(0,a.kt)("p",null,"NetworkBehaviour scripts have the following features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#synchronized-variables"},"Synchronized variables")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#server-and-client-functions"},"Server and Client functions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#server-rpc-calls"},"Server RPC Calls")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#client-rpc-calls"},"Client RPC Calls")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#network-callbacks"},"Network Callbacks"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Data Flow Graph",src:r(91624).Z,width:"811",height:"586"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," NetworkBehaviors in Mirror and in UNet provide virtual functions as a way for you to add logic in response to lifecycle events.  Mirage does not,  instead add listeners to the events in ",(0,a.kt)("a",{parentName:"p",href:"/docs/components/network-identity"},"NetworkIdentity"),"."),(0,a.kt)("h2",{id:"synchronized-variables"},"Synchronized variables"),(0,a.kt)("p",null,"Your component can have data which is automatically synchronized from the server to the client. You can use ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/sync/sync-var"},"SyncVars")," as well as ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/sync/sync-list"},"SyncLists"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/sync/sync-hash-set"},"SyncHashSet")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/sync/sync-dictionary"},"SyncDictionary")," inside a NetworkBehaviour. They will be automatically propagated to the clients whenever their value change in the server."),(0,a.kt)("h2",{id:"server-and-client-functions"},"Server and Client functions"),(0,a.kt)("p",null,"You can tag member functions in NetworkBehaviour scripts with custom attributes to designate them as server-only or client-only functions. ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/Mirage/ServerAttribute"},"ServerAttribute"),"\nwill check that the function is called in the server. Likewise, ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/Mirage/ClientAttribute"},"ClientAttribute")," will check if the function is called in the client."),(0,a.kt)("p",null,"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/attributes"},"Attributes"),"."),(0,a.kt)("h2",{id:"server-rpc-calls"},"Server RPC Calls"),(0,a.kt)("p",null,"To execute code on the server, you must use Server RPC calls. The high-level API is a server-authoritative system, so ServerRpc are the only way for a client to trigger some code on the server."),(0,a.kt)("p",null,"Only player game objects can send ServerRpcs."),(0,a.kt)("p",null,"When a client player game object sends a ServerRpc, that ServerRpc runs on the corresponding player game object on the server. This routing happens automatically, so it is impossible for a client to send a ServerRpc for a different player."),(0,a.kt)("p",null,"To define a Server RPC Call in your code, you must write a function which has:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A name that begins with ",(0,a.kt)("inlineCode",{parentName:"li"},"Cmd")),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"ServerRpc")," attribute")),(0,a.kt)("p",null,"Server RPC Calls are called just by invoking the function normally on the client. Instead of the ServerRpc function running on the client, it is automatically invoked on the corresponding player game object on the server."),(0,a.kt)("p",null,"Server RPC Calls are type-safe, have built-in security and routing to the player, and use an efficient serialization mechanism for the arguments to make calling them fast."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/remote-actions/server-rpc"},"Server RPC")," and related sections for more information."),(0,a.kt)("h2",{id:"client-rpc-calls"},"Client RPC Calls"),(0,a.kt)("p",null,"Client RPC calls are a way for server game objects to make things happen on client game objects."),(0,a.kt)("p",null,"Client RPC calls are not restricted to player game objects, and may be called on any game object with a Network Identity component."),(0,a.kt)("p",null,"To define a Client RPC call in your code, you must write a function which:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Has a name that begins with ",(0,a.kt)("inlineCode",{parentName:"li"},"Rpc")),(0,a.kt)("li",{parentName:"ul"},"Has the ",(0,a.kt)("inlineCode",{parentName:"li"},"ClientRpc")," attribute")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/remote-actions/client-rpc"},"Client RPC")," and related sections for more information."),(0,a.kt)("h2",{id:"network-callbacks"},"Network Callbacks"),(0,a.kt)("p",null,"Callbacks can be used to make sure code is executed at the right time."),(0,a.kt)("p",null,"The network callbacks are found inside ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/Mirage/NetworkIdentity"},"NetworkIdentity")," so they can also be used outside of an NetworkBehaviour."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/callbacks/network-behaviour"},"NetworkBehaviour Callbacks")," and related sections for more information."))}p.isMDXComponent=!0},91624:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/unet-directions-f5b45204a697a14ca5f74730d072023d.jpg"}}]);