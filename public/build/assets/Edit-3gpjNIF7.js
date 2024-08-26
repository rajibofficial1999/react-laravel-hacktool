import{W as u,j as e,Y as x}from"./app-CzDKNEIs.js";import{T as j,I as l}from"./TextInput-BYuu8hxy.js";import{I as a}from"./InputLabel-DF-HPe_-.js";import{P as v}from"./PrimaryButton-CUFP2bwG.js";import{S as d}from"./SelectInput-DZYGi5lV.js";import{A as y}from"./AuthenticatedLayout-C7FXM_oT.js";import"./index-RxbyN6Ed.js";const w=({auth:N,types:r,domains:o,link:s})=>{const{data:c,setData:t,put:m,processing:p,errors:n}=u({endpoint:s.endpoint,type:s.type,domain:s.domain_id,is_query_link:"no"}),h=i=>{i.preventDefault(),m(route("admin.links.update",s.id))};return e.jsxs(y,{header:"Edit Link",children:[e.jsx(x,{title:"Edit Link"}),e.jsx("div",{className:"flex flex-wrap justify-center",children:e.jsx("div",{className:"w-full lg:w-1/2 mt-6 pl-0 lg:pl-2",children:e.jsx("div",{className:"leading-loose",children:e.jsxs("form",{className:"p-10 bg-white rounded shadow-xl",onSubmit:h,children:[e.jsxs("div",{className:"",children:[e.jsx(a,{htmlFor:"domain",children:"Endpoint"}),e.jsx(j,{placeholder:"/login",id:"endpoint",value:c.endpoint,onChange:i=>t("endpoint",i.target.value)}),e.jsx(l,{className:"mt-1",children:n.endpoint})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx(a,{htmlFor:"type",children:"Domains"}),e.jsxs(d,{id:"domain",onChange:i=>t("domain",i.target.value),children:[e.jsx("option",{value:"",children:"Select Domain"}),o.map(i=>i.id==s.domain_id?e.jsx("option",{selected:!0,value:i.id,children:i.name},i.id):e.jsx("option",{value:i.id,children:i.name},i.id))]}),e.jsx(l,{className:"mt-1",children:n.domain})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx(a,{htmlFor:"type",children:"Account Types"}),e.jsxs(d,{id:"type",onChange:i=>t("type",i.target.value),children:[e.jsx("option",{value:"",children:"Select Type"}),r.map(i=>s.type==i.id?e.jsx("option",{selected:!0,value:i.id,children:i.name},i.id):e.jsx("option",{value:i.id,children:i.name},i.id))]}),e.jsx(l,{className:"mt-1",children:n.type})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx(a,{htmlFor:"type",children:"Is Query Link"}),e.jsxs(d,{id:"type",onChange:i=>t("is_query_link",i.target.value),children:[s.is_query_link==0?e.jsx("option",{selected:!0,value:"no",children:"No"}):e.jsx("option",{value:"no",children:"No"}),s.is_query_link==1?e.jsx("option",{selected:!0,value:"yes",children:"Yes"}):e.jsx("option",{value:"yes",children:"Yes"})]}),e.jsx(l,{className:"mt-1",children:n.is_query_link})]}),e.jsx("div",{className:"mt-6",children:e.jsx(v,{disabled:p,type:"submit",children:"Submit"})})]})})})})]})};export{w as default};