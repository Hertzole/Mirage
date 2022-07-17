"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[231],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(t),f=a,y=u["".concat(s,".").concat(f)]||u[f]||d[f]||c;return t?n.createElement(y,i(i({ref:r},p),{},{components:t})):n.createElement(y,i({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=u;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},70495:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const c={id:"SceneReadyMessage",title:"SceneReadyMessage"},i="Struct SceneReadyMessage",o={unversionedId:"reference/Mirage/SceneReadyMessage",id:"reference/Mirage/SceneReadyMessage",title:"SceneReadyMessage",description:"Sent to indicate the scene is finished loading",source:"@site/docs/reference/Mirage/SceneReadyMessage.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/SceneReadyMessage",permalink:"/Hertzole/Mirage/docs/reference/Mirage/SceneReadyMessage",draft:!1,editUrl:"https://github.com/Hertzole/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage/SceneReadyMessage.md",tags:[],version:"current",frontMatter:{id:"SceneReadyMessage",title:"SceneReadyMessage"},sidebar:"api",previous:{title:"SceneOperation",permalink:"/Hertzole/Mirage/docs/reference/Mirage/SceneOperation"},next:{title:"SceneVisibilityChecker",permalink:"/Hertzole/Mirage/docs/reference/Mirage/SceneVisibilityChecker"}},s={},l=[{value:"Syntax",id:"syntax",level:5}],p={toc:l};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"struct-scenereadymessage"},"Struct SceneReadyMessage"),(0,a.kt)("p",null,"Sent to indicate the scene is finished loading"),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public struct SceneReadyMessage\n")))}d.isMDXComponent=!0}}]);