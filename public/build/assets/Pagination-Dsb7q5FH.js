import{r as n,j as r,a as l}from"./app-DosBPi95.js";import{c as i}from"./index-RxbyN6Ed.js";function d({title:e,titleId:a,...s},t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},s),e?n.createElement("title",{id:a},e):null,n.createElement("path",{fillRule:"evenodd",d:"M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"}))}const o=n.forwardRef(d);function c({title:e,titleId:a,...s},t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},s),e?n.createElement("title",{id:a},e):null,n.createElement("path",{fillRule:"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const x=n.forwardRef(c),m=({children:e,className:a="",...s})=>(e.includes("Previous")?(e=r.jsx(o,{className:"h-5 w-5","aria-hidden":"true"}),a="rounded-l-md"):e.includes("Next")&&(e=r.jsx(x,{className:"h-5 w-5","aria-hidden":"true"}),a="rounded-r-md"),r.jsx(l,{className:i("relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ",a),...s,children:e}));function g({items:e}){return r.jsxs("div",{className:"flex items-center justify-between border-t border-gray-200 bg-transparent px-4 py-3 sm:px-6",children:[r.jsxs("div",{className:"flex flex-1 justify-between sm:hidden",children:[r.jsx(l,{as:"button",disabled:!e.prev_page_url,href:e.prev_page_url,className:"relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",children:"Previous"}),r.jsx(l,{as:"button",disabled:!e.next_page_url,href:e.next_page_url,className:"relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",children:"Next"})]}),r.jsxs("div",{className:"hidden sm:flex sm:flex-1 sm:items-center sm:justify-between",children:[r.jsx("div",{children:r.jsxs("p",{className:"text-sm text-gray-700",children:["Showing ",r.jsx("span",{className:"font-medium",children:e.from})," to ",r.jsx("span",{className:"font-medium",children:e.to})," of"," ",r.jsx("span",{className:"font-medium",children:e.total})," results"]})}),r.jsx("div",{children:r.jsx("nav",{className:"isolate inline-flex -space-x-px rounded-md shadow-sm","aria-label":"Pagination",children:e.links.map(a=>r.jsx(m,{as:"button",disabled:!a.url,href:a.url,className:a.active?"bg-primary text-white hover:bg-primary":"",children:a.label},a.label))})})]})]})}export{g as P};
