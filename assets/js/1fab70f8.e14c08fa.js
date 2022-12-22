"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[7581],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),u=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),k=n,s=m["".concat(d,".").concat(k)]||m[k]||c[k]||l;return a?r.createElement(s,i(i({ref:t},p),{},{components:a})):r.createElement(s,i({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},37887:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const l={id:"NetworkBehaviour.Id",title:"NetworkBehaviour.Id"},i="Struct NetworkBehaviour.Id",o={unversionedId:"reference/Mirage/NetworkBehaviour.Id",id:"reference/Mirage/NetworkBehaviour.Id",title:"NetworkBehaviour.Id",description:"Syntax",source:"@site/docs/reference/Mirage/NetworkBehaviour.Id.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/NetworkBehaviour.Id",permalink:"/Mirage/docs/reference/Mirage/NetworkBehaviour.Id",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage/NetworkBehaviour.Id.md",tags:[],version:"current",frontMatter:{id:"NetworkBehaviour.Id",title:"NetworkBehaviour.Id"},sidebar:"api",previous:{title:"NetworkBehaviorSyncvar",permalink:"/Mirage/docs/reference/Mirage/NetworkBehaviorSyncvar"},next:{title:"NetworkBehaviour",permalink:"/Mirage/docs/reference/Mirage/NetworkBehaviour"}},d={},u=[{value:"Syntax",id:"syntax",level:5},{value:"Constructors",id:"constructors",level:3},{value:"Id(UInt32, Int32)",id:"iduint32-int32",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Id(NetworkBehaviour)",id:"idnetworkbehaviour",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"Fields",id:"fields",level:3},{value:"NetId",id:"netid",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"ComponentIndex",id:"componentindex",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"Methods",id:"methods",level:3},{value:"GetHashCode()",id:"gethashcode",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"Returns",id:"returns",level:5},{value:"Equals(NetworkBehaviour.Id)",id:"equalsnetworkbehaviourid",level:4},{value:"Declaration",id:"declaration-5",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Equals(Object)",id:"equalsobject",level:4},{value:"Declaration",id:"declaration-6",level:5},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-2",level:5}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"struct-networkbehaviourid"},"Struct NetworkBehaviour.Id"),(0,n.kt)("h5",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public struct Id : IEquatable<NetworkBehaviour.Id>\n")),(0,n.kt)("h3",{id:"constructors"},"Constructors"),(0,n.kt)("h4",{id:"iduint32-int32"},"Id(UInt32, Int32)"),(0,n.kt)("h5",{id:"declaration"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public Id(uint netId, int componentIndex)\n")),(0,n.kt)("h5",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.UInt32"),(0,n.kt)("td",{parentName:"tr",align:null},"netId"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,n.kt)("td",{parentName:"tr",align:null},"componentIndex"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"idnetworkbehaviour"},"Id(NetworkBehaviour)"),(0,n.kt)("h5",{id:"declaration-1"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public Id(NetworkBehaviour behaviour)\n")),(0,n.kt)("h5",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkBehaviour"),(0,n.kt)("td",{parentName:"tr",align:null},"behaviour"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"netid"},"NetId"),(0,n.kt)("h5",{id:"declaration-2"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public readonly uint NetId\n")),(0,n.kt)("h4",{id:"componentindex"},"ComponentIndex"),(0,n.kt)("h5",{id:"declaration-3"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public readonly int ComponentIndex\n")),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("h4",{id:"gethashcode"},"GetHashCode()"),(0,n.kt)("h5",{id:"declaration-4"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public override int GetHashCode()\n")),(0,n.kt)("h5",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"equalsnetworkbehaviourid"},"Equals(NetworkBehaviour.Id)"),(0,n.kt)("h5",{id:"declaration-5"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public bool Equals(NetworkBehaviour.Id other)\n")),(0,n.kt)("h5",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkBehaviour.Id"),(0,n.kt)("td",{parentName:"tr",align:null},"other"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h5",{id:"returns-1"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"equalsobject"},"Equals(Object)"),(0,n.kt)("h5",{id:"declaration-6"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public override bool Equals(object obj)\n")),(0,n.kt)("h5",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Object"),(0,n.kt)("td",{parentName:"tr",align:null},"obj"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h5",{id:"returns-2"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,n.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);