import{q as x,W as h,r as j,j as e,Y as f,a as g}from"./app-BdcZFPzP.js";import{G as b}from"./GuestLayout-BHYZJBmE.js";import{T as l,I as n}from"./TextInput-7-CtJlnH.js";import{I as i}from"./InputLabel-DrsQ6AJ9.js";import{P as w}from"./PrimaryButton-CN9C8fg5.js";import"./index-RxbyN6Ed.js";function I({status:r}){const{successMessage:m}=x().props.meta,{data:a,setData:t,post:c,processing:d,errors:o,reset:p}=h({email:"",password:"",remember:!1});j.useEffect(()=>()=>{p("password")},[]);const u=s=>{s.preventDefault(),c(route("loginSessions.store"))};return e.jsxs(b,{children:[e.jsx(f,{title:"Log in"}),r&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:r}),e.jsxs("form",{onSubmit:u,children:[e.jsxs("div",{children:[m&&e.jsx("p",{className:"text-center text-sm text-blue-400 my-2",children:m}),e.jsx(i,{htmlFor:"email",value:"Email"}),e.jsx(l,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,placeholder:"Enter email",onChange:s=>t("email",s.target.value)}),e.jsx(n,{message:o.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"password",value:"Password"}),e.jsx(l,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"current-password",placeholder:"Enter password",onChange:s=>t("password",s.target.value)}),e.jsx(n,{message:o.password,className:"mt-2"})]}),e.jsx("div",{className:"block mt-4",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",name:"remember",checked:a.remember,onChange:s=>t("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"Remember me"})]})}),e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsx(g,{href:route("register"),className:"text-sm text-primary hover:text-gray-900 rounded-md focus:outline-none",children:"Don't have an account?"}),e.jsx(w,{className:"ms-4",disabled:d,children:"Log in"})]})]})]})}export{I as default};