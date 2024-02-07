import{u as e,c as o,F as u,E as h,b,d as a,r as f,f as y,j as i,g as w,h as s,S as k,i as C,L as $,o as S,m as j,s as v}from"./index-8f9ec218.js";const z=e(u)`
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
`,B=e.button`
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
`,l=e.span`
    display: block;
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 1.33;
    color: ${o.primaryColorBlack};
 `,E=e.button`
  position: absolute;
  right: 10px;
  top: 44px;
  background: none;
  border: none;
  cursor: pointer;
  stroke: ${o.primaryColorBlue};
`,p=e(h)`
    margin-left: 4px;
    font-size: 14px;
    color: ${o.secondaryColor3};
  `,F=b().shape({email:a().email("Please enter a valid email").required("E-mail is required"),password:a().min(8,"Password must be 8 or more characters").max(30).required("Password is required")}),P=()=>{const[r,d]=f.useState(!1),c=y(),x={email:"",password:""},m=({email:n,password:t},{resetForm:g})=>{console.log({email:n,password:t}),c(S({email:n,password:t})),g()};return i.jsx(w,{initialValues:x,validationSchema:F,onSubmit:m,children:i.jsxs(z,{autoComplete:"off",children:[i.jsx("h1",{children:"Sign In"}),i.jsxs("label",{children:[i.jsx(l,{children:"Enter your email"}),i.jsx(s,{name:"email",type:"email",placeholder:"E-mail"}),i.jsx(p,{name:"email",component:"span"})]}),i.jsxs("label",{children:[i.jsx(l,{children:"Enter your password"}),i.jsx(s,{name:"password",type:r?"text":"password",placeholder:"Password",pattern:".{8,}"}),i.jsx(E,{type:"button",onClick:()=>d(!r),children:r?i.jsx(k,{}):i.jsx(C,{})}),i.jsx(p,{name:"password",component:"span"})]}),i.jsx(B,{type:"submit",children:"Sign In"}),i.jsx($,{to:"/signup",children:"Sign up"})]})})};e.form`
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
`;e.button`
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
`;e.button`
  position: absolute;
  right: 10px;
  top: 44px;
  background: none;
  border: none;
  cursor: pointer;
  stroke: ${o.primaryColorBlue};
`;const I=e.div`
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
`,V=e.p`
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
`,L=()=>{const r=j(v);return i.jsxs(i.Fragment,{children:[i.jsx(I,{}),i.jsx(P,{}),r&&i.jsx(V,{children:r})]})};export{L as default};
