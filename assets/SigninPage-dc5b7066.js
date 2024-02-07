import{u as r,c as o,F as h,E as b,b as y,d as t,r as S,f as M,j as e,g as f,h as n,S as B,i as k,L as Q,o as w,m as v,s as j}from"./index-d3be41a3.js";import{d as C,a as F}from"./background-element-main-page@2x-b99c692e.js";const I=r(h)`
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
`,z=r.button`
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
`,A=r.span`
    display: block;
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 1.33;
    color: ${o.primaryColorBlack};
 `,V=r.button`
  position: absolute;
  right: 10px;
  top: 44px;
  background: none;
  border: none;
  cursor: pointer;
  stroke: ${o.primaryColorBlue};
`,a=r(b)`
    margin-left: 4px;
    font-size: 14px;
    color: ${o.secondaryColor3};
  `,Z=y().shape({email:t().email("Please enter a valid email").required("E-mail is required"),password:t().min(8,"Password must be 8 or more characters").max(30).required("Password is required")}),L=()=>{const[i,p]=S.useState(!1),d=M(),c={email:"",password:""},x=({email:m,password:u},{resetForm:g})=>{d(w({email:m,password:u})),g()};return e.jsx(f,{initialValues:c,validationSchema:Z,onSubmit:x,children:e.jsxs(I,{autoComplete:"off",children:[e.jsx("h1",{children:"Sign In"}),e.jsxs("label",{children:[e.jsx(A,{children:"Enter your email"}),e.jsx(n,{name:"email",type:"email",placeholder:"E-mail"}),e.jsx(a,{name:"email",component:"span"})]}),e.jsxs("label",{children:[e.jsx(A,{children:"Enter your password"}),e.jsx(n,{name:"password",type:i?"text":"password",placeholder:"Password",pattern:".{8,}"}),e.jsx(V,{type:"button",onClick:()=>p(!i),children:i?e.jsx(B,{}):e.jsx(k,{})}),e.jsx(a,{name:"password",component:"span"})]}),e.jsx(z,{type:"submit",children:"Sign In"}),e.jsx(Q,{to:"/signup",children:"Sign up"})]})})},l="data:image/png;base64,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",s="data:image/png;base64,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",U="/5th-project-group/assets/bottle-for-sign-in@1x-611ab1e8.png",J="/5th-project-group/assets/bottle-for-sign-in@2x-ad8ad7bb.png",E="/5th-project-group/assets/bottle-for-sign-in@1x-899234c8.png",q="/5th-project-group/assets/bottle-for-sign-in@2x-1e16e44b.png";r.form`
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
    line-height: 1.23;
    color: ${o.primaryColorBlack};
  }

  label {
    position: relative;
  }

  span {
    display: block;
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 1.33;
    color: ${o.primaryColorBlack};
  }

  input {
    padding: 11px 10px;
    width: 100%;
    font-size: 16px;
    line-height: 1.2;
    border-radius: 6px;
    border-color: ${o.secondaryColor6};
    color: ${o.primaryColorBlue};
  }

  input::placeholder {
    color: ${o.secondaryColor4};
  }

  input:focus {
    outline: ${o.secondaryColor5};
    background-color: none;
  }

  input:invalid {
    border-color: ${o.secondaryColor3};
  }

  p {
    margin-left: 4px;
    font-size: 14px;
    color: ${o.secondaryColor3};
  }

  a {
    font-size: 16px;
    line-height: 1.25;
    color: ${o.primaryColorBlue};
  }
`;r.button`
  padding: 8px 30px;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 10px;
  border: none;
  background-color: ${o.primaryColorBlue};
  color: ${o.primaryColorWhite};

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;r.button`
  position: absolute;
  right: 10px;
  top: 44px;
  background: none;
  border: none;
  cursor: pointer;
  stroke: ${o.primaryColorBlue};
`;const Y=r.div`
  max-width: 320px;
  width: 100%;
  height: 570px;
  position: absolute;
  top: 26px;
  left: 0;
  z-index: -10;
  background-image: url(${l}), url(${s});
  background-size: 280px, cover;
  background-repeat: no-repeat;
  background-position:
    top 342px left 20px,
    top 0 left 0;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${l}), url(${s});
  }

  @media (min-width: 768px) {
    max-width: 768px;
    width: 100%;
    height: 680px;
    top: -104px;
    left: 0;
    background-image: url(${U});
    background-size: cover;
    background-position: top 0 left 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${J});
    }
  }

  @media (min-width: 1440px) {
    max-width: 1404px;
    width: 100%;
    height: 100%;
    top: -149px;
    left: 18px;
    background-image: url(${E}), url(${C});
    background-size: 916px, 1404px;
    background-position:
      top 28px left -51px,
      top 0 left 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${q}), url(${F});
    }
  }
`,G=r.p`
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
`,N=()=>{const i=v(j);return e.jsxs(e.Fragment,{children:[e.jsx(Y,{}),e.jsx(L,{}),i&&e.jsx(G,{children:i})]})};export{N as default};
