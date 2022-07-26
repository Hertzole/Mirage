"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[4218],{3905:(e,t,i)=>{i.d(t,{Zo:()=>h,kt:()=>d});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(i),d=o,u=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return i?n.createElement(u,a(a({ref:t},h),{},{components:i})):n.createElement(u,a({ref:t},h))}));function d(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},880:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=i(87462),o=(i(67294),i(3905));const r={sidebar_position:8},a="Network Visibility",s={unversionedId:"guides/network-visibility",id:"guides/network-visibility",title:"Network Visibility",description:"Multiplayer games use the concept of network visibility to determine which players can see which game objects at any given time during gameplay. In a game that has a moving viewpoint and moving game objects, it\u2019s common that players cannot see everything that is happening in the game at once.",source:"@site/docs/guides/network-visibility.md",sourceDirName:"guides",slug:"/guides/network-visibility",permalink:"/Mirage/docs/guides/network-visibility",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/guides/network-visibility.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docs",previous:{title:"Serialization",permalink:"/Mirage/docs/guides/serialization"},next:{title:"Generics",permalink:"/Mirage/docs/guides/generics"}},l={},c=[{value:"Network Proximity Checker Component",id:"network-proximity-checker-component",level:2},{value:"Network Scene Checker Component",id:"network-scene-checker-component",level:2},{value:"Network Visibility on Remote Clients",id:"network-visibility-on-remote-clients",level:2},{value:"Network Visibility on the Host",id:"network-visibility-on-the-host",level:2},{value:"Customizing Network Visibility",id:"customizing-network-visibility",level:2}],h={toc:c};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"network-visibility"},"Network Visibility"),(0,o.kt)("p",null,"Multiplayer games use the concept of network visibility to determine which players can see which game objects at any given time during gameplay. In a game that has a moving viewpoint and moving game objects, it\u2019s common that players cannot see everything that is happening in the game at once."),(0,o.kt)("p",null,"If a particular player, at a certain point in time during gameplay, cannot see most of the other players, non-player characters, or other moving or interactive things in your game, there is usually no need for the server to send information about those things to the player\u2019s client."),(0,o.kt)("p",null,"This can benefit your game in two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It reduces the amount of data sent across the network between players. This can help improve the responsiveness of your game and reduce bandwidth use. The bigger and more complex your multiplayer game, the more important this issue is."),(0,o.kt)("li",{parentName:"ul"},"It also helps prevent some cheating. Since a player client does not have information about things that can\u2019t be seen,\na hack on that player\u2019s computer cannot reveal the information.")),(0,o.kt)("p",null,"The idea of \"visibility\" in the context of networking doesn\u2019t necessarily relate to whether game objects are directly visible on-screen. Instead, it relates to whether data should or shouldn\u2019t be sent about the game object in question to a particular client. Put simply, if a client can't 'see' a game object, it does not need to be sent information about that game object across the network. Ideally, you want to limit the amount of data you are sending across the network to only what is necessary because sending large amounts of unnecessary data across the network can cause network performance problems."),(0,o.kt)("p",null,"However, it can also be resource intensive or complex to determine accurately whether a game object is truly visible to a given player, so it\u2019s often a good idea to use a more simple calculation to determine whether a player should be sent networked data about it - i.e. whether it is 'Network Visible'. The balance you want to achieve when considering this is between the cost of the complexity of the calculation for determining the visibility and the cost of sending more information than necessary over the network. A very simple way to calculate this is a distance (proximity) check, and Mirage provides a built-in component for this purpose."),(0,o.kt)("h2",{id:"network-proximity-checker-component"},"Network Proximity Checker Component"),(0,o.kt)("p",null,"Mirage\u2019s ",(0,o.kt)("a",{parentName:"p",href:"/docs/components/network-proximity-checker"},"Network Proximity Checker"),' component is the simplest way to implement network visibility for players. It works in conjunction with the physics system to determine whether game objects are close enough (that is, "visible" to send network messages in your multiplayer game).'),(0,o.kt)("h2",{id:"network-scene-checker-component"},"Network Scene Checker Component"),(0,o.kt)("p",null,"Mirage's ",(0,o.kt)("a",{parentName:"p",href:"/docs/components/network-scene-checker"},"Network Scene Checker")," component can be used to isolate players and networked objects on the server in additive scene instances."),(0,o.kt)("h2",{id:"network-visibility-on-remote-clients"},"Network Visibility on Remote Clients"),(0,o.kt)("p",null,"When a player on a remote client joins a networked game, only game objects that are network-visible to the player will be spawned on that remote client. This means that even if the player enters a large world with many networked game objects, the game can start quickly because it does not need to spawn every game object that exists in the world. Note that this applies to networked game objects in your scene, but does not affect the loading of Assets. Unity still takes time to load the Assets for registered Prefabs and Scene game objects."),(0,o.kt)("p",null,"When a player moves within the world, the set of network-visible game objects changes. The player\u2019s client is told about these changes as they happen. The ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectHide")," message is sent to clients when a game object becomes no longer network-visible. By default, Mirage destroys the game object when it receives this message. When a game object becomes visible, the client receives an ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectSpawn")," message, as if Mirage has spawned the game object for the first time. By default, the game object is instantiated like any other spawned game object."),(0,o.kt)("h2",{id:"network-visibility-on-the-host"},"Network Visibility on the Host"),(0,o.kt)("p",null,"The host shares the same Scene as the server because it acts as both the server and the client to the player hosting the game. For this reason, it cannot destroy game objects that are not visible to the local player."),(0,o.kt)("p",null,"Instead, there is the virtual method OnSetLocalVisibility in the NetworkVisibility class that is invoked. This method is invoked on all scripts that inherit from ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkVisibility")," on game objects that change the visibility state on the host."),(0,o.kt)("p",null,"The default implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"OnSetLocalVisibility")," disables or enables all renderer components on the game object. If you want to customize this implementation, you can override the method in your script, and provide new behavior for how the host (and therefore the local client) should respond when a game object becomes network-visible or invisible (such as disabling HUD elements or renderers)."),(0,o.kt)("h2",{id:"customizing-network-visibility"},"Customizing Network Visibility"),(0,o.kt)("p",null,"Sometimes you might want to use other kinds of visibility checks, such as grid-based rules, line-of-sight tests, navigation path tests, or any other type of test that suits your game."),(0,o.kt)("p",null,"It may be helpful to understand how the Network Proximity Checker works."),(0,o.kt)("p",null,"The Network Proximity Checker is implemented using the public visibility interface of Mirage\u2019s HLAPI. Using this same interface, you can implement any kind of visibility rules you desire. Each ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkIdentity")," keeps track of the set of players that it is visible to. The players that a NetworkIdentity game object is visible to are called the \u201cobservers\u201d of the NetworkIdentity."),(0,o.kt)("p",null,"The Network Proximity Checker calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"RebuildObservers")," method on the Network Identity component at a fixed interval (set using the \u201cVis Update Interval\u201d value in the inspector), so that the set of network-visible game objects for each player is updated as they move around."),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkVisibility")," class (which your custom observer scripts inherit from), there are some virtual functions for determining visibility. These are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OnCheckObserver"),(0,o.kt)("br",{parentName:"li"}),"This method is called on the server, on each networked game object when a new player enters the game. If it returns true, that player is added to the object\u2019s observers. The Network Proximity Checker does a simple distance check in its implementation of this function and uses ",(0,o.kt)("inlineCode",{parentName:"li"},"Physics.OverlapSphereNonAlloc")," to find the players that are within the visibility distance for this object."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OnRebuildObservers"),(0,o.kt)("br",{parentName:"li"}),"This method is called on the server when ",(0,o.kt)("inlineCode",{parentName:"li"},"RebuildObservers")," is invoked. This method expects the set of observers to be populated with the players that can see the object. The NetworkServer then handles sending ",(0,o.kt)("inlineCode",{parentName:"li"},"ObjectHide")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"ObjectSpawn")," messages based on the differences between the old and new visibility sets."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OnSetHostVisibility"),(0,o.kt)("br",{parentName:"li"}),"This method is called on the server by the visibility system for objects on a host.  Objects on a host (with a local client) cannot be disabled or destroyed when they are not visible to the local client. So this function is called to allow custom code to hide these objects. A typical implementation will disable renderer components on the object. This is only called on local clients on a host.")),(0,o.kt)("p",null,"You can check whether any given networked game object is a player by checking if its ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkIdentity")," has a valid Owner. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"int hitCount = Physics.OverlapSphereNonAlloc(transform.position, visRange, hitsBuffer3D, castLayers);\n\nfor (int i = 0; i < hitCount; i++)\n{\n    Collider hit = hitsBuffer3D[i];\n\n    NetworkIdentity identity = hit.GetComponent<NetworkIdentity>();\n\n    if (identity != null && identity.Owner != null)\n        observers.Add(identity.Owner);\n}\n")))}m.isMDXComponent=!0}}]);