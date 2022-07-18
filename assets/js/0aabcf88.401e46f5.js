"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[4637],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(t),f=a,m=u["".concat(l,".").concat(f)]||u[f]||s[f]||i;return t?n.createElement(m,o(o({ref:r},p),{},{components:t})):n.createElement(m,o({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},13822:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=t(87462),a=(t(67294),t(3905));const i={id:"SceneOperation",title:"SceneOperation"},o="Enum SceneOperation",c={unversionedId:"reference/Mirage/SceneOperation",id:"reference/Mirage/SceneOperation",title:"SceneOperation",description:"Syntax",source:"@site/docs/reference/Mirage/SceneOperation.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/SceneOperation",permalink:"/Mirage/docs/reference/Mirage/SceneOperation",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage/SceneOperation.md",tags:[],version:"current",frontMatter:{id:"SceneOperation",title:"SceneOperation"},sidebar:"api",previous:{title:"SceneNotReadyMessage",permalink:"/Mirage/docs/reference/Mirage/SceneNotReadyMessage"},next:{title:"SceneReadyMessage",permalink:"/Mirage/docs/reference/Mirage/SceneReadyMessage"}},l={},d=[{value:"Syntax",id:"syntax",level:5},{value:"Fields",id:"fields",level:3},{value:"Normal",id:"normal",level:4},{value:"Declaration",id:"declaration",level:5},{value:"LoadAdditive",id:"loadadditive",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"UnloadAdditive",id:"unloadadditive",level:4},{value:"Declaration",id:"declaration-2",level:5}],p={toc:d};function s(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"enum-sceneoperation"},"Enum SceneOperation"),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public enum SceneOperation : byte\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"normal"},"Normal"),(0,a.kt)("h5",{id:"declaration"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"Normal = 0\n")),(0,a.kt)("h4",{id:"loadadditive"},"LoadAdditive"),(0,a.kt)("h5",{id:"declaration-1"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"LoadAdditive = 1\n")),(0,a.kt)("h4",{id:"unloadadditive"},"UnloadAdditive"),(0,a.kt)("h5",{id:"declaration-2"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"UnloadAdditive = 2\n")))}s.isMDXComponent=!0}}]);