"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[6382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,y=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(y,l(l({ref:t},p),{},{components:n})):i.createElement(y,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_position:7},l="Serialization",o={unversionedId:"guides/serialization",id:"guides/serialization",title:"Serialization",description:"This page goes into depth about Serialization, for the basics see Data Types.",source:"@site/docs/guides/serialization.md",sourceDirName:"guides",slug:"/guides/serialization",permalink:"/Mirage/docs/guides/serialization",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/guides/serialization.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docs",previous:{title:"Data Types",permalink:"/Mirage/docs/guides/data-types"},next:{title:"Network Visibility",permalink:"/Mirage/docs/guides/network-visibility"}},s={},d=[{value:"Rules And Tips",id:"rules-and-tips",level:2},{value:"Unsupported Types",id:"unsupported-types",level:3},{value:"Built-in Read Write Functions",id:"built-in-read-write-functions",level:3},{value:"NetworkIdentity, GameObject, Transform",id:"networkidentity-gameobject-transform",level:4},{value:"Generated Read Write Functions",id:"generated-read-write-functions",level:3},{value:"Classes and Structs",id:"classes-and-structs",level:4},{value:"Enums",id:"enums",level:4},{value:"Collections",id:"collections",level:4},{value:"Adding Custom Read Write functions",id:"adding-custom-read-write-functions",level:2},{value:"Properties Example",id:"properties-example",level:4},{value:"Unsupported type Example",id:"unsupported-type-example",level:4},{value:"Debugging",id:"debugging",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"serialization"},"Serialization"),(0,a.kt)("p",null,"This page goes into depth about Serialization, for the basics see ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/data-types"},"Data Types"),"."),(0,a.kt)("p",null,"Mirage creates ",(0,a.kt)("inlineCode",{parentName:"p"},"Serialize")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Deserialize")," functions for types using Weaver. Weaver edits the dll after unity compiles\nthem using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jbevain/cecil"},"Mono.Cecil"),". This allows Mirage to have a lot of complex features like\nSyncVar, ClientRpc, and Message Serialization without the user needing to manually set everything up."),(0,a.kt)("h2",{id:"rules-and-tips"},"Rules And Tips"),(0,a.kt)("p",null,"There are some rules and limits for what Weaver can do. Some features add complexity and are hard to maintain so have\nnot been implemented. These features are not impossible to implement and could be added if there is a high demand for them."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You should be able to write Custom Read/Write functions for any type, and Weaver will use them.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This means if there is an unsupported type like ",(0,a.kt)("inlineCode",{parentName:"li"},"int[][]")," creating a custom Read/Write function will allow you to\nsync ",(0,a.kt)("inlineCode",{parentName:"li"},"int[][]")," in SyncVar/ClientRpc/etc"))),(0,a.kt)("li",{parentName:"ul"},"If you have a type that has a field that is not able to be serialized, you can mark that field with\n",(0,a.kt)("inlineCode",{parentName:"li"},"[System.NonSerialized]")," and weaver will ignore it")),(0,a.kt)("h3",{id:"unsupported-types"},"Unsupported Types"),(0,a.kt)("p",null,"Some of these types are unsupported due to the complexity they would add, as mentioned above."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Types in this list can have custom writers.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Jagged and Multidimensional array"),(0,a.kt)("li",{parentName:"ul"},"Types that Inherit from ",(0,a.kt)("inlineCode",{parentName:"li"},"UnityEngine.Component")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UnityEngine.Object")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UnityEngine.ScriptableObject")),(0,a.kt)("li",{parentName:"ul"},"Generic Types, eg ",(0,a.kt)("inlineCode",{parentName:"li"},"MyData<T>"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Custom Read/Write must declare T, eg ",(0,a.kt)("inlineCode",{parentName:"li"},"MyData<int>")))),(0,a.kt)("li",{parentName:"ul"},"Interfaces"),(0,a.kt)("li",{parentName:"ul"},"Types that reference themselves")),(0,a.kt)("h3",{id:"built-in-read-write-functions"},"Built-in Read Write Functions"),(0,a.kt)("p",null,"Mirage provides some built-in Read/Write Functions. They can be found in ",(0,a.kt)("inlineCode",{parentName:"p"},"NetworkReaderExtensions")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"NetworkWriterExtensions"),"."),(0,a.kt)("p",null,"This is a non-compete list of types that have built-in functions, check the classes above to see the full list."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Most ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types"},"C# primitive types"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Common Unity structs"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Vector3"),(0,a.kt)("li",{parentName:"ul"},"Quaternion"),(0,a.kt)("li",{parentName:"ul"},"Rect"),(0,a.kt)("li",{parentName:"ul"},"Ray"),(0,a.kt)("li",{parentName:"ul"},"Guid"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"NetworkIdentity, GameObject, Transform\n"))),(0,a.kt)("h4",{id:"networkidentity-gameobject-transform"},"NetworkIdentity, GameObject, Transform"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"NetId")," of the object is sent over the network, and the object with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"NetId")," is returned on the other side.\nIf the ",(0,a.kt)("inlineCode",{parentName:"p"},"NetId")," is zero or an object is not found then ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," will be returned."),(0,a.kt)("h3",{id:"generated-read-write-functions"},"Generated Read Write Functions"),(0,a.kt)("p",null,"Weaver will generate read/write functions for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Classes or Structs"),(0,a.kt)("li",{parentName:"ul"},"Enums"),(0,a.kt)("li",{parentName:"ul"},"Arrays",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"eg ",(0,a.kt)("inlineCode",{parentName:"li"},"int[]")))),(0,a.kt)("li",{parentName:"ul"},"ArraySegments",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"eg ",(0,a.kt)("inlineCode",{parentName:"li"},"ArraySegment<int>")))),(0,a.kt)("li",{parentName:"ul"},"Lists",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"eg ",(0,a.kt)("inlineCode",{parentName:"li"},"List<int>"))))),(0,a.kt)("h4",{id:"classes-and-structs"},"Classes and Structs"),(0,a.kt)("p",null,"Weaver will read/write every public field in the type unless the field is marked with ",(0,a.kt)("inlineCode",{parentName:"p"},"[System.NonSerialized]"),".\nIf there is an unsupported type in the class or struct Weaver will fail to make read/write functions for it."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The weaver does not check properties")),(0,a.kt)("h4",{id:"enums"},"Enums"),(0,a.kt)("p",null,"Weaver will use the underlying type of an enum to read and write them. By default this is ",(0,a.kt)("inlineCode",{parentName:"p"},"int"),"."),(0,a.kt)("p",null,"For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"Switch")," will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"byte")," read/write functions to be serialized"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public enum Switch : byte\n{\n    Left,\n    Middle,\n    Right,\n}\n")),(0,a.kt)("h4",{id:"collections"},"Collections"),(0,a.kt)("p",null,"Weaver will generate writes for the collections listed above. Weaver will use the element's read/write function, so it must\nbe a supported type or have a custom read/write function."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"float[]")," is a supported type because Mirage has a built-in read/write function for ",(0,a.kt)("inlineCode",{parentName:"li"},"float"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MyData[]")," is a supported type as Weaver is able to generate a read/write function for ",(0,a.kt)("inlineCode",{parentName:"li"},"MyData")," ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public struct MyData\n{\n    public int someValue;\n    public float anotherValue;\n}\n")),(0,a.kt)("h2",{id:"adding-custom-read-write-functions"},"Adding Custom Read Write functions"),(0,a.kt)("p",null,"Custom read/write functions are static methods like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public static void WriteMyType(this NetworkWriter writer, MyType value)\n{\n    // write MyType data here\n}\n\npublic static MyType ReadMyType(this NetworkReader reader)\n{\n    // read MyType data here\n}\n")),(0,a.kt)("p",null,"It is best practice to make read/write ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods"},"extension methods")," so they can be called like ",(0,a.kt)("inlineCode",{parentName:"p"},"writer.WriteMyType(value)"),"."),(0,a.kt)("p",null,"It is a good idea to call them ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadMyType")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteMyType")," so it is obvious what type they are for. However the name of the function doesn't matter, weaver should be able to find it no matter what it is called."),(0,a.kt)("h4",{id:"properties-example"},"Properties Example"),(0,a.kt)("p",null,"Weaver won't write properties, but a custom writer can be used to send them over the network."),(0,a.kt)("p",null,"This can be useful if you want to have ",(0,a.kt)("inlineCode",{parentName:"p"},"private set")," for your properties"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public struct MyData\n{\n    public int someValue { get; private set; }\n    public float anotherValue { get; private set; }\n\n    public MyData(int someValue, float anotherValue)\n    {\n        this.someValue = someValue;\n        this.anotherValue = anotherValue;\n    }\n}\n\npublic static class CustomReadWriteFunctions \n{\n    public static void WriteMyType(this NetworkWriter writer, MyData value)\n    {\n        writer.WriteInt32(value.someValue);\n        writer.WriteSingle(value.anotherValue);\n    }\n\n    public static MyData ReadMyType(this NetworkReader reader)\n    {\n        return new MyData(reader.ReadInt32(), reader.ReadSingle());\n    }\n}\n")),(0,a.kt)("h4",{id:"unsupported-type-example"},"Unsupported type Example"),(0,a.kt)("p",null,"Rigidbody is an unsupported type because it inherits from ",(0,a.kt)("inlineCode",{parentName:"p"},"Component"),". But a custom writer can be added so that it is\nsynced using a NetworkIdentity if one is attached."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public struct MyCollision\n{\n    public Vector3 force;\n    public Rigidbody rigidbody;\n}\n\npublic static class CustomReadWriteFunctions\n{\n    public static void WriteMyCollision(this NetworkWriter writer, MyCollision value)\n    {\n        writer.WriteVector3(value.force);\n\n        NetworkIdentity networkIdentity = value.rigidbody.GetComponent<NetworkIdentity>();\n        writer.WriteNetworkIdentity(networkIdentity);\n    }\n\n    public static MyCollision ReadMyCollision(this NetworkReader reader)\n    {\n        Vector3 force = reader.ReadVector3();\n\n        NetworkIdentity networkIdentity = reader.ReadNetworkIdentity();\n        Rigidbody rigidBody = networkIdentity != null\n            ? networkIdentity.GetComponent<Rigidbody>()\n            : null;\n\n        return new MyCollision\n        {\n            force = force,\n            rigidbody = rigidBody,\n        };\n    }\n}\n")),(0,a.kt)("p",null,"Above are functions for ",(0,a.kt)("inlineCode",{parentName:"p"},"MyCollision"),", but instead, you could add functions for ",(0,a.kt)("inlineCode",{parentName:"p"},"Rigidbody")," and let weaver would generate a writer for ",(0,a.kt)("inlineCode",{parentName:"p"},"MyCollision"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public static class CustomReadWriteFunctions\n{\n    public static void WriteRigidbody(this NetworkWriter writer, Rigidbody rigidbody)\n    {\n        NetworkIdentity networkIdentity = rigidbody.GetComponent<NetworkIdentity>();\n        writer.WriteNetworkIdentity(networkIdentity);\n    }\n\n    public static Rigidbody ReadRigidbody(this NetworkReader reader)\n    {\n        NetworkIdentity networkIdentity = reader.ReadNetworkIdentity();\n        Rigidbody rigidBody = networkIdentity != null\n            ? networkIdentity.GetComponent<Rigidbody>()\n            : null;\n\n        return rigidBody;\n    }\n}\n")),(0,a.kt)("h2",{id:"debugging"},"Debugging"),(0,a.kt)("p",null,"You can use tools like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xd4d/dnSpy"},"dnSpy")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/icsharpcode/ILSpy"},"ILSpy")," to view the complied code after Weaver has altered it. This can help with understanding and debug what Mirage and Weaver does."))}u.isMDXComponent=!0}}]);