"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[8577],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>u});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?t.createElement(g,i(i({ref:r},p),{},{components:n})):t.createElement(g,i({ref:r},p))}));function u(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60464:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var t=n(87462),a=(n(67294),n(3905));const o={sidebar_position:5},i="RPC Examples",c={unversionedId:"guides/remote-actions/rpc-examples",id:"guides/remote-actions/rpc-examples",title:"RPC Examples",description:"Examples of RPC and generated code.",source:"@site/docs/guides/remote-actions/rpc-examples.md",sourceDirName:"guides/remote-actions",slug:"/guides/remote-actions/rpc-examples",permalink:"/Mirage/docs/guides/remote-actions/rpc-examples",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/guides/remote-actions/rpc-examples.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Network Messages",permalink:"/Mirage/docs/guides/remote-actions/network-messages"},next:{title:"Callbacks Overview",permalink:"/Mirage/docs/guides/callbacks/"}},l={},s=[{value:"Example 1",id:"example-1",level:2},{value:"Generated code",id:"generated-code",level:3}],p={toc:s};function d(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rpc-examples"},"RPC Examples"),(0,a.kt)("p",null,"Examples of RPC and generated code."),(0,a.kt)("h2",{id:"example-1"},"Example 1"),(0,a.kt)("p",null,"Set a player's name from client and have it synced to other players."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public class Player : NetworkBehaviour\n{\n    [SyncVar] \n    public string PlayerName;\n\n    [ServerRpc]\n    public void RpcChangeName(string newName)\n    {\n        PlayerName = newName;\n    }\n}\n")),(0,a.kt)("h3",{id:"generated-code"},"Generated code"),(0,a.kt)("p",null,"Weaver moves the user code into a new function and then replace the body of the RPC with an internal send call."),(0,a.kt)("p",null,"RPCs are registered using the classes static constructor with methods that will read all the parameter and then invoke the user code method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'public class Player : NetworkBehaviour\n{\n    [SyncVar] \n    public string PlayerName;\n\n    [ServerRpc]\n    public void RpcChangeName(string newName)\n    {\n        if (this.IsServer)\n        {\n            UserCode_RpcChangeName_123456789(newName);\n        }\n        else \n        {\n            using (PooledNetworkWriter writer = NetworkWriterPool.GetWriter())\n            {\n                writer.WriteString(newName);\n                ServerRpcSender.Send(this, 123456789, writer, 0, true);\n            }\n        }\n    }\n\n    public void UserCode_RpcChangeName_123456789(string newName)\n    {\n        PlayerName = newName;\n    }\n    \n    protected void Skeleton_RpcChangeName_123456789(NetworkReader reader, INetworkPlayer senderConnection, int replyId)\n    {\n        this.UserCode_RpcChangeName_123456789(reader.ReadString());\n    }\n\n    public Player()\n    {\n        this.remoteCallCollection.Register(0, typeof(Player), "Player.RpcChangeName", RpcInvokeType.ServerRpc, new CmdDelegate(Skeleton_RpcChangeName), true);\n    }\n\n    protected override int GetRpcCount()\n    {\n        return 1;\n    }\n}\n')))}d.isMDXComponent=!0}}]);