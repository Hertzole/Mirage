"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[5195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,y=u["".concat(l,".").concat(p)]||u[p]||h[p]||i;return n?a.createElement(y,o(o({ref:t},d),{},{components:n})):a.createElement(y,o({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:1},o="State Synchronization",s={unversionedId:"guides/sync/index",id:"guides/sync/index",title:"State Synchronization",description:"State synchronization refers to the synchronization of values such as integers, floating point numbers, strings, and boolean values belonging to scripts.",source:"@site/docs/guides/sync/index.md",sourceDirName:"guides/sync",slug:"/guides/sync/",permalink:"/Mirage/docs/guides/sync/",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/guides/sync/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Google Cloud Services",permalink:"/Mirage/docs/guides/development-servers/google-cloud"},next:{title:"Sync Var",permalink:"/Mirage/docs/guides/sync/sync-var"}},l={},c=[{value:"Sync To Owner",id:"sync-to-owner",level:2},{value:"Advanced State Synchronization",id:"advanced-state-synchronization",level:2},{value:"Custom Serialization Functions",id:"custom-serialization-functions",level:2},{value:"Serialization Flow",id:"serialization-flow",level:2}],d={toc:c};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"state-synchronization"},"State Synchronization"),(0,r.kt)("p",null,"State synchronization refers to the synchronization of values such as integers, floating point numbers, strings, and boolean values belonging to scripts."),(0,r.kt)("p",null,"State synchronization is done from the server to remote clients. The local client does not have data serialized to it. It does not need it, because it shares the scene with the server. However, ",(0,r.kt)("inlineCode",{parentName:"p"},"SyncVar")," hooks are called on local clients."),(0,r.kt)("p",null,"Data is not synchronized in the opposite direction - from remote clients to the server. To do this, you need to use Server RPC calls."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guides/sync/sync-var"},"SyncVar"),(0,r.kt)("br",{parentName:"li"}),"SyncVars are variables of scripts that inherit from ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/NetworkBehaviour"},(0,r.kt)("inlineCode",{parentName:"a"},"NetworkBehaviour")),", which are synchronized from the server to clients. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guides/sync/sync-list"},"SyncList"),(0,r.kt)("br",{parentName:"li"}),"SyncLists contain lists of values and synchronize data from servers to clients."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guides/sync/sync-dictionary"},"SyncDictionary"),(0,r.kt)("br",{parentName:"li"}),"A SyncDictionary is an associative array containing an unordered list of key, value pairs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guides/sync/sync-hash-set"},"SyncHashSet"),(0,r.kt)("br",{parentName:"li"}),"An unordered set of values that do not repeat."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guides/sync/sync-sorted-set"},"SyncSortedSet"),(0,r.kt)("br",{parentName:"li"}),"A sorted set of values that do not repeat.")),(0,r.kt)("h2",{id:"sync-to-owner"},"Sync To Owner"),(0,r.kt)("p",null,'It is often the case when you don\'t want some player data visible to other players. In the inspector change the "Network Sync Mode" from "Observers" (default) to "Owner" to let Mirage know to synchronize the data only with the owning client.'),(0,r.kt)("p",null,"For example, suppose you are making an inventory system. Suppose players A, B, and C are in the same area. There will be a total of 12 objects in the entire network:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Client A has Player A (himself), Player B, and Player C"),(0,r.kt)("li",{parentName:"ul"},"Client B has Player A, Player B (himself), and Player C"),(0,r.kt)("li",{parentName:"ul"},"Client C has Player A, Player B, and Player C (himself)"),(0,r.kt)("li",{parentName:"ul"},"The server has Player A, Player B, Player C")),(0,r.kt)("p",null,"each one of them would have an Inventory component"),(0,r.kt)("p",null,"Suppose Player A picks up some loot.  The server adds the loot to Player's A inventory,  which would have a ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/sync/sync-list"},"SyncLists")," of Items. "),(0,r.kt)("p",null,"By default,  Mirage now has to synchronize player A's inventory everywhere, which means sending an update message to client A, client B, and client C, because they all have a copy of Player A. This is wasteful, Client B and Client C do not need to know about Player's A inventory, they never see it on screen. It is also a security problem, someone could hack the client and display other people's inventory and use it to their advantage."),(0,r.kt)("p",null,'If you set the "Network Sync Mode" in the Inventory component to "Owner", then Player A\'s inventory will only be synchronized with Client A.  '),(0,r.kt)("p",null,"Now, suppose instead of 3 people you have 50 people in an area and one of them picks up loot.  It means that instead of sending 50 messages to 50 different clients,  you would only send 1.  This can have a big impact on the bandwidth in your game."),(0,r.kt)("p",null,"Other typical use cases include quests,  player's hand in a card game, skills, experience, or any other data you don't need to share with other players."),(0,r.kt)("h2",{id:"advanced-state-synchronization"},"Advanced State Synchronization"),(0,r.kt)("p",null,"In most cases, the use of SyncVars is enough for your game scripts to serialize their state to clients. However, in some cases, you might require more complex serialization code. This page is only relevant for advanced developers who need customized synchronization solutions that go beyond Mirage\u2019s normal SyncVar feature."),(0,r.kt)("h2",{id:"custom-serialization-functions"},"Custom Serialization Functions"),(0,r.kt)("p",null,"To perform your own custom serialization, you can implement virtual functions on ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/Mirage/NetworkBehaviour"},"NetworkBehaviour")," to be used for SyncVar serialization. These functions are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public virtual bool OnSerialize(NetworkWriter writer, bool initialState);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public virtual void OnDeserialize(NetworkReader reader, bool initialState);\n")),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"initialState")," flag to differentiate between the first time a game object is serialized and when incremental updates can be sent. The first time a game object is sent to a client, it must include a full state snapshot, but subsequent updates can save on bandwidth by including only incremental changes."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"OnSerialize")," function should return true to indicate that an update should be sent. If it returns true, the dirty bits for that script are set to zero. If it returns false, the dirty bits are not changed. This allows multiple changes to a script to be accumulated over time and sent when the system is ready, instead of every frame."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"OnSerialize")," function is only called for ",(0,r.kt)("inlineCode",{parentName:"p"},"initialState")," or when the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/Mirage/NetworkBehaviour"},"NetworkBehaviour")," is dirty. A ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/Mirage/NetworkBehaviour"},"NetworkBehaviour")," will only be dirty if a ",(0,r.kt)("inlineCode",{parentName:"p"},"SyncVar")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"SyncObject")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"SyncList"),") has changed since the last OnSerialize call. After data has been sent the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/Mirage/NetworkBehaviour"},"NetworkBehaviour")," will not be dirty again until the next ",(0,r.kt)("inlineCode",{parentName:"p"},"syncInterval")," (set in the inspector). A ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/Mirage/NetworkBehaviour"},"NetworkBehaviour")," can also be marked as dirty by manually calling ",(0,r.kt)("inlineCode",{parentName:"p"},"SetDirtyBit")," (this does not bypass the ",(0,r.kt)("inlineCode",{parentName:"p"},"syncInterval")," limit)."),(0,r.kt)("p",null,"Although this works,  it is usually better to let Mirage generate these methods and provide ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/data-types"},"custom serializers")," for your specific field."),(0,r.kt)("h2",{id:"serialization-flow"},"Serialization Flow"),(0,r.kt)("p",null,"Game objects with the Network Identity component attached can have multiple scripts derived from ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/Mirage/NetworkBehaviour"},"NetworkBehaviour"),". The flow for serializing these game objects is:"),(0,r.kt)("p",null,"On the server:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/NetworkBehaviour"},"NetworkBehaviour")," has a dirty mask. This mask is available inside ",(0,r.kt)("inlineCode",{parentName:"li"},"OnSerialize")," as ",(0,r.kt)("inlineCode",{parentName:"li"},"syncVarDirtyBits")),(0,r.kt)("li",{parentName:"ul"},"Each SyncVar in a ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/NetworkBehaviour"},"NetworkBehaviour")," script is assigned a bit in the dirty mask."),(0,r.kt)("li",{parentName:"ul"},"Changing the value of SyncVars causes the bit for that SyncVar to be set in the dirty mask"),(0,r.kt)("li",{parentName:"ul"},"Alternatively, calling ",(0,r.kt)("inlineCode",{parentName:"li"},"SetDirtyBit")," writes directly to the dirty mask"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/NetworkIdentity"},"NetworkIdentity")," game objects are checked on the server as part of its update loop"),(0,r.kt)("li",{parentName:"ul"},"If any ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/NetworkBehaviour"},"NetworkBehaviour"),"s on a ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/NetworkIdentity"},"NetworkIdentity")," are dirty, then a ",(0,r.kt)("inlineCode",{parentName:"li"},"UpdateVars")," packet is created for that game object"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"UpdateVars")," packet is populated by calling ",(0,r.kt)("inlineCode",{parentName:"li"},"OnSerialize")," on each ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/NetworkBehaviour"},"NetworkBehaviour")," on the game object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/NetworkBehaviour"},"NetworkBehaviour"),"s that are not dirty write a zero to the packet for their dirty bits"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/NetworkBehaviour"},"NetworkBehaviour"),"s that are dirty write their dirty mask, then the values for the SyncVars that have changed"),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"OnSerialize")," returns true for a ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/NetworkBehaviour"},"NetworkBehaviour"),", the dirty mask is reset for that ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/NetworkBehaviour"},"NetworkBehaviour")," so it does not send again until its value changes."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"UpdateVars")," packet is sent to ready clients that are observing the game object")),(0,r.kt)("p",null,"On the client:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an ",(0,r.kt)("inlineCode",{parentName:"li"},"UpdateVars packet")," is received for a game object"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"OnDeserialize")," function is called for each ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/NetworkBehaviour"},"NetworkBehaviour")," script on the game object"),(0,r.kt)("li",{parentName:"ul"},"Each ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/NetworkBehaviour"},"NetworkBehaviour")," script on the game object reads a dirty mask."),(0,r.kt)("li",{parentName:"ul"},"If the dirty mask for a ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/Mirage/NetworkBehaviour"},"NetworkBehaviour")," is zero, the ",(0,r.kt)("inlineCode",{parentName:"li"},"OnDeserialize")," function returns without reading any more"),(0,r.kt)("li",{parentName:"ul"},"If the dirty mask is a non-zero value, then the ",(0,r.kt)("inlineCode",{parentName:"li"},"OnDeserialize")," function reads the values for the SyncVars that correspond to the dirty bits that are set"),(0,r.kt)("li",{parentName:"ul"},"If there are SyncVar hook functions, those are invoked with the value read from the stream.")),(0,r.kt)("p",null,"So for this script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using Mirage;\n\npublic class Data : NetworkBehaviour\n{\n    [SyncVar(hook = nameof(OnInt1Changed))]\n    public int int1 = 66;\n\n    [SyncVar]\n    public int int2 = 23487;\n\n    [SyncVar]\n    public string MyString = "Example string";\n\n    void OnInt1Changed(int oldValue, int newValue)\n    {\n        // do something here\n    }\n}\n')),(0,r.kt)("p",null,"The following sample shows the code that is generated by Mirage for the ",(0,r.kt)("inlineCode",{parentName:"p"},"SerializeSyncVars")," function which is called inside ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/Mirage/NetworkBehaviour"},"NetworkBehaviour"),(0,r.kt)("inlineCode",{parentName:"p"},".OnSerialize"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public override bool SerializeSyncVars(NetworkWriter writer, bool initialState)\n{\n    // Write any SyncVars in base class\n    bool written = base.SerializeSyncVars(writer, forceAll);\n\n    if (initialState)\n    {\n        // The first time a game object is sent to a client, send all the data (and no dirty bits)\n        writer.WritePackedUInt32((uint)this.int1);\n        writer.WritePackedUInt32((uint)this.int2);\n        writer.Write(this.MyString);\n        return true;\n    }\n    else \n    {\n        // Writes which SyncVars have changed\n        writer.WritePackedUInt64(base.syncVarDirtyBits);\n\n        if ((base.get_syncVarDirtyBits() & 1u) != 0u)\n        {\n            writer.WritePackedUInt32((uint)this.int1);\n            written = true;\n        }\n\n        if ((base.get_syncVarDirtyBits() & 2u) != 0u)\n        {\n            writer.WritePackedUInt32((uint)this.int2);\n            written = true;  \n        }\n\n        if ((base.get_syncVarDirtyBits() & 4u) != 0u)\n        {\n            writer.Write(this.MyString);\n            written = true;     \n        }\n\n        return written;\n    }\n}\n")),(0,r.kt)("p",null,"The following sample shows the code that is generated by Mirage for the ",(0,r.kt)("inlineCode",{parentName:"p"},"DeserializeSyncVars")," function which is called inside ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/Mirage/NetworkBehaviour"},"NetworkBehaviour"),(0,r.kt)("inlineCode",{parentName:"p"},".OnDeserialize"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public override void DeserializeSyncVars(NetworkReader reader, bool initialState)\n{\n    // Read any SyncVars in base class\n    base.DeserializeSyncVars(reader, initialState);\n\n    if (initialState)\n    {\n        // The first time a game object is sent to a client, read all the data (and no dirty bits)\n        int oldInt1 = this.int1;\n        this.int1 = (int)reader.ReadPackedUInt32();\n        // if old and new values are not equal, call hook\n        if (!base.SyncVarEqual<int>(num, ref this.int1))\n        {\n            this.OnInt1Changed(num, this.int1);\n        }\n\n        this.int2 = (int)reader.ReadPackedUInt32();\n        this.MyString = reader.ReadString();\n        return;\n    }\n\n    int dirtySyncVars = (int)reader.ReadPackedUInt32();\n    // is 1st SyncVar dirty\n    if ((dirtySyncVars & 1) != 0)\n    {\n        int oldInt1 = this.int1;\n        this.int1 = (int)reader.ReadPackedUInt32();\n        // if old and new values are not equal, call hook\n        if (!base.SyncVarEqual<int>(num, ref this.int1))\n        {\n            this.OnInt1Changed(num, this.int1);\n        }\n    }\n\n    // is 2nd SyncVar dirty\n    if ((dirtySyncVars & 2) != 0)\n    {\n        this.int2 = (int)reader.ReadPackedUInt32();\n    }\n\n    // is 3rd SyncVar dirty\n    if ((dirtySyncVars & 4) != 0)\n    {\n        this.MyString = reader.ReadString();\n    }\n}\n")),(0,r.kt)("p",null,"If a ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/Mirage/NetworkBehaviour"},"NetworkBehaviour")," has a base class that also has serialization functions, the base class functions should also be called."))}h.isMDXComponent=!0}}]);