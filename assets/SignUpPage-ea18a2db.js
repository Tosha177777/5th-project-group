import{n,b as l,c as d,s as m,r as g,d as c,j as e,N as x,e as h}from"./index-a3f9243c.js";import{c as u,a as i,b as w,u as j}from"./formik.esm-f1b6017c.js";const S=n.div`
  form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  width: 100%;
  }
  
  h1{
  font-size: 26px;
  line-height: 1.23;
  }

  span{
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 1.33;
  }

  input{
    padding: 12px 10px;
    width: 100%;
    font-size: 16px;
    line-height: 1.2;
    border-radius: 6px;
  }

`,b=n.div`
  max-width: 320px;
  width: 100%;
  height: 500px;
  position: absolute;
  top: 28px;
  left: 0;
  z-index: -10;
  background-image: url('./images/mobile/Background-element-Sign In@1x.png');
  background-size: cover;
  background-repeat:no-repeat;

  @media (min-device-pixel-ratio: 2),
  (-webkit-min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
    background-image: url('./images/mobile/Background-element-Sign In@2x.png');
  }
`,f=u().shape({email:i().email("Please enter a valid email").required(),password:i().min(8,"Password must be 8 or more characters").max(64).required(),repeatPassword:i().when("password",(s,a)=>{if(s)return a.required("The passwords do not match").oneOf([w("password")],"The passwords do not match")})}),P=()=>{const s=j({initialValues:{email:"",password:"",repeatPassword:""},validationSchema:f,onSubmit:({email:t,password:o},{resetForm:p})=>{a(h({email:t,password:o})),p()}}),a=l(),r=d(m);return g.useEffect(()=>{r&&a(c())},[r,a]),e.jsxs(e.Fragment,{children:[e.jsx(b,{}),e.jsxs(S,{children:[e.jsxs("form",{onSubmit:s.handleSubmit,children:[e.jsx("h1",{children:"Sign Up"}),e.jsxs("label",{children:[e.jsx("span",{children:"Enter your email"}),e.jsx("input",{id:"email",name:"email",type:"email",placeholder:"E-mail",onChange:s.handleChange,value:s.values.email}),e.jsx("p",{children:s.errors.email?s.errors.email:""})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Enter your password"}),e.jsx("input",{id:"password",name:"password",type:"password",placeholder:"Password",onChange:s.handleChange,value:s.values.password}),e.jsx("p",{children:s.errors.password?s.errors.password:""})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Repeat password"}),e.jsx("input",{id:"repeatPassword",name:"repeatPassword",type:"password",placeholder:"Repeat password",onChange:s.handleChange,value:s.values.repeatPassword})]}),e.jsx("button",{type:"submit",children:"Sign Up"}),e.jsx(x,{to:"/sign-in",children:"Sign in"})]}),e.jsx("div",{children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:"../../images/mobile/Bottle-Sign-In@1x.png",type:"image/png"}),e.jsx("source",{srcSet:"../../images/mobile/Bottle-Sign-In@2x.png",type:"image/png"}),e.jsx("source",{media:"min-width:768px",srcSet:"../../images/tablet/Bottle-Sign-In@1x.png",type:"image/png"}),e.jsx("source",{media:"min-width:768px",srcSet:"../../images/tablet/Bottle-Sign-In@2x.png",type:"image/png"}),e.jsx("source",{media:"min-width:1440px",srcSet:"../../images/desktop/Bottle-Sign-In@1x.png",type:"image/png"}),e.jsx("source",{media:"min-width:1440px",srcSet:"../../images/desktop/Bottle-Sign-In@2x.png",type:"image/png"}),e.jsx("img",{src:"../../images/mobile/Bottle-Sign-In.png",alt:"a bottle of water",loading:"lazy"})]})})]})]})};export{P as default};
