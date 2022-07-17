"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[3966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),v=l(n),d=c,f=v["".concat(s,".").concat(d)]||v[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=n.length,a=new Array(i);a[0]=v;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:c,a[1]=o;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},30396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(87462),c=(n(67294),n(3905));const i={id:"DisconnectEvent",title:"DisconnectEvent"},a="Class DisconnectEvent",o={unversionedId:"reference/Mirage.Events/DisconnectEvent",id:"reference/Mirage.Events/DisconnectEvent",title:"DisconnectEvent",description:"Inheritance",source:"@site/docs/reference/Mirage.Events/DisconnectEvent.md",sourceDirName:"reference/Mirage.Events",slug:"/reference/Mirage.Events/DisconnectEvent",permalink:"/Hertzole/Mirage/docs/reference/Mirage.Events/DisconnectEvent",draft:!1,editUrl:"https://github.com/Hertzole/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage.Events/DisconnectEvent.md",tags:[],version:"current",frontMatter:{id:"DisconnectEvent",title:"DisconnectEvent"},sidebar:"api",previous:{title:"DisconnectAddLateEvent",permalink:"/Hertzole/Mirage/docs/reference/Mirage.Events/DisconnectAddLateEvent"},next:{title:"IAddLateEvent<T0>",permalink:"/Hertzole/Mirage/docs/reference/Mirage.Events/IAddLateEvent-1"}},s={},l=[{value:"Inheritance",id:"inheritance",level:5},{value:"Syntax",id:"syntax",level:5}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"class-disconnectevent"},"Class DisconnectEvent"),(0,c.kt)("div",{class:"inheritance"},(0,c.kt)("h5",{id:"inheritance"},"Inheritance"),(0,c.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,c.kt)("h5",{id:"syntax"},"Syntax"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cs"},"[Serializable]\npublic class DisconnectEvent : UnityEvent<ClientStoppedReason>\n")))}u.isMDXComponent=!0}}]);