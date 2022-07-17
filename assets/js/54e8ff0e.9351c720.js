"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[265],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),g=r,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},60791:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={},i="Manual Scene Loading",l={unversionedId:"guides/scene-loading/manual-scene-loading",id:"guides/scene-loading/manual-scene-loading",title:"Manual Scene Loading",description:"If NetworkSceneManager doesn't work for your case you can control everything yourself.",source:"@site/docs/guides/scene-loading/manual-scene-loading.md",sourceDirName:"guides/scene-loading",slug:"/guides/scene-loading/manual-scene-loading",permalink:"/Hertzole/Mirage/docs/guides/scene-loading/manual-scene-loading",draft:!1,editUrl:"https://github.com/Hertzole/Hertzole/Mirage/tree/master/doc/docs/guides/scene-loading/manual-scene-loading.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Loading scenes in Mirage",permalink:"/Hertzole/Mirage/docs/guides/scene-loading/"},next:{title:"Network Scene Manager",permalink:"/Hertzole/Mirage/docs/guides/scene-loading/network-scene-manager"}},s={},c=[{value:"Using Messages",id:"using-messages",level:2},{value:"Loading a Scene",id:"loading-a-scene",level:2},{value:"SpawnVisibleObjects vs AddCharacter",id:"spawnvisibleobjects-vs-addcharacter",level:3},{value:"Host mode",id:"host-mode",level:3}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manual-scene-loading"},"Manual Scene Loading"),(0,r.kt)("p",null,"If ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/scene-loading/network-scene-manager"},"NetworkSceneManager")," doesn't work for your case you can control everything yourself."),(0,r.kt)("h2",{id:"using-messages"},"Using Messages"),(0,r.kt)("p",null,"These messages are built-in and used by NetworkSceneManager. If you are creating your own scene logic then you can re-use these messages for your purpose."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/SceneMessage"},"SceneMessage"),": Sent to the client to load a scene"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/SceneReadyMessage"},"SceneReadyMessage"),": Sent to either client or server when they have finished loading")),(0,r.kt)("h2",{id:"loading-a-scene"},"Loading a Scene"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Server")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Mark ",(0,r.kt)("inlineCode",{parentName:"li"},"Player")," as not ready, using ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/NetworkPlayer#sceneisready"},"NetworkPlayer.SceneIsReady")),(0,r.kt)("li",{parentName:"ol"},"Send ",(0,r.kt)("inlineCode",{parentName:"li"},"SceneMessage")," to clients")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Client")," "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"After receiving ",(0,r.kt)("inlineCode",{parentName:"em"},"SceneMessage"))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"(optional) Mark local player as not ready "),(0,r.kt)("li",{parentName:"ol"},"Load the scene")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"After loading finished")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Call ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/ClientObjectManager#preparetospawnsceneobjects"},"ClientObjectManager.PrepareToSpawnSceneObjects")," (This will tell Mirage about any new scene objects)"),(0,r.kt)("li",{parentName:"ol"},"(optional) Mark local player as ready "),(0,r.kt)("li",{parentName:"ol"},"Send ",(0,r.kt)("inlineCode",{parentName:"li"},"SceneReadyMessage")," to the server")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Server")," "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"After receiving ",(0,r.kt)("inlineCode",{parentName:"em"},"SceneReadyMessage"))),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Mark the player as ready using: ",(0,r.kt)("inlineCode",{parentName:"li"},"player.SceneIsReady = true")),(0,r.kt)("li",{parentName:"ol"},"Call ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/ServerObjectManager#spawnvisibleobjectsinetworkplayer-boolean"},"ServerObjectManager.SpawnVisibleObjects")," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/ServerObjectManager#addcharacterinetworkplayer-networkidentity"},"ServerObjectManager.AddCharacter")," (Mirage will send spawn message to client)")),(0,r.kt)("h3",{id:"spawnvisibleobjects-vs-addcharacter"},"SpawnVisibleObjects vs AddCharacter"),(0,r.kt)("p",null,"When calling ",(0,r.kt)("inlineCode",{parentName:"p"},"SpawnVisibleObjects")," it will only spawn objects if the player has a character. This check can be avoided by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"IgnoreHasCharacter")," argument."),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"AddCharacter")," is called it will send a spawn message for the new character to the client. After that, it will call ",(0,r.kt)("inlineCode",{parentName:"p"},"SpawnVisibleObjects")," to spawn any objects that are visible to the new character."),(0,r.kt)("p",null,"If your game has a player character you'll want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"AddCharacter")," most of the time. But if your game does not have a player character or you want to spawn objects earlier then you should use ",(0,r.kt)("inlineCode",{parentName:"p"},"SpawnVisibleObjects")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"IgnoreHasCharacter")," set up ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"SpawnVisibleObjects(player, true)")," to spawn scene objects before the player character by calling it before ",(0,r.kt)("inlineCode",{parentName:"p"},"AddCharacter"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Make sure to call ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientObjectManager.PrepareToSpawnSceneObjects")," client side before calling ",(0,r.kt)("inlineCode",{parentName:"p"},"SpawnVisibleObjects")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"AddCharacter"),". If that function is not called the client will not be able to find scene objects when spawn messages are received.")),(0,r.kt)("h3",{id:"host-mode"},"Host mode"),(0,r.kt)("p",null,"If using this setup in Host mode make sure you only load the Scene once, this can be done by checking if the server is active before loading tje scene on the client."),(0,r.kt)("p",null,"The rest of the setup should stay the same. In host mode there will be 2 copies of the ",(0,r.kt)("inlineCode",{parentName:"p"},"NetworkPlayer")," one for client side and one for server side. When using ",(0,r.kt)("inlineCode",{parentName:"p"},"player.SceneIsReady")," you will need to make sure you are setting it on both copies of the player. The easiest way to do this is just treat the host client as a normal client and send message, but be aware of any functions you dont want called twice."))}d.isMDXComponent=!0}}]);