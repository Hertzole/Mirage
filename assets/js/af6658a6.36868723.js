"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[6260],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>y});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(o),y=n,m=u["".concat(c,".").concat(y)]||u[y]||d[y]||i;return o?r.createElement(m,a(a({ref:t},p),{},{components:o})):r.createElement(m,a({ref:t},p))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},51071:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const i={},a="Network Rigidbody",s={unversionedId:"components/network-rigidbody",id:"components/network-rigidbody",title:"Network Rigidbody",description:'The Network Rigidbody class as "Experimental" for now so please share any problems or bugs you find with it and use at your own risk if production builds.',source:"@site/docs/components/network-rigidbody.md",sourceDirName:"components",slug:"/components/network-rigidbody",permalink:"/Hertzole/Mirage/docs/components/network-rigidbody",draft:!1,editUrl:"https://github.com/Hertzole/Hertzole/Mirage/tree/master/doc/docs/components/network-rigidbody.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Network Proximity Checker",permalink:"/Hertzole/Mirage/docs/components/network-proximity-checker"},next:{title:"Network Room Manager",permalink:"/Hertzole/Mirage/docs/components/network-room-manager"}},c={},l=[],p={toc:l};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"network-rigidbody"},"Network Rigidbody"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},'The Network Rigidbody class as "Experimental" for now so please share any problems or bugs you find with it and use at your own risk if production builds. ')),(0,n.kt)("p",null,"The Network Rigidbody component synchronizes velocity and other properties of a rigidbody across the network. This component is useful when you have a non-kinematic rigidbody that have constant forces applied to them, like gravity, but also want to apply forces or change velocity to that rigidbody or server or client with authority. For example, objects that move and jump using rigidbody using gravity."),(0,n.kt)("p",null,"A game object with a Network Rigidbody component must also have a Network Identity component. When you add a Network Rigidbody component to a game object, Mirage also adds a Network Identity component on that game object if it does not already have one."),(0,n.kt)("p",null,"Network Rigidbody works best when there is also a NetworkTransform for the object to keep position as well as velocity in sync."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Network Rigidbody inspector",src:o(53638).Z,width:"436",height:"562"})),(0,n.kt)("p",null,"By default, Network Rigidbody is server-authoritative unless you check the box for ",(0,n.kt)("strong",{parentName:"p"},"Client Authority"),". Client Authority applies to character objects as well as non-character objects that have been specifically assigned to a client, but only for this component. With this enabled, value changes are send from the client to the server."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Sensitivity")," options allow you to set a minimum thresholds before values are send over network. This helps minimize network traffic for very small changes."),(0,n.kt)("p",null,"For some object you may not want them to rotate but don't need to sync the Angular Velocity. The ",(0,n.kt)("strong",{parentName:"p"},"Clear Angular Velocity")," will set the Angular Velocity to zero each frame causing the minimizing when objects rotation. If ",(0,n.kt)("strong",{parentName:"p"},"Sync Angular Velocity")," is enabled then clear is ignored. The same can apply to ",(0,n.kt)("strong",{parentName:"p"},"Clear Velocity"),"."),(0,n.kt)("p",null,"Normally, changes are sent to all observers of the object this component is on. Setting ",(0,n.kt)("strong",{parentName:"p"},"Sync Mode")," to Owner Only makes the changes private between the server and the client owner of the object."),(0,n.kt)("p",null,"You can use the ",(0,n.kt)("strong",{parentName:"p"},"Sync Interval")," to specify how often it syncs (in seconds). This applies both to Client Authority and Server Authority."))}d.isMDXComponent=!0},53638:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/NetworkRigidbody-d82350299ab857e641e2ddeb3dd98c9a.png"}}]);