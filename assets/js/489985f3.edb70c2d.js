"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[7999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,v=u["".concat(d,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(v,l(l({ref:t},p),{},{components:n})):r.createElement(v,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={id:"IAddLateEvent",title:"IAddLateEvent"},l="Interface IAddLateEvent",o={unversionedId:"reference/Mirage.Events/IAddLateEvent",id:"reference/Mirage.Events/IAddLateEvent",title:"IAddLateEvent",description:"Event that can only run once, adding handler late will it invoke right away",source:"@site/docs/reference/Mirage.Events/IAddLateEvent.md",sourceDirName:"reference/Mirage.Events",slug:"/reference/Mirage.Events/IAddLateEvent",permalink:"/Mirage/docs/reference/Mirage.Events/IAddLateEvent",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage.Events/IAddLateEvent.md",tags:[],version:"current",frontMatter:{id:"IAddLateEvent",title:"IAddLateEvent"},sidebar:"api",previous:{title:"IAddLateEvent<T0, T1>",permalink:"/Mirage/docs/reference/Mirage.Events/IAddLateEvent-2"},next:{title:"NetworkPlayerAddLateEvent",permalink:"/Mirage/docs/reference/Mirage.Events/NetworkPlayerAddLateEvent"}},d={},c=[{value:"Syntax",id:"syntax",level:5},{value:"Methods",id:"methods",level:3},{value:"AddListener(UnityAction)",id:"addlistenerunityaction",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Parameters",id:"parameters",level:5},{value:"RemoveListener(UnityAction)",id:"removelistenerunityaction",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Parameters",id:"parameters-1",level:5}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-iaddlateevent"},"Interface IAddLateEvent"),(0,a.kt)("p",null,"Event that can only run once, adding handler late will it invoke right away"),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public interface IAddLateEvent\n")),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("h4",{id:"addlistenerunityaction"},"AddListener(UnityAction)"),(0,a.kt)("h5",{id:"declaration"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"void AddListener(UnityAction handler)\n")),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UnityAction"),(0,a.kt)("td",{parentName:"tr",align:null},"handler"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h4",{id:"removelistenerunityaction"},"RemoveListener(UnityAction)"),(0,a.kt)("h5",{id:"declaration-1"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"void RemoveListener(UnityAction handler)\n")),(0,a.kt)("h5",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UnityAction"),(0,a.kt)("td",{parentName:"tr",align:null},"handler"),(0,a.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);