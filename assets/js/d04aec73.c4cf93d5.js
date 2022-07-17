"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[9101],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>N});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),k=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=k(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=k(a),N=l,c=u["".concat(o,".").concat(N)]||u[N]||m[N]||n;return a?r.createElement(c,i(i({ref:t},p),{},{components:a})):r.createElement(c,i({ref:t},p))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:l,i[1]=d;for(var k=2;k<n;k++)i[k]=a[k];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},42573:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>d,toc:()=>k});var r=a(87462),l=(a(67294),a(3905));const n={id:"UnityTypesExtensions",title:"UnityTypesExtensions"},i="Class UnityTypesExtensions",d={unversionedId:"reference/Mirage.Serialization/UnityTypesExtensions",id:"reference/Mirage.Serialization/UnityTypesExtensions",title:"UnityTypesExtensions",description:"Inheritance",source:"@site/docs/reference/Mirage.Serialization/UnityTypesExtensions.md",sourceDirName:"reference/Mirage.Serialization",slug:"/reference/Mirage.Serialization/UnityTypesExtensions",permalink:"/Hertzole/Mirage/docs/reference/Mirage.Serialization/UnityTypesExtensions",draft:!1,editUrl:"https://github.com/Hertzole/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage.Serialization/UnityTypesExtensions.md",tags:[],version:"current",frontMatter:{id:"UnityTypesExtensions",title:"UnityTypesExtensions"},sidebar:"api",previous:{title:"SystemTypesExtensions",permalink:"/Hertzole/Mirage/docs/reference/Mirage.Serialization/SystemTypesExtensions"},next:{title:"VarFloatPacker",permalink:"/Hertzole/Mirage/docs/reference/Mirage.Serialization/VarFloatPacker"}},o={},k=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Methods",id:"methods",level:3},{value:"WriteVector2(NetworkWriter, Vector2)",id:"writevector2networkwriter-vector2",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Parameters",id:"parameters",level:5},{value:"WriteVector3(NetworkWriter, Vector3)",id:"writevector3networkwriter-vector3",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"WriteVector4(NetworkWriter, Vector4)",id:"writevector4networkwriter-vector4",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:"WriteVector2Int(NetworkWriter, Vector2Int)",id:"writevector2intnetworkwriter-vector2int",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"Parameters",id:"parameters-3",level:5},{value:"WriteVector3Int(NetworkWriter, Vector3Int)",id:"writevector3intnetworkwriter-vector3int",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"Parameters",id:"parameters-4",level:5},{value:"WriteColor(NetworkWriter, Color)",id:"writecolornetworkwriter-color",level:4},{value:"Declaration",id:"declaration-5",level:5},{value:"Parameters",id:"parameters-5",level:5},{value:"WriteColor32(NetworkWriter, Color32)",id:"writecolor32networkwriter-color32",level:4},{value:"Declaration",id:"declaration-6",level:5},{value:"Parameters",id:"parameters-6",level:5},{value:"WriteRect(NetworkWriter, Rect)",id:"writerectnetworkwriter-rect",level:4},{value:"Declaration",id:"declaration-7",level:5},{value:"Parameters",id:"parameters-7",level:5},{value:"WritePlane(NetworkWriter, Plane)",id:"writeplanenetworkwriter-plane",level:4},{value:"Declaration",id:"declaration-8",level:5},{value:"Parameters",id:"parameters-8",level:5},{value:"WriteRay(NetworkWriter, Ray)",id:"writeraynetworkwriter-ray",level:4},{value:"Declaration",id:"declaration-9",level:5},{value:"Parameters",id:"parameters-9",level:5},{value:"WriteMatrix4X4(NetworkWriter, Matrix4x4)",id:"writematrix4x4networkwriter-matrix4x4",level:4},{value:"Declaration",id:"declaration-10",level:5},{value:"Parameters",id:"parameters-10",level:5},{value:"ReadVector2(NetworkReader)",id:"readvector2networkreader",level:4},{value:"Declaration",id:"declaration-11",level:5},{value:"Parameters",id:"parameters-11",level:5},{value:"Returns",id:"returns",level:5},{value:"ReadVector3(NetworkReader)",id:"readvector3networkreader",level:4},{value:"Declaration",id:"declaration-12",level:5},{value:"Parameters",id:"parameters-12",level:5},{value:"Returns",id:"returns-1",level:5},{value:"ReadVector4(NetworkReader)",id:"readvector4networkreader",level:4},{value:"Declaration",id:"declaration-13",level:5},{value:"Parameters",id:"parameters-13",level:5},{value:"Returns",id:"returns-2",level:5},{value:"ReadVector2Int(NetworkReader)",id:"readvector2intnetworkreader",level:4},{value:"Declaration",id:"declaration-14",level:5},{value:"Parameters",id:"parameters-14",level:5},{value:"Returns",id:"returns-3",level:5},{value:"ReadVector3Int(NetworkReader)",id:"readvector3intnetworkreader",level:4},{value:"Declaration",id:"declaration-15",level:5},{value:"Parameters",id:"parameters-15",level:5},{value:"Returns",id:"returns-4",level:5},{value:"ReadColor(NetworkReader)",id:"readcolornetworkreader",level:4},{value:"Declaration",id:"declaration-16",level:5},{value:"Parameters",id:"parameters-16",level:5},{value:"Returns",id:"returns-5",level:5},{value:"ReadColor32(NetworkReader)",id:"readcolor32networkreader",level:4},{value:"Declaration",id:"declaration-17",level:5},{value:"Parameters",id:"parameters-17",level:5},{value:"Returns",id:"returns-6",level:5},{value:"ReadRect(NetworkReader)",id:"readrectnetworkreader",level:4},{value:"Declaration",id:"declaration-18",level:5},{value:"Parameters",id:"parameters-18",level:5},{value:"Returns",id:"returns-7",level:5},{value:"ReadPlane(NetworkReader)",id:"readplanenetworkreader",level:4},{value:"Declaration",id:"declaration-19",level:5},{value:"Parameters",id:"parameters-19",level:5},{value:"Returns",id:"returns-8",level:5},{value:"ReadRay(NetworkReader)",id:"readraynetworkreader",level:4},{value:"Declaration",id:"declaration-20",level:5},{value:"Parameters",id:"parameters-20",level:5},{value:"Returns",id:"returns-9",level:5},{value:"ReadMatrix4x4(NetworkReader)",id:"readmatrix4x4networkreader",level:4},{value:"Declaration",id:"declaration-21",level:5},{value:"Parameters",id:"parameters-21",level:5},{value:"Returns",id:"returns-10",level:5}],p={toc:k};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"class-unitytypesextensions"},"Class UnityTypesExtensions"),(0,l.kt)("div",{class:"inheritance"},(0,l.kt)("h5",{id:"inheritance"},"Inheritance"),(0,l.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,l.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Show")),(0,l.kt)("h5",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static class UnityTypesExtensions\n")),(0,l.kt)("h3",{id:"methods"},"Methods"),(0,l.kt)("h4",{id:"writevector2networkwriter-vector2"},"WriteVector2(NetworkWriter, Vector2)"),(0,l.kt)("h5",{id:"declaration"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static void WriteVector2(this NetworkWriter writer, Vector2 value)\n")),(0,l.kt)("h5",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,l.kt)("td",{parentName:"tr",align:null},"writer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Vector2"),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"writevector3networkwriter-vector3"},"WriteVector3(NetworkWriter, Vector3)"),(0,l.kt)("h5",{id:"declaration-1"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static void WriteVector3(this NetworkWriter writer, Vector3 value)\n")),(0,l.kt)("h5",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,l.kt)("td",{parentName:"tr",align:null},"writer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Vector3"),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"writevector4networkwriter-vector4"},"WriteVector4(NetworkWriter, Vector4)"),(0,l.kt)("h5",{id:"declaration-2"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static void WriteVector4(this NetworkWriter writer, Vector4 value)\n")),(0,l.kt)("h5",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,l.kt)("td",{parentName:"tr",align:null},"writer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Vector4"),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"writevector2intnetworkwriter-vector2int"},"WriteVector2Int(NetworkWriter, Vector2Int)"),(0,l.kt)("h5",{id:"declaration-3"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static void WriteVector2Int(this NetworkWriter writer, Vector2Int value)\n")),(0,l.kt)("h5",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,l.kt)("td",{parentName:"tr",align:null},"writer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Vector2Int"),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"writevector3intnetworkwriter-vector3int"},"WriteVector3Int(NetworkWriter, Vector3Int)"),(0,l.kt)("h5",{id:"declaration-4"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static void WriteVector3Int(this NetworkWriter writer, Vector3Int value)\n")),(0,l.kt)("h5",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,l.kt)("td",{parentName:"tr",align:null},"writer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Vector3Int"),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"writecolornetworkwriter-color"},"WriteColor(NetworkWriter, Color)"),(0,l.kt)("h5",{id:"declaration-5"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static void WriteColor(this NetworkWriter writer, Color value)\n")),(0,l.kt)("h5",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,l.kt)("td",{parentName:"tr",align:null},"writer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Color"),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"writecolor32networkwriter-color32"},"WriteColor32(NetworkWriter, Color32)"),(0,l.kt)("h5",{id:"declaration-6"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static void WriteColor32(this NetworkWriter writer, Color32 value)\n")),(0,l.kt)("h5",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,l.kt)("td",{parentName:"tr",align:null},"writer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Color32"),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"writerectnetworkwriter-rect"},"WriteRect(NetworkWriter, Rect)"),(0,l.kt)("h5",{id:"declaration-7"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static void WriteRect(this NetworkWriter writer, Rect value)\n")),(0,l.kt)("h5",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,l.kt)("td",{parentName:"tr",align:null},"writer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rect"),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"writeplanenetworkwriter-plane"},"WritePlane(NetworkWriter, Plane)"),(0,l.kt)("h5",{id:"declaration-8"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static void WritePlane(this NetworkWriter writer, Plane value)\n")),(0,l.kt)("h5",{id:"parameters-8"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,l.kt)("td",{parentName:"tr",align:null},"writer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Plane"),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"writeraynetworkwriter-ray"},"WriteRay(NetworkWriter, Ray)"),(0,l.kt)("h5",{id:"declaration-9"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static void WriteRay(this NetworkWriter writer, Ray value)\n")),(0,l.kt)("h5",{id:"parameters-9"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,l.kt)("td",{parentName:"tr",align:null},"writer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ray"),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"writematrix4x4networkwriter-matrix4x4"},"WriteMatrix4X4(NetworkWriter, Matrix4x4)"),(0,l.kt)("h5",{id:"declaration-10"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static void WriteMatrix4X4(this NetworkWriter writer, Matrix4x4 value)\n")),(0,l.kt)("h5",{id:"parameters-10"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,l.kt)("td",{parentName:"tr",align:null},"writer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Matrix4x4"),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"readvector2networkreader"},"ReadVector2(NetworkReader)"),(0,l.kt)("h5",{id:"declaration-11"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static Vector2 ReadVector2(this NetworkReader reader)\n")),(0,l.kt)("h5",{id:"parameters-11"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkReader"),(0,l.kt)("td",{parentName:"tr",align:null},"reader"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h5",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Vector2"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"readvector3networkreader"},"ReadVector3(NetworkReader)"),(0,l.kt)("h5",{id:"declaration-12"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static Vector3 ReadVector3(this NetworkReader reader)\n")),(0,l.kt)("h5",{id:"parameters-12"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkReader"),(0,l.kt)("td",{parentName:"tr",align:null},"reader"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h5",{id:"returns-1"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Vector3"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"readvector4networkreader"},"ReadVector4(NetworkReader)"),(0,l.kt)("h5",{id:"declaration-13"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static Vector4 ReadVector4(this NetworkReader reader)\n")),(0,l.kt)("h5",{id:"parameters-13"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkReader"),(0,l.kt)("td",{parentName:"tr",align:null},"reader"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h5",{id:"returns-2"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Vector4"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"readvector2intnetworkreader"},"ReadVector2Int(NetworkReader)"),(0,l.kt)("h5",{id:"declaration-14"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static Vector2Int ReadVector2Int(this NetworkReader reader)\n")),(0,l.kt)("h5",{id:"parameters-14"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkReader"),(0,l.kt)("td",{parentName:"tr",align:null},"reader"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h5",{id:"returns-3"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Vector2Int"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"readvector3intnetworkreader"},"ReadVector3Int(NetworkReader)"),(0,l.kt)("h5",{id:"declaration-15"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static Vector3Int ReadVector3Int(this NetworkReader reader)\n")),(0,l.kt)("h5",{id:"parameters-15"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkReader"),(0,l.kt)("td",{parentName:"tr",align:null},"reader"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h5",{id:"returns-4"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Vector3Int"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"readcolornetworkreader"},"ReadColor(NetworkReader)"),(0,l.kt)("h5",{id:"declaration-16"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static Color ReadColor(this NetworkReader reader)\n")),(0,l.kt)("h5",{id:"parameters-16"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkReader"),(0,l.kt)("td",{parentName:"tr",align:null},"reader"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h5",{id:"returns-5"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Color"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"readcolor32networkreader"},"ReadColor32(NetworkReader)"),(0,l.kt)("h5",{id:"declaration-17"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static Color32 ReadColor32(this NetworkReader reader)\n")),(0,l.kt)("h5",{id:"parameters-17"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkReader"),(0,l.kt)("td",{parentName:"tr",align:null},"reader"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h5",{id:"returns-6"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Color32"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"readrectnetworkreader"},"ReadRect(NetworkReader)"),(0,l.kt)("h5",{id:"declaration-18"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static Rect ReadRect(this NetworkReader reader)\n")),(0,l.kt)("h5",{id:"parameters-18"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkReader"),(0,l.kt)("td",{parentName:"tr",align:null},"reader"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h5",{id:"returns-7"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rect"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"readplanenetworkreader"},"ReadPlane(NetworkReader)"),(0,l.kt)("h5",{id:"declaration-19"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static Plane ReadPlane(this NetworkReader reader)\n")),(0,l.kt)("h5",{id:"parameters-19"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkReader"),(0,l.kt)("td",{parentName:"tr",align:null},"reader"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h5",{id:"returns-8"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Plane"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"readraynetworkreader"},"ReadRay(NetworkReader)"),(0,l.kt)("h5",{id:"declaration-20"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static Ray ReadRay(this NetworkReader reader)\n")),(0,l.kt)("h5",{id:"parameters-20"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkReader"),(0,l.kt)("td",{parentName:"tr",align:null},"reader"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h5",{id:"returns-9"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ray"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"readmatrix4x4networkreader"},"ReadMatrix4x4(NetworkReader)"),(0,l.kt)("h5",{id:"declaration-21"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static Matrix4x4 ReadMatrix4x4(this NetworkReader reader)\n")),(0,l.kt)("h5",{id:"parameters-21"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkReader"),(0,l.kt)("td",{parentName:"tr",align:null},"reader"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h5",{id:"returns-10"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Matrix4x4"),(0,l.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);