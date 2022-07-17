"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[5583],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,k=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},32838:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const l={id:"IObjectOwner",title:"IObjectOwner"},o="Interface IObjectOwner",i={unversionedId:"reference/Mirage/IObjectOwner",id:"reference/Mirage/IObjectOwner",title:"IObjectOwner",description:"An object that can own networked objects",source:"@site/docs/reference/Mirage/IObjectOwner.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/IObjectOwner",permalink:"/Hertzole/Mirage/docs/reference/Mirage/IObjectOwner",draft:!1,editUrl:"https://github.com/Hertzole/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage/IObjectOwner.md",tags:[],version:"current",frontMatter:{id:"IObjectOwner",title:"IObjectOwner"},sidebar:"api",previous:{title:"IObjectLocator",permalink:"/Hertzole/Mirage/docs/reference/Mirage/IObjectLocator"},next:{title:"ISceneLoader",permalink:"/Hertzole/Mirage/docs/reference/Mirage/ISceneLoader"}},c={},d=[{value:"Syntax",id:"syntax",level:5},{value:"Properties",id:"properties",level:3},{value:"Identity",id:"identity",level:4},{value:"Declaration",id:"declaration",level:5},{value:"HasCharacter",id:"hascharacter",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Methods",id:"methods",level:3},{value:"RemoveOwnedObject(NetworkIdentity)",id:"removeownedobjectnetworkidentity",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"Parameters",id:"parameters",level:5},{value:"AddOwnedObject(NetworkIdentity)",id:"addownedobjectnetworkidentity",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"DestroyOwnedObjects()",id:"destroyownedobjects",level:4},{value:"Declaration",id:"declaration-4",level:5}],p={toc:d};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-iobjectowner"},"Interface IObjectOwner"),(0,a.kt)("p",null,"An object that can own networked objects"),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public interface IObjectOwner\n")),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("h4",{id:"identity"},"Identity"),(0,a.kt)("h5",{id:"declaration"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"NetworkIdentity Identity { get; set; }\n")),(0,a.kt)("h4",{id:"hascharacter"},"HasCharacter"),(0,a.kt)("h5",{id:"declaration-1"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"bool HasCharacter { get; }\n")),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("h4",{id:"removeownedobjectnetworkidentity"},"RemoveOwnedObject(NetworkIdentity)"),(0,a.kt)("h5",{id:"declaration-2"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"void RemoveOwnedObject(NetworkIdentity networkIdentity)\n")),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkIdentity"),(0,a.kt)("td",{parentName:"tr",align:null},"networkIdentity"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h4",{id:"addownedobjectnetworkidentity"},"AddOwnedObject(NetworkIdentity)"),(0,a.kt)("h5",{id:"declaration-3"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"void AddOwnedObject(NetworkIdentity networkIdentity)\n")),(0,a.kt)("h5",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkIdentity"),(0,a.kt)("td",{parentName:"tr",align:null},"networkIdentity"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h4",{id:"destroyownedobjects"},"DestroyOwnedObjects()"),(0,a.kt)("h5",{id:"declaration-4"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"void DestroyOwnedObjects()\n")))}s.isMDXComponent=!0}}]);