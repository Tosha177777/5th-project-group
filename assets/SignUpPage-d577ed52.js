import{n as i,F as y,c as o,b as k,d as n,e as j,r as l,f as $,j as e,g as C,h as a,E as s,L as S,i as v,k as z,l as B,s as E}from"./index-e94e813d.js";import{S as d,a as c}from"./slashed-eye-9ca99ca5.js";const P=i(y)`
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
  input::-ms-reveal,
  input::-ms-clear {
    display: none;
  }
  p {
    margin-left: 4px;
    font-size: 14px;
    color: ${o.secondaryColor3};
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
`,V=i.button`
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
`,m=i.button`
  position: absolute;
  right: 10px;
  top: 44px;
  background: none;
  border: none;
  cursor: pointer;
  stroke: ${o.primaryColorBlue};
`,F=k().shape({email:n().email("Please enter a valid email").required("E-mail is required"),password:n().min(8,"Password must be 8 or more characters").max(64).required("Password is required"),repeatPassword:n().oneOf([j("password"),null],"The passwords do not match").required("Repeat password field is required")}),q=()=>{const[r,x]=l.useState(!1),[t,g]=l.useState(!1),p=$(),u={email:"",password:"",repeatPassword:""},h=({email:b,password:w},{resetForm:f})=>{event.preventDefault(),p(v({email:b,password:w})),p(z()),f()};return e.jsx(C,{initialValues:u,validationSchema:F,onSubmit:h,children:e.jsxs(P,{children:[e.jsx("h1",{children:"Sign Up"}),e.jsxs("label",{children:[e.jsx("span",{children:"Enter your email"}),e.jsx(a,{name:"email",type:"email",placeholder:"E-mail"}),e.jsx(s,{name:"email",component:"p"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Enter your password"}),e.jsx(a,{name:"password",type:r?"text":"password",placeholder:"Password",pattern:".{8,}"}),e.jsx(m,{type:"button",onClick:()=>x(!r),children:r?e.jsx(d,{}):e.jsx(c,{})}),e.jsx(s,{name:"password",component:"p"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Repeat password"}),e.jsx(a,{name:"repeatPassword",type:t?"text":"password",placeholder:"Repeat password",pattern:".{8,}"}),e.jsx(m,{type:"button",onClick:()=>g(!t),children:t?e.jsx(d,{}):e.jsx(c,{})}),e.jsx(s,{name:"repeatPassword",component:"p"})]}),e.jsx(V,{type:"submit",children:"Sign Up"}),e.jsx(S,{to:"/signin",children:"Sign in"})]})})};i.form`
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
    margin-left: 44px;
    font-size: 14px;
    color: ${o.secondaryColor3};
  }

  a {
    font-size: 16px;
    line-height: 1.25;
    color: ${o.primaryColorBlue};
  }
`;i.button`
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
`;i.button`
  position: absolute;
  right: 10px;
  top: 44px;
  background: none;
  border: none;
  cursor: pointer;
  stroke: ${o.primaryColorBlue};
`;const R=i.div`
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
`,U=i.h3`
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
`,D=()=>{const r=B(E);return e.jsxs(e.Fragment,{children:[e.jsx(R,{}),e.jsx(q,{}),r&&e.jsx(U,{children:r})]})};export{D as default};
