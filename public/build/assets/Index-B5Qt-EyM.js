import{j as e,a,Y as d}from"./app-CzDKNEIs.js";import{D as l,q as r}from"./DropDownMenu-CoPtDWpp.js";import{D as o}from"./Table-CaG3AW7D.js";import{A as n}from"./AuthenticatedLayout-C7FXM_oT.js";import{F as x}from"./PencilIcon-1MZI5VZa.js";import{F as c}from"./TrashIcon-DouoTkPE.js";import"./index-RxbyN6Ed.js";const N=({auth:h,domains:s})=>{const i=["Id","Name","Action"];return e.jsxs(n,{header:"Domains",linkItem:e.jsx(a,{className:"bg-primary rounded-md text-white p-2",href:route("admin.domains.create"),children:"Create Domain"}),children:[e.jsx(d,{title:"Domains"}),e.jsx("div",{className:"w-full mt-6",children:e.jsx("div",{className:"bg-white",children:e.jsx(o,{headItems:i,children:s.data.map((t,m)=>e.jsxs("tr",{className:"odd:bg-white even:bg-slate-100",children:[e.jsx("td",{className:"text-left py-3 px-4",children:t.id}),e.jsx("td",{className:"text-left py-3 px-4",children:t.name}),e.jsx("td",{className:"text-left py-3 px-4",children:e.jsxs(l,{additionalClasses:"bg-gray-200 text-gray-900",name:"Actions",children:[e.jsx(r.Item,{children:e.jsxs(a,{href:route("admin.domains.edit",t.id),className:"group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white",children:[e.jsx(x,{className:"mr-2 h-5 w-5"}),"Edit"]})}),e.jsx(r.Item,{children:e.jsxs(a,{method:"delete",as:"button",href:route("admin.domains.destroy",t.id),className:"group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white",children:[e.jsx(c,{className:"mr-2 h-5 w-5"}),"Delete"]})})]})})]},m))})})}),s.total>10&&e.jsx(Pagination,{items:s})]})};export{N as default};