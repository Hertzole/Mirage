"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[4727],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>s});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),d=c(a),s=n,m=d["".concat(p,".").concat(s)]||d[s]||u[s]||l;return a?r.createElement(m,i(i({ref:t},k),{},{components:a})):r.createElement(m,i({ref:t},k))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},48763:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={id:"NetworkAuthenticator",title:"NetworkAuthenticator"},i="Class NetworkAuthenticator",o={unversionedId:"reference/Mirage/NetworkAuthenticator",id:"reference/Mirage/NetworkAuthenticator",title:"NetworkAuthenticator",description:"Base class for implementing component-based authentication during the Connect phase",source:"@site/docs/reference/Mirage/NetworkAuthenticator.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/NetworkAuthenticator",permalink:"/Mirage/docs/reference/Mirage/NetworkAuthenticator",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage/NetworkAuthenticator.md",tags:[],version:"current",frontMatter:{id:"NetworkAuthenticator",title:"NetworkAuthenticator"},sidebar:"api",previous:{title:"NetworkAnimator",permalink:"/Mirage/docs/reference/Mirage/NetworkAnimator"},next:{title:"NetworkBehaviorSerializers",permalink:"/Mirage/docs/reference/Mirage/NetworkBehaviorSerializers"}},p={},c=[{value:"Inheritance",id:"inheritance",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Methods",id:"methods",level:3},{value:"ServerAccept(INetworkPlayer)",id:"serveracceptinetworkplayer",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Parameters",id:"parameters",level:5},{value:"ServerReject(INetworkPlayer)",id:"serverrejectinetworkplayer",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"ServerSetup(NetworkServer)",id:"serversetupnetworkserver",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:"ServerAuthenticate(INetworkPlayer)",id:"serverauthenticateinetworkplayer",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"Parameters",id:"parameters-3",level:5},{value:"ClientAccept(INetworkPlayer)",id:"clientacceptinetworkplayer",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"Parameters",id:"parameters-4",level:5},{value:"ClientReject(INetworkPlayer)",id:"clientrejectinetworkplayer",level:4},{value:"Declaration",id:"declaration-5",level:5},{value:"Parameters",id:"parameters-5",level:5},{value:"ClientSetup(NetworkClient)",id:"clientsetupnetworkclient",level:4},{value:"Declaration",id:"declaration-6",level:5},{value:"Parameters",id:"parameters-6",level:5},{value:"ClientAuthenticate(INetworkPlayer)",id:"clientauthenticateinetworkplayer",level:4},{value:"Declaration",id:"declaration-7",level:5},{value:"Parameters",id:"parameters-7",level:5}],k={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"class-networkauthenticator"},"Class NetworkAuthenticator"),(0,n.kt)("p",null,"Base class for implementing component-based authentication during the Connect phase"),(0,n.kt)("div",{class:"inheritance"},(0,n.kt)("h5",{id:"inheritance"},"Inheritance"),(0,n.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,n.kt)("h5",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public abstract class NetworkAuthenticator : MonoBehaviour\n")),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("h4",{id:"serveracceptinetworkplayer"},"ServerAccept(INetworkPlayer)"),(0,n.kt)("p",null,"Call this when player has been accepted on the server"),(0,n.kt)("h5",{id:"declaration"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"protected void ServerAccept(INetworkPlayer player)\n")),(0,n.kt)("h5",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.INetworkPlayer"),(0,n.kt)("td",{parentName:"tr",align:null},"player"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"serverrejectinetworkplayer"},"ServerReject(INetworkPlayer)"),(0,n.kt)("p",null,"Call this when player has been rejected on the server. This will disconnect the player."),(0,n.kt)("h5",{id:"declaration-1"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"protected void ServerReject(INetworkPlayer player)\n")),(0,n.kt)("h5",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.INetworkPlayer"),(0,n.kt)("td",{parentName:"tr",align:null},"player"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"serversetupnetworkserver"},"ServerSetup(NetworkServer)"),(0,n.kt)("p",null,"Used to set up authenticator on server\nCan be used to register message handlers before any players connect"),(0,n.kt)("h5",{id:"declaration-2"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public abstract void ServerSetup(NetworkServer server)\n")),(0,n.kt)("h5",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkServer"),(0,n.kt)("td",{parentName:"tr",align:null},"server"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"serverauthenticateinetworkplayer"},"ServerAuthenticate(INetworkPlayer)"),(0,n.kt)("p",null,"Authenticate the player on the Server.\nCalled by the server when new client connects"),(0,n.kt)("h5",{id:"declaration-3"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public abstract void ServerAuthenticate(INetworkPlayer player)\n")),(0,n.kt)("h5",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.INetworkPlayer"),(0,n.kt)("td",{parentName:"tr",align:null},"player"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"clientacceptinetworkplayer"},"ClientAccept(INetworkPlayer)"),(0,n.kt)("p",null,"Call this when player has been accepted on the client."),(0,n.kt)("h5",{id:"declaration-4"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"protected void ClientAccept(INetworkPlayer player)\n")),(0,n.kt)("h5",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.INetworkPlayer"),(0,n.kt)("td",{parentName:"tr",align:null},"player"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"clientrejectinetworkplayer"},"ClientReject(INetworkPlayer)"),(0,n.kt)("p",null,"Call this when player has been rejected on the client. This will disconnect the player."),(0,n.kt)("h5",{id:"declaration-5"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"protected void ClientReject(INetworkPlayer player)\n")),(0,n.kt)("h5",{id:"parameters-5"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.INetworkPlayer"),(0,n.kt)("td",{parentName:"tr",align:null},"player"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"clientsetupnetworkclient"},"ClientSetup(NetworkClient)"),(0,n.kt)("p",null,"Used to set up authenticator on client\nCan be used to register message handlers before any player connects"),(0,n.kt)("h5",{id:"declaration-6"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public abstract void ClientSetup(NetworkClient client)\n")),(0,n.kt)("h5",{id:"parameters-6"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkClient"),(0,n.kt)("td",{parentName:"tr",align:null},"client"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"clientauthenticateinetworkplayer"},"ClientAuthenticate(INetworkPlayer)"),(0,n.kt)("p",null,"Authenticate the player on the Client.\nCalled by the client after connected to the server"),(0,n.kt)("h5",{id:"declaration-7"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public abstract void ClientAuthenticate(INetworkPlayer player)\n")),(0,n.kt)("h5",{id:"parameters-7"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.INetworkPlayer"),(0,n.kt)("td",{parentName:"tr",align:null},"player"),(0,n.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);