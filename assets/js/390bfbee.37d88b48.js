"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[9145],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>s});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.createContext({}),d=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return l.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),k=d(a),s=r,c=k["".concat(p,".").concat(s)]||k[s]||o[s]||n;return a?l.createElement(c,i(i({ref:t},u),{},{components:a})):l.createElement(c,i({ref:t},u))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=k;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var d=2;d<n;d++)i[d]=a[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},61414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>o,frontMatter:()=>n,metadata:()=>m,toc:()=>d});var l=a(87462),r=(a(67294),a(3905));const n={id:"SyncSet-1",title:"SyncSet<T>"},i="Class SyncSet&lt;T&gt;",m={unversionedId:"reference/Mirage.Collections/SyncSet-1",id:"reference/Mirage.Collections/SyncSet-1",title:"SyncSet<T>",description:"Inheritance",source:"@site/docs/reference/Mirage.Collections/SyncSet-1.md",sourceDirName:"reference/Mirage.Collections",slug:"/reference/Mirage.Collections/SyncSet-1",permalink:"/Mirage/docs/reference/Mirage.Collections/SyncSet-1",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage.Collections/SyncSet-1.md",tags:[],version:"current",frontMatter:{id:"SyncSet-1",title:"SyncSet<T>"},sidebar:"api",previous:{title:"SyncList<T>",permalink:"/Mirage/docs/reference/Mirage.Collections/SyncList-1"},next:{title:"SyncSortedSet<T>",permalink:"/Mirage/docs/reference/Mirage.Collections/SyncSortedSet-1"}},p={},d=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Type Parameters",id:"type-parameters",level:5},{value:"Constructors",id:"constructors",level:3},{value:"SyncSet(ISet&lt;T&gt;)",id:"syncsetisett",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Fields",id:"fields",level:3},{value:"objects",id:"objects",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Properties",id:"properties",level:3},{value:"Count",id:"count",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"IsReadOnly",id:"isreadonly",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"IsDirty",id:"isdirty",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"Methods",id:"methods",level:3},{value:"Reset()",id:"reset",level:4},{value:"Declaration",id:"declaration-5",level:5},{value:"Flush()",id:"flush",level:4},{value:"Declaration",id:"declaration-6",level:5},{value:"OnSerializeAll(NetworkWriter)",id:"onserializeallnetworkwriter",level:4},{value:"Declaration",id:"declaration-7",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"OnSerializeDelta(NetworkWriter)",id:"onserializedeltanetworkwriter",level:4},{value:"Declaration",id:"declaration-8",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:"OnDeserializeAll(NetworkReader)",id:"ondeserializeallnetworkreader",level:4},{value:"Declaration",id:"declaration-9",level:5},{value:"Parameters",id:"parameters-3",level:5},{value:"OnDeserializeDelta(NetworkReader)",id:"ondeserializedeltanetworkreader",level:4},{value:"Declaration",id:"declaration-10",level:5},{value:"Parameters",id:"parameters-4",level:5},{value:"Add(T)",id:"addt",level:4},{value:"Declaration",id:"declaration-11",level:5},{value:"Parameters",id:"parameters-5",level:5},{value:"Returns",id:"returns",level:5},{value:"ICollection&lt;T&gt;.Add(T)",id:"icollectiontaddt",level:4},{value:"Declaration",id:"declaration-12",level:5},{value:"Parameters",id:"parameters-6",level:5},{value:"Clear()",id:"clear",level:4},{value:"Declaration",id:"declaration-13",level:5},{value:"Contains(T)",id:"containst",level:4},{value:"Declaration",id:"declaration-14",level:5},{value:"Parameters",id:"parameters-7",level:5},{value:"Returns",id:"returns-1",level:5},{value:"CopyTo(T[], Int32)",id:"copytot-int32",level:4},{value:"Declaration",id:"declaration-15",level:5},{value:"Parameters",id:"parameters-8",level:5},{value:"Remove(T)",id:"removet",level:4},{value:"Declaration",id:"declaration-16",level:5},{value:"Parameters",id:"parameters-9",level:5},{value:"Returns",id:"returns-2",level:5},{value:"GetEnumerator()",id:"getenumerator",level:4},{value:"Declaration",id:"declaration-17",level:5},{value:"Returns",id:"returns-3",level:5},{value:"IEnumerable.GetEnumerator()",id:"ienumerablegetenumerator",level:4},{value:"Declaration",id:"declaration-18",level:5},{value:"Returns",id:"returns-4",level:5},{value:"ExceptWith(IEnumerable&lt;T&gt;)",id:"exceptwithienumerablet",level:4},{value:"Declaration",id:"declaration-19",level:5},{value:"Parameters",id:"parameters-10",level:5},{value:"IntersectWith(IEnumerable&lt;T&gt;)",id:"intersectwithienumerablet",level:4},{value:"Declaration",id:"declaration-20",level:5},{value:"Parameters",id:"parameters-11",level:5},{value:"IsProperSubsetOf(IEnumerable&lt;T&gt;)",id:"ispropersubsetofienumerablet",level:4},{value:"Declaration",id:"declaration-21",level:5},{value:"Parameters",id:"parameters-12",level:5},{value:"Returns",id:"returns-5",level:5},{value:"IsProperSupersetOf(IEnumerable&lt;T&gt;)",id:"ispropersupersetofienumerablet",level:4},{value:"Declaration",id:"declaration-22",level:5},{value:"Parameters",id:"parameters-13",level:5},{value:"Returns",id:"returns-6",level:5},{value:"IsSubsetOf(IEnumerable&lt;T&gt;)",id:"issubsetofienumerablet",level:4},{value:"Declaration",id:"declaration-23",level:5},{value:"Parameters",id:"parameters-14",level:5},{value:"Returns",id:"returns-7",level:5},{value:"IsSupersetOf(IEnumerable&lt;T&gt;)",id:"issupersetofienumerablet",level:4},{value:"Declaration",id:"declaration-24",level:5},{value:"Parameters",id:"parameters-15",level:5},{value:"Returns",id:"returns-8",level:5},{value:"Overlaps(IEnumerable&lt;T&gt;)",id:"overlapsienumerablet",level:4},{value:"Declaration",id:"declaration-25",level:5},{value:"Parameters",id:"parameters-16",level:5},{value:"Returns",id:"returns-9",level:5},{value:"SetEquals(IEnumerable&lt;T&gt;)",id:"setequalsienumerablet",level:4},{value:"Declaration",id:"declaration-26",level:5},{value:"Parameters",id:"parameters-17",level:5},{value:"Returns",id:"returns-10",level:5},{value:"SymmetricExceptWith(IEnumerable&lt;T&gt;)",id:"symmetricexceptwithienumerablet",level:4},{value:"Declaration",id:"declaration-27",level:5},{value:"Parameters",id:"parameters-18",level:5},{value:"UnionWith(IEnumerable&lt;T&gt;)",id:"unionwithienumerablet",level:4},{value:"Declaration",id:"declaration-28",level:5},{value:"Parameters",id:"parameters-19",level:5}],u={toc:d};function o(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"class-syncsett"},"Class SyncSet","<","T",">"),(0,r.kt)("div",{class:"inheritance"},(0,r.kt)("h5",{id:"inheritance"},"Inheritance"),(0,r.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,r.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show")),(0,r.kt)("h5",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public class SyncSet<T> : ISet<T>, ICollection<T>, IEnumerable<T>, IEnumerable, ISyncObject\n")),(0,r.kt)("h5",{id:"type-parameters"},"Type Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"T"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("h4",{id:"syncsetisett"},"SyncSet(ISet","<","T",">",")"),(0,r.kt)("h5",{id:"declaration"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public SyncSet(ISet<T> objects)\n")),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.ISet","<","T",">"),(0,r.kt)("td",{parentName:"tr",align:null},"objects"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"objects"},"objects"),(0,r.kt)("h5",{id:"declaration-1"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"protected readonly ISet<T> objects\n")),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"count"},"Count"),(0,r.kt)("h5",{id:"declaration-2"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public int Count { get; }\n")),(0,r.kt)("h4",{id:"isreadonly"},"IsReadOnly"),(0,r.kt)("h5",{id:"declaration-3"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public bool IsReadOnly { get; }\n")),(0,r.kt)("h4",{id:"isdirty"},"IsDirty"),(0,r.kt)("h5",{id:"declaration-4"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public bool IsDirty { get; }\n")),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("h4",{id:"reset"},"Reset()"),(0,r.kt)("h5",{id:"declaration-5"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void Reset()\n")),(0,r.kt)("h4",{id:"flush"},"Flush()"),(0,r.kt)("h5",{id:"declaration-6"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void Flush()\n")),(0,r.kt)("h4",{id:"onserializeallnetworkwriter"},"OnSerializeAll(NetworkWriter)"),(0,r.kt)("h5",{id:"declaration-7"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void OnSerializeAll(NetworkWriter writer)\n")),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,r.kt)("td",{parentName:"tr",align:null},"writer"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"onserializedeltanetworkwriter"},"OnSerializeDelta(NetworkWriter)"),(0,r.kt)("h5",{id:"declaration-8"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void OnSerializeDelta(NetworkWriter writer)\n")),(0,r.kt)("h5",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,r.kt)("td",{parentName:"tr",align:null},"writer"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"ondeserializeallnetworkreader"},"OnDeserializeAll(NetworkReader)"),(0,r.kt)("h5",{id:"declaration-9"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void OnDeserializeAll(NetworkReader reader)\n")),(0,r.kt)("h5",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkReader"),(0,r.kt)("td",{parentName:"tr",align:null},"reader"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"ondeserializedeltanetworkreader"},"OnDeserializeDelta(NetworkReader)"),(0,r.kt)("h5",{id:"declaration-10"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void OnDeserializeDelta(NetworkReader reader)\n")),(0,r.kt)("h5",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkReader"),(0,r.kt)("td",{parentName:"tr",align:null},"reader"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"addt"},"Add(T)"),(0,r.kt)("h5",{id:"declaration-11"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public bool Add(T item)\n")),(0,r.kt)("h5",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"T"),(0,r.kt)("td",{parentName:"tr",align:null},"item"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"icollectiontaddt"},"ICollection","<","T",">",".Add(T)"),(0,r.kt)("h5",{id:"declaration-12"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"void ICollection<T>.Add(T item)\n")),(0,r.kt)("h5",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"T"),(0,r.kt)("td",{parentName:"tr",align:null},"item"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"clear"},"Clear()"),(0,r.kt)("h5",{id:"declaration-13"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void Clear()\n")),(0,r.kt)("h4",{id:"containst"},"Contains(T)"),(0,r.kt)("h5",{id:"declaration-14"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public bool Contains(T item)\n")),(0,r.kt)("h5",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"T"),(0,r.kt)("td",{parentName:"tr",align:null},"item"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"copytot-int32"},"CopyTo(T[], Int32)"),(0,r.kt)("h5",{id:"declaration-15"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void CopyTo(T[] array, int arrayIndex)\n")),(0,r.kt)("h5",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{T}[]"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,r.kt)("td",{parentName:"tr",align:null},"arrayIndex"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"removet"},"Remove(T)"),(0,r.kt)("h5",{id:"declaration-16"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public bool Remove(T item)\n")),(0,r.kt)("h5",{id:"parameters-9"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"T"),(0,r.kt)("td",{parentName:"tr",align:null},"item"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h5",{id:"returns-2"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"getenumerator"},"GetEnumerator()"),(0,r.kt)("h5",{id:"declaration-17"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public IEnumerator<T> GetEnumerator()\n")),(0,r.kt)("h5",{id:"returns-3"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.IEnumerator","<","T",">"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"ienumerablegetenumerator"},"IEnumerable.GetEnumerator()"),(0,r.kt)("h5",{id:"declaration-18"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"IEnumerator IEnumerable.GetEnumerator()\n")),(0,r.kt)("h5",{id:"returns-4"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.IEnumerator"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"exceptwithienumerablet"},"ExceptWith(IEnumerable","<","T",">",")"),(0,r.kt)("h5",{id:"declaration-19"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void ExceptWith(IEnumerable<T> other)\n")),(0,r.kt)("h5",{id:"parameters-10"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.IEnumerable","<","T",">"),(0,r.kt)("td",{parentName:"tr",align:null},"other"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"intersectwithienumerablet"},"IntersectWith(IEnumerable","<","T",">",")"),(0,r.kt)("h5",{id:"declaration-20"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void IntersectWith(IEnumerable<T> other)\n")),(0,r.kt)("h5",{id:"parameters-11"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.IEnumerable","<","T",">"),(0,r.kt)("td",{parentName:"tr",align:null},"other"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"ispropersubsetofienumerablet"},"IsProperSubsetOf(IEnumerable","<","T",">",")"),(0,r.kt)("h5",{id:"declaration-21"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public bool IsProperSubsetOf(IEnumerable<T> other)\n")),(0,r.kt)("h5",{id:"parameters-12"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.IEnumerable","<","T",">"),(0,r.kt)("td",{parentName:"tr",align:null},"other"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h5",{id:"returns-5"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"ispropersupersetofienumerablet"},"IsProperSupersetOf(IEnumerable","<","T",">",")"),(0,r.kt)("h5",{id:"declaration-22"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public bool IsProperSupersetOf(IEnumerable<T> other)\n")),(0,r.kt)("h5",{id:"parameters-13"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.IEnumerable","<","T",">"),(0,r.kt)("td",{parentName:"tr",align:null},"other"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h5",{id:"returns-6"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"issubsetofienumerablet"},"IsSubsetOf(IEnumerable","<","T",">",")"),(0,r.kt)("h5",{id:"declaration-23"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public bool IsSubsetOf(IEnumerable<T> other)\n")),(0,r.kt)("h5",{id:"parameters-14"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.IEnumerable","<","T",">"),(0,r.kt)("td",{parentName:"tr",align:null},"other"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h5",{id:"returns-7"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"issupersetofienumerablet"},"IsSupersetOf(IEnumerable","<","T",">",")"),(0,r.kt)("h5",{id:"declaration-24"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public bool IsSupersetOf(IEnumerable<T> other)\n")),(0,r.kt)("h5",{id:"parameters-15"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.IEnumerable","<","T",">"),(0,r.kt)("td",{parentName:"tr",align:null},"other"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h5",{id:"returns-8"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"overlapsienumerablet"},"Overlaps(IEnumerable","<","T",">",")"),(0,r.kt)("h5",{id:"declaration-25"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public bool Overlaps(IEnumerable<T> other)\n")),(0,r.kt)("h5",{id:"parameters-16"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.IEnumerable","<","T",">"),(0,r.kt)("td",{parentName:"tr",align:null},"other"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h5",{id:"returns-9"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"setequalsienumerablet"},"SetEquals(IEnumerable","<","T",">",")"),(0,r.kt)("h5",{id:"declaration-26"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public bool SetEquals(IEnumerable<T> other)\n")),(0,r.kt)("h5",{id:"parameters-17"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.IEnumerable","<","T",">"),(0,r.kt)("td",{parentName:"tr",align:null},"other"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h5",{id:"returns-10"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"symmetricexceptwithienumerablet"},"SymmetricExceptWith(IEnumerable","<","T",">",")"),(0,r.kt)("h5",{id:"declaration-27"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void SymmetricExceptWith(IEnumerable<T> other)\n")),(0,r.kt)("h5",{id:"parameters-18"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.IEnumerable","<","T",">"),(0,r.kt)("td",{parentName:"tr",align:null},"other"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"unionwithienumerablet"},"UnionWith(IEnumerable","<","T",">",")"),(0,r.kt)("h5",{id:"declaration-28"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void UnionWith(IEnumerable<T> other)\n")),(0,r.kt)("h5",{id:"parameters-19"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.IEnumerable","<","T",">"),(0,r.kt)("td",{parentName:"tr",align:null},"other"),(0,r.kt)("td",{parentName:"tr",align:null})))))}o.isMDXComponent=!0}}]);