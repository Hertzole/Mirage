"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[1007],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>d});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),l=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},p=function(e){var a=l(e.components);return r.createElement(i.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=l(t),d=n,m=h["".concat(i,".").concat(d)]||h[d]||u[d]||s;return t?r.createElement(m,c(c({ref:a},p),{},{components:t})):r.createElement(m,c({ref:a},p))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,c=new Array(s);c[0]=h;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<s;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},87717:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(87462),n=(t(67294),t(3905));const s={sidebar_position:4,title:"Spawn Player - Custom"},c="Custom Character Spawning",o={unversionedId:"guides/game-objects/spawn-player-custom",id:"guides/game-objects/spawn-player-custom",title:"Spawn Player - Custom",description:"Full scripts for this page can be found in the SpawnCustomPlayer sample in the package manager or on GitHub",source:"@site/docs/guides/game-objects/spawn-player-custom.md",sourceDirName:"guides/game-objects",slug:"/guides/game-objects/spawn-player-custom",permalink:"/Mirage/docs/guides/game-objects/spawn-player-custom",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/guides/game-objects/spawn-player-custom.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Spawn Player - Custom"},sidebar:"docs",previous:{title:"Spawn Player",permalink:"/Mirage/docs/guides/game-objects/spawn-player"},next:{title:"Spawn Object",permalink:"/Mirage/docs/guides/game-objects/spawn-object"}},i={},l=[{value:"Ready State",id:"ready-state",level:2},{value:"Switching Characters",id:"switching-characters",level:2},{value:"Destroying Characters",id:"destroying-characters",level:2}],p={toc:l};function u(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"custom-character-spawning"},"Custom Character Spawning"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Full scripts for this page can be found in the SpawnCustomPlayer sample in the package manager or on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MirageNet/Mirage/tree/master/Assets/Mirage/Samples%7E/SpawnCustomPlayer"},"GitHub"))),(0,n.kt)("p",null,"Mirage comes with a CharacterSpawner which will automatically spawn a character object when a client connects."),(0,n.kt)("p",null,"Many games need character customization. You may want to pick the color of the hair, eyes, skin, height, race, etc."),(0,n.kt)("p",null,"In this case, you will need to create your own CharacterSpawner.  Follow these steps:"),(0,n.kt)("p",null,"1) Create your player prefabs (as many as you need) and add them to the Spawnable Prefabs in your ClientObjectManager.\n2) Create a message that describes your player. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public struct CreateMMOCharacterMessage\n{\n    public Race race;\n    public string name;\n    public Color hairColor;\n    public Color eyeColor;\n}\n\npublic enum Race\n{\n    Human,\n    Elvish,\n    Dwarvish,\n}\n")),(0,n.kt)("p",null,"3) Create Player Spawner class and add it to some GameObject in your scene"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},'public class CustomCharacterSpawner : MonoBehaviour\n{\n    [Header("References")]\n    public NetworkClient Client;\n    public NetworkServer Server;\n    public ClientObjectManager ClientObjectManager;\n    public ServerObjectManager ServerObjectManager;\n\n    [Header("Prefabs")]\n    // Different prefabs based on the Race the player picks\n    public CustomCharacter HumanPrefab;\n    public CustomCharacter ElvishPrefab;\n    public CustomCharacter DwarvishPrefab;\n}\n')),(0,n.kt)("p",null,"4) Drag the NetworkClient and NetworkServer and Scene manager to the fields"),(0,n.kt)("p",null,"5) Hook into events:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public void Start()\n{\n    Client.Started.AddListener(OnClientStarted);\n    Client.Authenticated.AddListener(OnClientAuthenticated);\n    Server.Started.AddListener(OnServerStarted);\n}\n")),(0,n.kt)("p",null,"6) register the prefabs when the client starts"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"private void OnClientStarted()\n{\n    // Make sure all prefabs are Register so mirage can spawn the character for this client and for other players\n    ClientObjectManager.RegisterPrefab(HumanPrefab.Identity);\n    ClientObjectManager.RegisterPrefab(ElvishPrefab.Identity);\n    ClientObjectManager.RegisterPrefab(DwarvishPrefab.Identity);\n}\n")),(0,n.kt)("p",null,"7) Send your message with your character data when your client connects, or after the user submits his preferences."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},'// You can send the message here if you already know\n// everything about the character at the time of player\n// or at a later time when the user submits his preferences\nprivate void OnClientAuthenticated(INetworkPlayer player)\n{\n    var mmoCharacter = new CreateMMOCharacterMessage\n    {\n        // populate the message with your data\n        name = "player user name",\n        race = Race.Human,\n        eyeColor = Color.red,\n        hairColor = Color.black,\n    };\n    player.Send(mmoCharacter);\n}\n')),(0,n.kt)("p",null,"8) Receive your message in the server and spawn the player"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},'private void OnServerStarted()\n{\n    // Wait for client to send us an AddPlayerMessage\n    Server.MessageHandler.RegisterHandler<CreateMMOCharacterMessage>(OnCreateCharacter);\n}\n\nprivate void OnCreateCharacter(INetworkPlayer player, CreateMMOCharacterMessage msg)\n{\n    CustomCharacter prefab = GetPrefab(msg);\n\n    // Create your character object\n    // Use the data in msg to configure it\n    CustomCharacter character = Instantiate(prefab);\n\n    // Set syncVars before telling Mirage to spawn character\n    // This will cause them to be sent to client in the spawn message\n    character.PlayerName = msg.name;\n    character.hairColor = msg.hairColor;\n    character.eyeColor = msg.eyeColor;\n\n    // Spawn it as the character object\n    ServerObjectManager.AddCharacter(player, character.Identity);\n}\n\nprivate CustomCharacter GetPrefab(CreateMMOCharacterMessage msg)\n{\n    // Get prefab based on race\n    CustomCharacter prefab;\n    switch (msg.race)\n    {\n        case Race.Human: prefab = HumanPrefab; break;\n        case Race.Elvish: prefab = ElvishPrefab; break;\n        case Race.Dwarvish: prefab = DwarvishPrefab; break;\n        // Default case to check that client sent valid race.\n        // The only reason it should be invalid is if the client\'s code was modified by an attacker\n        // Throw will cause the client to be kicked\n        default: throw new InvalidEnumArgumentException("Invalid race given");\n    }\n\n    return prefab;\n}\n')),(0,n.kt)("h2",{id:"ready-state"},"Ready State"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"This out of date and needs updating")),(0,n.kt)("p",null,"In addition to characters, player also have a \u201cscene is ready\u201d state. The server sends clients that are ready information about spawned game objects and state synchronization updates; clients which are not ready are not sent these updates. "),(0,n.kt)("p",null,"When a client initially connects to a server, their SceneIsReady property will be true. However initial spawning will not happen until a character has been added or you manually tell the server to send spawned objects."),(0,n.kt)("p",null,"Once a client has completed all its pre-game setup, and all its Assets are loaded, it can send a character message. As seen in the example above this will tell the server to spawn the player's character using ",(0,n.kt)("inlineCode",{parentName:"p"},"ServerObjectManager.AddCharacter"),". After the character is spawned mirage will automatically send spawn message for the other spawned object to the client."),(0,n.kt)("h2",{id:"switching-characters"},"Switching Characters"),(0,n.kt)("p",null,"To replace the character game object for a player, use ",(0,n.kt)("inlineCode",{parentName:"p"},"ServerObjectManager.ReplaceCharacter"),". This is useful having different game object for the player at different times, such as in game and a pregame lobby. The function takes the same arguments as ",(0,n.kt)("inlineCode",{parentName:"p"},"AddCharacter"),", but allows there to already be a character for that player. The old character game object is not destroyed when ReplaceCharacter is called. The ",(0,n.kt)("inlineCode",{parentName:"p"},"NetworkRoomManager")," uses this technique to switch from the ",(0,n.kt)("inlineCode",{parentName:"p"},"NetworkRoomPlayer")," game object to a game play player game object when all the players in the room are ready."),(0,n.kt)("p",null,"You can also use ",(0,n.kt)("inlineCode",{parentName:"p"},"ReplaceCharacter")," to respawn a player or change the object that represents the player. In some cases it is better to just disable a game object and reset its game attributes on respawn. The following code sample demonstrates how to actually replace the player game object with a new game object:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public class CustomCharacterSpawner : MonoBehaviour\n{\n    public NetworkServer Server;\n    public ServerObjectManager ServerObjectManager;\n\n    public void Respawn(NetworkPlayer player, GameObject newPrefab)\n    {\n        // Cache a reference to the current character object\n        GameObject oldPlayer = player.Identity.gameObject;\n\n        var newCharacter = Instantiate(newPrefab);\n\n        // Instantiate the new character object and broadcast to clients\n        // NOTE: here we can use `keepAuthority: true` because we are calling Destroy on the old prefab immediately after.\n        ServerObjectManager.ReplaceCharacter(player, newCharacter, keepAuthority: true);\n\n        // Remove the previous character object that's now been replaced\n        Server.Destroy(oldPlayer);\n    }\n}\n")),(0,n.kt)("h2",{id:"destroying-characters"},"Destroying Characters"),(0,n.kt)("p",null,"Once the character is finished with (eg game over, or player died) you can remove the character using ",(0,n.kt)("inlineCode",{parentName:"p"},"ServerObjectManager.DestroyCharacter")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public void OnPlayerDeath(INetworkPlayer player)\n{\n    ServerObjectManager.DestroyCharacter(player);\n}\n")),(0,n.kt)("p",null,"Alternatively you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"ServerObjectManager.RemoveCharacter")," to remove it as the player's character without destroying it"))}u.isMDXComponent=!0}}]);