import{j as e,a as r,Y as m}from"./app-Dmn-YDrz.js";import{D as n,q as a}from"./DropDownMenu-vKY0Rovc.js";import{D as l}from"./Table-C1eOu4JF.js";import{A as x}from"./AuthenticatedLayout-C_JdXkE6.js";import{F as o}from"./PencilIcon-JPfHoB6A.js";import{F as c}from"./TrashIcon-BUgGN20G.js";import"./index-RxbyN6Ed.js";const N=({auth:h,links:s})=>{const d=["Id","Link","type","Action"];return e.jsxs(x,{header:"Links",linkItem:e.jsx(r,{className:"bg-primary rounded-md text-white p-2",href:route("admin.links.create"),children:"Create Link"}),children:[e.jsx(m,{title:"Links"}),e.jsx("div",{className:"w-full mt-6",children:e.jsx("div",{className:"bg-white",children:e.jsx(l,{headItems:d,children:s.data.map((t,i)=>e.jsxs("tr",{className:"odd:bg-white even:bg-slate-100",children:[e.jsx("td",{className:"text-left py-3 px-4",children:t.id}),e.jsx("td",{className:"text-left py-3 px-4",children:t.link}),e.jsx("td",{className:"text-left py-3 px-4",children:e.jsx("span",{className:"text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-green-400 bg-green-100 text-green-800",children:t.type.name})}),e.jsx("td",{className:"text-left py-3 px-4",children:e.jsxs(n,{additionalClasses:"bg-gray-200 text-gray-900",name:"Actions",children:[e.jsx(a.Item,{children:e.jsxs(r,{href:route("admin.links.edit",t.id),className:"group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white",children:[e.jsx(o,{className:"mr-2 h-5 w-5"}),"Edit"]})}),e.jsx(a.Item,{children:e.jsxs(r,{method:"delete",as:"button",href:route("admin.links.destroy",t.id),className:"group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white",children:[e.jsx(c,{className:"mr-2 h-5 w-5"}),"Delete"]})})]})})]},i))})})}),s.total>10&&e.jsx(Pagination,{items:s})]})};export{N as default};
