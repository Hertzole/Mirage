"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[5717],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,s=m["".concat(c,".").concat(u)]||m[u]||d[u]||l;return a?r.createElement(s,i(i({ref:t},k),{},{components:a})):r.createElement(s,i({ref:t},k))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},10677:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={id:"Vector3Packer",title:"Vector3Packer"},i="Class Vector3Packer",o={unversionedId:"reference/Mirage.Serialization/Vector3Packer",id:"reference/Mirage.Serialization/Vector3Packer",title:"Vector3Packer",description:"Inheritance",source:"@site/docs/reference/Mirage.Serialization/Vector3Packer.md",sourceDirName:"reference/Mirage.Serialization",slug:"/reference/Mirage.Serialization/Vector3Packer",permalink:"/Mirage/docs/reference/Mirage.Serialization/Vector3Packer",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage.Serialization/Vector3Packer.md",tags:[],version:"current",frontMatter:{id:"Vector3Packer",title:"Vector3Packer"},sidebar:"api",previous:{title:"Vector3PackAttribute",permalink:"/Mirage/docs/reference/Mirage.Serialization/Vector3PackAttribute"},next:{title:"WeaverIgnoreAttribute",permalink:"/Mirage/docs/reference/Mirage.Serialization/WeaverIgnoreAttribute"}},c={},p=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Constructors",id:"constructors",level:3},{value:"Vector3Packer(Single, Single, Single, Int32, Int32, Int32)",id:"vector3packersingle-single-single-int32-int32-int32",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Vector3Packer(Single, Single, Single, Single, Single, Single)",id:"vector3packersingle-single-single-single-single-single",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"Vector3Packer(Vector3, Vector3)",id:"vector3packervector3-vector3",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:"Methods",id:"methods",level:3},{value:"Pack(NetworkWriter, Vector3)",id:"packnetworkwriter-vector3",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"Parameters",id:"parameters-3",level:5},{value:"Unpack(NetworkReader)",id:"unpacknetworkreader",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"Parameters",id:"parameters-4",level:5},{value:"Returns",id:"returns",level:5}],k={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"class-vector3packer"},"Class Vector3Packer"),(0,n.kt)("div",{class:"inheritance"},(0,n.kt)("h5",{id:"inheritance"},"Inheritance"),(0,n.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,n.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Show")),(0,n.kt)("h5",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public sealed class Vector3Packer\n")),(0,n.kt)("h3",{id:"constructors"},"Constructors"),(0,n.kt)("h4",{id:"vector3packersingle-single-single-int32-int32-int32"},"Vector3Packer(Single, Single, Single, Int32, Int32, Int32)"),(0,n.kt)("h5",{id:"declaration"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public Vector3Packer(float xMax, float yMax, float zMax, int xBitCount, int yBitCount, int zBitCount)\n")),(0,n.kt)("h5",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Single"),(0,n.kt)("td",{parentName:"tr",align:null},"xMax"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Single"),(0,n.kt)("td",{parentName:"tr",align:null},"yMax"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Single"),(0,n.kt)("td",{parentName:"tr",align:null},"zMax"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,n.kt)("td",{parentName:"tr",align:null},"xBitCount"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,n.kt)("td",{parentName:"tr",align:null},"yBitCount"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,n.kt)("td",{parentName:"tr",align:null},"zBitCount"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"vector3packersingle-single-single-single-single-single"},"Vector3Packer(Single, Single, Single, Single, Single, Single)"),(0,n.kt)("h5",{id:"declaration-1"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public Vector3Packer(float xMax, float yMax, float zMax, float xPrecision, float yPrecision, float zPrecision)\n")),(0,n.kt)("h5",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Single"),(0,n.kt)("td",{parentName:"tr",align:null},"xMax"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Single"),(0,n.kt)("td",{parentName:"tr",align:null},"yMax"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Single"),(0,n.kt)("td",{parentName:"tr",align:null},"zMax"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Single"),(0,n.kt)("td",{parentName:"tr",align:null},"xPrecision"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Single"),(0,n.kt)("td",{parentName:"tr",align:null},"yPrecision"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Single"),(0,n.kt)("td",{parentName:"tr",align:null},"zPrecision"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"vector3packervector3-vector3"},"Vector3Packer(Vector3, Vector3)"),(0,n.kt)("h5",{id:"declaration-2"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public Vector3Packer(Vector3 max, Vector3 precision)\n")),(0,n.kt)("h5",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Vector3"),(0,n.kt)("td",{parentName:"tr",align:null},"max"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Vector3"),(0,n.kt)("td",{parentName:"tr",align:null},"precision"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("h4",{id:"packnetworkwriter-vector3"},"Pack(NetworkWriter, Vector3)"),(0,n.kt)("h5",{id:"declaration-3"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public void Pack(NetworkWriter writer, Vector3 value)\n")),(0,n.kt)("h5",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,n.kt)("td",{parentName:"tr",align:null},"writer"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Vector3"),(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"unpacknetworkreader"},"Unpack(NetworkReader)"),(0,n.kt)("h5",{id:"declaration-4"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public Vector3 Unpack(NetworkReader reader)\n")),(0,n.kt)("h5",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkReader"),(0,n.kt)("td",{parentName:"tr",align:null},"reader"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h5",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Vector3"),(0,n.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);