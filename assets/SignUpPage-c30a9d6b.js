import{n as r,c as o,r as t,b as k,j as e,L as y,d as j,e as C,f as $,s as v}from"./index-3e00cbd4.js";import{F as S,c as z,a,b as E,d as B,e as s,E as p}from"./formik.esm-96ed779d.js";const P=r(S)`
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
`,L=r.button`
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
`,d=r.button`
  position: absolute;
  right: 10px;
  top: 44px;
  background: none;
  border: none;
  cursor: pointer;
  stroke: ${o.primaryColorBlue};
`,c=i=>t.createElement("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("path",{d:"M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.574-3.007-9.964-7.178Z",strokeLinecap:"round",strokeLinejoin:"round"}),t.createElement("path",{d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",strokeLinecap:"round",strokeLinejoin:"round"})),m=i=>t.createElement("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("path",{d:"M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65A3 3 0 1 0 9.88 9.879m4.242 4.242L9.881 9.88",strokeLinecap:"round",strokeLinejoin:"round"})),V=z().shape({email:a().email("Please enter a valid email").required("E-mail is required"),password:a().min(8,"Password must be 8 or more characters").max(64).required("Password is required"),repeatPassword:a().oneOf([E("password"),null],"The passwords do not match").required("Repeat password field is required")}),F=()=>{const[i,x]=t.useState(!1),[n,g]=t.useState(!1),l=k(),u={email:"",password:"",repeatPassword:""},h=({email:b,password:w},{resetForm:f})=>{event.preventDefault(),l(j({email:b,password:w})),l(C()),f()};return e.jsx(B,{initialValues:u,validationSchema:V,onSubmit:h,children:e.jsxs(P,{children:[e.jsx("h1",{children:"Sign Up"}),e.jsxs("label",{children:[e.jsx("span",{children:"Enter your email"}),e.jsx(s,{name:"email",type:"email",placeholder:"E-mail"}),e.jsx(p,{name:"email",component:"p"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Enter your password"}),e.jsx(s,{name:"password",type:i?"text":"password",placeholder:"Password",pattern:".{8,}"}),e.jsx(d,{type:"button",onClick:()=>x(!i),children:i?e.jsx(c,{}):e.jsx(m,{})}),e.jsx(p,{name:"password",component:"p"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Repeat password"}),e.jsx(s,{name:"repeatPassword",type:n?"text":"password",placeholder:"Repeat password",pattern:".{8,}"}),e.jsx(d,{type:"button",onClick:()=>g(!n),children:n?e.jsx(c,{}):e.jsx(m,{})}),e.jsx(p,{name:"repeatPassword",component:"p"})]}),e.jsx(L,{type:"submit",children:"Sign Up"}),e.jsx(y,{to:"/signin",children:"Sign in"})]})})};r.form`
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
`;const M=r.div`
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
`,q=r.h3`
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
`,T=()=>{const i=$(v);return e.jsxs(e.Fragment,{children:[e.jsx(M,{}),e.jsx(F,{}),i&&e.jsx(q,{children:"Oops! Something goes wrong... Try again."})]})};export{T as default};
