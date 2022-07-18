"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[2090],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=p(a),s=r,g=m["".concat(o,".").concat(s)]||m[s]||u[s]||l;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1482:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={id:"ZigZag",title:"ZigZag"},i="Class ZigZag",d={unversionedId:"reference/Mirage.Serialization/ZigZag",id:"reference/Mirage.Serialization/ZigZag",title:"ZigZag",description:"See zigzag encoding",source:"@site/docs/reference/Mirage.Serialization/ZigZag.md",sourceDirName:"reference/Mirage.Serialization",slug:"/reference/Mirage.Serialization/ZigZag",permalink:"/Mirage/docs/reference/Mirage.Serialization/ZigZag",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage.Serialization/ZigZag.md",tags:[],version:"current",frontMatter:{id:"ZigZag",title:"ZigZag"},sidebar:"api",previous:{title:"Writer<T>",permalink:"/Mirage/docs/reference/Mirage.Serialization/Writer-1"},next:{title:"ZigZagEncodeAttribute",permalink:"/Mirage/docs/reference/Mirage.Serialization/ZigZagEncodeAttribute"}},o={},p=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Methods",id:"methods",level:3},{value:"Encode(Int32)",id:"encodeint32",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Encode(Int64)",id:"encodeint64",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Decode(UInt32)",id:"decodeuint32",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Decode(UInt64)",id:"decodeuint64",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-3",level:5}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"class-zigzag"},"Class ZigZag"),(0,r.kt)("p",null,"See zigzag encoding"),(0,r.kt)("div",{class:"inheritance"},(0,r.kt)("h5",{id:"inheritance"},"Inheritance"),(0,r.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,r.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show")),(0,r.kt)("h5",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public static class ZigZag\n")),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("h4",{id:"encodeint32"},"Encode(Int32)"),(0,r.kt)("h5",{id:"declaration"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public static uint Encode(int v)\n")),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,r.kt)("td",{parentName:"tr",align:null},"v"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.UInt32"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"encodeint64"},"Encode(Int64)"),(0,r.kt)("h5",{id:"declaration-1"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public static ulong Encode(long v)\n")),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Int64"),(0,r.kt)("td",{parentName:"tr",align:null},"v"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.UInt64"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"decodeuint32"},"Decode(UInt32)"),(0,r.kt)("h5",{id:"declaration-2"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public static int Decode(uint v)\n")),(0,r.kt)("h5",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.UInt32"),(0,r.kt)("td",{parentName:"tr",align:null},"v"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h5",{id:"returns-2"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"decodeuint64"},"Decode(UInt64)"),(0,r.kt)("h5",{id:"declaration-3"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public static long Decode(ulong v)\n")),(0,r.kt)("h5",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.UInt64"),(0,r.kt)("td",{parentName:"tr",align:null},"v"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h5",{id:"returns-3"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Int64"),(0,r.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);