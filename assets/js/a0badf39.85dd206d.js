"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[5968],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},45841:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:1,title:"Overview"},i="Remote Actions Overview",s={unversionedId:"guides/remote-actions/index",id:"guides/remote-actions/index",title:"Overview",description:"To invoke code across the network you can use RPC (remote procedure call) and messages.",source:"@site/docs/guides/remote-actions/index.md",sourceDirName:"guides/remote-actions",slug:"/guides/remote-actions/",permalink:"/Mirage/docs/guides/remote-actions/",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/guides/remote-actions/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"docs",previous:{title:"Sync Sorted Set",permalink:"/Mirage/docs/guides/sync/sync-sorted-set"},next:{title:"Client RPC",permalink:"/Mirage/docs/guides/remote-actions/client-rpc"}},c={},l=[{value:"Arguments to Remote Actions",id:"arguments-to-remote-actions",level:2}],u={toc:l};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"remote-actions-overview"},"Remote Actions Overview"),(0,o.kt)("p",null,"To invoke code across the network you can use RPC (remote procedure call) and messages. "),(0,o.kt)("p",null,"RPC stands for  Remote Procedure Calls. They can be used inside ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/Mirage/NetworkBehaviour"},"NetworkBehaviours")," to tell either the client or server to do an action. For example, the client sends an RPC to the server to update the player's name."),(0,o.kt)("p",null,"There are 3 types of RPC:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/remote-actions/client-rpc"},"Client Rpc")," | Called on the server, invoked on the client"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/remote-actions/server-rpc"},"Server Rpc")," | Called on the client, invoked on server, can have return values"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/remote-actions/network-messages"},"Network Messages")," | Calls on either the server/client and require a handler to be registered")),(0,o.kt)("p",null,"Mirage uses ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/remote-actions/network-messages"},"Network messages")," for sending everything, this includes Spawning, RPC, and SyncVars. Network message serialized into bytes then sent over the network. "),(0,o.kt)("p",null,"Network Message can be used to send data or invoke actions without a NetworkBehaviour. For example, sending character select information before the player's character is spawned. "),(0,o.kt)("p",null,"The diagram below shows the directions that remote actions take:"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},'"Commands" is the previous name for "ServerRpc"')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Data Flow Graph",src:r(91624).Z,width:"811",height:"586"})),(0,o.kt)("h2",{id:"arguments-to-remote-actions"},"Arguments to Remote Actions"),(0,o.kt)("p",null,"Mirage serializes RPC arguments to send them over the network. You can use any ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/data-types"},"supported Mirage type"),"."),(0,o.kt)("p",null,"There are limits to what can be arguments. GameObject, NetworkIdentity, and NetworkBehaviour can be sent because they have a Network ID. But, Mirage can't send other Unity Objects by itself because it will have no way to find them on the other side."),(0,o.kt)("p",null,"It is also possible to create serializer functions for unsupported types. You can find out more information ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/data-types#custom-data-types"},"here"),"."))}d.isMDXComponent=!0},91624:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/unet-directions-f5b45204a697a14ca5f74730d072023d.jpg"}}]);