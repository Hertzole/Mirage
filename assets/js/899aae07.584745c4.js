"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[2335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),y=a,f=u["".concat(c,".").concat(y)]||u[y]||p[y]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:6},i="Sync Sorted Set",s={unversionedId:"guides/sync/sync-sorted-set",id:"guides/sync/sync-sorted-set",title:"Sync Sorted Set",description:"SyncSortedSet is a set similar to C\\# SortedSet that synchronizes its contents from the server to the clients.",source:"@site/docs/guides/sync/sync-sorted-set.md",sourceDirName:"guides/sync",slug:"/guides/sync/sync-sorted-set",permalink:"/Mirage/docs/guides/sync/sync-sorted-set",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/guides/sync/sync-sorted-set.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Sync Hash Set",permalink:"/Mirage/docs/guides/sync/sync-hash-set"},next:{title:"Overview",permalink:"/Mirage/docs/guides/remote-actions/"}},c={},l=[{value:"Usage",id:"usage",level:2}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sync-sorted-set"},"Sync Sorted Set"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/reference/Mirage.Collections/SyncSortedSet-1"},(0,a.kt)("inlineCode",{parentName:"a"},"SyncSortedSet"))," is a set similar to C","#"," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.sortedset-1"},"SortedSet<T",">")," that synchronizes its contents from the server to the clients."),(0,a.kt)("p",null,"Unlike SyncHashSets, all elements in a SyncSortedSet are sorted when they are inserted. Please note this has some performance implications."),(0,a.kt)("p",null,"A SyncSortedSet can contain any ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/data-types"},"supported Mirage type")," "),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Create a class that derives from SyncSortedSet for your specific type. This is necessary because Mirage will add methods to that class with the weaver. Then add a SyncSortedSet field to your NetworkBehaviour class. For example:"),(0,a.kt)("admonition",{title:"IMPORTANT",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You need to initialize the SyncSortedSet immediately after the definition for them to work. You can mark them as ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly")," to enforce proper usage.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"class Player : NetworkBehaviour {\n\n    class SyncSkillSet : SyncSortedSet<string> {}\n\n    readonly SyncSkillSet skills = new SyncSkillSet();\n\n    int skillPoints = 10;\n\n    [Command]\n    public void CmdLearnSkill(string skillName)\n    {\n        if (skillPoints > 1)\n        {\n            skillPoints--;\n\n            skills.Add(skillName);\n        }\n    }\n}\n")),(0,a.kt)("p",null,"You can also detect when a SyncSortedSet changes. This is useful for refreshing your character in the client or determining when you need to update your database. Subscribe to the Callback event typically during ",(0,a.kt)("inlineCode",{parentName:"p"},"Start"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"OnClientStart"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"OnServerStart")," for that. "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"That by the time you subscribe, the set will already be initialized, so you will not get a call for the initial data, only updates.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public class Player : NetworkBehaviour\n{\n    private class SyncSetBuffs : SyncSortedSet<string> {};\n\n    private readonly SyncSetBuffs buffs = new SyncSetBuffs();\n\n    // This will add the delegate on the client.\n    // Use OnStartServer instead if you want it on the server\n    public override void OnStartClient()\n    {\n        buffs.Callback += OnBuffsChanged;\n    }\n\n    private void OnBuffsChanged(SyncSetBuffs.Operation op, string buff)\n    {\n        switch (op) \n        {\n            case SyncSetBuffs.Operation.OP_ADD:\n                // we added a buff, draw an icon on the character\n                break;\n            case SyncSetBuffs.Operation.OP_CLEAR:\n                // clear all buffs from the character\n                break;\n            case SyncSetBuffs.Operation.OP_REMOVE:\n                // We removed a buff from the character\n                break;\n        }\n    }\n}\n")))}p.isMDXComponent=!0}}]);