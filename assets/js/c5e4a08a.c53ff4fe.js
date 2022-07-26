"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[8266],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),g=i,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94967:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={sidebar_position:1},a="Networking Concepts Overview",l={unversionedId:"guides/overview",id:"guides/overview",title:"Networking Concepts Overview",description:"High-level scripting API",source:"@site/docs/guides/overview.md",sourceDirName:"guides",slug:"/guides/overview",permalink:"/Mirage/docs/guides/overview",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/guides/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Guides",permalink:"/Mirage/docs/category/guides"},next:{title:"Network Authority",permalink:"/Mirage/docs/guides/authority"}},s={},c=[{value:"High-level scripting API",id:"high-level-scripting-api",level:2},{value:"Engine and Editor integration",id:"engine-and-editor-integration",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"networking-concepts-overview"},"Networking Concepts Overview"),(0,i.kt)("h2",{id:"high-level-scripting-api"},"High-level scripting API"),(0,i.kt)("p",null,'Mirage\u2019s networking has a "high-level" scripting API (which we\u2019ll refer to as the HLAPI). Using this means you get access to commands which cover most of the common requirements for multiuser games without needing to worry about the "lower level" implementation details. The HLAPI allows you to:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Control the networked state of the game using a "Network Manager"'),(0,i.kt)("li",{parentName:"ul"},'Operate "client hosted" games, where the host is also a player client'),(0,i.kt)("li",{parentName:"ul"},"Serialize data using a general-purpose serializer"),(0,i.kt)("li",{parentName:"ul"},"Send and receive network messages"),(0,i.kt)("li",{parentName:"ul"},"Send networked commands from clients to servers"),(0,i.kt)("li",{parentName:"ul"},"Make remote procedure calls (RPCs) from servers to clients"),(0,i.kt)("li",{parentName:"ul"},"Send networked events from servers to clients")),(0,i.kt)("h2",{id:"engine-and-editor-integration"},"Engine and Editor integration"),(0,i.kt)("p",null,"Mirage\u2019s networking is integrated into the engine and the editor, allowing you to work with components and visual aids to build your multiplayer game. It provides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A NetworkIdentity component for networked objects"),(0,i.kt)("li",{parentName:"ul"},"A NetworkBehaviour for networked scripts"),(0,i.kt)("li",{parentName:"ul"},"Configurable automatic synchronization of object transforms"),(0,i.kt)("li",{parentName:"ul"},"Automatic synchronization of script variables"),(0,i.kt)("li",{parentName:"ul"},"Support for placing networked objects in Unity scenes"),(0,i.kt)("li",{parentName:"ul"},"Network components")))}p.isMDXComponent=!0}}]);