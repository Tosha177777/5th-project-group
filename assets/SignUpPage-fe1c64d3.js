import{n as o,c as g,r,b,d as f,s as w,e as k,j as e,L as j,f as v}from"./index-2ec0de94.js";import{c as y,a as n,b as S,u as E}from"./formik.esm-ebaf4e50.js";const P=o.form`
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
    color: ${g.primaryColorBlack};
  }

  label {
    position: relative;
  }

  span {
    display: block;
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 1.33;
    color: #2f2f2f;
  }

  input {
    padding: 12px 10px;
    width: 100%;
    font-size: 16px;
    line-height: 1.2;
    border-radius: 6px;
    border-color: #d7e3ff;
    color: #407bff;
  }

  input::placeholder {
    color: #9ebbff;
  }

  input:focus {
    outline: #d7e3ff;
    background-color: none;
  }

  input:invalid {
    border-color: #ef5050;
  }

  p {
    margin-left: 4px;
    font-size: 14px;
    color: #ef5050;
  }

  a {
    font-size: 16px;
    line-height: 1.25;
    color: #407bff;
  }
`,C=o.button`
  padding: 8px 30px;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 10px;
  border: none;
  background-color: #407bff;
  color: #ffffff;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`,d=o.button`
  position: absolute;
  right: 10px;
  top: 54px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  stroke: ${g.primaryColorBlue};
`,F=o.div`
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
    height: 680px;
    top: -140px;
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
`,c=i=>r.createElement("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},r.createElement("path",{d:"M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.574-3.007-9.964-7.178Z",stroke:"#2F2F2F",strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",stroke:"#2F2F2F",strokeLinecap:"round",strokeLinejoin:"round"})),m=i=>r.createElement("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},r.createElement("path",{d:"M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65A3 3 0 1 0 9.88 9.879m4.242 4.242L9.881 9.88",stroke:"#2F2F2F",strokeLinecap:"round",strokeLinejoin:"round"})),z=y().shape({email:n().email("Please enter a valid email").required("E-mail is required"),password:n().min(8,"Password must be 8 or more characters").max(64).required("Password is required"),repeatPassword:n().oneOf([S("password")],"The passwords do not match")}),B=()=>{const i=E({initialValues:{email:"",password:"",repeatPassword:""},validationSchema:z,onSubmit:({email:t,password:u},{resetForm:h})=>{s(v({email:t,password:u})),h()}}),[a,x]=r.useState(!1),p=()=>{x(t=>!t)},s=b(),l=f(w);return r.useEffect(()=>{l&&s(k())},[l,s]),e.jsxs(e.Fragment,{children:[e.jsx(F,{}),e.jsxs(P,{onSubmit:i.handleSubmit,children:[e.jsx("h1",{children:"Sign Up"}),e.jsxs("label",{children:[e.jsx("span",{children:"Enter your email"}),e.jsx("input",{id:"email",name:"email",type:"email",placeholder:"E-mail",onChange:i.handleChange,value:i.values.email}),e.jsx("p",{children:i.errors.email?i.errors.email:""})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Enter your password"}),e.jsx("input",{id:"password",name:"password",type:"password",placeholder:"Password",onChange:i.handleChange,value:i.values.password,pattern:".{8,}"}),e.jsx(d,{type:"button",onClick:()=>p(),children:a?e.jsx(c,{}):e.jsx(m,{})}),e.jsx("p",{children:i.errors.password?i.errors.password:""})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Repeat password"}),e.jsx("input",{id:"repeatPassword",name:"repeatPassword",type:"password",placeholder:"Repeat password",onChange:i.handleChange,value:i.values.repeatPassword,pattern:".{8,}"}),e.jsx(d,{type:"button",onClick:()=>p(),children:a?e.jsx(c,{}):e.jsx(m,{})}),e.jsx("p",{children:i.errors.repeatPassword?i.errors.repeatPassword:""})]}),e.jsx(C,{type:"submit",disabled:!i.isValid,children:"Sign Up"}),e.jsx(j,{to:"/signin",children:"Sign in"})]})]})};export{B as default};
