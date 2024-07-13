import{r as s,j as e,a as x,Y as v}from"./app-DosBPi95.js";import{D as N,q as g}from"./DropDownMenu-DZdEn9tI.js";import{P as R}from"./Pagination-Dsb7q5FH.js";import{S as E,I as A}from"./SelectBox-Dnzoj8XE.js";import{D as I}from"./Table-CIHKUbXs.js";import{A as F}from"./AuthenticatedLayout-8S5AhpI9.js";import{c as C}from"./index-RxbyN6Ed.js";import{F as D}from"./PencilIcon-Df1fuHkS.js";import"./transition-C75lKh2v.js";import"./hidden-BWZv8HIe.js";function M({title:l,titleId:r,...n},d){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:d,"aria-labelledby":r},n),l?s.createElement("title",{id:r},l):null,s.createElement("path",{fillRule:"evenodd",d:"M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",clipRule:"evenodd"}))}const Z=s.forwardRef(M);function k({title:l,titleId:r,...n},d){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:d,"aria-labelledby":r},n),l?s.createElement("title",{id:r},l):null,s.createElement("path",{fillRule:"evenodd",d:"M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z",clipRule:"evenodd"}))}const S=s.forwardRef(k),H=({auth:l,users:r,statuses:n,meta:d})=>{const[o,$]=s.useState(n),w=["Id","name","Email","Role","Status","Action"],i=(t,a)=>t.filter(m=>m!=a),b=t=>{if(t=="pending")return i(o,"suspended");if(t=="rejected")return o.filter(a=>a!="pending");if(t=="approved"){const a=i(o,"pending");return i(a,"rejected")}if(t=="suspended"){const a=i(o,"pending");return i(a,"rejected")}};return e.jsxs(F,{header:"Users",linkItem:e.jsx(x,{className:"bg-primary rounded-md text-white p-2",href:route("admin.users.create"),children:"Create user"}),children:[e.jsx(v,{title:"Users"}),e.jsx("div",{className:"w-full mt-6",children:e.jsx("div",{className:"bg-white",children:e.jsx(I,{headItems:w,children:r.data.map((t,a)=>{var m,h,u,f,j;return e.jsxs("tr",{className:"odd:bg-white even:bg-slate-100",children:[e.jsx("td",{className:"text-left py-3 px-4",children:t.id}),e.jsx("td",{className:"text-left py-3 px-4",children:t.name}),e.jsx("td",{className:"text-left py-3 px-4",children:t.email}),e.jsx("td",{className:"text-left py-3 px-4",children:(m=t.roles[0])!=null&&m.name?e.jsx(e.Fragment,{children:e.jsx("span",{className:C("text-xs font-medium me-2 px-2.5 py-0.5 rounded border ",{"border-green-400 bg-green-100 text-green-800":((h=t.roles[0])==null?void 0:h.name)=="admin"},{"bg-purple-100 text-purple-800 border-purple-400":((u=t.roles[0])==null?void 0:u.name)=="user"}),children:(f=t.roles[0])==null?void 0:f.name})}):e.jsx("span",{className:"bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-yellow-400",children:"N/A"})}),e.jsx("td",{className:"text-left py-3 px-4",children:e.jsx(E,{defaultText:((j=d.data)==null?void 0:j.status)??t.status,children:b(t.status).map((p,y)=>e.jsx(A.Option,{className:({active:c})=>`relative cursor-default select-none ${c?"bg-amber-100 text-amber-900":"text-gray-900"}`,value:p,children:({selected:c})=>e.jsxs(e.Fragment,{children:[e.jsx("span",{className:`block w-full truncate ${c?"font-medium":"font-normal"}`,children:e.jsx(x,{method:"put",className:"py-2 pl-10 text-left pr-4 block w-full",as:"button",href:route("admin.users.status",{user:t.id,statusName:p}),children:p})}),c?e.jsx("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600",children:e.jsx(Z,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},y))})}),e.jsx("td",{className:"text-left py-3 px-4",children:e.jsxs(N,{additionalClasses:"bg-gray-200 text-gray-900",name:"Actions",children:[e.jsx(g.Item,{children:e.jsxs(x,{href:route("admin.users.edit",t.id),className:"group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white",children:[e.jsx(D,{className:"mr-2 h-5 w-5"}),"Edit"]})}),e.jsx(g.Item,{children:e.jsxs(x,{method:"delete",as:"button",href:route("admin.users.destroy",t.id),className:"group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white",children:[e.jsx(S,{className:"mr-2 h-5 w-5"}),"Delete"]})})]})})]},a)})})})}),r.total>10&&e.jsx(R,{items:r})]})};export{H as default};
