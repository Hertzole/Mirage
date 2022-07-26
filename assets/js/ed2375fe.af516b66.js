"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[8022],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),y=n,u=m["".concat(l,".").concat(y)]||m[y]||h[y]||o;return a?r.createElement(u,s(s({ref:t},p),{},{components:a})):r.createElement(u,s({ref:t},p))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18352:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={sidebar_position:3,title:"Spawn Player"},s="Player Game Objects",i={unversionedId:"guides/game-objects/spawn-player",id:"guides/game-objects/spawn-player",title:"Spawn Player",description:'Mirage\u2019s multiplayer HLAPI system handles player game objects differently than non-player game objects. When a new player joins the game (when a new client connects to the server), that player\u2019s game object becomes a "local player" game object on the client of that player, and Unity associates the player\u2019s connection with the player\u2019s game object. Unity associates one player game object for each person playing the game, and routes networking Server RPC Calls to that individual game object. A player cannot invoke a Server RPC Call on another player\u2019s game object, only their own.',source:"@site/docs/guides/game-objects/spawn-player.md",sourceDirName:"guides/game-objects",slug:"/guides/game-objects/spawn-player",permalink:"/Mirage/docs/guides/game-objects/spawn-player",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/guides/game-objects/spawn-player.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Spawn Player"},sidebar:"docs",previous:{title:"Network Behaviour",permalink:"/Mirage/docs/guides/game-objects/network-behaviour"},next:{title:"Spawn Player - Custom",permalink:"/Mirage/docs/guides/game-objects/spawn-player-custom"}},l={},c=[],p={toc:c};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"player-game-objects"},"Player Game Objects"),(0,n.kt)("p",null,'Mirage\u2019s multiplayer HLAPI system handles player game objects differently than non-player game objects. When a new player joins the game (when a new client connects to the server), that player\u2019s game object becomes a "local player" game object on the client of that player, and Unity associates the player\u2019s connection with the player\u2019s game object. Unity associates one player game object for each person playing the game, and routes networking Server RPC Calls to that individual game object. A player cannot invoke a Server RPC Call on another player\u2019s game object, only their own.'),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"NetworkBehaviour")," class (which you derive from to create your network scripts) has a property called ",(0,n.kt)("inlineCode",{parentName:"p"},"IsLocalPlayer"),". On each client\u2019s player game object, Mirage sets that property to true on the ",(0,n.kt)("inlineCode",{parentName:"p"},"NetworkBehaviour")," script and invokes the ",(0,n.kt)("inlineCode",{parentName:"p"},"OnStartLocalPlayer")," callback on the object's ",(0,n.kt)("inlineCode",{parentName:"p"},"NetworkIdentity"),". This means each client has a different game object set up like this because on each client a different game object is the one that represents the local player. The diagram below shows two clients and their local players."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"In this diagram, the circles represent the player game objects marked as the local player on each client",src:a(62176).Z,width:"716",height:"364"})),(0,n.kt)("p",null,'Only the player game object that is "yours" (from your point of view as the player) has the ',(0,n.kt)("inlineCode",{parentName:"p"},"IsLocalPlayer")," flag set. Usually, you should set this flag in the script to determine whether to process input, whether to make the camera track the game object or do any other client-side things that should only occur for the player belonging to that client."),(0,n.kt)("p",null,"Player game objects represent the player (that is, the person playing the game) on the server, and run Server RPC Calls from the player\u2019s client. These Server RPC Calls are secure client-to-server remote procedure calls. In this server-authoritative system, other non-player server-side game objects cannot receive Server RPC Calls directly from client-side game objects. This is both for security, and to reduce the complexity of building your game. By routing all incoming Server RPC Calls from users through the player game object, you can ensure that these messages come from the right place, the right client, and can be handled in a central location."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"CharacterSpawner")," component adds a player every time a client connects to the server. In some situations though, you might want it not to add players until an input event happens - such as a user pressing a \u201cstart\u201d button on the controller. To disable automatic player creation, you may want to write your own ",(0,n.kt)("inlineCode",{parentName:"p"},"CharacterSpawner")," component and wait for the ",(0,n.kt)("inlineCode",{parentName:"p"},"AddPlayerMessage")," message to be sent from the client."))}h.isMDXComponent=!0},62176:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/network-local-players-270b8a63f79eb179a5713d3344154ec3.png"}}]);