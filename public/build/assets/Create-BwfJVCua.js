import{W as i,j as e,Y as o}from"./app-xLJeFiX4.js";import{T as c,I as d}from"./TextInput-v0GR_Etm.js";import{I as p}from"./InputLabel-DM3EkeLx.js";import{P as u}from"./PrimaryButton-O_3VOTSf.js";import{A as h}from"./AuthenticatedLayout-Yd6j771k.js";import"./index-DG6WN2lu.js";const y=({auth:x})=>{const{data:a,setData:s,post:r,processing:n,errors:l}=i({name:""}),m=t=>{t.preventDefault(),r(route("admin.accountTypes.store"))};return e.jsxs(h,{header:"Create Account Types",children:[e.jsx(o,{title:"Create Account Types"}),e.jsx("div",{className:"flex flex-wrap justify-center",children:e.jsx("div",{className:"w-full lg:w-1/2 mt-6 pl-0 lg:pl-2",children:e.jsx("div",{className:"leading-loose",children:e.jsxs("form",{className:"p-10 bg-white rounded shadow-xl",onSubmit:m,children:[e.jsxs("div",{className:"",children:[e.jsx(p,{htmlFor:"name",children:"Name"}),e.jsx(c,{placeholder:"Account type name",id:"name",value:a.domain,onChange:t=>s("name",t.target.value)}),e.jsx(d,{className:"mt-1",children:l.name})]}),e.jsx("div",{className:"mt-6",children:e.jsx(u,{disabled:n,type:"submit",children:"Submit"})})]})})})})]})};export{y as default};