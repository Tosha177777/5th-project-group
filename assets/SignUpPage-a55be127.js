import{n as o,F as k,c as i,E as j,b as S,d as s,e as v,r as d,f as $,j as e,g as C,h as a,S as c,i as m,L as E,k as z,l as P,m as B,s as F}from"./index-d496a99d.js";const V=o(k)`
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
    color: ${i.primaryColorBlack};
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
    outline: 1px solid ${i.secondaryColor6};
    color: ${i.primaryColorBlue};
  }
  input::placeholder {
    color: ${i.secondaryColor4};
  }
  input:focus {
    outline-color: ${i.secondaryColor6};
  }
  input:invalid {
    color: ${i.secondaryColor3};
    border: 1px solid ${i.secondaryColor3};
  }
  input::-ms-reveal,
  input::-ms-clear {
    display: none;
  }

  a {
    width: fit-content;
    font-size: 16px;
    line-height: 1.25;
    color: ${i.primaryColorBlue};
    transition: color ease-in-out 250ms;
  }
  a:hover {
    color: ${i.secondaryColor5};
  }
`,q=o.button`
  padding: 8px 30px;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 10px;
  border: none;
  background-color: ${i.primaryColorBlue};
  color: ${i.primaryColorWhite};
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);

  @media (min-width: 768px) {
    font-size: 18px;
  }

  :hover {
   box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }
`,n=o.span`
    display: block;
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 1.33;
    color: ${i.primaryColorBlack};
 `,x=o.button`
  position: absolute;
  right: 10px;
  top: 44px;
  background: none;
  border: none;
  cursor: pointer;
  stroke: ${i.primaryColorBlue};
`,l=o(j)`
  margin-left: 4px;
  font-size: 14px;
  color: ${i.secondaryColor3};
`,R=S().shape({email:s().email("Please enter a valid email").required("E-mail is required"),password:s().min(8,"Password must be 8 or more characters").max(64).required("Password is required"),repeatPassword:s().oneOf([v("password"),null],"The passwords do not match").required("Repeat password field is required")}),U=()=>{const[r,g]=d.useState(!1),[t,u]=d.useState(!1),p=$(),h={email:"",password:"",repeatPassword:""},b=({email:w,password:f},{resetForm:y})=>{event.preventDefault(),p(z({email:w,password:f})),p(P()),y()};return e.jsx(C,{initialValues:h,validationSchema:R,onSubmit:b,children:e.jsxs(V,{children:[e.jsx("h1",{children:"Sign Up"}),e.jsxs("label",{children:[e.jsx(n,{children:"Enter your email"}),e.jsx(a,{name:"email",type:"email",placeholder:"E-mail"}),e.jsx(l,{name:"email",component:"span"})]}),e.jsxs("label",{children:[e.jsx(n,{children:"Enter your password"}),e.jsx(a,{name:"password",type:r?"text":"password",placeholder:"Password",pattern:".{8,}"}),e.jsx(x,{type:"button",onClick:()=>g(!r),children:r?e.jsx(c,{}):e.jsx(m,{})}),e.jsx(l,{name:"password",component:"span"})]}),e.jsxs("label",{children:[e.jsx(n,{children:"Repeat password"}),e.jsx(a,{name:"repeatPassword",type:t?"text":"password",placeholder:"Repeat password",pattern:".{8,}"}),e.jsx(x,{type:"button",onClick:()=>u(!t),children:t?e.jsx(c,{}):e.jsx(m,{})}),e.jsx(l,{name:"repeatPassword",component:"span"})]}),e.jsx(q,{type:"submit",children:"Sign Up"}),e.jsx(E,{to:"/signin",children:"Sign in"})]})})},T=o.div`
  max-width: 320px;
  width: 100%;
  height: 570px;
  position: absolute;
  top: 26px;
  left: 0;
  z-index: -10;
  background-image: url('src/images/mobile/bottle-sign-in@1x.png'),
    url('src/images/mobile/background-element-sign-in@1x.png');
  background-size: 280px, cover;
  background-repeat: no-repeat;
  background-position:
    top 342px left 20px,
    top 0 left 0;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('src/images/mobile/bottle-sign-in@2x.png'),
      url('src/images/mobile/background-element-sign-in@2x.png');
  }

  @media (min-width: 768px) {
    max-width: 768px;
    width: 100%;
    height: 680px;
    top: -104px;
    left: 0;
    background-image: url('src/images/tablet/bottle-for-sign-in@1x.png');
    background-size: cover;
    background-position: top 0 left 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('src/images/tablet/bottle-for-sign-in@2x.png');
    }
  }

  @media (min-width: 1440px) {
    max-width: 1404px;
    width: 100%;
    height: 100%;
    top: -149px;
    left: 18px;
    background-image: url('src/images/desktop/bottle-for-sign-in@1x.png'),
      url('src/images/desktop/background-element-main-page@1x.png');
    background-size: 916px, 1404px;
    background-position:
      top 28px left -51px,
      top 0 left 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('src/images/desktop/bottle-for-sign-in@2x.png'),
        url('src/images/desktop/background-element-main-page@2x.png');
    }
  }
`,A=o.p`
  margin-top: 20px;
  width: 280px;
  font-size: 18px;
  text-align: center;
  color: ${i.secondaryColor3};
  @media (min-width: 768px) {
    width: 320px;
    margin-right: auto;
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    margin-left: auto;
    margin-right: 133px;
  }
`,M=()=>{const r=B(F);return e.jsxs(e.Fragment,{children:[e.jsx(T,{}),e.jsx(U,{}),r&&e.jsx(A,{children:r})]})};export{M as default};
