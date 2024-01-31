import{u as i,N as p,j as e}from"./index-ef03327a.js";import{c as m,a as o,F as d,e as g,d as t,E as n}from"./formik.esm-50d3c8c4.js";const c=i.div`

  position: relative;
  max-height: 680px;
  overflow: hidden;


   .background-wrap {
    background-image: url(src/images/mobile/background-element-sign-in@1x.png);
    position: absolute;
    background-position: center;
    background-repeat: no-repeat;
    width: 320px;
    width: 100%;
    height: 842px;
    z-index: -100;
    background-size: contain;
  }
  .img-bottle {
    width: 100%;
  }


  @media only screen and (min-width: 768px) {
    overflow: visible;
    position: relative;
    .background-wrap {
      background-image: url(src/images/tablet/bottle-for-sign-in@1x.png);
      position: absolute;
      background-position: center;
      background-repeat: no-repeat;
      max-width: 760px;

      width: 100%;
      height: 680px;

      background-size: contain;
      top: -110px;
    }
    .img-bottle {
      display: none;
    }
  }

  @media only screen and (min-width: 1440px) {
    .img-bottle {
      display: flex;
      max-width: 916px;
      position: absolute;
      top: 20px;
      left: -130px;
    }

    .background-wrap {
      background-image: url(src/images/desktop/background-element-main-page@1x.png);
      max-width: 1440px;

      height: 582px;

      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      position: absolute;
      top: 49px;
    }
  }
`,x=i.div`
  width: 100%;
  margin: 0 auto;
  display: block;
  margin-top: 24px;
  margin-bottom: 66px;

  h1 {
    margin: 0;
    margin-bottom: 16px;
    color: #2f2f2f;
    font-family: Roboto;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.23;
  }

  label {
    display: block;
    margin-bottom: 16px;
    color: #2f2f2f;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.33;
  }

  input {
    box-sizing: border-box;
    width: 100%;
    color: #9ebbff;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;
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
    line-height: 1.33;
    margin-bottom: 16px;
  }

  @media only screen and (min-width: 768px) {
    width: 336px;
    margin-top: 40px;
    margin-bottom: 0;
    margin-left: 0;
  }

  @media only screen and (min-width: 1440px) {
    width: 384px;
    position: absolute;
    top: 125px;
    right: 165px;
    z-index: 1000;
  }
`,b=i(p)`
  color: #407bff;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`,h=m().shape({email:o().email("Please enter a valid email").required(),password:o().min(8,"Password must be 8 or more characters").max(30).required()}),u=()=>{const a={email:"",password:""},s=(r,{resetForm:l})=>{console.log(r),l()};return e.jsx(d,{initialValues:a,validationSchema:h,onSubmit:s,children:e.jsx(x,{children:e.jsxs(g,{autoComplete:"off",children:[e.jsx("h1",{children:"Sign In"}),e.jsxs("label",{className:"label",htmlFor:"email",children:["Enter your email",e.jsx(t,{name:"email",type:"email",placeholder:"E-mail"}),e.jsx(n,{name:"email"})]}),e.jsxs("label",{htmlFor:"password",children:["Enter your password",e.jsx(t,{name:"password",type:"password",placeholder:"Password"}),e.jsx(n,{name:"password"})]}),e.jsx("button",{type:"submit",children:"Sign In"}),e.jsx(b,{to:"/signup",children:"Sign up"})]})})})},y=()=>e.jsxs(c,{children:[e.jsx("div",{className:"background-wrap"}),e.jsx(u,{}),e.jsx("div",{children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:"src/images/mobile/bottle-sign-in@1x.png",type:"image/png"}),e.jsx("source",{srcSet:"src/images/mobile/bottle-sign-in@2x.png",type:"image/png"}),e.jsx("source",{media:"min-width:768px",srcSet:"src/images/tablet/bottle-sign-in@1x.png",type:"image/png"}),e.jsx("source",{media:"min-width:768px",srcSet:"src/images/tablet/bottle-sign-in@2x.png",type:"image/png"}),e.jsx("source",{media:"min-width:1440px",srcSet:"src/images/desktop/bottle-sign-in@1x.png",type:"image/png"}),e.jsx("source",{media:"min-width:1440px",srcSet:"src/images/desktop/bottle-sign-in@2x.png",type:"image/png"}),e.jsx("img",{className:"img-bottle",src:"src/images/desktop/bottle-sign-in@1x.png",alt:"Bottle of water",loading:"lazy"})]})})]});export{y as default};
