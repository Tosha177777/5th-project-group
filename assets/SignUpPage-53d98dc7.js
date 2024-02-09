import{n as i,F as $,c as o,E as S,b as v,d as a,e as B,r as d,f as C,j as e,g as E,h as s,S as x,i as c,L as z,k as P,l as F,m as V,s as q}from"./index-6171a1fc.js";import{m,a as u,t as R,b as U,d as T,c as A}from"./bottle-for-sign-in@2x-e8cd8e67.js";import{d as D,a as L}from"./background-element-main-page@2x-b99c692e.js";const M=i($)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  width: 100%;
  @media (min-width: 768px) {
    width: 336px;
    margin-top: 40px;
  }
  @media (min-width: 1440px) {
    width: 384px;
    margin-top: 140px;
    margin-right: 104px;
    margin-left: auto;
  }
  h1 {
    font-size: 26px;
    font-weight: 500;
    line-height: 1.23;
    color: ${o.primaryColorBlack};
  }
  label {
    position: relative;
  }
  
  input {
    padding: 12px 10px;
    width: 100%;
    font-size: 16px;
    line-height: 1.2;
    border-radius: 6px;
    border: 0;
    outline: 1px solid ${o.secondaryColor6};
    color: ${o.primaryColorBlue};
  }
  input::placeholder {
    color: ${o.secondaryColor4};
  }
  input:focus {
    outline-color: ${o.secondaryColor6};
  }
  input:invalid {
    color: ${o.secondaryColor3};
    border: 1px solid ${o.secondaryColor3};
  }
  input::-ms-reveal,
  input::-ms-clear {
    display: none;
  }

  a {
    width: fit-content;
    font-size: 16px;
    line-height: 1.25;
    color: ${o.primaryColorBlue};
    transition: color ease-in-out 250ms;
  }
  a:hover {
    color: ${o.secondaryColor5};
  }
`,W=i.button`
  padding: 8px 30px;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 10px;
  border: none;
  background-color: ${o.primaryColorBlue};
  color: ${o.primaryColorWhite};
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);

  @media (min-width: 768px) {
    font-size: 18px;
  }

  :hover {
   box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }
`,n=i.span`
    display: block;
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 1.33;
    color: ${o.primaryColorBlack};
 `,h=i.button`
  position: absolute;
  right: 10px;
  top: 44px;
  background: none;
  border: none;
  cursor: pointer;
  stroke: ${o.primaryColorBlue};
`,l=i(S)`
  margin-left: 4px;
  font-size: 14px;
  color: ${o.secondaryColor3};
`,I=v().shape({email:a().email("Please enter a valid email").required("E-mail is required"),password:a().min(8,"Password must be 8 or more characters").max(64).required("Password is required"),repeatPassword:a().oneOf([B("password"),null],"The passwords do not match").required("Repeat password field is required")}),N=()=>{const[r,g]=d.useState(!1),[t,b]=d.useState(!1),p=C(),w={email:"",password:"",repeatPassword:""},y=({email:f,password:k},{resetForm:j})=>{event.preventDefault(),p(P({email:f,password:k})),p(F()),j()};return e.jsx(E,{initialValues:w,validationSchema:I,onSubmit:y,children:e.jsxs(M,{children:[e.jsx("h1",{children:"Sign Up"}),e.jsxs("label",{children:[e.jsx(n,{children:"Enter your email"}),e.jsx(s,{name:"email",type:"email",placeholder:"E-mail"}),e.jsx(l,{name:"email",component:"span"})]}),e.jsxs("label",{children:[e.jsx(n,{children:"Enter your password"}),e.jsx(s,{name:"password",type:r?"text":"password",placeholder:"Password",pattern:".{8,}"}),e.jsx(h,{type:"button",onClick:()=>g(!r),children:r?e.jsx(x,{}):e.jsx(c,{})}),e.jsx(l,{name:"password",component:"span"})]}),e.jsxs("label",{children:[e.jsx(n,{children:"Repeat password"}),e.jsx(s,{name:"repeatPassword",type:t?"text":"password",placeholder:"Repeat password",pattern:".{8,}"}),e.jsx(h,{type:"button",onClick:()=>b(!t),children:t?e.jsx(x,{}):e.jsx(c,{})}),e.jsx(l,{name:"repeatPassword",component:"span"})]}),e.jsx(W,{type:"submit",children:"Sign Up"}),e.jsx(z,{to:"/signin",children:"Sign in"})]})})},O=i.div`
  max-width: 320px;
  width: 100%;
  height: 570px;
  position: absolute;
  top: 26px;
  left: 0;
  z-index: -10;
  background-image: url(${m}),
    url(${u});
  background-size: 280px, cover;
  background-repeat: no-repeat;
  background-position:
    top 342px left 20px,
    top 0 left 0;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${m}),
      url(${u});
  }

  @media (min-width: 768px) {
    max-width: 768px;
    width: 100%;
    height: 680px;
    top: -104px;
    left: 0;
    background-image: url(${R});tabBottle2x
    background-size: cover;
    background-position: top 0 left 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${U});
    }
  }

  @media (min-width: 1440px) {
    max-width: 1404px;
    width: 100%;
    height: 100%;
    top: -149px;
    left: 18px;
    background-image: url(${T}),
      url(${D});
    background-size: 916px, 1404px;
    background-position:
      top 28px left -51px,
      top 0 left 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${A}),
        url(${L});
    }
  }
`,G=i.p`
  margin-top: 20px;
  width: 280px;
  font-size: 18px;
  text-align: center;
  color: ${o.secondaryColor3};
  @media (min-width: 768px) {
    width: 320px;
    margin-right: auto;
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    margin-left: auto;
    margin-right: 133px;
  }
`,X=()=>{const r=V(q);return e.jsxs(e.Fragment,{children:[e.jsx(O,{}),e.jsx(N,{}),r&&e.jsx(G,{children:r})]})};export{X as default};
