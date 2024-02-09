import{u as i,c as o,F as b,E as w,b as y,d as t,r as f,f as k,j as e,g as $,h as a,S,i as j,L as v,o as B,m as C,s as E}from"./index-6171a1fc.js";import{m as n,a as s,t as z,b as F,d as P,c as I}from"./bottle-for-sign-in@2x-e8cd8e67.js";import{d as V,a as q}from"./background-element-main-page@2x-b99c692e.js";const L=i(b)`
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
`,M=i.button`
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
`,l=i.span`
    display: block;
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 1.33;
    color: ${o.primaryColorBlack};
 `,T=i.button`
  position: absolute;
  right: 10px;
  top: 44px;
  background: none;
  border: none;
  cursor: pointer;
  stroke: ${o.primaryColorBlue};
`,p=i(w)`
    margin-left: 4px;
    font-size: 14px;
    color: ${o.secondaryColor3};
  `,W=y().shape({email:t().email("Please enter a valid email").required("E-mail is required"),password:t().min(8,"Password must be 8 or more characters").max(30).required("Password is required")}),A=()=>{const[r,d]=f.useState(!1),x=k(),m={email:"",password:""},c=({email:u,password:h},{resetForm:g})=>{x(B({email:u,password:h})),g()};return e.jsx($,{initialValues:m,validationSchema:W,onSubmit:c,children:e.jsxs(L,{autoComplete:"off",children:[e.jsx("h1",{children:"Sign In"}),e.jsxs("label",{children:[e.jsx(l,{children:"Enter your email"}),e.jsx(a,{name:"email",type:"email",placeholder:"E-mail"}),e.jsx(p,{name:"email",component:"span"})]}),e.jsxs("label",{children:[e.jsx(l,{children:"Enter your password"}),e.jsx(a,{name:"password",type:r?"text":"password",placeholder:"Password",pattern:".{8,}"}),e.jsx(T,{type:"button",onClick:()=>d(!r),children:r?e.jsx(S,{}):e.jsx(j,{})}),e.jsx(p,{name:"password",component:"span"})]}),e.jsx(M,{type:"submit",children:"Sign In"}),e.jsx(v,{to:"/signup",children:"Sign up"})]})})},D=i.div`
  max-width: 320px;
  width: 100%;
  height: 570px;
  position: absolute;
  top: 26px;
  left: 0;
  z-index: -10;
  background-image: url(${n}), url(${s});
  background-size: 280px, cover;
  background-repeat: no-repeat;
  background-position:
    top 342px left 20px,
    top 0 left 0;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${n}), url(${s});
  }

  @media (min-width: 768px) {
    max-width: 768px;
    width: 100%;
    height: 680px;
    top: -104px;
    left: 0;
    background-image: url(${z});
    background-size: cover;
    background-position: top 0 left 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${F});
    }
  }

  @media (min-width: 1440px) {
    max-width: 1404px;
    width: 100%;
    height: 100%;
    top: -149px;
    left: 18px;
    background-image: url(${P}), url(${V});
    background-size: 916px, 1404px;
    background-position:
      top 28px left -51px,
      top 0 left 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${I}), url(${q});
    }
  }
`,N=i.p`
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
`,K=()=>{const r=C(E);return e.jsxs(e.Fragment,{children:[e.jsx(D,{}),e.jsx(A,{}),r&&e.jsx(N,{children:r})]})};export{K as default};
