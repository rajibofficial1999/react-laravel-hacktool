import{j as e,a as s,Y as o}from"./app-DosBPi95.js";import{D as c,q as m}from"./DropDownMenu-DZdEn9tI.js";import{S as x,I as h}from"./SelectBox-Dnzoj8XE.js";import{D as p}from"./Table-CIHKUbXs.js";import{A as u}from"./AuthenticatedLayout-8S5AhpI9.js";import{F as f}from"./PencilIcon-Df1fuHkS.js";import{F as j}from"./TrashIcon-DPzaZIPW.js";import"./index-RxbyN6Ed.js";import"./transition-C75lKh2v.js";import"./hidden-BWZv8HIe.js";const k=({accountTypes:a,meta:d})=>{const n=["Id","name","status","Action"];return e.jsxs(u,{header:"Account Types",linkItem:e.jsx(s,{className:"bg-primary rounded-md text-white p-2",href:route("admin.accountTypes.create"),children:"Create Account Type"}),children:[e.jsx(o,{title:"Account Types"}),e.jsx("div",{className:"w-full mt-6",children:e.jsx("div",{className:"bg-white",children:e.jsx(p,{headItems:n,children:a.data.map((t,i)=>{var l;return e.jsxs("tr",{className:"odd:bg-white even:bg-slate-100",children:[e.jsx("td",{className:"text-left py-3 px-4",children:t.id}),e.jsx("td",{className:"text-left py-3 px-4",children:t.name}),e.jsx("td",{className:"text-left py-3 px-4",children:e.jsx(x,{defaultText:((l=d.data)==null?void 0:l.status)??t.status?"Active":"Inactive",children:e.jsx(h.Option,{className:({active:r})=>`relative cursor-default select-none ${r?"bg-amber-100 text-amber-900":"text-gray-900"}`,value:t.status?"Active":"Inactive",children:({selected:r})=>e.jsx(e.Fragment,{children:e.jsx("span",{className:`block truncate ${r?"font-medium":"font-normal"}`,children:e.jsx(s,{className:"py-2 pl-10 text-left pr-4 block w-full",method:"put",as:"button",href:route("admin.accountTypes.status",t.id),children:t.status?"Inactive":"Active"})})})},i)})}),e.jsx("td",{className:"text-left py-3 px-4",children:e.jsxs(c,{additionalClasses:"bg-gray-200 text-gray-900",name:"Actions",children:[e.jsx(m.Item,{children:e.jsxs(s,{href:route("admin.accountTypes.edit",t.id),className:"group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white",children:[e.jsx(f,{className:"mr-2 h-5 w-5"}),"Edit"]})}),e.jsx(m.Item,{children:e.jsxs(s,{method:"delete",as:"button",href:route("admin.accountTypes.destroy",t.id),className:"group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white",children:[e.jsx(j,{className:"mr-2 h-5 w-5"}),"Delete"]})})]})})]},i)})})})}),a.total>10&&e.jsx(Pagination,{items:a})]})};export{k as default};
