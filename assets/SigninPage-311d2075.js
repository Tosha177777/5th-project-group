import{u as i,N as m,b as g,j as e,l as c}from"./index-df2cb0f7.js";import{F as x,c as b,a as o,d as h,e as a,E as s}from"./formik.esm-a4c357ee.js";const u=i.div`

    background-image: url(src/images/mobile/background-element-sign-in@1x.png);
    position: absolute;
    background-position: center;
    background-repeat: no-repeat;
    width: 320px;
    width: 100%;
    height: 842px;
    z-index: -100;
    background-size: contain;
  
 @media only screen and (min-width: 768px) {
  background-image: url(src/images/tablet/bottle-for-sign-in@1x.png);
      
      background-position: center;
      background-repeat: no-repeat;
      max-width: 760px;

      width: 100%;
      height: 680px;

      background-size: contain;
      top: -110px;
 }

   @media only screen and (min-width: 1440px) {
    background-image: url(src/images/desktop/background-element-main-page@1x.png);
      max-width: 1440px;

      height: 582px;

      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      left: 18px; 
      top: -149px;

   }
`;i.div`

  position: relative;
  max-height: 680px;
  overflow: hidden;


   
  .img-bottle {
    width: 100%;
  }


  @media only screen and (min-width: 768px) {
    overflow: visible;
    position: relative;
    
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

    
  }
`;const f=i.h1`

`,w=i(x)`
  width: 100%;
  margin: 0 auto;
  display: block;
  margin-top: 24px;
  margin-bottom: 66px;

  h1 {
    margin: 0;
    margin-bottom: 16px;
    color: #2f2f2f;
    
    font-size: 26px;
    
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
`,y=i(m)`
  color: #407bff;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`,j=b().shape({email:o().email("Please enter a valid email").required("E-mail is required"),password:o().min(8,"Password must be 8 or more characters").max(30).required("Password is required")}),k=()=>{const r=g(),l={email:"",password:""},p=({email:t,password:n},{resetForm:d})=>{console.log({email:t,password:n}),r(c({email:t,password:n})),d()};return e.jsx(h,{initialValues:l,validationSchema:j,onSubmit:p,children:e.jsxs(w,{autoComplete:"off",children:[e.jsx(f,{children:"Sign In"}),e.jsxs("label",{className:"label",htmlFor:"email",children:["Enter your email",e.jsx(a,{name:"email",type:"email",placeholder:"E-mail"}),e.jsx(s,{name:"email"})]}),e.jsxs("label",{htmlFor:"password",children:["Enter your password",e.jsx(a,{name:"password",type:"password",placeholder:"Password"}),e.jsx(s,{name:"password"})]}),e.jsx("button",{type:"submit",children:"Sign In"}),e.jsx(y,{to:"/signup",children:"Sign up"})]})})},F=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{}),e.jsx(k,{}),e.jsx("div",{children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:"src/images/mobile/bottle-sign-in@1x.png",type:"image/png"}),e.jsx("source",{srcSet:"src/images/mobile/bottle-sign-in@2x.png",type:"image/png"}),e.jsx("source",{media:"min-width:768px",srcSet:"src/images/tablet/bottle-sign-in@1x.png",type:"image/png"}),e.jsx("source",{media:"min-width:768px",srcSet:"src/images/tablet/bottle-sign-in@2x.png",type:"image/png"}),e.jsx("source",{media:"min-width:1440px",srcSet:"src/images/desktop/bottle-sign-in@1x.png",type:"image/png"}),e.jsx("source",{media:"min-width:1440px",srcSet:"src/images/desktop/bottle-sign-in@2x.png",type:"image/png"}),e.jsx("img",{className:"img-bottle",src:"src/images/desktop/bottle-sign-in@1x.png",alt:"Bottle of water",loading:"lazy"})]})})]});export{F as default};
