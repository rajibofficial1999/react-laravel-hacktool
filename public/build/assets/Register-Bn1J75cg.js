import{W as u,r as p,j as e,Y as f,a as x}from"./app-D6lE0vgG.js";import{G as h}from"./GuestLayout-ClNwfMLv.js";import{T as o,I as l}from"./TextInput-C1auNjXd.js";import{I as m}from"./InputLabel-B2WEODwW.js";import{P as w}from"./PrimaryButton-DpQY_b32.js";import"./index-DG6WN2lu.js";function b(){const{data:s,setData:r,post:n,processing:i,errors:t,reset:d}=u({name:"",email:"",reference_id:"",password:"",password_confirmation:""});p.useEffect(()=>()=>{d("password","password_confirmation")},[]);const c=a=>{a.preventDefault(),n(route("users.register"))};return e.jsxs(h,{children:[e.jsx(f,{title:"Register"}),e.jsxs("form",{onSubmit:c,children:[e.jsxs("div",{children:[e.jsx(m,{htmlFor:"name",value:"Name"}),e.jsx(o,{id:"name",name:"name",value:s.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,placeholder:"Enter name",onChange:a=>r("name",a.target.value),required:!0}),e.jsx(l,{className:"mt-2",children:t.name})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"email",value:"Email"}),e.jsx(o,{id:"email",type:"email",name:"email",value:s.email,className:"mt-1 block w-full",autoComplete:"username",placeholder:"Enter email",onChange:a=>r("email",a.target.value),required:!0}),e.jsx(l,{className:"mt-2",children:t.email})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"reference_id",value:"Reference ID"}),e.jsx(o,{id:"reference_id",type:"text",name:"reference_id",value:s.reference_id,className:"mt-1 block w-full",autoComplete:"reference_id",placeholder:"Reference ID",onChange:a=>r("reference_id",a.target.value),required:!0}),e.jsx(l,{className:"mt-2",children:t.reference_id})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"password",value:"Password"}),e.jsx(o,{id:"password",type:"password",name:"password",value:s.password,className:"mt-1 block w-full",autoComplete:"new-password",placeholder:"Enter password",onChange:a=>r("password",a.target.value),required:!0}),e.jsx(l,{className:"mt-2",children:t.password})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"password_confirmation",value:"Confirm Password"}),e.jsx(o,{id:"password_confirmation",type:"password",name:"password_confirmation",value:s.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",placeholder:"Confirm password",onChange:a=>r("password_confirmation",a.target.value),required:!0}),e.jsx(l,{className:"mt-2",children:t.password_confirmation})]}),e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsx(x,{href:route("login"),className:"text-primary text-sm hover:text-gray-900 rounded-md focus:outline-none",children:"Already have an account?"}),e.jsx(w,{className:"ms-4",disabled:i,children:"Register"})]})]})]})}export{b as default};
