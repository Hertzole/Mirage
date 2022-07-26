"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[3802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),g=o,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:3,title:"Google Cloud Services"},l="Google Cloud Services",i={unversionedId:"guides/development-servers/google-cloud",id:"guides/development-servers/google-cloud",title:"Google Cloud Services",description:"This guide will explain how to set up a Linux server running on Google Cloud.",source:"@site/docs/guides/development-servers/google-cloud.md",sourceDirName:"guides/development-servers",slug:"/guides/development-servers/google-cloud",permalink:"/Mirage/docs/guides/development-servers/google-cloud",draft:!1,editUrl:"https://github.com/Hertzole/Mirage/tree/master/doc/docs/guides/development-servers/google-cloud.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Google Cloud Services"},sidebar:"docs",previous:{title:"Amazon Web Services (AWS)",permalink:"/Mirage/docs/guides/development-servers/aws"},next:{title:"State Synchronization",permalink:"/Mirage/docs/guides/sync/"}},s={},u=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Setting up a new Server",id:"setting-up-a-new-server",level:2},{value:"Configure Firewall",id:"configure-firewall",level:2},{value:"Connect to your new instance",id:"connect-to-your-new-instance",level:2},{value:"Setting up the Linux instance",id:"setting-up-the-linux-instance",level:2},{value:"Build your game",id:"build-your-game",level:2},{value:"Upload and extract your game",id:"upload-and-extract-your-game",level:2},{value:"Run server",id:"run-server",level:2},{value:"Using Screen",id:"using-screen",level:3},{value:"View log files",id:"view-log-files",level:3},{value:"Clean up after tutorial",id:"clean-up-after-tutorial",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"google-cloud-services"},"Google Cloud Services"),(0,o.kt)("p",null,"This guide will explain how to set up a Linux server running on ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/"},"Google Cloud"),"."),(0,o.kt)("p",null,'Google cloud offers $300 free credits to new users for a limited time, and it also has "Always free products". See ',(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/free"},"overview")," and ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/free/docs/gcp-free-tier"},"docs")," for more information."),(0,o.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,o.kt)("p",null,"1) In the Cloud Console, on the project selector page, select or create a Cloud project."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you don't plan to keep the resources that you create in this procedure, create a project instead of selecting an existing project. After you finish these steps, you can delete the project, removing all resources associated with the project.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://console.cloud.google.com/projectselector2/home/dashboard"},"Go to the project selector page"))),(0,o.kt)("p",null,"2) You may need to enable billing for your Google Cloud project. If you have free credits (see above) then these will be used first. ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/billing/docs/how-to/modify-project"},"Learn how to confirm billing is enabled for your project.")),(0,o.kt)("h2",{id:"setting-up-a-new-server"},"Setting up a new Server"),(0,o.kt)("p",null,"Start by creating and configuring a new Compute Engine instance."),(0,o.kt)("p",null,"1) In the Cloud Console, go to the VM instances page:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://console.cloud.google.com/compute/instances"},"Go to the VM instances page"))),(0,o.kt)("p",null,"If this is your first instance you will see a dialog prompting you to create a new virtual machine"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create new",src:n(45963).Z,width:"426",height:"253"})),(0,o.kt)("p",null,"2) Click Create to get started."),(0,o.kt)("p",null,"3) On the Create an instance page, configure your instance as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Name your instance. This tutorial uses the instance name `mirror-instance-demo` throughout.\n- Select the region and zone in which you want your instance to be hosted. This tutorial uses the region `us-central1 (Iowa)` and the zone `us-central1-a` throughout.\n- Machine configuration depends on the size of your game. For a simple example, we can use a small server.\n    - select `N1` for series\n    - select `f1-micro` for machine type\n- In the Boot disk section, click Change. The Boot disk dialog will pop up.\n- Change the disk type to SSD Persistent Disk.\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create an instance with name and region",src:n(6090).Z,width:"467",height:"529"})),(0,o.kt)("p",null,"4) Boot disk can be left as default ",(0,o.kt)("inlineCode",{parentName:"p"},"10gb standard persistent disk")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"Debian GNU/Linux 9 (stretch)")," for this tutorial."),(0,o.kt)("p",null,"You may want to change it to best fit your needs. You can instead use an SSD or increase its size, however, this will increase the monthly cost. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Boot disk",src:n(2333).Z,width:"471",height:"114"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The monthly estimate should be shown at the top right next to ",(0,o.kt)("inlineCode",{parentName:"p"},"Name"),".")),(0,o.kt)("p",null,"5) To configure Network settings first example the ",(0,o.kt)("inlineCode",{parentName:"p"},"Management, security, disks, networking, solo tenancy")," section, then click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Networking")," tab."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"expand network settings",src:n(54250).Z,width:"566",height:"266"})),(0,o.kt)("p",null,"6) Set a Network tag, this will allow you to set up firewall rules later on."),(0,o.kt)("p",null,"This tutorial use ",(0,o.kt)("inlineCode",{parentName:"p"},"mirror-demo")," as the tag"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"set network tag",src:n(60097).Z,width:"466",height:"108"})),(0,o.kt)("p",null,"7) Set up a static IP address for your instance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"a) Under **Network interfaces** click on `default` and it will bring up a config menu\n\nb) Select the **External IP** dropdown and select `Create IP address`\n\nc) Enter a name for this IP and press **Reserve**. For this tutorial, we will use `mirror-demo-ip`\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"reserve ip address",src:n(98040).Z,width:"512",height:"340"})),(0,o.kt)("p",null,"8) Create your instance. "),(0,o.kt)("p",null,"Press the ",(0,o.kt)("strong",{parentName:"p"},"Create")," button at the bottom of the page to finish set-up and create your instance"),(0,o.kt)("h2",{id:"configure-firewall"},"Configure Firewall"),(0,o.kt)("p",null,"This will allow other people to connect to your server using its IP and port"),(0,o.kt)("p",null,"1) In the Cloud Console, go to the Firewall page."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://console.cloud.google.com/networking/firewalls/list"},"Go to the Firewall page"))),(0,o.kt)("p",null,"2) Click Create firewall rule."),(0,o.kt)("p",null,"3) On the Create a firewall rule page, fill out the form as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Name: `mirror-demo-rule`\n- Target tags: `mirror-demo`\n- Source filter: IP ranges\n- Source IP ranges: 0.0.0.0/0\n- Protocols or ports: Select UDP, and then enter port 7777 into the field provided.\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"UDP and port 7777 are the default settings for the socket, if you are using a different socket you will need to find out what settings that uses.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create network rule",src:n(48158).Z,width:"546",height:"548"})),(0,o.kt)("p",null,"4) Press ",(0,o.kt)("strong",{parentName:"p"},"Create")," to confirm the setting and create the rule."),(0,o.kt)("h2",{id:"connect-to-your-new-instance"},"Connect to your new instance"),(0,o.kt)("p",null,"Once your instance has finished being created you can press the ",(0,o.kt)("strong",{parentName:"p"},"SSH")," button to connect to your instance in your web browser"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"connect to instance",src:n(54107).Z,width:"964",height:"100"})),(0,o.kt)("h2",{id:"setting-up-the-linux-instance"},"Setting up the Linux instance"),(0,o.kt)("p",null,"When you first connect you will need to set up a few things"),(0,o.kt)("p",null,"1) First, update the list of packages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get update\n")),(0,o.kt)("p",null,"2) Install ",(0,o.kt)("inlineCode",{parentName:"p"},"screen")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"unzip")," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get install -y screen unzip\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"screen")," allows you to have multiple terminals, allows you to do other stuff while your game is running"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"unzip")," unzips can be used to extract files from a ZIP file after you upload it to the instance "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"update and install packages",src:n(71149).Z,width:"782",height:"488"})),(0,o.kt)("h2",{id:"build-your-game"},"Build your game"),(0,o.kt)("p",null,"Build your game with Target Platform ",(0,o.kt)("inlineCode",{parentName:"p"},"Linux")," and ",(0,o.kt)("strong",{parentName:"p"},"Server Build")," ticked"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Server build",src:n(99818).Z,width:"358",height:"353"})),(0,o.kt)("h2",{id:"upload-and-extract-your-game"},"Upload and extract your game"),(0,o.kt)("p",null,"Once you have built your game zip the folder so that you can upload it to your server."),(0,o.kt)("p",null,"In the SSH connection window click on the settings cogwheel and select ",(0,o.kt)("strong",{parentName:"p"},"Upload File")," then find and select your zipped build folder."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Upload a file",src:n(37173).Z,width:"376",height:"445"})),(0,o.kt)("p",null,"This should upload the game folder to the home directory."),(0,o.kt)("p",null,"If you need to go to the home directory you can use: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The destination will be ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/username")," where the username should be the cloud account you are logged into. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Uploading",src:n(61497).Z,width:"502",height:"248"})),(0,o.kt)("p",null,"Once your file has finished the upload you can extract the files"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"unzip ./mirror-demo.zip \n")),(0,o.kt)("h2",{id:"run-server"},"Run server"),(0,o.kt)("p",null,"1) Move into the game folder"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd mirror-demo\n")),(0,o.kt)("p",null,"2) Mark game as executable"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"chmod +x ./mirror-demo.x86_64 \n")),(0,o.kt)("p",null,"You should now be able to run your game server!"),(0,o.kt)("p",null,"The following is optional but will most likely be useful"),(0,o.kt)("p",null,"3) Start your server in a detached screen"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"screen -d -m -S mirrorServer ./mirror-demo.x86_64 -logfile ~/server.log\n")),(0,o.kt)("p",null,"The parts of the command above:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"screen -d -m")," will create the new terminal in detached mode"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-S mirrorServer")," name of the screen"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"./mirror-demo.x86_64")," your game server file"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-logfile ~/server.log")," unity argument for log file location, this will create a log file in the home directory")),(0,o.kt)("p",null,"4) Create a start file so you can start your server the same way each time"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'a) create `start.sh`\n```\necho "screen -d -m -S mirrorServer ./mirror-demo.x86_64 -logfile ~/server.log" > ./start.sh\n```\n\nb) mark as executable\n```sh\nchmod +x ./start.sh \n```\n')),(0,o.kt)("p",null,"5) Run your server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./start.sh\n")),(0,o.kt)("h3",{id:"using-screen"},"Using Screen"),(0,o.kt)("p",null,"Here are a few useful commands for using ",(0,o.kt)("inlineCode",{parentName:"p"},"screen")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"List active screens")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"screen -ls\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Attach to existing screen, ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"process-id is shown when calling ",(0,o.kt)("inlineCode",{parentName:"li"},"screen -ls")),(0,o.kt)("li",{parentName:"ul"},"screen name is given by ",(0,o.kt)("inlineCode",{parentName:"li"},"-S")," when creating the screen, for this tutorial it was ",(0,o.kt)("inlineCode",{parentName:"li"},"mirrorServer"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"screen -r <process-id | screen name>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Detach from screen press ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL A + D"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Stop your game"))),(0,o.kt)("p",null,"Once attached to a screen you can press ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL + C")," to stop the process, this will stop your game and close the screen"),(0,o.kt)("h3",{id:"view-log-files"},"View log files"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-logfile ~/path/to/log.log")," argument for Unity when starting your game server. This will cause the logs to be written to a file instead of to the terminal. This will means recent logs won't show up in ",(0,o.kt)("inlineCode",{parentName:"p"},"screen -r"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"you can use the ",(0,o.kt)("inlineCode",{parentName:"li"},"tail")," command to view the end of the log file")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"tail -n 50 ./server.log \n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-n")," argument to set how many lines to show")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-f")," argument to follow the end of the file stream showing you any new logs that are written to the file in real-time. You will need to press ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL + C")," to exit follow mode"))),(0,o.kt)("h2",{id:"clean-up-after-tutorial"},"Clean up after tutorial"),(0,o.kt)("p",null,"If you used an existing project you will need to delete the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"VM instance"),(0,o.kt)("li",{parentName:"ul"},"Firewall rule")),(0,o.kt)("p",null,"If you have created a new project you should be able to just delete the project. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://console.cloud.google.com/iam-admin/projects"},"Go to the Manage resources page"))))}c.isMDXComponent=!0},45963:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/01-vm-instances-f04cfc389ac0cd091a36c344d72052c3.jpg"},6090:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/02-create-instance-name-region-1a9a194e495dae4228651d692916a311.jpg"},2333:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/03-boot-disk-cdc0f9bf7c20db72e5391ddcbc4d50b3.jpg"},54250:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/04-expand-network-settings-114bbc9972f79742a3377cb31397ee67.jpg"},60097:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/05-network-tag-844c59b477798ac1d38e2d9e6b0cdd07.jpg"},98040:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/06-ip-address-1939139b8401b013717fbe27c606447f.jpg"},48158:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/07-create-network-rule-34857b420bc044c8b0963d99753cebc1.jpg"},54107:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/08-connect-to-instance-45c03c498f3bc07e7161fdb0bc21c962.jpg"},71149:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/09-update-and-install-d0038402bf2cc3a9d70b805948db18dd.jpg"},99818:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/10-server-build-6628047e2d1d1a57cc5675b1ce8d82b7.jpg"},37173:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/11-upload-a-file-02f9fbfadcee90707b600f6c614f409e.jpg"},61497:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/12-uploading-a5b39c443d08903e8ab3d19aebd422fa.jpg"}}]);