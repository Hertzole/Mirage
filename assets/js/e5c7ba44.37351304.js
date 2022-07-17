"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[3077],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,y=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(y,c(c({ref:t},d),{},{components:n})):r.createElement(y,c({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={id:"DisconnectReason",title:"DisconnectReason"},c="Enum DisconnectReason",l={unversionedId:"reference/Mirage.SocketLayer/DisconnectReason",id:"reference/Mirage.SocketLayer/DisconnectReason",title:"DisconnectReason",description:"Reason why a connection was disconnected",source:"@site/docs/reference/Mirage.SocketLayer/DisconnectReason.md",sourceDirName:"reference/Mirage.SocketLayer",slug:"/reference/Mirage.SocketLayer/DisconnectReason",permalink:"/Hertzole/Mirage/docs/reference/Mirage.SocketLayer/DisconnectReason",draft:!1,editUrl:"https://github.com/Hertzole/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage.SocketLayer/DisconnectReason.md",tags:[],version:"current",frontMatter:{id:"DisconnectReason",title:"DisconnectReason"},sidebar:"api",previous:{title:"ConnectionState",permalink:"/Hertzole/Mirage/docs/reference/Mirage.SocketLayer/ConnectionState"},next:{title:"IConnection",permalink:"/Hertzole/Mirage/docs/reference/Mirage.SocketLayer/IConnection"}},i={},s=[{value:"Syntax",id:"syntax",level:5},{value:"Fields",id:"fields",level:3},{value:"None",id:"none",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Timeout",id:"timeout",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"RequestedByRemotePeer",id:"requestedbyremotepeer",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"RequestedByLocalPeer",id:"requestedbylocalpeer",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"InvalidPacket",id:"invalidpacket",level:4},{value:"Declaration",id:"declaration-4",level:5}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"enum-disconnectreason"},"Enum DisconnectReason"),(0,a.kt)("p",null,"Reason why a connection was disconnected"),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public enum DisconnectReason\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"none"},"None"),(0,a.kt)("p",null,"No reason given"),(0,a.kt)("h5",{id:"declaration"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"None = 0\n")),(0,a.kt)("h4",{id:"timeout"},"Timeout"),(0,a.kt)("p",null,"No message Received in timeout window"),(0,a.kt)("h5",{id:"declaration-1"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"Timeout = 1\n")),(0,a.kt)("h4",{id:"requestedbyremotepeer"},"RequestedByRemotePeer"),(0,a.kt)("p",null,"Disconnect called by higher level"),(0,a.kt)("h5",{id:"declaration-2"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"RequestedByRemotePeer = 2\n")),(0,a.kt)("h4",{id:"requestedbylocalpeer"},"RequestedByLocalPeer"),(0,a.kt)("p",null,"Disconnect called by higher level"),(0,a.kt)("h5",{id:"declaration-3"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"RequestedByLocalPeer = 3\n")),(0,a.kt)("h4",{id:"invalidpacket"},"InvalidPacket"),(0,a.kt)("p",null,"Received packet was not allowed by config"),(0,a.kt)("h5",{id:"declaration-4"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"InvalidPacket = 4\n")))}u.isMDXComponent=!0}}]);