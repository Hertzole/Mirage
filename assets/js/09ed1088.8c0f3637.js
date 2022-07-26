"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[9526],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,k=s["".concat(c,".").concat(m)]||s[m]||d[m]||l;return r?a.createElement(k,i(i({ref:t},p),{},{components:r})):a.createElement(k,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},31536:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={id:"TimeoutAuthenticator",title:"TimeoutAuthenticator"},i="Class TimeoutAuthenticator",o={unversionedId:"reference/Mirage.Authenticators/TimeoutAuthenticator",id:"reference/Mirage.Authenticators/TimeoutAuthenticator",title:"TimeoutAuthenticator",description:"An authenticator that disconnects connections if they don&apos;t",source:"@site/docs/reference/Mirage.Authenticators/TimeoutAuthenticator.md",sourceDirName:"reference/Mirage.Authenticators",slug:"/reference/Mirage.Authenticators/TimeoutAuthenticator",permalink:"/Mirage/docs/reference/Mirage.Authenticators/TimeoutAuthenticator",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/reference/Mirage.Authenticators/TimeoutAuthenticator.md",tags:[],version:"current",frontMatter:{id:"TimeoutAuthenticator",title:"TimeoutAuthenticator"},sidebar:"api",previous:{title:"BasicAuthenticator",permalink:"/Mirage/docs/reference/Mirage.Authenticators/BasicAuthenticator"},next:{title:"Mirage.Collections",permalink:"/Mirage/docs/reference/Mirage.Collections/"}},c={},u=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Fields",id:"fields",level:3},{value:"Authenticator",id:"authenticator",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Timeout",id:"timeout",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Methods",id:"methods",level:3},{value:"Awake()",id:"awake",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"ServerAuthenticate(INetworkPlayer)",id:"serverauthenticateinetworkplayer",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"Parameters",id:"parameters",level:5},{value:"ClientAuthenticate(INetworkPlayer)",id:"clientauthenticateinetworkplayer",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"ServerSetup(NetworkServer)",id:"serversetupnetworkserver",level:4},{value:"Declaration",id:"declaration-5",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:"ClientSetup(NetworkClient)",id:"clientsetupnetworkclient",level:4},{value:"Declaration",id:"declaration-6",level:5},{value:"Parameters",id:"parameters-3",level:5}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"class-timeoutauthenticator"},"Class TimeoutAuthenticator"),(0,n.kt)("p",null,"An authenticator that disconnects connections if they don","'","t\nauthenticate within a specified time limit."),(0,n.kt)("div",{class:"inheritance"},(0,n.kt)("h5",{id:"inheritance"},"Inheritance"),(0,n.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object"),(0,n.kt)("div",{class:"level",style:{"--data-index":1}},"Mirage.NetworkAuthenticator")),(0,n.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Show"),(0,n.kt)("p",null,"Mirage.NetworkAuthenticator.OnServerAuthenticated"),(0,n.kt)("p",null,"Mirage.NetworkAuthenticator.OnClientAuthenticated"),(0,n.kt)("p",null,"Mirage.NetworkAuthenticator.ServerAccept(Mirage.INetworkPlayer)"),(0,n.kt)("p",null,"Mirage.NetworkAuthenticator.ServerReject(Mirage.INetworkPlayer)"),(0,n.kt)("p",null,"Mirage.NetworkAuthenticator.ClientAccept(Mirage.INetworkPlayer)"),(0,n.kt)("p",null,"Mirage.NetworkAuthenticator.ClientReject(Mirage.INetworkPlayer)")),(0,n.kt)("h5",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public class TimeoutAuthenticator : NetworkAuthenticator\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"authenticator"},"Authenticator"),(0,n.kt)("h5",{id:"declaration"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public NetworkAuthenticator Authenticator\n")),(0,n.kt)("h4",{id:"timeout"},"Timeout"),(0,n.kt)("h5",{id:"declaration-1"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public float Timeout\n")),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("h4",{id:"awake"},"Awake()"),(0,n.kt)("h5",{id:"declaration-2"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public void Awake()\n")),(0,n.kt)("h4",{id:"serverauthenticateinetworkplayer"},"ServerAuthenticate(INetworkPlayer)"),(0,n.kt)("h5",{id:"declaration-3"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public override void ServerAuthenticate(INetworkPlayer player)\n")),(0,n.kt)("h5",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.INetworkPlayer"),(0,n.kt)("td",{parentName:"tr",align:null},"player"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"clientauthenticateinetworkplayer"},"ClientAuthenticate(INetworkPlayer)"),(0,n.kt)("h5",{id:"declaration-4"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public override void ClientAuthenticate(INetworkPlayer player)\n")),(0,n.kt)("h5",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.INetworkPlayer"),(0,n.kt)("td",{parentName:"tr",align:null},"player"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"serversetupnetworkserver"},"ServerSetup(NetworkServer)"),(0,n.kt)("h5",{id:"declaration-5"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public override void ServerSetup(NetworkServer server)\n")),(0,n.kt)("h5",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkServer"),(0,n.kt)("td",{parentName:"tr",align:null},"server"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"clientsetupnetworkclient"},"ClientSetup(NetworkClient)"),(0,n.kt)("h5",{id:"declaration-6"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public override void ClientSetup(NetworkClient client)\n")),(0,n.kt)("h5",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkClient"),(0,n.kt)("td",{parentName:"tr",align:null},"client"),(0,n.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);