"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[676],{676:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var i=r(43),o=r(718),c=r(637),l=r(395),s=r(579);const a=()=>{const{id:e}=(0,o.g)(),[t,r]=(0,i.useState)(null),[a,p]=(0,i.useState)(!0);if((0,i.useEffect)((()=>((async()=>{p(!0);const t=await(0,c.G6)(e||"");r(t||null),p(!1)})(),()=>{r(null),p(!1)})),[e]),a)return(0,s.jsx)(l.A,{});if(!t)return(0,s.jsx)("p",{children:"Project not found!"});const h=e=>{if(e.startsWith("/assets/"))return e;const t=e.match(/(?:drive\.google\.com\/.*?\/d\/|drive\.google\.com\/uc\?id=)([a-zA-Z0-9_-]+)/);if(t&&t[1]){return"https://drive.google.com/uc?id=".concat(t[1])}return console.warn("Invalid or unsupported URL format:",e),e};return(0,s.jsxs)("div",{className:"container mx-auto p-4",children:[(0,s.jsx)("h1",{className:"text-3xl font-bold mb-4",children:t.title}),(0,s.jsx)("p",{className:"mb-4",children:t.description}),t.thumbnailUrl&&(0,s.jsx)("div",{className:"mb-4",children:(0,s.jsx)("img",{src:h(t.thumbnailUrl),alt:t.title,className:"w-full max-h-64 object-cover rounded",loading:"lazy",onError:e=>e.currentTarget.src="/assets/images/sample3.jpg"})}),t.videoUrl&&(0,s.jsx)("div",{className:"mb-4",children:t.videoUrl.includes("drive.google.com")&&t.videoUrl.includes("/d/")?(0,s.jsx)("div",{className:"relative w-full",style:{paddingTop:"56.25%"},children:(0,s.jsx)("iframe",{src:"https://drive.google.com/file/d/".concat(t.videoUrl.split("/d/")[1].split("/")[0],"/preview"),className:"absolute top-0 left-0 w-full h-full",allow:"autoplay"})}):(0,s.jsx)("div",{className:"relative w-full",style:{paddingTop:"56.25%"},children:(0,s.jsxs)("video",{controls:!0,className:"absolute top-0 left-0 w-full h-full",children:[(0,s.jsx)("source",{src:t.videoUrl,type:"video/mp4"}),"Your browser does not support the video tag."]})})}),t.images&&(0,s.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4",children:t.images.map(((e,t)=>(0,s.jsx)("img",{src:h(e),alt:"Project Image ".concat(t+1),className:"w-full rounded shadow",onError:e=>e.currentTarget.src="/assets/images/sample3.jpg"},t)))})]})}},637:(e,t,r)=>{r.d(t,{G6:()=>c,OA:()=>o,_n:()=>l});const i=[{id:"1",title:"Maybe Song",description:"The cover for Maybe Song",category:"products",thumbnailUrl:"/assets/images/sample3.jpg",videoUrl:"https://drive.google.com/file/d/1wtJKo5BXiPvVbSIgmpZe0r-bicgYMBaZ/view",images:["/assets/images/sample1.jpg","/assets/images/sample2.webp"]},{id:"2",title:"Project Two",description:"Description for project two",category:"reels",thumbnailUrl:"/assets/images/sample1.jpg"},{id:"3",title:"Project 3",description:"Description for project three",category:"reels",thumbnailUrl:"/assets/images/sample2.webp"},{id:"4",title:"Project 4",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"5",title:"Project 5",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"6",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"7",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"8",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"9",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"10",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"11",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"12",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"13",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"14",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"15",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"16",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"17",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"18",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"19",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"20",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"21",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"22",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"23",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"24",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"25",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"26",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"27",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"28",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"29",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"30",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"}],o=e=>new Promise((t=>{setTimeout((()=>t(i.filter((t=>t.category===e)))),500)})),c=e=>new Promise((t=>{setTimeout((()=>t(i.find((t=>t.id===e)))),500)})),l=async e=>{const t=10*(e-1),r=10*e;return new Promise((e=>{setTimeout((()=>{e(i.slice(t,r))}),500)}))}}}]);
//# sourceMappingURL=676.536c5e86.chunk.js.map