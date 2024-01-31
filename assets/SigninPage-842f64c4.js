import{u as e,N as p,j as o}from"./index-bdf586f4.js";import{c as d,a as t,F as m,e as x,d as n,E as i}from"./formik.esm-1a5d3fab.js";const c=e.div`
  display: flex;

  position: relative;
  height: auto;

  .img-bottle {
    position: absolute;
    top: 20px;
    left: -130px;
  }

  .background-wrap {
    background-image: url(src/images/desktop/background-element-main-page@1x.png);
    width: 1440px;

    height: 582px;

    /* background-position: center top 49px;
    background-repeat: no-repeat;
width: 100%; */
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 49px;
    left: -100px;
  }
`,f=e.div`
  width: 384px;
  margin: 0 auto;
  display: block;

  position: absolute;
  top: 162px;
  right: 100px;
  z-index: 1000;

  h1 {
    margin: 0;
    margin-bottom: 16px;
    color: #2f2f2f;
    font-family: Roboto;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
  }

  label {
    
    display: block;
    margin-bottom: 16px;
    color: #2f2f2f;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  input {
    box-sizing: border-box;
    width: 100%;
    color: #9ebbff;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    padding: 10px 12px;
    margin-top: 8px;

    border-radius: 6px;
    border: 1px solid #d7e3ff;
    background: #fff;
  }

  button {
    background-color: #007bff;

    width: 100%;

    border: none;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 16px;
  }
`,g=e(p)`
  color: #407bff;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`,b=d().shape({email:t().email("Please enter a valid email").required(),password:t().min(8,"Password must be 8 or more characters").max(30).required()}),h=()=>{const a={email:"",password:""},r=(s,{resetForm:l})=>{console.log(s),l()};return o.jsx(m,{initialValues:a,validationSchema:b,onSubmit:r,children:o.jsx(f,{children:o.jsxs(x,{autoComplete:"off",children:[o.jsx("h1",{children:"Sign In"}),o.jsxs("label",{className:"label",htmlFor:"email",children:["Enter your email",o.jsx(n,{name:"email",type:"email",placeholder:"E-mail"}),o.jsx(i,{name:"email"})]}),o.jsxs("label",{htmlFor:"password",children:["Enter your password",o.jsx(n,{name:"password",type:"password",placeholder:"Password"}),o.jsx(i,{name:"password"})]}),o.jsx("button",{type:"submit",children:"Sign In"}),o.jsx(g,{to:"/signup",children:"Sign up"})]})})})},y=()=>o.jsxs(c,{children:[o.jsx("div",{className:"background-wrap"}),o.jsx("img",{className:"img-bottle",src:"src/images/desktop/bottle-for-sign-in@1x.png",alt:"Bottle of water"}),o.jsx(h,{})]});export{y as default};
