import{W as p,j as e,Y as u}from"./app-DosBPi95.js";import{T as h,I as a}from"./TextInput-DDlEQ_s6.js";import{I as r}from"./InputLabel-CTkC3yrB.js";import{P as x}from"./PrimaryButton-BKT-UB-r.js";import{S as j}from"./SelectInput-BpjS9hS8.js";import{A as f}from"./AuthenticatedLayout-8S5AhpI9.js";import"./index-RxbyN6Ed.js";const E=({auth:v,types:n,link:s})=>{const{data:d,setData:i,put:m,processing:o,errors:l}=p({link:s.link,type:s.type}),c=t=>{t.preventDefault(),m(route("admin.links.update",s.id))};return e.jsxs(f,{header:"Edit Link",children:[e.jsx(u,{title:"Edit Link Domain"}),e.jsx("div",{className:"flex flex-wrap justify-center",children:e.jsx("div",{className:"w-full lg:w-1/2 mt-6 pl-0 lg:pl-2",children:e.jsx("div",{className:"leading-loose",children:e.jsxs("form",{className:"p-10 bg-white rounded shadow-xl",onSubmit:c,children:[e.jsxs("div",{className:"",children:[e.jsx(r,{htmlFor:"link",children:"Link"}),e.jsx(h,{placeholder:"example.com",id:"link",value:d.link,onChange:t=>i("link",t.target.value)}),e.jsx(a,{className:"mt-1",children:l.link}),console.log(s.link)]}),e.jsxs("div",{className:"mt-2",children:[e.jsx(r,{htmlFor:"type",children:"Type"}),e.jsx(j,{id:"type",onChange:t=>i("type",t.target.value),defaultValue:s.type,children:n.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))}),e.jsx(a,{className:"mt-1",children:l.type})]}),e.jsx("div",{className:"mt-6",children:e.jsx(x,{disabled:o,type:"submit",children:"Submit"})})]})})})})]})};export{E as default};
