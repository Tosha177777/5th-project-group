import{u as n,j as e,r as o,a as s}from"./index-cddca5b0.js";const d=n.div`
  @media screen and (max-width: 767px) {
    padding-bottom: 40px;
  }
  
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding-bottom: 50px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
  }`,h="/5th-project-group/images/desktop/Background-Main-Page@1x.png",c="/5th-project-group/images/tablet/Background-Main-Page@1x.png",m="/5th-project-group/images/mobile/Background-Main-Page@1x.png",p="/5th-project-group/images/desktop/Background-Main-Page@2x.png",l="/5th-project-group/images/tablet/Background-Main-Page@2x.png",x="/5th-project-group/images/mobile/Background-Main-Page@2x.png",g="/5th-project-group/images/desktop/Background-element-Main-Page@1x.png",u="/5th-project-group/images/desktop/Background-element-Main-Page@2x.png",w=n.section`
  min-height: 100%;
  background-image: url(${m});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;

  @media screen and (max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url(${x});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    min-height: calc(100vh - 143px);
    background-image: url(${c});
  }

  @media screen and (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url(${l});
  }

  @media screen and (min-width: 1440px) {
    min-height: calc(100vh - 121px);
    padding-top: 40px;
    background-image: url(${h});

    &::before {
      content: '';
      background-image: url(${g});
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }

  @media screen and (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url(${p});

    &::before {
      background-image: url(${u});
    }
  }
`,b=({children:t})=>e.jsx(e.Fragment,{children:e.jsx(w,{children:t})}),v=n.div`
  padding: 24px 16px;
  border-radius: 10px;
  background-color: var(--Secondary-color-2, #ECF2FF);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.30);

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding: 32px 24px;
    width: 446px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 34px;
  }
`,k=n.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  color: var(--Primery-Color-Black, #2F2F2F);
`,f=n.ul``,i=n.li`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 16px;
  line-height: 1.25;

  &::before {
    content: '';
    border-color: var(--Primery-Color-Blue, #407BFF);
    border-style: solid;
    border-width: 0 8px 8px 0;
    border-radius: 50%;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`,j=()=>e.jsx(e.Fragment,{children:e.jsxs(v,{children:[e.jsx(k,{children:"Why drink water"}),e.jsxs(f,{children:[e.jsx(i,{children:"Supply of nutrients to all organs"}),e.jsx(i,{children:"Providing oxygen to the lungs"}),e.jsx(i,{children:"Maintaining the work of the heart"}),e.jsx(i,{children:"Release of processed substances"}),e.jsx(i,{children:"Ensuring the stability of the internal environment"}),e.jsx(i,{children:"Maintaining within the normal temperature"}),e.jsx(i,{children:"Maintaining an immune system capable of resisting disease"})]})]})}),y=t=>o.createElement("svg",{width:40,height:40,fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("path",{d:"M11.25 5v3.75M28.75 5v3.75M5 31.25V12.5a3.75 3.75 0 0 1 3.75-3.75h22.5A3.75 3.75 0 0 1 35 12.5v18.75m-30 0A3.75 3.75 0 0 0 8.75 35h22.5A3.75 3.75 0 0 0 35 31.25m-30 0v-12.5A3.75 3.75 0 0 1 8.75 15h22.5A3.75 3.75 0 0 1 35 18.75v12.5m-15-10h.013v.013H20v-.013ZM20 25h.013v.013H20V25Zm0 3.75h.013v.013H20v-.013ZM16.25 25h.013v.013h-.013V25Zm0 3.75h.013v.013h-.013v-.013ZM12.5 25h.013v.013H12.5V25Zm0 3.75h.013v.013H12.5v-.013Zm11.25-7.5h.013v.013h-.013v-.013Zm0 3.75h.013v.013h-.013V25Zm0 3.75h.013v.013h-.013v-.013Zm3.75-7.5h.013v.013H27.5v-.013Zm0 3.75h.013v.013H27.5V25Z",stroke:"#407BFF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),F=t=>o.createElement("svg",{width:40,height:40,fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("path",{d:"M6.25 5v18.75A3.75 3.75 0 0 0 10 27.5h3.75M6.25 5h-2.5m2.5 0h27.5m-20 22.5h12.5m-12.5 0-1.667 5M33.75 5h2.5m-2.5 0v18.75A3.75 3.75 0 0 1 30 27.5h-3.75m0 0 1.667 5m-15.834 0h15.834m-15.834 0L11.25 35m16.667-2.5.833 2.5M15 18.75v2.5M20 15v6.25m5-10v10",stroke:"#407BFF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),M=t=>o.createElement("svg",{width:40,height:40,fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("path",{d:"M19.033 25.283 28.75 35A4.42 4.42 0 0 0 35 28.75l-9.795-9.795m-6.172 6.328 4.16-5.05c.529-.64 1.234-1.043 2.014-1.276.916-.274 1.938-.314 2.905-.234a7.5 7.5 0 0 0 7.476-10.56l-5.46 5.462a5.006 5.006 0 0 1-3.75-3.75l5.46-5.46a7.5 7.5 0 0 0-10.56 7.477c.152 1.793-.118 3.773-1.506 4.916l-.17.142m-.569 8.333-7.758 9.422a4.246 4.246 0 1 1-5.977-5.977l11.395-9.383L9.848 12.5H7.5L3.75 6.25l2.5-2.5L12.5 7.5v2.348l7.1 7.1-2.908 2.395m13.933 11.282L26.25 26.25M8.112 31.875h.013v.013h-.013v-.013Z",stroke:"#407BFF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),B=n.h1`
  color: var(--Primery-Color-Black, #2F2F2F);
  font-size: 36px;
  font-weight: 700;
  line-height: 1.16;

  margin-bottom: 16px;


  @media only screen and (max-width: 767px) {
    font-size: 28px;
    line-height: 1.14;
  }
`,P=n.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  color: var(--Primery-Color-Black, #2F2F2F);
`,_=n.ul`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;

  @media only screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`,r=n.li`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    &:not(:last-child) {
        margin-bottom: 16px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:not(:last-child) {
        margin-bottom: 16px;
    }
  }
`,C=n.p`
  color: var(--Primery-Color-Black, #2F2F2F);
  font-size: 24px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`,W=n.div`
  margin-bottom: 40px;

  @media only screen and (min-width: 1440px) {
    margin-right: 81px;
    margin-bottom: 0;
  }

  @media only screen and (min-width: 767px) and (max-width: 1439px) {
    margin-bottom: 60px;
  }
`,L=n.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 36px;
  margin-top: 24px;

  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;

  border-radius: 10px;
  background-color: var(--Primery-Color-Blue, #407BFF);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  &:active {
    box-shadow: none;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 44px;
    font-size: 18px;
    line-height: 1.33;
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
  }
`,Z=n(y)`
   margin-right: 8px;
   @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`,z=n(F)`
   margin-right: 8px;
   @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`,E=n(M)`
   margin-right: 8px;
   @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`,H=()=>{const t=s();function a(){t("/sign-up")}return e.jsxs(W,{children:[e.jsx(B,{children:"Water consumption tracker"}),e.jsx(C,{children:"Record daily water intake and track"}),e.jsx(P,{children:"Tracker Benefits"}),e.jsxs(_,{children:[e.jsxs(r,{children:[e.jsx(Z,{}),"Habit drive"]}),e.jsxs(r,{children:[e.jsx(z,{}),"View statistics"]}),e.jsxs(r,{children:[e.jsx(E,{}),"Personal rate setting"]})]}),e.jsx(L,{type:"button",onClick:a,children:"Try tracker"})]})},A=()=>e.jsx(b,{children:e.jsxs(d,{children:[e.jsx(H,{}),e.jsx(j,{})]})});export{A as default};
