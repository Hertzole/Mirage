"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(c,".").concat(d)]||m[d]||k[d]||o;return n?a.createElement(g,l(l({ref:t},s),{},{components:n})):a.createElement(g,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:3},l="Sockets",i={unversionedId:"general/sockets",id:"general/sockets",title:"Sockets",description:"Sockets are low-level objects that are responsible for sending and receiving raw data over the network.",source:"@site/docs/general/sockets.md",sourceDirName:"general",slug:"/general/sockets",permalink:"/Hertzole/Mirage/docs/general/sockets",draft:!1,editUrl:"https://github.com/Hertzole/Hertzole/Mirage/tree/master/doc/docs/general/sockets.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Getting Started",permalink:"/Hertzole/Mirage/docs/general/getting-started"},next:{title:"Showcase",permalink:"/Hertzole/Mirage/docs/general/showcase"}},c={},p=[{value:"Available sockets",id:"available-sockets",level:2},{value:"Changing a socket",id:"changing-a-socket",level:2},{value:"Implementing new socket",id:"implementing-new-socket",level:2}],s={toc:p};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sockets"},"Sockets"),(0,r.kt)("p",null,"Sockets are low-level objects that are responsible for sending and receiving raw data over the network.\nMirage has a single transport (called ",(0,r.kt)("inlineCode",{parentName:"p"},"Mirage.SocketLayer.Peer"),") built into its core, which handles all the connection\nstates and reliability. Peer then uses the low-level sockets API to send and receive raw data over the network.\nCheck ",(0,r.kt)("a",{parentName:"p",href:"#implementing-new-socket"},"this section")," below to see how to implement your own socket."),(0,r.kt)("h2",{id:"available-sockets"},"Available sockets"),(0,r.kt)("p",null,"The table below shows a list of available sockets and their features."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:"center"},"UDP (built-in)"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Steam (",(0,r.kt)("a",{parentName:"th",href:"https://github.com/MirageNet/FizzySteamyMirror"},"Steamworks.NET"),", ",(0,r.kt)("a",{parentName:"th",href:"https://github.com/MirageNet/SteamyFaceNG"},"Facepunch"),")"),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"th",href:"https://github.com/James-Frowen/SimpleWebSocket"},"Websocket")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"CCU")),(0,r.kt)("td",{parentName:"tr",align:"center"},"1000+"),(0,r.kt)("td",{parentName:"tr",align:"center"},"?"),(0,r.kt)("td",{parentName:"tr",align:"center"},"?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Protocol")),(0,r.kt)("td",{parentName:"tr",align:"center"},"UDP"),(0,r.kt)("td",{parentName:"tr",align:"center"},"UDP"),(0,r.kt)("td",{parentName:"tr",align:"center"},"TCP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Unreliable")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Mobile")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"WebGL")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"CPU")),(0,r.kt)("td",{parentName:"tr",align:"center"},"LOW"),(0,r.kt)("td",{parentName:"tr",align:"center"},"LOW"),(0,r.kt)("td",{parentName:"tr",align:"center"},"?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"NAT Punch")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Encryption")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"IPv6")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"?"),(0,r.kt)("td",{parentName:"tr",align:"center"},"?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Managed")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Native")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Based on")),(0,r.kt)("td",{parentName:"tr",align:"center"},"NanoSockets (native), .NET (managed)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Steam Game Networking Sockets"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/James-Frowen/SimpleWebTransport"},"SimpleWebTransport"))))),(0,r.kt)("h2",{id:"changing-a-socket"},"Changing a socket"),(0,r.kt)("p",null,"To change a socket, follow the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the desired socket. Instructions are available on each socket's repository."),(0,r.kt)("li",{parentName:"ol"},"Add the socket's ",(0,r.kt)("inlineCode",{parentName:"li"},"SocketFactory")," as a new component on the object where you have the other Mirage components."),(0,r.kt)("li",{parentName:"ol"},"Assign a reference to this component in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Socket Factory")," field of ",(0,r.kt)("inlineCode",{parentName:"li"},"NetworkServer")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"NetworkClient")," components."),(0,r.kt)("li",{parentName:"ol"},"Check if the socket has any required additional steps."),(0,r.kt)("li",{parentName:"ol"},"Done. Mirage should now be using the newly added socket.")),(0,r.kt)("h2",{id:"implementing-new-socket"},"Implementing new socket"),(0,r.kt)("p",null,"To create a new socket, you have to implement two classes - one that implements the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mirage.SocketLayer.ISocket"),"\ninterface, which will represent the low-level socket and one that extends the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mirage.SocketLayer.SocketFactory"),"\nclass, which will act as the MonoBehaviour component creating new instances of the low-level class."),(0,r.kt)("p",null,"You can check out our built-in UDP socket implementation as an inspiration: ",(0,r.kt)("inlineCode",{parentName:"p"},"Mirage.Sockets.Udp.UdpSocket")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"Mirage.Sockets.Udp.UdpSocketFactory"),"."))}k.isMDXComponent=!0}}]);