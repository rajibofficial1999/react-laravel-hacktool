import{q as p,W as h,j as e,a as j}from"./app-DosBPi95.js";import{T as n,I as m}from"./TextInput-DDlEQ_s6.js";import{I as l}from"./InputLabel-CTkC3yrB.js";import{P as v}from"./PrimaryButton-BKT-UB-r.js";import"./index-RxbyN6Ed.js";function k({mustVerifyEmail:o,status:d,className:u=""}){const s=p().props.auth.user,{data:t,setData:r,patch:c,errors:i,processing:x}=h({name:s.name,email:s.email}),f=a=>{a.preventDefault(),c(route("profile.update"))};return e.jsxs("section",{className:u,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Profile Information"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Update your account's profile information and email address."})]}),e.jsxs("form",{onSubmit:f,className:"mt-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"name",value:"Name"}),e.jsx(n,{id:"name",className:"mt-1 block w-full",value:t.name,onChange:a=>r("name",a.target.value),required:!0,isFocused:!0,autoComplete:"name"}),e.jsx(m,{className:"mt-2",message:i.name})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"email",value:"Email"}),e.jsx(n,{id:"email",type:"email",className:"mt-1 block w-full",value:t.email,onChange:a=>r("email",a.target.value),required:!0,autoComplete:"username"}),e.jsx(m,{className:"mt-2",message:i.email})]}),o&&s.email_verified_at===null&&e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm mt-2 text-gray-800",children:["Your email address is unverified.",e.jsx(j,{href:route("verification.send"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Click here to re-send the verification email."})]}),d==="verification-link-sent"&&e.jsx("div",{className:"mt-2 font-medium text-sm text-green-600",children:"A new verification link has been sent to your email address."})]}),e.jsx("div",{className:"flex items-center gap-4",children:e.jsx(v,{disabled:x,children:"Save"})})]})]})}export{k as default};
