"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[4076],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=l(r),d=o,m=g["".concat(c,".").concat(d)]||g[d]||u[d]||a;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},19719:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:4},s="Network Messages",i={unversionedId:"guides/remote-actions/network-messages",id:"guides/remote-actions/network-messages",title:"Network Messages",description:"For the most part we recommend the high level ServerRpc/ClientRpc calls and SyncVar, but you can also send low level network messages. This can be useful if you want clients to send messages that are not tied to game objects, such as logging, analytics or profiling information.",source:"@site/docs/guides/remote-actions/network-messages.md",sourceDirName:"guides/remote-actions",slug:"/guides/remote-actions/network-messages",permalink:"/Hertzole/Mirage/docs/guides/remote-actions/network-messages",draft:!1,editUrl:"https://github.com/Hertzole/Hertzole/Mirage/tree/master/doc/docs/guides/remote-actions/network-messages.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Server RPC",permalink:"/Hertzole/Mirage/docs/guides/remote-actions/server-rpc"},next:{title:"RPC Examples",permalink:"/Hertzole/Mirage/docs/guides/remote-actions/rpc-examples"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"network-messages"},"Network Messages"),(0,o.kt)("p",null,"For the most part we recommend the high level ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/remote-actions/server-rpc"},"ServerRpc"),"/",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/remote-actions/client-rpc"},"ClientRpc")," calls and ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/sync/sync-var"},"SyncVar"),", but you can also send low level network messages. This can be useful if you want clients to send messages that are not tied to game objects, such as logging, analytics or profiling information."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Define a new struct (rather than a class to prevent GC allocations) which will represent your message."),(0,o.kt)("li",{parentName:"ol"},"Add any ",(0,o.kt)("a",{parentName:"li",href:"/docs/guides/data-types"},"supported Mirage types")," as public fields of that struct. This will be the data you want to send."),(0,o.kt)("li",{parentName:"ol"},"Register a handler for that message on ",(0,o.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/NetworkServer"},"NetworkServer")," and/or ",(0,o.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/NetworkClient"},"NetworkClient"),"'s ",(0,o.kt)("inlineCode",{parentName:"li"},"MessageHandler")," depending on where you want to listen for that message being received."),(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"Send()")," method on the ",(0,o.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/NetworkClient"},"NetworkClient"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/NetworkServer"},"NetworkServer")," or ",(0,o.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/NetworkPlayer"},"NetworkPlayer")," classes depending on which way you want to send the message.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using UnityEngine;\nusing Mirage;\n\npublic class Scores : MonoBehaviour\n{\n    // attach these in the inspector\n    public NetworkServer Server;\n    public NetworkClient Client;\n\n    // using structs to prevent GC allocations\n    public struct ScoreMessage\n    {\n        public int score;\n        public Vector3 scorePos;\n        public int lives;\n    }\n\n    private void Awake() \n    {\n        Client.MessageHandler.RegisterHandler<ScoreMessage>(OnScore); // Register Client to listen for the ScoreMessage\n    }\n    \n    public void SendScore(int score, Vector3 scorePos, int lives)\n    {\n        ScoreMessage msg = new ScoreMessage()\n        {\n            score = score,\n            scorePos = scorePos,\n            lives = lives\n        };\n\n        Server.SendToAll(msg);\n    }\n\n    private void OnScore(INetworkPlayer player, ScoreMessage msg)\n    {\n        Debug.Log("ScoreMessage received on client with score " + msg.score);\n    }\n}\n')),(0,o.kt)("p",null,"Note that there is no serialization code for the ",(0,o.kt)("inlineCode",{parentName:"p"},"ScoreMessage")," struct in this source code example. Mirage will generate a reader and writer for ScoreMessage when it sees that it is being sent."))}u.isMDXComponent=!0}}]);