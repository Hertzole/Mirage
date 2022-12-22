"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[9019],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(s,".").concat(d)]||p[d]||k[d]||l;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},97182:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={id:"NetworkTransformBase",title:"NetworkTransformBase"},i="Class NetworkTransformBase",o={unversionedId:"reference/Mirage/NetworkTransformBase",id:"reference/Mirage/NetworkTransformBase",title:"NetworkTransformBase",description:"Inheritance",source:"@site/docs/reference/Mirage/NetworkTransformBase.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/NetworkTransformBase",permalink:"/Mirage/docs/reference/Mirage/NetworkTransformBase",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage/NetworkTransformBase.md",tags:[],version:"current",frontMatter:{id:"NetworkTransformBase",title:"NetworkTransformBase"},sidebar:"api",previous:{title:"NetworkTransformBase.DataPoint",permalink:"/Mirage/docs/reference/Mirage/NetworkTransformBase.DataPoint"},next:{title:"NetworkTransformChild",permalink:"/Mirage/docs/reference/Mirage/NetworkTransformChild"}},s={},u=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Fields",id:"fields",level:3},{value:"ClientAuthority",id:"clientauthority",level:4},{value:"Declaration",id:"declaration",level:5},{value:"LocalPositionSensitivity",id:"localpositionsensitivity",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"LocalRotationSensitivity",id:"localrotationsensitivity",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"LocalScaleSensitivity",id:"localscalesensitivity",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"Properties",id:"properties",level:3},{value:"TargetComponent",id:"targetcomponent",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"Methods",id:"methods",level:3},{value:"SerializeIntoWriter(NetworkWriter, Vector3, Quaternion, Vector3)",id:"serializeintowriternetworkwriter-vector3-quaternion-vector3",level:4},{value:"Declaration",id:"declaration-5",level:5},{value:"Parameters",id:"parameters",level:5},{value:"OnSerialize(NetworkWriter, Boolean)",id:"onserializenetworkwriter-boolean",level:4},{value:"Declaration",id:"declaration-6",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns",level:5},{value:"OnDeserialize(NetworkReader, Boolean)",id:"ondeserializenetworkreader-boolean",level:4},{value:"Declaration",id:"declaration-7",level:5},{value:"Parameters",id:"parameters-2",level:5}],c={toc:u};function k(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"class-networktransformbase"},"Class NetworkTransformBase"),(0,n.kt)("div",{class:"inheritance"},(0,n.kt)("h5",{id:"inheritance"},"Inheritance"),(0,n.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object"),(0,n.kt)("div",{class:"level",style:{"--data-index":1}},"Mirage.NetworkBehaviour")),(0,n.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Show"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.syncMode"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.syncInterval"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsServer"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsClient"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsLocalClient"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsLocalPlayer"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsServerOnly"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsClientOnly"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.HasAuthority"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.NetId"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.Server"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.ServerObjectManager"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.Client"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.ClientObjectManager"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.Owner"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.World"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.NetworkTime"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.BehaviourId"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.SyncVarDirtyBits"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.syncObjects"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.Identity"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.COMPONENT_INDEX_NOT_FOUND"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.ComponentIndex"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.InitSyncObject(Mirage.Collections.ISyncObject)"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.SyncVarEqual","<","T",">","(T, T)"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.ClearAllDirtyBits()"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsDirty()"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.StillDirty()"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.SerializeObjectsAll(Mirage.Serialization.NetworkWriter)"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.SerializeObjectsDelta(Mirage.Serialization.NetworkWriter)"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.GetRpcCount()"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.RemoteCallCollection")),(0,n.kt)("h5",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public abstract class NetworkTransformBase : NetworkBehaviour\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"clientauthority"},"ClientAuthority"),(0,n.kt)("h5",{id:"declaration"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public bool ClientAuthority\n")),(0,n.kt)("h4",{id:"localpositionsensitivity"},"LocalPositionSensitivity"),(0,n.kt)("h5",{id:"declaration-1"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public float LocalPositionSensitivity\n")),(0,n.kt)("h4",{id:"localrotationsensitivity"},"LocalRotationSensitivity"),(0,n.kt)("h5",{id:"declaration-2"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public float LocalRotationSensitivity\n")),(0,n.kt)("h4",{id:"localscalesensitivity"},"LocalScaleSensitivity"),(0,n.kt)("h5",{id:"declaration-3"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public float LocalScaleSensitivity\n")),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("h4",{id:"targetcomponent"},"TargetComponent"),(0,n.kt)("h5",{id:"declaration-4"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"protected abstract Transform TargetComponent { get; }\n")),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("h4",{id:"serializeintowriternetworkwriter-vector3-quaternion-vector3"},"SerializeIntoWriter(NetworkWriter, Vector3, Quaternion, Vector3)"),(0,n.kt)("h5",{id:"declaration-5"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public static void SerializeIntoWriter(NetworkWriter writer, Vector3 position, Quaternion rotation, Vector3 scale)\n")),(0,n.kt)("h5",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,n.kt)("td",{parentName:"tr",align:null},"writer"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Vector3"),(0,n.kt)("td",{parentName:"tr",align:null},"position"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Quaternion"),(0,n.kt)("td",{parentName:"tr",align:null},"rotation"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Vector3"),(0,n.kt)("td",{parentName:"tr",align:null},"scale"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"onserializenetworkwriter-boolean"},"OnSerialize(NetworkWriter, Boolean)"),(0,n.kt)("h5",{id:"declaration-6"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public override bool OnSerialize(NetworkWriter writer, bool initialState)\n")),(0,n.kt)("h5",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,n.kt)("td",{parentName:"tr",align:null},"writer"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"initialState"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h5",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"ondeserializenetworkreader-boolean"},"OnDeserialize(NetworkReader, Boolean)"),(0,n.kt)("h5",{id:"declaration-7"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public override void OnDeserialize(NetworkReader reader, bool initialState)\n")),(0,n.kt)("h5",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkReader"),(0,n.kt)("td",{parentName:"tr",align:null},"reader"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"initialState"),(0,n.kt)("td",{parentName:"tr",align:null})))))}k.isMDXComponent=!0}}]);