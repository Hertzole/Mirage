"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[56],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>s});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(r),s=a,k=m["".concat(d,".").concat(s)]||m[s]||c[s]||l;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9584:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={id:"ServerRpcSender",title:"ServerRpcSender"},i="Class ServerRpcSender",o={unversionedId:"reference/Mirage.RemoteCalls/ServerRpcSender",id:"reference/Mirage.RemoteCalls/ServerRpcSender",title:"ServerRpcSender",description:"Methods used by weaver to send RPCs",source:"@site/docs/reference/Mirage.RemoteCalls/ServerRpcSender.md",sourceDirName:"reference/Mirage.RemoteCalls",slug:"/reference/Mirage.RemoteCalls/ServerRpcSender",permalink:"/Mirage/docs/reference/Mirage.RemoteCalls/ServerRpcSender",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage.RemoteCalls/ServerRpcSender.md",tags:[],version:"current",frontMatter:{id:"ServerRpcSender",title:"ServerRpcSender"},sidebar:"api",previous:{title:"RpcInvokeType",permalink:"/Mirage/docs/reference/Mirage.RemoteCalls/RpcInvokeType"},next:{title:"BitCountAttribute",permalink:"/Mirage/docs/reference/Mirage.Serialization/BitCountAttribute"}},d={},p=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Methods",id:"methods",level:3},{value:"Send(NetworkBehaviour, Int32, NetworkWriter, Int32, Boolean)",id:"sendnetworkbehaviour-int32-networkwriter-int32-boolean",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Parameters",id:"parameters",level:5},{value:"SendWithReturn&lt;T&gt;(NetworkBehaviour, Int32, NetworkWriter, Int32, Boolean)",id:"sendwithreturntnetworkbehaviour-int32-networkwriter-int32-boolean",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns",level:5}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"class-serverrpcsender"},"Class ServerRpcSender"),(0,a.kt)("p",null,"Methods used by weaver to send RPCs"),(0,a.kt)("div",{class:"inheritance"},(0,a.kt)("h5",{id:"inheritance"},"Inheritance"),(0,a.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,a.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show")),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public static class ServerRpcSender\n")),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("h4",{id:"sendnetworkbehaviour-int32-networkwriter-int32-boolean"},"Send(NetworkBehaviour, Int32, NetworkWriter, Int32, Boolean)"),(0,a.kt)("h5",{id:"declaration"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public static void Send(NetworkBehaviour behaviour, int index, NetworkWriter writer, int channelId, bool requireAuthority)\n")),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkBehaviour"),(0,a.kt)("td",{parentName:"tr",align:null},"behaviour"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,a.kt)("td",{parentName:"tr",align:null},"index"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,a.kt)("td",{parentName:"tr",align:null},"writer"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,a.kt)("td",{parentName:"tr",align:null},"channelId"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"requireAuthority"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h4",{id:"sendwithreturntnetworkbehaviour-int32-networkwriter-int32-boolean"},"SendWithReturn","<","T",">","(NetworkBehaviour, Int32, NetworkWriter, Int32, Boolean)"),(0,a.kt)("h5",{id:"declaration-1"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public static UniTask<T> SendWithReturn<T>(NetworkBehaviour behaviour, int index, NetworkWriter writer, int channelId, bool requireAuthority)\n")),(0,a.kt)("h5",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkBehaviour"),(0,a.kt)("td",{parentName:"tr",align:null},"behaviour"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,a.kt)("td",{parentName:"tr",align:null},"index"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,a.kt)("td",{parentName:"tr",align:null},"writer"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,a.kt)("td",{parentName:"tr",align:null},"channelId"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"requireAuthority"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cysharp.Threading.Tasks.UniTask","<","T",">"),(0,a.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);