"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[3520],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),k=l(r),u=n,h=k["".concat(s,".").concat(u)]||k[u]||m[u]||i;return r?o.createElement(h,a(a({ref:t},p),{},{components:r})):o.createElement(h,a({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=k;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}k.displayName="MDXCreateElement"},626:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const i={},a="Network Proximity Checker",c={unversionedId:"components/network-proximity-checker",id:"components/network-proximity-checker",title:"Network Proximity Checker",description:"The Network Proximity Checker component controls the visibility of game objects for network clients, based on proximity to players.",source:"@site/docs/components/network-proximity-checker.md",sourceDirName:"components",slug:"/components/network-proximity-checker",permalink:"/Mirage/docs/components/network-proximity-checker",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/components/network-proximity-checker.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Network Ping Display",permalink:"/Mirage/docs/components/network-ping-display"},next:{title:"Network Rigidbody",permalink:"/Mirage/docs/components/network-rigidbody"}},s={},l=[],p={toc:l};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"network-proximity-checker"},"Network Proximity Checker"),(0,n.kt)("p",null,"The Network Proximity Checker component controls the visibility of game objects for network clients, based on proximity to players."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Network Proximity Checker component",src:r(5524).Z,width:"362",height:"133"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Vis Range"),(0,n.kt)("br",{parentName:"li"}),"Define the range that the game object should be visible to observers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Vis Update Interval"),(0,n.kt)("br",{parentName:"li"}),"Define how often (in seconds) the game object should check for observers entering its visible range."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Check Method"),(0,n.kt)("br",{parentName:"li"}),"Define which type of physics (2D or 3D) to use for proximity checking."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Force Hidden"),(0,n.kt)("br",{parentName:"li"}),"Tick this checkbox to hide this object from all players.")),(0,n.kt)("p",null,"With the Network Proximity Checker, a game running on a client doesn\u2019t have information about game objects that are not visible. This has two main benefits: it reduces the amount of data sent across the network, and it makes your game more secure against hacking."),(0,n.kt)("p",null,"This component relies on physics to calculate visibility, so observer game objects must also have a collider component on it."),(0,n.kt)("p",null,"A game object with a Network Proximity Checker component must also have a Network Identity component. When you create a Network Proximity Checker component on a game object, Mirage also creates a Network Identity component on that game object if it does not already have one."),(0,n.kt)("p",null,"Scene objects with a Network Proximity Checker component are disabled when they're out of range, and spawned objects are destroyed when they're out of range."))}m.isMDXComponent=!0},5524:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/NetworkProximityCheck-247ba01112e5c8484a8e2ee888b99d45.png"}}]);