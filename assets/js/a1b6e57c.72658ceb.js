"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[8742],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(r),k=a,m=u["".concat(d,".").concat(k)]||u[k]||p[k]||l;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},97074:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={id:"NetworkWorld",title:"NetworkWorld"},i="Class NetworkWorld",o={unversionedId:"reference/Mirage/NetworkWorld",id:"reference/Mirage/NetworkWorld",title:"NetworkWorld",description:"Holds collection of spawned network objects",source:"@site/docs/reference/Mirage/NetworkWorld.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/NetworkWorld",permalink:"/Mirage/docs/reference/Mirage/NetworkWorld",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage/NetworkWorld.md",tags:[],version:"current",frontMatter:{id:"NetworkWorld",title:"NetworkWorld"},sidebar:"api",previous:{title:"NetworkVisibility",permalink:"/Mirage/docs/reference/Mirage/NetworkVisibility"},next:{title:"ObjectDestroyMessage",permalink:"/Mirage/docs/reference/Mirage/ObjectDestroyMessage"}},d={},c=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Constructors",id:"constructors",level:3},{value:"NetworkWorld()",id:"networkworld",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Properties",id:"properties",level:3},{value:"Time",id:"time",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"SpawnedIdentities",id:"spawnedidentities",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"Methods",id:"methods",level:3},{value:"TryGetIdentity(UInt32, out NetworkIdentity)",id:"trygetidentityuint32-out-networkidentity",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5}],s={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"class-networkworld"},"Class NetworkWorld"),(0,a.kt)("p",null,"Holds collection of spawned network objects\nThis class works on both server and client"),(0,a.kt)("div",{class:"inheritance"},(0,a.kt)("h5",{id:"inheritance"},"Inheritance"),(0,a.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,a.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show")),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public class NetworkWorld : IObjectLocator\n")),(0,a.kt)("h3",{id:"constructors"},"Constructors"),(0,a.kt)("h4",{id:"networkworld"},"NetworkWorld()"),(0,a.kt)("h5",{id:"declaration"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public NetworkWorld()\n")),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("h4",{id:"time"},"Time"),(0,a.kt)("p",null,"Time kept in this world"),(0,a.kt)("h5",{id:"declaration-1"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public NetworkTime Time { get; }\n")),(0,a.kt)("h4",{id:"spawnedidentities"},"SpawnedIdentities"),(0,a.kt)("h5",{id:"declaration-2"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public IReadOnlyCollection<NetworkIdentity> SpawnedIdentities { get; }\n")),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("h4",{id:"trygetidentityuint32-out-networkidentity"},"TryGetIdentity(UInt32, out NetworkIdentity)"),(0,a.kt)("h5",{id:"declaration-3"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public bool TryGetIdentity(uint netId, out NetworkIdentity identity)\n")),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System.UInt32"),(0,a.kt)("td",{parentName:"tr",align:null},"netId"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkIdentity"),(0,a.kt)("td",{parentName:"tr",align:null},"identity"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,a.kt)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0}}]);