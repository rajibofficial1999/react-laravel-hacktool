import{W as n,j as e,Y as o}from"./app-xLJeFiX4.js";import{T as d,I as c}from"./TextInput-v0GR_Etm.js";import{I as p}from"./InputLabel-DM3EkeLx.js";import{P as x}from"./PrimaryButton-O_3VOTSf.js";import"./SelectInput-ZCRieiti.js";import{A as u}from"./AuthenticatedLayout-Yd6j771k.js";import"./index-DG6WN2lu.js";const w=()=>{const{data:s,setData:t,post:r,processing:i,errors:m}=n({name:""}),l=a=>{a.preventDefault(),r(route("admin.domains.store"))};return e.jsxs(u,{header:"Create Link",children:[e.jsx(o,{title:"Create Link"}),e.jsx("div",{className:"flex flex-wrap justify-center",children:e.jsx("div",{className:"w-full lg:w-1/2 mt-6 pl-0 lg:pl-2",children:e.jsx("div",{className:"leading-loose",children:e.jsxs("form",{className:"p-10 bg-white rounded shadow-xl",onSubmit:l,children:[e.jsxs("div",{className:"",children:[e.jsx(p,{htmlFor:"domain",children:"Name"}),e.jsx(d,{placeholder:"example.com",id:"domain",value:s.domain,onChange:a=>t("name",a.target.value)}),e.jsx(c,{className:"mt-1",children:m.name})]}),e.jsx("div",{className:"mt-6",children:e.jsx(x,{disabled:i,type:"submit",children:"Submit"})})]})})})})]})};export{w as default};