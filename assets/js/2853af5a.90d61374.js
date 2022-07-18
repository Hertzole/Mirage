"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[1444],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=i,v=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return t?n.createElement(v,o(o({ref:r},u),{},{components:t})):n.createElement(v,o({ref:r},u))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7058:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(87462),i=(t(67294),t(3905));const a={id:"ServerAttribute",title:"ServerAttribute"},o="Class ServerAttribute",l={unversionedId:"reference/Mirage/ServerAttribute",id:"reference/Mirage/ServerAttribute",title:"ServerAttribute",description:"Prevents a method from running if server is not active.",source:"@site/docs/reference/Mirage/ServerAttribute.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/ServerAttribute",permalink:"/Mirage/docs/reference/Mirage/ServerAttribute",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage/ServerAttribute.md",tags:[],version:"current",frontMatter:{id:"ServerAttribute",title:"ServerAttribute"},sidebar:"api",previous:{title:"SceneVisibilityChecker",permalink:"/Mirage/docs/reference/Mirage/SceneVisibilityChecker"},next:{title:"ServerObjectManager",permalink:"/Mirage/docs/reference/Mirage/ServerObjectManager"}},c={},s=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Fields",id:"fields",level:3},{value:"error",id:"error",level:4},{value:"Declaration",id:"declaration",level:5}],u={toc:s};function d(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class-serverattribute"},"Class ServerAttribute"),(0,i.kt)("p",null,"Prevents a method from running if server is not active.\nCan only be used inside a NetworkBehaviour"),(0,i.kt)("div",{class:"inheritance"},(0,i.kt)("h5",{id:"inheritance"},"Inheritance"),(0,i.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object"),(0,i.kt)("div",{class:"level",style:{"--data-index":1}},"System.Attribute")),(0,i.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Show")),(0,i.kt)("h5",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"[AttributeUsage(AttributeTargets.Method)]\npublic class ServerAttribute : Attribute, _Attribute\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"error"},"error"),(0,i.kt)("p",null,"If true,  when the method is called from a client, it throws an error\nIf false, no error is thrown, but the method won","'","t execute\nuseful for unity built in methods such as Await, Update, Start, etc."),(0,i.kt)("h5",{id:"declaration"},"Declaration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public bool error\n")))}d.isMDXComponent=!0}}]);