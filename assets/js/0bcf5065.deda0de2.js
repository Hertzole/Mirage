"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[8004],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),g=a,h=s["".concat(c,".").concat(g)]||s[g]||d[g]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},61711:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={id:"SyncHookType",title:"SyncHookType"},i="Enum SyncHookType",l={unversionedId:"reference/Mirage/SyncHookType",id:"reference/Mirage/SyncHookType",title:"SyncHookType",description:"Syntax",source:"@site/docs/reference/Mirage/SyncHookType.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/SyncHookType",permalink:"/Mirage/docs/reference/Mirage/SyncHookType",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage/SyncHookType.md",tags:[],version:"current",frontMatter:{id:"SyncHookType",title:"SyncHookType"},sidebar:"api",previous:{title:"StringHash",permalink:"/Mirage/docs/reference/Mirage/StringHash"},next:{title:"SyncMode",permalink:"/Mirage/docs/reference/Mirage/SyncMode"}},c={},u=[{value:"Syntax",id:"syntax",level:5},{value:"Fields",id:"fields",level:3},{value:"Automatic",id:"automatic",level:4},{value:"Declaration",id:"declaration",level:5},{value:"MethodWith1Arg",id:"methodwith1arg",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"MethodWith2Arg",id:"methodwith2arg",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"EventWith1Arg",id:"eventwith1arg",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"EventWith2Arg",id:"eventwith2arg",level:4},{value:"Declaration",id:"declaration-4",level:5}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"enum-synchooktype"},"Enum SyncHookType"),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public enum SyncHookType\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"automatic"},"Automatic"),(0,a.kt)("p",null,"Looks for hooks matching the signature, gives compile error if none or more than 1 is found"),(0,a.kt)("h5",{id:"declaration"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"Automatic = 0\n")),(0,a.kt)("h4",{id:"methodwith1arg"},"MethodWith1Arg"),(0,a.kt)("p",null,"Hook with signature void hookName(T newValue)"),(0,a.kt)("h5",{id:"declaration-1"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"MethodWith1Arg = 1\n")),(0,a.kt)("h4",{id:"methodwith2arg"},"MethodWith2Arg"),(0,a.kt)("p",null,"Hook with signature void hookName(T oldValue, T newValue)"),(0,a.kt)("h5",{id:"declaration-2"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"MethodWith2Arg = 2\n")),(0,a.kt)("h4",{id:"eventwith1arg"},"EventWith1Arg"),(0,a.kt)("p",null,"Hook with signature event Action{T} hookName;"),(0,a.kt)("h5",{id:"declaration-3"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"EventWith1Arg = 3\n")),(0,a.kt)("h4",{id:"eventwith2arg"},"EventWith2Arg"),(0,a.kt)("p",null,"Hook with signature event Action{T,T} hookName;"),(0,a.kt)("h5",{id:"declaration-4"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"EventWith2Arg = 4\n")))}d.isMDXComponent=!0}}]);