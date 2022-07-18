"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[3515],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>s});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),s=n,k=d["".concat(p,".").concat(s)]||d[s]||m[s]||l;return a?r.createElement(k,o(o({ref:t},u),{},{components:a})):r.createElement(k,o({ref:t},u))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},68587:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={id:"Pool-1",title:"Pool<T>"},o="Class Pool&lt;T&gt;",i={unversionedId:"reference/Mirage.SocketLayer/Pool-1",id:"reference/Mirage.SocketLayer/Pool-1",title:"Pool<T>",description:"Holds a collection of  so they can be re-used without allocations",source:"@site/docs/reference/Mirage.SocketLayer/Pool-1.md",sourceDirName:"reference/Mirage.SocketLayer",slug:"/reference/Mirage.SocketLayer/Pool-1",permalink:"/Mirage/docs/reference/Mirage.SocketLayer/Pool-1",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage.SocketLayer/Pool-1.md",tags:[],version:"current",frontMatter:{id:"Pool-1",title:"Pool<T>"},sidebar:"api",previous:{title:"Pool<T>.CreateNewItem",permalink:"/Mirage/docs/reference/Mirage.SocketLayer/Pool-1.CreateNewItem"},next:{title:"RejectReason",permalink:"/Mirage/docs/reference/Mirage.SocketLayer/RejectReason"}},p={},c=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Type Parameters",id:"type-parameters",level:5},{value:"Constructors",id:"constructors",level:3},{value:"Pool(Pool&lt;T&gt;.CreateNewItem, Int32, Int32, Int32, ILogger)",id:"poolpooltcreatenewitem-int32-int32-int32-ilogger",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Methods",id:"methods",level:3},{value:"Configure(Int32, Int32)",id:"configureint32-int32",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"Take()",id:"take",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"Returns",id:"returns",level:5},{value:"Put(T)",id:"putt",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"Parameters",id:"parameters-2",level:5}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"class-poolt"},"Class Pool","<","T",">"),(0,n.kt)("p",null,"Holds a collection of  so they can be re-used without allocations"),(0,n.kt)("div",{class:"inheritance"},(0,n.kt)("h5",{id:"inheritance"},"Inheritance"),(0,n.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,n.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Show")),(0,n.kt)("h5",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public class Pool<T>\n    where T : class\n")),(0,n.kt)("h5",{id:"type-parameters"},"Type Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"T"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"constructors"},"Constructors"),(0,n.kt)("h4",{id:"poolpooltcreatenewitem-int32-int32-int32-ilogger"},"Pool(Pool","<","T",">",".CreateNewItem, Int32, Int32, Int32, ILogger)"),(0,n.kt)("h5",{id:"declaration"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public Pool(Pool<T>.CreateNewItem createNew, int bufferSize, int startPoolSize, int maxPoolSize, ILogger logger = null)\n")),(0,n.kt)("h5",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.SocketLayer.Pool.CreateNewItem","<",">"),(0,n.kt)("td",{parentName:"tr",align:null},"createNew"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,n.kt)("td",{parentName:"tr",align:null},"bufferSize"),(0,n.kt)("td",{parentName:"tr",align:null},"size of each buffer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,n.kt)("td",{parentName:"tr",align:null},"startPoolSize"),(0,n.kt)("td",{parentName:"tr",align:null},"how many buffers to create at start")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,n.kt)("td",{parentName:"tr",align:null},"maxPoolSize"),(0,n.kt)("td",{parentName:"tr",align:null},"max number of buffers in pool")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ILogger"),(0,n.kt)("td",{parentName:"tr",align:null},"logger"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("h4",{id:"configureint32-int32"},"Configure(Int32, Int32)"),(0,n.kt)("p",null,"sets max pool size and then creates writers up to new start size"),(0,n.kt)("h5",{id:"declaration-1"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public void Configure(int startPoolSize, int maxPoolSize)\n")),(0,n.kt)("h5",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,n.kt)("td",{parentName:"tr",align:null},"startPoolSize"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,n.kt)("td",{parentName:"tr",align:null},"maxPoolSize"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"take"},"Take()"),(0,n.kt)("h5",{id:"declaration-2"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public T Take()\n")),(0,n.kt)("h5",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"T"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"putt"},"Put(T)"),(0,n.kt)("h5",{id:"declaration-3"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public void Put(T buffer)\n")),(0,n.kt)("h5",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"T"),(0,n.kt)("td",{parentName:"tr",align:null},"buffer"),(0,n.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);