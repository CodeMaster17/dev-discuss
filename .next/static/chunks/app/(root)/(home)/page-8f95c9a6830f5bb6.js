(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33],{4593:function(e,t,r){Promise.resolve().then(r.bind(r,9530)),Promise.resolve().then(r.bind(r,8313)),Promise.resolve().then(r.bind(r,89)),Promise.resolve().then(r.bind(r,7173)),Promise.resolve().then(r.bind(r,8400)),Promise.resolve().then(r.bind(r,2145)),Promise.resolve().then(r.bind(r,3530)),Promise.resolve().then(r.bind(r,1507)),Promise.resolve().then(r.bind(r,1726)),Promise.resolve().then(r.bind(r,9776)),Promise.resolve().then(r.bind(r,1142)),Promise.resolve().then(r.t.bind(r,6964,23)),Promise.resolve().then(r.t.bind(r,4724,23))},9530:function(e,t,r){"use strict";r.r(t);var a=r(6705),n=r(2130),s=r(955),i=r(3023),o=r(4033),l=r(9311);t.default=()=>{let e=(0,o.useSearchParams)(),t=(0,o.useRouter)(),[r,c]=(0,s.useState)(""),handleTypeClick=a=>{if(r===a){c("");let r=(0,l.Yz)({params:e.toString(),key:"filter",value:null});t.push(r,{scroll:!1})}else{c(a);let r=(0,l.Yz)({params:e.toString(),key:"filter",value:a.toLowerCase()});t.push(r,{scroll:!1})}};return(0,a.jsx)("div",{className:"mt-10 hidden flex-wrap gap-3 md:flex",children:n.sm.map(e=>(0,a.jsx)(i.z,{onClick:()=>{},className:"body-me dium rounded-lg px-6 py-3 capitalize shadow-none ".concat(r===e.value?"dark:hover:bg-dark400 bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500":"bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"),onClickCapture:()=>handleTypeClick(e.value),children:e.name},e.value))})}},8313:function(e,t,r){"use strict";r.r(t);var a=r(6705),n=r(7947),s=r(4878),i=r(6691),o=r.n(i),l=r(4033);t.default=e=>{let{type:t,itemId:r}=e,i=(0,l.usePathname)(),c=(0,l.useRouter)(),handleDelete=async()=>{"Question"===t?await (0,s.Km)({questionId:JSON.parse(r),path:i}):"Answer"===t&&await (0,n.G)({answerId:JSON.parse(r),path:i})};return(0,a.jsxs)("div",{className:"flex items-center justify-end gap-3 max-sm:w-full",children:["Question"===t&&(0,a.jsx)(o(),{src:"/assets/icons/edit.svg",alt:"Edit",width:14,height:14,className:"cursor-pointer object-contain",onClick:()=>{c.push("/question/edit/".concat(JSON.parse(r)))}}),(0,a.jsx)(o(),{src:"/assets/icons/trash.svg",alt:"Delete",width:14,height:14,className:"cursor-pointer object-contain",onClick:handleDelete})]})}},89:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return shared_Filter}});var a=r(6705),n=r(955),s=r(663),i=r(3523),o=r(2442),l=r(9311);let c=s.fC,d=s.ZA,u=s.B4,f=n.forwardRef((e,t)=>{let{className:r,children:n,...o}=e;return(0,a.jsxs)(s.xz,{ref:t,className:(0,l.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),...o,children:[n,(0,a.jsx)(s.JO,{asChild:!0,children:(0,a.jsx)(i.Z,{className:"h-4 w-4 opacity-50"})})]})});f.displayName=s.xz.displayName;let m=n.forwardRef((e,t)=>{let{className:r,children:n,position:i="popper",...o}=e;return(0,a.jsx)(s.h_,{children:(0,a.jsx)(s.VY,{ref:t,className:(0,l.cn)("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===i&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",r),position:i,...o,children:(0,a.jsx)(s.l_,{className:(0,l.cn)("p-1","popper"===i&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:n})})})});m.displayName=s.VY.displayName;let g=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.__,{ref:t,className:(0,l.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",r),...n})});g.displayName=s.__.displayName;let h=n.forwardRef((e,t)=>{let{className:r,children:n,...i}=e;return(0,a.jsxs)(s.ck,{ref:t,className:(0,l.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...i,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(s.wU,{children:(0,a.jsx)(o.Z,{className:"h-4 w-4"})})}),(0,a.jsx)(s.eT,{children:n})]})});h.displayName=s.ck.displayName;let p=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.Z0,{ref:t,className:(0,l.cn)("-mx-1 my-1 h-px bg-muted",r),...n})});p.displayName=s.Z0.displayName;var b=r(4033),shared_Filter=e=>{let{filters:t,otherClasses:r,containerClasses:n}=e,s=(0,b.useSearchParams)(),i=(0,b.useRouter)(),o=s.get("filter");return(0,a.jsx)("div",{className:"relative ".concat(n),children:(0,a.jsxs)(c,{onValueChange:e=>{let t=(0,l.Yz)({params:s.toString(),key:"filter",value:e});i.push(t,{scroll:!1})},defaultValue:o||void 0,children:[(0,a.jsx)(f,{className:"".concat(r," body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5"),children:(0,a.jsx)("div",{className:"line-clamp-1 flex-1 text-left",children:(0,a.jsx)(u,{placeholder:"Select a Filter"})})}),(0,a.jsx)(m,{className:"text-dark500_light700 small-regular border-none bg-light-900 dark:bg-dark-300",children:(0,a.jsx)(d,{children:t.map(e=>(0,a.jsx)(h,{value:e.value,className:"cursor-pointer focus:bg-light-800 dark:focus:bg-dark-400",children:e.name},e.value))})})]})})}},7173:function(e,t,r){"use strict";r.r(t);var a=r(6705),n=r(9311),s=r(3023),i=r(4033);t.default=e=>{let{pageNumber:t,isNext:r}=e,o=(0,i.useRouter)(),l=(0,i.useSearchParams)(),handleNavigation=e=>{let r=(0,n.Yz)({params:l.toString(),key:"page",value:("prev"===e?t-1:t+1).toString()});o.push(r)};return r||1!==t?(0,a.jsxs)("div",{className:"flex w-full items-center justify-center gap-2",children:[(0,a.jsx)(s.z,{disabled:1===t,onClick:()=>handleNavigation("prev"),className:"light-border-2 btn flex min-h-[36px] items-center justify-center gap-2 border",children:(0,a.jsx)("p",{className:"body-medium text-dark200_light800",children:"Prev"})}),(0,a.jsx)("div",{className:"flex items-center justify-center rounded-md bg-primary-500 px-3.5 py-2",children:(0,a.jsx)("p",{className:"body-semibold text-light-900",children:t})}),(0,a.jsx)(s.z,{disabled:!r,onClick:()=>handleNavigation("next"),className:"light-border-2 btn flex min-h-[36px] items-center justify-center gap-2 border",children:(0,a.jsx)("p",{className:"body-medium text-dark200_light800",children:"Next"})})]}):null}},8400:function(e,t,r){"use strict";r.r(t);var a=r(6705),n=r(1908),s=r(6691),i=r.n(s),o=r(955),l=r(4033),c=r(9311);t.default=e=>{let{route:t,iconPosition:r,imgSrc:s,placeholder:d,otherClasses:u}=e,f=(0,l.useRouter)(),m=(0,l.usePathname)(),g=(0,l.useSearchParams)(),h=g.get("q"),[p,b]=(0,o.useState)(h||"");return(0,o.useEffect)(()=>{let e=setTimeout(()=>{if(p){let e=(0,c.Yz)({params:g.toString(),key:"q",value:p});f.push(e,{scroll:!1})}else if(console.log(t,m),m===t){let e=(0,c.yj)({params:g.toString(),keysToRemove:["q"]});f.push(e,{scroll:!1})}},300);return()=>clearTimeout(e)},[p,t,m,f,g,h]),(0,a.jsxs)("div",{className:"background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ".concat(u),children:["left"===r&&(0,a.jsx)(i(),{src:s,alt:"search icon",width:24,height:24,className:"cursor-pointer"}),(0,a.jsx)(n.I,{type:"text",placeholder:d,value:p,onChange:e=>b(e.target.value),className:"paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-none outline-none"}),"right"===r&&(0,a.jsx)(i(),{src:s,alt:"search icon",width:24,height:24,className:"cursor-pointer"})]})}},3023:function(e,t,r){"use strict";r.d(t,{z:function(){return c}});var a=r(6705),n=r(955),s=r(7256),i=r(6061),o=r(9311);let l=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=n.forwardRef((e,t)=>{let{className:r,variant:n,size:i,asChild:c=!1,...d}=e,u=c?s.g7:"button";return(0,a.jsx)(u,{className:(0,o.cn)(l({variant:n,size:i,className:r})),ref:t,...d})});c.displayName="Button"},1908:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var a=r(6705),n=r(955),s=r(9311);let i=n.forwardRef((e,t)=>{let{className:r,type:n,...i}=e;return(0,a.jsx)("input",{type:n,className:(0,s.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...i})});i.displayName="Input"},2130:function(e,t,r){"use strict";r.d(t,{sm:function(){return a},xB:function(){return n}});let a=[{name:"Newest",value:"newest"},{name:"Recommended",value:"recommended"},{name:"Frequent",value:"frequent"},{name:"Unanswered",value:"unanswered"}],n=[{name:"Question",value:"question"},{name:"Answer",value:"answer"},{name:"User",value:"user"},{name:"Tag",value:"tag"}]},1217:function(e,t,r){"use strict";r.d(t,{A8:function(){return n},np:function(){return a}});let a=[{value:"light",label:"Light",icon:"/assets/icons/sun.svg"},{value:"dark",label:"Dark",icon:"/assets/icons/moon.svg"},{value:"system",label:"System",icon:"/assets/icons/computer.svg"}],n=[{imgURL:"/assets/icons/home.svg",route:"/",label:"Home"},{imgURL:"/assets/icons/users.svg",route:"/community",label:"Community"},{imgURL:"/assets/icons/star.svg",route:"/collection",label:"Collections"},{imgURL:"/assets/icons/suitcase.svg",route:"/jobs",label:"Find Jobs"},{imgURL:"/assets/icons/tag.svg",route:"/tags",label:"Tags"},{imgURL:"/assets/icons/user.svg",route:"/profile",label:"Profile"},{imgURL:"/assets/icons/question.svg",route:"/ask-question",label:"Ask a question"}]},7947:function(e,t,r){"use strict";r.d(t,{G:function(){return o},Of:function(){return i},jt:function(){return s},yX:function(){return n}}),r(2655),r(470);var a=r(1162),n=(0,a.$)("38b23658ea60de106c38e60f027acfeff8120b76");(0,a.$)("47c778af0c569cf9ff49a6af049f8278387c263e");var s=(0,a.$)("2670d5e6893dc4acec799dd2489606fbd7eec1b8"),i=(0,a.$)("66af08863d17293c58c290da2a4e7b765bae9ef5"),o=(0,a.$)("66a08c61097290635a7e67f797a6de0391f71d33")},4878:function(e,t,r){"use strict";r.d(t,{CB:function(){return n},Km:function(){return o},MH:function(){return i},Rp:function(){return s},WW:function(){return l}}),r(2655),r(470);var a=r(1162);(0,a.$)("3edd71cd9ab8b4f242702c484c6fc3950966c9c7");var n=(0,a.$)("8e7e79ccfa468331bea28632206b13bb707a6d2c");(0,a.$)("9fec3945cd89a097a56b0b1f7c38f750ca853571");var s=(0,a.$)("d5d83a22ae7e559f64b434ff6678f404dabb9180"),i=(0,a.$)("a613edc055de79f39025a3c6b2cd56b74c196dfb"),o=(0,a.$)("9d5f5d5353054deeb2ffa023b36e86fc813d8044"),l=(0,a.$)("445f4c0adb5f7e1a9e241326e9489275f5a8e309");(0,a.$)("e8d858f65586c913e740a64236980cbd93ac782f"),(0,a.$)("5627600cdd9e1495145184f1d8c839d71e8705de")},9311:function(e,t,r){"use strict";r.d(t,{Yz:function(){return formUrlQuery},cn:function(){return cn},yj:function(){return removeKeysFromQuery},yv:function(){return formatAndDivideNumber}});var a=r(7042),n=r(3986),s=r(7220);function cn(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m)((0,a.W)(t))}r(1217);let formatAndDivideNumber=e=>{if(e>=1e6){let t=(e/1e6).toFixed(1);return"".concat(t,"M")}if(!(e>=1e3))return e.toString();{let t=(e/1e3).toFixed(1);return"".concat(t,"K")}},formUrlQuery=e=>{let{params:t,key:r,value:a}=e,n=s.Z.parse(t);return n[r]=a,s.Z.stringifyUrl({url:window.location.pathname,query:n},{skipNull:!0})},removeKeysFromQuery=e=>{let{params:t,keysToRemove:r}=e,a=s.Z.parse(t);return r.forEach(e=>{delete a[e]}),s.Z.stringifyUrl({url:window.location.pathname,query:a},{skipNull:!0})}},1162:function(e,t,r){"use strict";Object.defineProperty(t,"$",{enumerable:!0,get:function(){return createServerReference}});let a=r(2655);function createServerReference(e){let{createServerReference:t}=r(2139);return t(e,a.callServer)}},470:function(e,t){"use strict";Symbol.for("react.server.reference")}},function(e){e.O(0,[869,939,691,724,866,477,304,121,26,744],function(){return e(e.s=4593)}),_N_E=e.O()}]);