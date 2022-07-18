"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[7703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={},l="Variable Sized Integer Blocks",o={unversionedId:"guides/bit-packing/var-int-blocks",id:"guides/bit-packing/var-int-blocks",title:"Variable Sized Integer Blocks",description:"This page is a work in progress",source:"@site/docs/guides/bit-packing/var-int-blocks.md",sourceDirName:"guides/bit-packing",slug:"/guides/bit-packing/var-int-blocks",permalink:"/Mirage/docs/guides/bit-packing/var-int-blocks",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/guides/bit-packing/var-int-blocks.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Quaternion Pack",permalink:"/Mirage/docs/guides/bit-packing/quaternion-pack"},next:{title:"Variable Sized Integer",permalink:"/Mirage/docs/guides/bit-packing/var-int"}},p={},c=[{value:"Supported Types",id:"supported-types",level:3},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Generated Code",id:"generated-code",level:3}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"variable-sized-integer-blocks"},"Variable Sized Integer Blocks"),(0,i.kt)("admonition",{title:"Work In Progress",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This page is a work in progress")),(0,i.kt)("p",null,"Packs and integer value based on its size"),(0,i.kt)("h3",{id:"supported-types"},"Supported Types"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Byte"),(0,i.kt)("li",{parentName:"ul"},"Short"),(0,i.kt)("li",{parentName:"ul"},"UShort"),(0,i.kt)("li",{parentName:"ul"},"Int"),(0,i.kt)("li",{parentName:"ul"},"Uint"),(0,i.kt)("li",{parentName:"ul"},"Long"),(0,i.kt)("li",{parentName:"ul"},"ULong"),(0,i.kt)("li",{parentName:"ul"},"Enum")),(0,i.kt)("h3",{id:"example-1"},"Example 1"),(0,i.kt)("p",null,"A modifier which can be added to a character value to increase or decrease it"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public class MyNetworkBehaviour : NetworkBehaviour \n{\n    [SyncVar, VarIntBlocks(-100, 100)]\n    public int modifier;\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Range = 200")," so bit count is 8, causing real range to be -100 to 155"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"modifier = 57")," will serialize to ",(0,i.kt)("inlineCode",{parentName:"p"},"1001_1101")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"modifier = -57")," will serialize to ",(0,i.kt)("inlineCode",{parentName:"p"},"0010_1011")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"modifier = -110")," ",(0,i.kt)("em",{parentName:"p"},"(out of range)"),"  will serialize to ",(0,i.kt)("inlineCode",{parentName:"p"},"1111_0110")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"modifier = 130")," will serialize to ",(0,i.kt)("inlineCode",{parentName:"p"},"1110_0110"),", even tho 130 is out of range there is enough range because bit count rounds up."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"modifier = 170")," ",(0,i.kt)("em",{parentName:"p"},"(out of range)")," will serialize to ",(0,i.kt)("inlineCode",{parentName:"p"},"0000_1110")),(0,i.kt)("h3",{id:"example-2"},"Example 2"),(0,i.kt)("p",null,"A Direction enum to say which way a model is facing"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public enum MyDirection\n{\n    Backwards = -1,\n    None = 0,\n    Forwards = 1,\n}\npublic class MyNetworkBehaviour : NetworkBehaviour \n{\n    [SyncVar, BitCount(-1, 1)]\n    public MyDirection direction;\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Range = 3")," so bit count is ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),", causing real range to be -1 to 2"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"direction = -1")," will serialize to ",(0,i.kt)("inlineCode",{parentName:"p"},"00")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"direction = 1")," will serialize to ",(0,i.kt)("inlineCode",{parentName:"p"},"10")),(0,i.kt)("h3",{id:"generated-code"},"Generated Code"),(0,i.kt)("p",null,"Source:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"[SyncVar, BitCountFromRange(-100, 100)]\npublic int myValue;\n")),(0,i.kt)("p",null,"Generated:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public override bool SerializeSyncVars(NetworkWriter writer, bool initialState)\n{\n    ulong syncVarDirtyBits = base.SyncVarDirtyBits;\n    bool result = base.SerializeSyncVars(writer, initialize);\n\n    if (initialState) \n    {\n        writer.Write((ulong)(this.myValue - (-100)), 8);\n        return true;\n    }\n\n    writer.Write(syncVarDirtyBits, 1);\n    if ((syncVarDirtyBits & 1UL) != 0UL)\n    {\n        writer.Write((ulong)(this.myValue - (-100)), 8);\n        result = true;\n    }\n\n    return result;\n}\n\npublic override void DeserializeSyncVars(NetworkReader reader, bool initialState)\n{\n    base.DeserializeSyncVars(reader, initialState);\n\n    if (initialState)\n    {\n        this.myValue = reader.Read(8) + (-100);\n        return;\n    }\n    \n    ulong dirtyMask = reader.Read(1);\n    if ((dirtyMask & 1UL) != 0UL)\n    {\n        this.myValue = reader.Read(8) + (-100);\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"last updated for Mirage v101.8.0")))}u.isMDXComponent=!0}}]);