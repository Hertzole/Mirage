"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[5835],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},k={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=n,g=c["".concat(s,".").concat(m)]||c[m]||k[m]||i;return t?a.createElement(g,o(o({ref:r},u),{},{components:t})):a.createElement(g,o({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7466:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(87462),n=(t(67294),t(3905));const i={id:"NetworkTransform",title:"NetworkTransform"},o="Class NetworkTransform",l={unversionedId:"reference/Mirage.Experimental/NetworkTransform",id:"reference/Mirage.Experimental/NetworkTransform",title:"NetworkTransform",description:"Inheritance",source:"@site/docs/reference/Mirage.Experimental/NetworkTransform.md",sourceDirName:"reference/Mirage.Experimental",slug:"/reference/Mirage.Experimental/NetworkTransform",permalink:"/Hertzole/Mirage/docs/reference/Mirage.Experimental/NetworkTransform",draft:!1,editUrl:"https://github.com/Hertzole/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage.Experimental/NetworkTransform.md",tags:[],version:"current",frontMatter:{id:"NetworkTransform",title:"NetworkTransform"},sidebar:"api",previous:{title:"NetworkRigidbody",permalink:"/Hertzole/Mirage/docs/reference/Mirage.Experimental/NetworkRigidbody"},next:{title:"NetworkTransformBase.DataPoint",permalink:"/Hertzole/Mirage/docs/reference/Mirage.Experimental/NetworkTransformBase.DataPoint"}},s={},p=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Properties",id:"properties",level:3},{value:"TargetTransform",id:"targettransform",level:4},{value:"Declaration",id:"declaration",level:5}],u={toc:p};function k(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"class-networktransform"},"Class NetworkTransform"),(0,n.kt)("div",{class:"inheritance"},(0,n.kt)("h5",{id:"inheritance"},"Inheritance"),(0,n.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object"),(0,n.kt)("div",{class:"level",style:{"--data-index":1}},"Mirage.NetworkBehaviour"),(0,n.kt)("div",{class:"level",style:{"--data-index":2}},"Mirage.Experimental.NetworkTransformBase")),(0,n.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Show"),(0,n.kt)("p",null,"Mirage.Experimental.NetworkTransformBase.clientAuthority"),(0,n.kt)("p",null,"Mirage.Experimental.NetworkTransformBase.excludeOwnerUpdate"),(0,n.kt)("p",null,"Mirage.Experimental.NetworkTransformBase.syncPosition"),(0,n.kt)("p",null,"Mirage.Experimental.NetworkTransformBase.syncRotation"),(0,n.kt)("p",null,"Mirage.Experimental.NetworkTransformBase.syncScale"),(0,n.kt)("p",null,"Mirage.Experimental.NetworkTransformBase.interpolatePosition"),(0,n.kt)("p",null,"Mirage.Experimental.NetworkTransformBase.interpolateRotation"),(0,n.kt)("p",null,"Mirage.Experimental.NetworkTransformBase.interpolateScale"),(0,n.kt)("p",null,"Mirage.Experimental.NetworkTransformBase.localPositionSensitivity"),(0,n.kt)("p",null,"Mirage.Experimental.NetworkTransformBase.localRotationSensitivity"),(0,n.kt)("p",null,"Mirage.Experimental.NetworkTransformBase.localScaleSensitivity"),(0,n.kt)("p",null,"Mirage.Experimental.NetworkTransformBase.lastPosition"),(0,n.kt)("p",null,"Mirage.Experimental.NetworkTransformBase.lastRotation"),(0,n.kt)("p",null,"Mirage.Experimental.NetworkTransformBase.lastScale"),(0,n.kt)("p",null,"Mirage.Experimental.NetworkTransformBase.start"),(0,n.kt)("p",null,"Mirage.Experimental.NetworkTransformBase.goal"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.syncMode"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.syncInterval"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsServer"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsClient"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsLocalClient"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsLocalPlayer"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsServerOnly"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsClientOnly"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.HasAuthority"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.NetId"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.Server"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.ServerObjectManager"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.Client"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.ClientObjectManager"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.Owner"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.World"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.NetworkTime"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.SyncVarDirtyBits"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.syncObjects"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.Identity"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.COMPONENT_INDEX_NOT_FOUND"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.ComponentIndex"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.InitSyncObject(Mirage.Collections.ISyncObject)"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.SyncVarEqual","<","T",">","(T, T)"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.ClearAllDirtyBits()"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsDirty()"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.StillDirty()"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.SerializeObjectsAll(Mirage.Serialization.NetworkWriter)"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.SerializeObjectsDelta(Mirage.Serialization.NetworkWriter)"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.GetRpcCount()"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.remoteCallCollection")),(0,n.kt)("h5",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public class NetworkTransform : NetworkTransformBase\n")),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("h4",{id:"targettransform"},"TargetTransform"),(0,n.kt)("h5",{id:"declaration"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"protected override Transform TargetTransform { get; }\n")))}k.isMDXComponent=!0}}]);