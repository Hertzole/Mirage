"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[5159],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>m});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),s=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):d(d({},a),e)),n},c=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||o[m]||l;return n?t.createElement(k,d(d({ref:a},c),{},{components:n})):t.createElement(k,d({ref:a},c))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,d=new Array(l);d[0]=u;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,d[1]=i;for(var s=2;s<l;s++)d[s]=n[s];return t.createElement.apply(null,d)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19892:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>d,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var t=n(87462),r=(n(67294),n(3905));const l={id:"SpawnHandler",title:"SpawnHandler"},d="Class SpawnHandler",i={unversionedId:"reference/Mirage/SpawnHandler",id:"reference/Mirage/SpawnHandler",title:"SpawnHandler",description:"Inheritance",source:"@site/docs/reference/Mirage/SpawnHandler.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/SpawnHandler",permalink:"/Mirage/docs/reference/Mirage/SpawnHandler",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage/SpawnHandler.md",tags:[],version:"current",frontMatter:{id:"SpawnHandler",title:"SpawnHandler"},sidebar:"api",previous:{title:"SpawnEvent",permalink:"/Mirage/docs/reference/Mirage/SpawnEvent"},next:{title:"SpawnHandlerAsyncDelegate",permalink:"/Mirage/docs/reference/Mirage/SpawnHandlerAsyncDelegate"}},p={},s=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Constructors",id:"constructors",level:3},{value:"SpawnHandler(NetworkIdentity)",id:"spawnhandlernetworkidentity",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Parameters",id:"parameters",level:5},{value:"SpawnHandler(SpawnHandlerDelegate, UnSpawnDelegate)",id:"spawnhandlerspawnhandlerdelegate-unspawndelegate",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"SpawnHandler(SpawnHandlerAsyncDelegate, UnSpawnDelegate)",id:"spawnhandlerspawnhandlerasyncdelegate-unspawndelegate",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:"Fields",id:"fields",level:3},{value:"Prefab",id:"prefab",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"Handler",id:"handler",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"HandlerAsync",id:"handlerasync",level:4},{value:"Declaration",id:"declaration-5",level:5},{value:"Properties",id:"properties",level:3},{value:"UnspawnHandler",id:"unspawnhandler",level:4},{value:"Declaration",id:"declaration-6",level:5},{value:"Methods",id:"methods",level:3},{value:"AddUnspawnHandler(UnSpawnDelegate)",id:"addunspawnhandlerunspawndelegate",level:4},{value:"Declaration",id:"declaration-7",level:5},{value:"Parameters",id:"parameters-3",level:5},{value:"IsAsyncSpawn()",id:"isasyncspawn",level:4},{value:"Declaration",id:"declaration-8",level:5},{value:"Returns",id:"returns",level:5}],c={toc:s};function o(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"class-spawnhandler"},"Class SpawnHandler"),(0,r.kt)("div",{class:"inheritance"},(0,r.kt)("h5",{id:"inheritance"},"Inheritance"),(0,r.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,r.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show")),(0,r.kt)("h5",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public class SpawnHandler\n")),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("h4",{id:"spawnhandlernetworkidentity"},"SpawnHandler(NetworkIdentity)"),(0,r.kt)("h5",{id:"declaration"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public SpawnHandler(NetworkIdentity prefab)\n")),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkIdentity"),(0,r.kt)("td",{parentName:"tr",align:null},"prefab"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"spawnhandlerspawnhandlerdelegate-unspawndelegate"},"SpawnHandler(SpawnHandlerDelegate, UnSpawnDelegate)"),(0,r.kt)("h5",{id:"declaration-1"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public SpawnHandler(SpawnHandlerDelegate spawnHandler, UnSpawnDelegate unspawnHandler)\n")),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.SpawnHandlerDelegate"),(0,r.kt)("td",{parentName:"tr",align:null},"spawnHandler"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.UnSpawnDelegate"),(0,r.kt)("td",{parentName:"tr",align:null},"unspawnHandler"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"spawnhandlerspawnhandlerasyncdelegate-unspawndelegate"},"SpawnHandler(SpawnHandlerAsyncDelegate, UnSpawnDelegate)"),(0,r.kt)("h5",{id:"declaration-2"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public SpawnHandler(SpawnHandlerAsyncDelegate spawnHandlerAsync, UnSpawnDelegate unspawnHandler)\n")),(0,r.kt)("h5",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.SpawnHandlerAsyncDelegate"),(0,r.kt)("td",{parentName:"tr",align:null},"spawnHandlerAsync"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.UnSpawnDelegate"),(0,r.kt)("td",{parentName:"tr",align:null},"unspawnHandler"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"prefab"},"Prefab"),(0,r.kt)("h5",{id:"declaration-3"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public readonly NetworkIdentity Prefab\n")),(0,r.kt)("h4",{id:"handler"},"Handler"),(0,r.kt)("h5",{id:"declaration-4"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public readonly SpawnHandlerDelegate Handler\n")),(0,r.kt)("h4",{id:"handlerasync"},"HandlerAsync"),(0,r.kt)("h5",{id:"declaration-5"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public readonly SpawnHandlerAsyncDelegate HandlerAsync\n")),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"unspawnhandler"},"UnspawnHandler"),(0,r.kt)("h5",{id:"declaration-6"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public UnSpawnDelegate UnspawnHandler { get; }\n")),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("h4",{id:"addunspawnhandlerunspawndelegate"},"AddUnspawnHandler(UnSpawnDelegate)"),(0,r.kt)("h5",{id:"declaration-7"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void AddUnspawnHandler(UnSpawnDelegate unspawnHandler)\n")),(0,r.kt)("h5",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.UnSpawnDelegate"),(0,r.kt)("td",{parentName:"tr",align:null},"unspawnHandler"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"isasyncspawn"},"IsAsyncSpawn()"),(0,r.kt)("h5",{id:"declaration-8"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public bool IsAsyncSpawn()\n")),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,r.kt)("td",{parentName:"tr",align:null})))))}o.isMDXComponent=!0}}]);