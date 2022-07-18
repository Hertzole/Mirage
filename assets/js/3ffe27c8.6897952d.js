"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[6680],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>y});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(t),y=a,f=u["".concat(l,".").concat(y)]||u[y]||p[y]||o;return t?n.createElement(f,i(i({ref:r},d),{},{components:t})):n.createElement(f,i({ref:r},d))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},81084:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const o={id:"INetworkPlayer",title:"INetworkPlayer"},i="Interface INetworkPlayer",c={unversionedId:"reference/Mirage/INetworkPlayer",id:"reference/Mirage/INetworkPlayer",title:"INetworkPlayer",description:"An object owned by a player that can: send/receive messages, have network visibility, be an object owner, authenticated permissions, and load scenes.",source:"@site/docs/reference/Mirage/INetworkPlayer.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/INetworkPlayer",permalink:"/Mirage/docs/reference/Mirage/INetworkPlayer",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage/INetworkPlayer.md",tags:[],version:"current",frontMatter:{id:"INetworkPlayer",title:"INetworkPlayer"},sidebar:"api",previous:{title:"INetworkClient",permalink:"/Mirage/docs/reference/Mirage/INetworkClient"},next:{title:"INetworkSceneManager",permalink:"/Mirage/docs/reference/Mirage/INetworkSceneManager"}},l={},s=[{value:"Syntax",id:"syntax",level:5},{value:"Properties",id:"properties",level:3},{value:"Address",id:"address",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Connection",id:"connection",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Methods",id:"methods",level:3},{value:"Disconnect()",id:"disconnect",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"MarkAsDisconnected()",id:"markasdisconnected",level:4},{value:"Declaration",id:"declaration-3",level:5}],d={toc:s};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-inetworkplayer"},"Interface INetworkPlayer"),(0,a.kt)("p",null,"An object owned by a player that can: send/receive messages, have network visibility, be an object owner, authenticated permissions, and load scenes.\nMay be from the server to client or from client to server"),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public interface INetworkPlayer : IMessageSender, IVisibilityTracker, IObjectOwner, IAuthenticatedObject, ISceneLoader\n")),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("h4",{id:"address"},"Address"),(0,a.kt)("h5",{id:"declaration"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"IEndPoint Address { get; }\n")),(0,a.kt)("h4",{id:"connection"},"Connection"),(0,a.kt)("h5",{id:"declaration-1"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"IConnection Connection { get; }\n")),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("h4",{id:"disconnect"},"Disconnect()"),(0,a.kt)("h5",{id:"declaration-2"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"void Disconnect()\n")),(0,a.kt)("h4",{id:"markasdisconnected"},"MarkAsDisconnected()"),(0,a.kt)("h5",{id:"declaration-3"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"void MarkAsDisconnected()\n")))}p.isMDXComponent=!0}}]);