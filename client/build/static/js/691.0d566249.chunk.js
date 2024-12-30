"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[691],{79:(e,t,r)=>{r.d(t,{A:()=>a});var i=r(43),o=r(395),c=r(718),l=r(579);const s=e=>{let{id:t,title:r,thumbnail:i}=e;return(0,l.jsxs)(c.N_,{to:"/project/".concat(t),className:"block rounded shadow hover:shadow-lg",children:[(0,l.jsx)("img",{src:i,alt:r,className:"w-full h-64 object-cover rounded-t",loading:"lazy"}),(0,l.jsx)("div",{className:"p-4 bg-gray-800 text-white rounded-b",children:(0,l.jsx)("h3",{className:"text-lg font-bold",children:r})})]})},a=e=>{let{fetchMoreData:t}=e;const[r,c]=(0,i.useState)([]),[a,h]=(0,i.useState)(!1),[p,n]=(0,i.useState)(1),[d,m]=(0,i.useState)(!0),j=(0,i.useRef)(null),u=(0,i.useRef)(new Set),g=async()=>{if(a||!d)return;h(!0);const e=await t(p);if(0===e.length)m(!1);else{const t=e.filter((e=>!u.current.has(e.id)));t.forEach((e=>u.current.add(e.id))),c((e=>[...e,...t])),n((e=>e+1))}h(!1)};return(0,i.useEffect)((()=>{g()}),[]),(0,i.useEffect)((()=>{const e=new IntersectionObserver((e=>{let[t]=e;t.isIntersecting&&!a&&g()}),{threshold:1});return j.current&&e.observe(j.current),()=>e.disconnect()}),[a,d]),(0,l.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[r.map((e=>(0,l.jsx)(s,{id:e.id,title:e.title,thumbnail:e.thumbnailUrl},e.id))),a&&0===r.length&&(0,l.jsx)("div",{className:"flex justify-center items-center h-[200px]",children:(0,l.jsx)(o.A,{})}),d&&(0,l.jsx)("div",{ref:j})]})}},691:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});r(43);var i=r(79),o=r(637),c=r(579);const l=()=>(0,c.jsxs)("div",{className:"container mx-auto p-4",children:[(0,c.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"All Projects"}),(0,c.jsx)(i.A,{fetchMoreData:o._n})]})},637:(e,t,r)=>{r.d(t,{G6:()=>c,OA:()=>o,_n:()=>l});const i=[{id:"1",title:"Maybe Song",description:"The cover for Maybe Song",category:"products",thumbnailUrl:"/assets/images/sample3.jpg",videoUrl:"https://drive.google.com/file/d/1wtJKo5BXiPvVbSIgmpZe0r-bicgYMBaZ/view",images:["/assets/images/sample1.jpg","/assets/images/sample2.webp"]},{id:"2",title:"Project Two",description:"Description for project two",category:"reels",thumbnailUrl:"/assets/images/sample1.jpg"},{id:"3",title:"Project 3",description:"Description for project three",category:"reels",thumbnailUrl:"/assets/images/sample2.webp"},{id:"4",title:"Project 4",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"5",title:"Project 5",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"6",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"7",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"8",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"9",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"10",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"11",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"12",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"13",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"14",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"15",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"16",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"17",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"18",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"19",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"20",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"21",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"22",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"23",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"24",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"25",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"26",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"27",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"28",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"29",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"},{id:"30",title:"Project Three",description:"Description for project three",category:"reels",thumbnailUrl:"https://via.placeholder.com/150"}],o=e=>new Promise((t=>{setTimeout((()=>t(i.filter((t=>t.category===e)))),500)})),c=e=>new Promise((t=>{setTimeout((()=>t(i.find((t=>t.id===e)))),500)})),l=async e=>{const t=10*(e-1),r=10*e;return new Promise((e=>{setTimeout((()=>{e(i.slice(t,r))}),500)}))}}}]);
//# sourceMappingURL=691.0d566249.chunk.js.map