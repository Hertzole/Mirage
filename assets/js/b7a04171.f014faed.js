"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[3831],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=s(n),u=a,f=g["".concat(l,".").concat(u)]||g[u]||p[u]||c;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},99545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const c={id:"SceneChangeStartedEvent",title:"SceneChangeStartedEvent"},i="Class SceneChangeStartedEvent",o={unversionedId:"reference/Mirage/SceneChangeStartedEvent",id:"reference/Mirage/SceneChangeStartedEvent",title:"SceneChangeStartedEvent",description:"Event fires from  when a scene change begins on either Server or Client.",source:"@site/docs/reference/Mirage/SceneChangeStartedEvent.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/SceneChangeStartedEvent",permalink:"/Hertzole/Mirage/docs/reference/Mirage/SceneChangeStartedEvent",draft:!1,editUrl:"https://github.com/Hertzole/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage/SceneChangeStartedEvent.md",tags:[],version:"current",frontMatter:{id:"SceneChangeStartedEvent",title:"SceneChangeStartedEvent"},sidebar:"api",previous:{title:"SceneChangeFinishedEvent",permalink:"/Hertzole/Mirage/docs/reference/Mirage/SceneChangeFinishedEvent"},next:{title:"SceneMessage",permalink:"/Hertzole/Mirage/docs/reference/Mirage/SceneMessage"}},l={},s=[{value:"Inheritance",id:"inheritance",level:5},{value:"Syntax",id:"syntax",level:5}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"class-scenechangestartedevent"},"Class SceneChangeStartedEvent"),(0,a.kt)("p",null,"Event fires from  when a scene change begins on either Server or Client.\nScene - Name or path of the scene that","'","s about to be loaded\nSceneOperation - Scene change type (Normal, Additive Load, Additive Unload)."),(0,a.kt)("div",{class:"inheritance"},(0,a.kt)("h5",{id:"inheritance"},"Inheritance"),(0,a.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"[Serializable]\npublic class SceneChangeStartedEvent : UnityEvent<string, SceneOperation>\n")))}p.isMDXComponent=!0}}]);