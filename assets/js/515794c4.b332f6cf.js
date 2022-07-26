"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[3303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),p=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?i.createElement(g,o(o({ref:t},s),{},{components:n})):i.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={},o="Bit Count From Range",l={unversionedId:"guides/bit-packing/bit-count-from-range",id:"guides/bit-packing/bit-count-from-range",title:"Bit Count From Range",description:"The bit count of Integer based fields can be set using BitCountFromRangeAttribute It will use the given range to calculate the required bit count. This works in a similar way to BitCount",source:"@site/docs/guides/bit-packing/bit-count-from-range.md",sourceDirName:"guides/bit-packing",slug:"/guides/bit-packing/bit-count-from-range",permalink:"/Mirage/docs/guides/bit-packing/bit-count-from-range",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/guides/bit-packing/bit-count-from-range.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Bit Packing",permalink:"/Mirage/docs/guides/bit-packing/"},next:{title:"Bit Count",permalink:"/Mirage/docs/guides/bit-packing/bit-count"}},u={},p=[{value:"Use cases",id:"use-cases",level:3},{value:"Supported Types",id:"supported-types",level:3},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Generated Code",id:"generated-code",level:3}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bit-count-from-range"},"Bit Count From Range"),(0,r.kt)("p",null,"The bit count of Integer based fields can be set using ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/Mirage.Serialization/BitCountFromRangeAttribute"},"BitCountFromRangeAttribute")," It will use the given range to calculate the required bit count. This works in a similar way to ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/bit-packing/bit-count"},"BitCount")),(0,r.kt)("p",null,"The min value is subtracted from the value before it is written and added back after it is read. This will shift all written values into the positive range for writing so that the sign bit is not lost."),(0,r.kt)("p",null,"This will truncate the bits so that only the small bits are sent. There is no range checking for values using BitCount, so the value that is too big or too small will not be unpacked correctly."),(0,r.kt)("p",null,"Bit Count is calculated using ",(0,r.kt)("inlineCode",{parentName:"p"},"bitCount = 1 + Floor(Log2(max - min))"),", so ",(0,r.kt)("inlineCode",{parentName:"p"},"min = -100"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"max = 100")," results in ",(0,r.kt)("inlineCode",{parentName:"p"},"bit count = 8")),(0,r.kt)("p",null,"Values are written using ",(0,r.kt)("inlineCode",{parentName:"p"},"Write(value - min, bitCount)")," and read using ",(0,r.kt)("inlineCode",{parentName:"p"},"value = Read(bitCount) + min")),(0,r.kt)("h3",{id:"use-cases"},"Use cases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Value with a minimum and maximum value")),(0,r.kt)("h3",{id:"supported-types"},"Supported Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Byte"),(0,r.kt)("li",{parentName:"ul"},"Short"),(0,r.kt)("li",{parentName:"ul"},"UShort"),(0,r.kt)("li",{parentName:"ul"},"Int"),(0,r.kt)("li",{parentName:"ul"},"Uint"),(0,r.kt)("li",{parentName:"ul"},"Long"),(0,r.kt)("li",{parentName:"ul"},"ULong"),(0,r.kt)("li",{parentName:"ul"},"Enum")),(0,r.kt)("h3",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,"A modifier that can add to a character value to increase or decrease it"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public class MyNetworkBehaviour : NetworkBehaviour \n{\n    [SyncVar, BitCountFromRange(-100, 100)]\n    public int modifier;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Range = 200")," so bit count is 8, causing the real range to be -100 to 155"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"modifier = 57")," will serialize to ",(0,r.kt)("inlineCode",{parentName:"p"},"1001_1101")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"modifier = -57")," will serialize to ",(0,r.kt)("inlineCode",{parentName:"p"},"0010_1011")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"modifier = -110")," ",(0,r.kt)("em",{parentName:"p"},"(out of range)"),"  will serialize to ",(0,r.kt)("inlineCode",{parentName:"p"},"1111_0110")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"modifier = 130")," will serialize to ",(0,r.kt)("inlineCode",{parentName:"p"},"1110_0110"),", even tho 130 is out of range there is enough range because bit count rounds up."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"modifier = 170")," ",(0,r.kt)("em",{parentName:"p"},"(out of range)")," will serialize to ",(0,r.kt)("inlineCode",{parentName:"p"},"0000_1110")),(0,r.kt)("h3",{id:"example-2"},"Example 2"),(0,r.kt)("p",null,"A Direction enum to say which way a model is facing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public enum MyDirection\n{\n    Backwards = -1,\n    None = 0,\n    Forwards = 1,\n}\npublic class MyNetworkBehaviour : NetworkBehaviour \n{\n    [SyncVar, BitCount(-1, 1)]\n    public MyDirection direction;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Range = 3")," so bit count is ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),", causing the real range to be -1 to 2"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"direction = -1")," will serialize to ",(0,r.kt)("inlineCode",{parentName:"p"},"00")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"direction = 1")," will serialize to ",(0,r.kt)("inlineCode",{parentName:"p"},"10")),(0,r.kt)("h3",{id:"generated-code"},"Generated Code"),(0,r.kt)("p",null,"Source:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"[SyncVar, BitCountFromRange(-100, 100)]\npublic int myValue;\n")),(0,r.kt)("p",null,"Generated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public override bool SerializeSyncVars(NetworkWriter writer, bool initialState)\n{\n    ulong syncVarDirtyBits = base.SyncVarDirtyBits;\n    bool result = base.SerializeSyncVars(writer, initialize);\n\n    if (initialState) \n    {\n        writer.Write((ulong)(this.myValue - (-100)), 8);\n        return true;\n    }\n\n    writer.Write(syncVarDirtyBits, 1);\n    if ((syncVarDirtyBits & 1UL) != 0UL)\n    {\n        writer.Write((ulong)(this.myValue - (-100)), 8);\n        result = true;\n    }\n\n    return result;\n}\n\npublic override void DeserializeSyncVars(NetworkReader reader, bool initialState)\n{\n    base.DeserializeSyncVars(reader, initialState);\n\n    if (initialState)\n    {\n        this.myValue = reader.Read(8) + (-100);\n        return;\n    }\n    \n    ulong dirtyMask = reader.Read(1);\n    if ((dirtyMask & 1UL) != 0UL)\n    {\n        this.myValue = reader.Read(8) + (-100);\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"last updated for Mirage v101.8.0")))}c.isMDXComponent=!0}}]);