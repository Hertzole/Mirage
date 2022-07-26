"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[1802],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||i;return r?a.createElement(h,o(o({ref:t},m),{},{components:r})):a.createElement(h,o({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5849:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:1},o="Samples Overview",s={unversionedId:"examples/index",id:"examples/index",title:"Samples Overview",description:"Mirage includes several small examples to help you learn how to use various features and how to set things up so they work together.",source:"@site/docs/examples/index.md",sourceDirName:"examples",slug:"/examples/",permalink:"/Mirage/docs/examples/",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/examples/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Examples",permalink:"/Mirage/docs/category/examples"},next:{title:"Additive Scenes Example",permalink:"/Mirage/docs/examples/additive-scenes"}},l={},p=[{value:"Import samples",id:"import-samples",level:2}],m={toc:p};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"samples-overview"},"Samples Overview"),(0,n.kt)("p",null,"Mirage includes several small examples to help you learn how to use various features and how to set things up so they work together."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/additive-scenes"},"Additive Scenes"),(0,n.kt)("br",{parentName:"li"}),"The Additive Scenes example demonstrates a server additively loading a sub-scene into the main scene at startup, and having a server-only trigger that generates a message to any client whose player enters the trigger zone to also load the sub-scene, and subsequently unload it when they leave the trigger zone. Only players inside the trigger zone can see the objects in the sub-scene. Network Proximity Checker components are key to making this scenario work."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/basic"},"Basic"),(0,n.kt)("br",{parentName:"li"}),"Basic is what it sounds like...the most rudimentary baseline of a networked game. Features SyncVars updating random UI data for each player."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/chat"},"Chat"),(0,n.kt)("br",{parentName:"li"}),"A simple text chat for multiple networked clients."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/change-scene"},"ChangeScene"),(0,n.kt)("br",{parentName:"li"}),"Provides examples for Normal and Additive network scene changing."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/pong"},"Pong"),(0,n.kt)("br",{parentName:"li"}),'A simple example of "How to build a multiplayer game with Mirage" is Pong. It illustrates the usage of ',(0,n.kt)("inlineCode",{parentName:"li"},"NetworkManager"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"NetworkManagerHUD"),", NetworkBehaviour, NetworkIdentity, ",(0,n.kt)("inlineCode",{parentName:"li"},"NetworkTransform"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"NetworkStartPosition"),"and various Attributes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/tanks"},"Tanks"),(0,n.kt)("br",{parentName:"li"}),"This is a simple scene with animated tanks, networked rigidbody projectiles, and NavMesh movement")),(0,n.kt)("h2",{id:"import-samples"},"Import samples"),(0,n.kt)("p",null,"Sample can be imported using the Unity Package manager. They can be found inside the ",(0,n.kt)("inlineCode",{parentName:"p"},"Samples")," Dropdown."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Sample dropdown",src:r(61416).Z,width:"1005",height:"730"})))}c.isMDXComponent=!0},61416:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/UPM-samples-85e4bd29fd03e955cd0a3629138aedf8.png"}}]);