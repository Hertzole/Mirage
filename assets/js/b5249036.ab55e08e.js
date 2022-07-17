"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[9057],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),u=o,d=f["".concat(i,".").concat(u)]||f[u]||m[u]||a;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},47455:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},s="Network Transform",c={unversionedId:"components/network-transform",id:"components/network-transform",title:"Network Transform",description:"The Network Transform component synchronizes the position, rotation, and scale of networked game objects across the network.",source:"@site/docs/components/network-transform.md",sourceDirName:"components",slug:"/components/network-transform",permalink:"/Hertzole/Mirage/docs/components/network-transform",draft:!1,editUrl:"https://github.com/Hertzole/Hertzole/Mirage/tree/master/doc/docs/components/network-transform.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Network Transform Child",permalink:"/Hertzole/Mirage/docs/components/network-transform-child"}},i={},l=[],p={toc:l};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"network-transform"},"Network Transform"),(0,o.kt)("p",null,"The Network Transform component synchronizes the position, rotation, and scale of networked game objects across the network."),(0,o.kt)("p",null,"A game object with a Network Transform component must also have a Network Identity component. When you add a Network Transform component to a game object, Mirage also adds a Network Identity component on that game object if it does not already have one."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The Network Transform component",src:r(85964).Z,width:"466",height:"636"})),(0,o.kt)("p",null,"By default, Network Transform is server-authoritative unless you check the box for ",(0,o.kt)("strong",{parentName:"p"},"Client Authority"),". Client Authority applies to character objects as well as non-character objects that have been specifically assigned to a client, but only for this component.  With this enabled, position changes are send from the client to the server."),(0,o.kt)("p",null,"Under ",(0,o.kt)("strong",{parentName:"p"},"Sensitivity"),', you can set the minimum thresholds of change to the transform values in order for network messages to be generated. This helps minimize network "noise" for minor twitch and jitter.'),(0,o.kt)("p",null,"Normally, changes are sent to all observers of the object this component is on.  Setting ",(0,o.kt)("strong",{parentName:"p"},"Sync Mode")," to Owner Only makes the changes private between the server and the client owner of the object."),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("strong",{parentName:"p"},"Sync Interval")," to specify how often it syncs (in seconds)."))}m.isMDXComponent=!0},85964:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/NetworkTransform-87bc4e6d6034c82e59059a22d4beee56.png"}}]);