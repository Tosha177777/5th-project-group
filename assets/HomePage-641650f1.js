import{n as I,c as A,m as Ot,p as Ao,f as rt,r as g,q as ko,j as f,t as $t,v as ji,u as P,w as Mi,b as Di,x as Ri,d as Ei,y as jo,z as Mo,A as Li,B as Do,R as Bi,C as Ro,I as wn,D as Eo}from"./index-ef4cffa5.js";const Lo=I.div`
padding: 8px 20px;
margin-bottom: 232px;
width: 166px;
border: 1px solid ${A.secondaryColor2WhiteBlue};
border-radius: 10px;
box-shadow: 0 4px 8px 0 rgba(158, 187, 255, 0.12);

@media (min-width: 768px) {
    margin-bottom: 326px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 466px;
  }

`,Bo=I.p`
margin-bottom: 12px;
font-size: 18px;
font-weight: 500;
line-height: 1.33;
color: ${A.primaryColorBlack};

`,Fo=I.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;

  p {
    font-weight: 700;
    font-size: 22px;
    line-height: 1;
    color: ${A.primaryColorBlue};

    @media (min-width: 768px) {
    font-size: 24px;
  }
  }

  button {
    padding: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: #8baeff;
    border: none;
    background-color: transparent;
  }
`,Oo=({openModal:t})=>{const e=Ot(Ao),n=rt();return g.useEffect(()=>{n(ko())},[n]),f.jsxs(Lo,{children:[f.jsx(Bo,{children:"My daily norma"}),f.jsxs(Fo,{children:[f.jsxs("p",{children:[e.waterRate/1e3," L"]}),f.jsx("button",{type:"button",onClick:t,children:"Edit"})]})]})},zt=t=>t.water;$t(zt,t=>t.waterToDrink);const Fi=$t(zt,t=>t.todayWaterConsumption),Io=$t(zt,t=>t.monthWaterConsumption),Wo=$t(zt,t=>t.isLoading);$t(zt,t=>t.error);const No=t=>g.createElement("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},g.createElement("path",{d:"M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",strokeLinecap:"round",strokeLinejoin:"round"})),$o=I.div`
width: 100%;

@media (min-width: 768px) {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 40px;
  }

  @media (min-width: 1440px) {
    gap: 23px;
 }

`,zo=I.div`
margin-bottom: 16px;

@media (min-width: 768px) {
  padding-bottom: 8px;
    margin-bottom: 0;
    width: 356px;
  }

  @media (min-width: 1440px) {
    width: 391px;
  }
`,Uo=I.p`
margin-bottom: 8px;
font-size: 18px;
line-height: 1.33;
color: ${A.primaryColorBlue};

@media (min-width: 768px) {
    margin-bottom: 16px;    
  }

`,Ho=I.div`
position: relative;
top: 0;
margin-left: auto;
margin-right: auto;
margin-bottom: 3px;
margin-top: 3px;
width: 256px;
height: 8px;
background-color:${A.secondaryColor6};
border-radius: 10px;

@media (min-width: 768px) {
    width: 325px;
  }

  @media (min-width: 1440px) {
    width: 360px;
  }

`,Go=I.div`
position: absolute;                   
height: 8px;
background-color:${A.secondaryColor4};
border-radius: 10px;

`,Ko=I.div`
position: absolute;
top: -4px;
left: 0;              
width: 14px;
height: 14px;
background-color:${A.primaryColorWhite};
border: 1px solid ${A.primaryColorBlue};
border-radius: 50%;

`,Zo=I.div`
position: relative;
top: 0;
display: flex;
justify-content: space-between;

p {
display: flex;
flex-direction: column;
font-size: 12px;
line-height: 1.33;
}

p::before {
  content: '';
  position: relative;
  top: 1px;
  left: 60%;
  width: 0;
  margin-bottom: 4px;
  height: 8px;
  border-left: 2px solid ${A.secondaryColor6};
}

`,_o=I.span`
display: block;
position: absolute;
top: 8px;
font-size: 16px;
line-height: 1.25;
`,Yo=I.button`
height: 44px;
display: flex;
gap: 10px;
align-items: center;
padding: 6px 76px;
border-radius: 10px;
border: none;
stroke: ${A.primaryColorWhite};
background-color:${A.primaryColorBlue};
box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);

@media (min-width: 768px) {
    padding: 10px 104px;
  }

  @media (min-width: 1440px) {
    padding: 10px 30px;
  }

:hover {
   box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }

span{
display:inline-block;
padding: 0 9px;
font-weight: 500;
font-size: 16px;
line-height: 1.25;
color: ${A.primaryColorWhite};

@media (min-width: 768px) {
    padding: 0 5px;
    font-size: 18px;
    line-height: 1.33;
  }

  @media (min-width: 1440px) {
    padding: 0;
  }
}

`,qo=()=>{const t=Ot(Fi),e=g.useRef(null),n=g.useRef(null),i=g.useRef(null),s=rt();g.useEffect(()=>{s(ji())},[s]);const r=g.useMemo(()=>t?t.percentage:0,[t]);return g.useEffect(()=>{const o=e.current,a=n.current,l=i.current;o&&a&&l&&(o.style.width=`${r>100?100:r}%`,a.style.left=`${r>100?100:r-1}%`,l.style.left=`${r>100?100:r}%`)},[r]),f.jsxs($o,{children:[f.jsxs(zo,{children:[f.jsx(Uo,{children:"Today"}),f.jsxs(Ho,{children:[f.jsx(Go,{ref:e}),f.jsx(Ko,{ref:n})]}),f.jsxs(Zo,{children:[f.jsx("p",{children:"0%"}),f.jsx("p",{children:"100%"}),r>0||r<100?f.jsxs(_o,{ref:i,children:[r,"%"]}):null]})]}),f.jsxs(Yo,{children:[f.jsx(No,{}),f.jsx("span",{children:"Add Water"})]})]})},Oi=t=>g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:23,height:30,fill:"none",viewBox:"0 0 23 30",...t},g.createElement("path",{fill:"#407BFF",d:"M.26.13 2.4 29.79v.08h18.412L22.951.224V.13H.26ZM20.056 29.04H3.162L1.558 6.824h.881l1.45 19.578c.01.103.055.199.13.27.075.07.173.11.275.11h.034a.4.4 0 0 0 .277-.14.41.41 0 0 0 .098-.298l-1.45-19.52H21.66l-1.605 22.215Zm1.661-23.046H3.19l-.318-4.328a.423.423 0 0 0-.137-.274.412.412 0 0 0-.284-.106.413.413 0 0 0-.277.145.425.425 0 0 0-.099.299l.319 4.27H1.5L1.137.956H22.08l-.364 5.037Z"}),g.createElement("path",{fill:"#407BFF",d:"M6.78 10.932c.265 0 .524-.08.745-.23.221-.149.393-.362.495-.61a1.38 1.38 0 0 0-.291-1.485 1.325 1.325 0 0 0-1.463-.295 1.347 1.347 0 0 0-.603.502 1.376 1.376 0 0 0 .167 1.72c.252.255.593.398.95.398Zm0-1.898a.524.524 0 0 1 .488.331.544.544 0 0 1-.115.585.526.526 0 0 1-.903-.38.54.54 0 0 1 .155-.38c.1-.1.234-.156.374-.156ZM6.774 15.358c.003.269.085.53.234.752.15.222.361.394.607.494a1.325 1.325 0 0 0 1.458-.309 1.38 1.38 0 0 0 .28-1.484 1.358 1.358 0 0 0-.497-.607 1.329 1.329 0 0 0-1.697.182 1.364 1.364 0 0 0-.385.972Zm1.865 0a.542.542 0 0 1-.326.496.522.522 0 0 1-.577-.117.54.54 0 0 1 .374-.916c.14 0 .275.057.374.157.1.101.155.238.155.38ZM16.313 15.392c.265 0 .525-.08.745-.23.221-.149.393-.361.495-.61a1.38 1.38 0 0 0-.291-1.484 1.325 1.325 0 0 0-1.463-.295 1.348 1.348 0 0 0-.603.501 1.376 1.376 0 0 0 .167 1.72c.252.255.594.398.95.398Zm0-1.892a.524.524 0 0 1 .489.332.544.544 0 0 1-.117.586.527.527 0 0 1-.901-.387.54.54 0 0 1 .157-.376.525.525 0 0 1 .372-.155ZM11.637 12.825c.265 0 .525-.08.746-.23.22-.15.392-.362.494-.61a1.38 1.38 0 0 0-.29-1.485 1.324 1.324 0 0 0-1.463-.295 1.346 1.346 0 0 0-.603.501 1.376 1.376 0 0 0 .167 1.72c.251.255.593.399.949.399Zm0-1.899a.523.523 0 0 1 .489.332.544.544 0 0 1-.115.584.528.528 0 0 1-.577.117.53.53 0 0 1-.326-.496.546.546 0 0 1 .144-.398.528.528 0 0 1 .385-.167v.028ZM9.077 20.545c.006.221.076.436.2.617.126.181.301.321.504.402a1.095 1.095 0 0 0 1.2-.262 1.13 1.13 0 0 0 .227-1.223 1.122 1.122 0 0 0-.409-.5 1.098 1.098 0 0 0-.613-.188 1.13 1.13 0 0 0-.786.348 1.163 1.163 0 0 0-.323.806Zm1.11-.3a.293.293 0 0 1 .273.185.304.304 0 0 1-.065.327.295.295 0 0 1-.504-.212c0-.08.03-.156.086-.212a.294.294 0 0 1 .21-.088ZM14.441 19.293c.228.008.453-.053.646-.177.193-.123.345-.302.436-.514a1.17 1.17 0 0 0-.234-1.274 1.133 1.133 0 0 0-1.254-.25c-.21.09-.387.243-.51.437a1.166 1.166 0 0 0 .147 1.436c.204.21.48.332.77.342Zm0-1.425c.079 0 .154.032.21.088a.303.303 0 0 1 0 .424.294.294 0 0 1-.42 0 .308.308 0 0 1-.091-.212.305.305 0 0 1 .089-.214.293.293 0 0 1 .212-.086ZM16.785 9.98c.225 0 .445-.068.632-.194a1.15 1.15 0 0 0 .419-.518 1.17 1.17 0 0 0-.247-1.258 1.133 1.133 0 0 0-1.24-.25 1.142 1.142 0 0 0-.51.425 1.166 1.166 0 0 0 .141 1.457c.213.216.503.338.805.338Zm0-1.425a.292.292 0 0 1 .346.155.304.304 0 0 1-.087.373.294.294 0 0 1-.26.049.292.292 0 0 1-.345-.155.304.304 0 0 1 .086-.373.294.294 0 0 1 .26-.05ZM5.664 27.59a.41.41 0 0 0-.217.247.421.421 0 0 0 .03.33.42.42 0 0 0 .364.225.383.383 0 0 0 .182-.04 12.27 12.27 0 0 1 5.614-1.385c2.066.03 4.104.496 5.984 1.368a.404.404 0 0 0 .465-.061.417.417 0 0 0 .104-.464.425.425 0 0 0-.216-.231 15.517 15.517 0 0 0-6.337-1.443c-2.076.002-4.122.5-5.973 1.454Z"})),Xo=t=>g.createElement("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},g.createElement("path",{d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 0 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10",strokeLinecap:"round",strokeLinejoin:"round"})),Qo=t=>g.createElement("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},g.createElement("path",{d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.166L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397M4.772 5.79a43.48 43.48 0 0 0-1.022.165m1.022-.165a48.111 48.111 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.967 51.967 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.668 48.668 0 0 0-7.5 0",strokeLinecap:"round",strokeLinejoin:"round"})),Ii=t=>g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...t},g.createElement("path",{fill:"#407BFF",fillRule:"evenodd",d:"M12 5.25a.75.75 0 0 1 .75.75v5.25H18a.75.75 0 1 1 0 1.5h-5.25V18a.75.75 0 1 1-1.5 0v-5.25H6a.75.75 0 1 1 0-1.5h5.25V6a.75.75 0 0 1 .75-.75Z",clipRule:"evenodd"})),Jo=t=>g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24",...t},g.createElement("path",{fill:"#407BFF",fillRule:"evenodd",d:"M5.25 12a.75.75 0 0 1 .75-.75h12a.75.75 0 1 1 0 1.5H6a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"})),Wi=P.div`
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000cc;

  z-index: 10000;
`,Ct=P.div`
  margin-bottom: 24px;
`,Ni=P.form`
  background: #ffffff;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 280px;
  max-height: 648px;
  padding: 24px 12px 24px 12px;
  border-radius: 10px;

  @media only screen and (min-width: 768px) {
    max-width: 704px;
    max-height: 580px;
    padding: 32px 24px 32px 24px;
  }

  @media only screen and (min-width: 1440px) {
    max-width: 592px;
  }
`,$i=P.h2`
  color: #2f2f2f;

  width: 200px;

  font-family: Roboto;
  font-size: 26px;
  font-weight: 500;
  font-weight: bold;
  line-height: 32px;

  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    width: 384px;
  }

  @media only screen and (min-width: 1440px) {
  }
`,zi=P.svg`
  width: 24px;
  height: 24px;

  position: absolute;
  top: 24px;
  right: 12px;

  @media only screen and (min-width: 768px) {
    top: 36px;
    right: 24px;
  }

  &:hover {
    cursor: pointer;
  }
`,tr=P.div`
  margin-bottom: 24px;
`,er=P.div`
  width: 256px;
  height: 52px;

  display: flex;

  text-align: center;
  align-items: center;

  gap: 12px;

  padding: 8px 24px 8px 24px;

  background: #ecf2ff;

  border-radius: 10px;
`,nr=P.p`
  color: #2f2f2f;

  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
`,Ui=P.p`
  color: #2f2f2f;

  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  font-weight: bold;
  line-height: 20px;

  margin-bottom: 16px;
`,Hi=P.div`
  display: flex;
  text-align: center;
  align-items: center;
`,Gi=P.p`
  color: #2f2f2f;

  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  margin-bottom: 12px;
`,Ki=P(Jo)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  fill: #407bff;
`,Zi=P(Ii)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  fill: #407bff;
`,ee=P.button`
  width: 44px;
  height: 44px;
  padding: 10px;

  background-color: #ffffff;
  position: relative;

  border-radius: 30px;
  border: 1px solid #9ebbff;

  box-shadow: 0px 2px 4px 0px #407bff33;
`,_i=P.input`
  width: 92px;
  height: 36px;

  padding: 6px 10px 6px 20px;
  margin-left: 7px;
  margin-right: 7px;

  border-radius: 40px;
  background: #d7e3ff;
  border: none;
  outline: none;

  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;

  color: #407bff;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`,Yi=P.p`
  color: #2f2f2f;

  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  margin-bottom: 12px;
`,ne=P.input`
  width: 256px;
  height: 44px;

  padding: 12px 10px 12px 10px;

  border-radius: 6px;
  border: 1px solid #d7e3ff;
  outline: none;

  color: #407bff;

  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  &::-webkit-calendar-picker-indicator {
    width: 176px;
    height: 44px;
    opacity: 0;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media only screen and (min-width: 768px) {
    width: 544px;
    &::-webkit-calendar-picker-indicator {
      width: 464px;
    }
  }
`,qi=P.p`
  color: #2f2f2f;

  font-family: Roboto;
  fonst-size: 18px;
  font-weight: 500;
  font-weight: bold;
  line-height: 20px;

  margin-bottom: 16px;
`,Xi=P.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  justify-content: center;

  gap: 16px;

  @media only screen and (min-width: 768px) {
    justify-content: right;
    gap: 24px;
  }
`,Qi=P.p`
  font-family: Roboto;

  color: #407bff;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;

  margin-bottom: 0px;
`,Ji=P.button`
  min-width: 256px;
  height: 36px;
  padding: 8px 30px 8px 30px;
  border-radius: 10px;
  border: none;
  outline: none;

  background-color: #407bff;
  box-shadow: 0px 4px 8px 0px #407bff57;

  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;

  color: #ffffff;

  @media only screen and (min-width: 768px) {
    min-width: 160px;
    height: 44px;
    padding: 10px 30px 10px 30px;
  }

  @media only screen and (min-width: 1440x) {
    min-width: 160px;
  }

  &: hover {
    box-shadow: 0px 4px 14px 0px #407bff8a;
  }
`,ir=P.div`
  color: red;
  margin-bottom: 12px;
`,ts=t=>g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24",...t},g.createElement("path",{stroke:"#407BFF",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M6 18 18 6M6 6l12 12"})),sr=({onClose:t})=>{const e=rt(),n=()=>{const h=new Date,p=h.getHours(),m=(h.getMinutes()<10?"0":"")+h.getMinutes();return`${p}:${m}`},i=h=>{const p=new Date,[m,x]=h.split(":").map(Number);return p.setHours(m+2,x),p.toISOString()},s=Mi({initialValues:{amountWater:0,time:n(),firstWater:!1},validationSchema:Di({amountWater:Ri().min(1,"You should drink at least some water").max(3e3,"It is unlikely you drank so much water").required("Amount of water is required"),time:Ei().required("Recording time is required")}),onSubmit:({amountWater:h,time:p})=>{const m=h,x=i(p);e(jo({waterVolume:m,date:x}))}});g.useEffect(()=>{const h=p=>{p.key==="Escape"&&t()};return window.addEventListener("keydown",h),()=>{window.removeEventListener("keydown",h)}},[t]);const r=h=>{h.currentTarget===h.target&&t()},o=()=>{t()},{amountWater:a,time:l,firstWater:c}=s.values,u=()=>{s.setFieldValue("amountWater",Math.max(0,a-50))},d=()=>{s.setFieldValue("amountWater",a+50)};return f.jsx(Wi,{onClick:r,children:f.jsxs(Ni,{onSubmit:s.handleSubmit,children:[f.jsx($i,{children:"Edit the entered amount of water"}),f.jsx(zi,{onClick:o,children:f.jsx(ts,{})}),c&&f.jsx("p",{children:"No notes yet"}),f.jsx(Ui,{children:"Correct entered data:"}),f.jsxs(Ct,{children:[f.jsx(Gi,{children:"Amount of water:"}),f.jsxs(Hi,{children:[f.jsx(ee,{name:"minus",type:"button",onClick:u,children:f.jsx(Ki,{})}),f.jsx(_i,{type:"number",name:"amountWater",value:a,readOnly:!0}),f.jsx(ee,{name:"plus",type:"button",onClick:d,children:f.jsx(Zi,{})})]})]}),f.jsxs(Ct,{children:[f.jsx(Yi,{children:"Recording time:"}),f.jsx(ne,{type:"time",name:"time",value:l,step:"300",onChange:s.handleChange})]}),f.jsxs(Ct,{children:[f.jsx(qi,{children:"Enter the value of the water used:"}),f.jsx(ne,{type:"number",name:"amountWater",value:a,min:0,onChange:s.handleChange})]}),s.touched.amountWater&&s.errors.amountWater?f.jsx(ir,{children:s.errors.amountWater}):null,f.jsxs(Xi,{children:[f.jsxs(Qi,{children:[a,"ml"]}),f.jsx(Ji,{type:"submit",children:"Save"})]})]})})},or=({waterCardsSave:t,onClose:e,recordId:n})=>{const i=rt(),s=m=>{const[x,b]=m.split(":"),w=parseInt(x,10),v=w>=12?"PM":"AM";return`${w%12||12}:${b} ${v}`},r=m=>{const x=new Date,[b,w]=m.split(":").map(Number);return x.setHours(b+2,w),x.toISOString()},o=m=>{const x=new Date(m),b=x.getUTCHours().toString().padStart(2,"0"),w=x.getUTCMinutes().toString().padStart(2,"0");return`${b}:${w}`},a=Mi({initialValues:{amountWater:t.amountWater,time:o(t.time)},validationSchema:Di({amountWater:Ri().min(1,"You should drink at least some water").max(3e3,"It is unlikely you drank so much water").required("Amount of water is required"),time:Ei().required("Recording time is required")}),onSubmit:async({amountWater:m,time:x})=>{const b=m,w=r(x);i(Mo({recordId:n,newRecord:{waterVolume:b,date:w}}))}});g.useEffect(()=>{const m=x=>{x.key==="Escape"&&e()};return window.addEventListener("keydown",m),()=>{window.removeEventListener("keydown",m)}},[e]);const l=m=>{m.currentTarget===m.target&&e()},c=()=>{e()},{amountWater:u,time:d}=a.values,h=()=>{a.setFieldValue("amountWater",Math.max(0,u-50))},p=()=>{a.setFieldValue("amountWater",u+50)};return f.jsx(Wi,{onClick:l,children:f.jsxs(Ni,{onSubmit:a.handleSubmit,children:[f.jsx($i,{children:"Edit the entered amount of water"}),f.jsx(zi,{onClick:c,children:f.jsx(ts,{})}),f.jsx(tr,{children:f.jsxs(er,{children:[f.jsx(Oi,{}),f.jsx("p",{children:`${u} ml`}),f.jsx(nr,{children:s(d)})]})}),f.jsx(Ui,{children:"Correct entered data:"}),f.jsxs(Ct,{children:[f.jsx(Gi,{children:"Amount of water:"}),f.jsxs(Hi,{children:[f.jsx(ee,{name:"minus",type:"button",onClick:h,children:f.jsx(Ki,{})}),f.jsx(_i,{type:"number",name:"amountWater",value:u,onChange:a.handleChange,readOnly:!0}),f.jsx(ee,{name:"plus",type:"button",onClick:p,children:f.jsx(Zi,{})})]})]}),f.jsxs(Ct,{children:[f.jsx(Yi,{children:"Recording time:"}),f.jsx(ne,{type:"time",name:"time",value:d,step:"300",onChange:a.handleChange})]}),f.jsxs(Ct,{children:[f.jsx(qi,{children:"Enter the value of the water used:"}),f.jsx(ne,{type:"number",name:"amountWater",value:u,min:0,onChange:a.handleChange})]}),f.jsxs(Xi,{children:[f.jsxs(Qi,{children:[u,"ml"]}),f.jsx(Ji,{type:"submit",children:"Save"})]})]})})},rr=P.div`
  background-color: rgba(0, 0, 0, 0.8);

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;
`,ar=P.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  background-color: ${A.primaryColorWhite};

  max-width: 280px;
  width: 100%;
  height: 260px;

  padding: 32px 24px;

  border-radius: 10px;

  @media (min-width: 768px) {
    max-width: 592px;

    height: 208px;
  }
`,lr=P.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
`,cr=P.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0%;
  text-align: left;
  color: ${A.primeryColorBlack};
`,ur=P.button`
  display: flex;
  background-color: inherit;
  border: none;

  padding: 0;

  align-items: center;
`,dr=P.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
`,hr=P.div`
  display: flex;
  flex-direction: column;

  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row-reverse;

    margin-left: auto;
  }

  @media (min-width: 1440px) {
    flex-direction: row-reverse;

    margin-left: 0;
    margin-right: auto;
  }
`,fr=P.button`
  background-color: ${A.secondaryColor3};
  border: none;
  border-radius: 10px;

  width: 232px;
  padding: 8px 30px;

  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  color: ${A.primaryColorWhite};

  @media (min-width: 768px) {
    width: 160px;

    font-size: 18px;
    line-height: 24px;
  }
`,pr=P.button`
  background-color: ${A.secondaryColor6};
  border: none;
  border-radius: 10px;

  width: 232px;
  padding: 8px 30px;

  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  color: ${A.primaryColorBlue};

  @media (min-width: 768px) {
    width: 160px;

    font-size: 18px;
    line-height: 24px;
  }
`,mr=({onClose:t,id:e})=>{const n=rt();g.useEffect(()=>{const o=a=>{a.key==="Escape"&&t()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[t]);const i=o=>{o.currentTarget===o.target&&t()},s=()=>{t()},r=()=>{n(Do(e))};return f.jsx(rr,{onClick:i,children:f.jsxs(ar,{children:[f.jsxs(lr,{children:[f.jsx(cr,{children:"Delete entry"}),f.jsx(ur,{type:"button",children:f.jsx(Li,{onClick:s})})]}),f.jsx(dr,{children:"Are you sure you want to delete the entry?"}),f.jsxs(hr,{children:[f.jsx(fr,{onClick:r,children:"Delete"}),f.jsx(pr,{onClick:s,children:"Cancel"})]})]})})},gr=P.p`
    margin-bottom: 16px;
    font-size: 24px;
    line-height: 1.25;
    font-weight: 500;
    color: ${A.primaryColorBlack};

    @media (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;   
  }
`,xr=P.ul`
 margin-bottom: 12px;
 display: flex;
 flex-direction: column;
`,yr=P.li`
 display: flex;
 align-items: center;
 padding: 12px 0;
 margin-bottom: 12px;
 border-bottom: 1px solid ${A.secondaryColor6};
 
`,vr=P.p`
    margin-left: 12px;
    font-size: 18px;
    line-height: 1.33;
`,br=P.p`
    margin-left: 12px;
    margin-right: 38px;
    font-size: 12px;
    line-height: 2;
    color: ${A.primaryColorBlack};

    @media (min-width: 768px) {
    margin-right: auto;
    margin-left: 16px;
  }
`,wr=P.button`
    padding: 0;
    border: none;
    background-color: transparent;
    stroke: ${A.secondaryColor4};
    margin-right: 18px;
    
    :hover {
    border-bottom: 1px solid ${A.secondaryColor4};
    }
`,Tr=P.button`
    padding: 0;
    border: none;
    background-color: transparent;
    stroke: ${A.secondaryColor3};

    :hover {
    border-bottom: 1px solid ${A.secondaryColor3};
    }
`,Pr=P.button`
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 0;
    border: none;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    color: ${A.primaryColorBlue};
    background-color: transparent;
    transition: color ease-in-out 250ms;

    :hover {
    color: ${A.secondaryColor5};
    fill: ${A.secondaryColor5};
    }
`,Tn=P.p`
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 30px;
    width: 250px;
    text-align: center;
    font-size: 16px;
    line-height: 1.33;
    color: ${A.secondaryColor4}; 
`,Cr=()=>{const t=Ot(Fi),e=Ot(Wo),[n,i]=g.useState(!1),[s,r]=g.useState(!1),[o,a]=g.useState(!1),l=rt();g.useEffect(()=>{l(ji())},[l]);const c=g.useMemo(()=>t?t.dayPortions:[],[t]),u=()=>{i(!n)},d=()=>{r(!s)},h=()=>{a(!o)};return f.jsxs(f.Fragment,{children:[f.jsx(gr,{children:"Today"}),e&&f.jsx(Tn,{children:"Please wait. Loading..."}),Array.isArray(c)&&c.length>0?f.jsx(xr,{children:c.map(({id:p,date:m,waterVolume:x})=>f.jsxs(yr,{children:[f.jsx(Oi,{}),f.jsx(vr,{children:m}),f.jsx(br,{children:x}),f.jsx(wr,{onClick:d,children:f.jsx(Xo,{})}),f.jsx(Tr,{onClick:h,children:f.jsx(Qo,{})})]},p)).join("")}):f.jsx(Tn,{children:'There are no records for today. Press "Add Water" to add.'}),f.jsxs(Pr,{onClick:u,children:[f.jsx(Ii,{}),f.jsx("span",{children:"Add water"})]}),n&&f.jsx(sr,{onClose:u}),s&&f.jsx(or,{onClose:d}),o&&f.jsx(mr,{onClose:h})]})},Sr=P.div`
  display: flex;
  flex-direction: column;
  height: 506px;

  @media screen and (min-width: 768px) {
    height: 340px;
  }
  @media screen and (min-width: 1440px) {
    height: 284px;
  }
`,Vr=P.div`
  h2 {
    color: #2f2f2f;
    font-size: 24px;
    font-weight: 500;
    line-height: calc(30 / 24);

    @media screen and (min-width: 768px) {
      font-size: 26px;
      line-height: calc(32 / 26);
    }
    @media screen and (min-width: 1440px) {
    }
  }

  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`,Pn=P.button`
  cursor: pointer;
  margin: 0 10px;
  background-color: rgba(0, 0, 255, 0);
`,Ar=P.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: ${t=>t.$isOutlineVisible?"1px solid #ff9d43":"none"};
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    gap: 34px;
    row-gap: 20px;
    width: 34px;
    height: 34px;
  }
`,kr=P.div`
  color: var(--primery-color-blue, #407bff);
  display: flex;
  align-items: center;
  justify-content: center;
`,jr=P.span`
  font-size: 16px;
  line-height: 20px;
`,Mr=P.span`
  color: var(--secondary-color-4, #9ebbff);

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  align-items: center;
  margin-top: 4px;
  line-height: calc(16 / 10);
  @media screen and (min-width: 768px) {
    font-size: 13px;
    line-height: calc(20 / 13);
  }
  @media screen and (min-width: 1440px) {
    font-size: 12px;
    line-height: calc(18 / 12);
  }
`,Dr=P.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  column-gap: 26px;
  row-gap: 16px;

  @media screen and (min-width: 768px) {
    column-gap: 34px;
    row-gap: 20px;
  }
  @media screen and (min-width: 1440px) {
    column-gap: 22px;
  }
`,Rr=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,Er={initial:{scaleY:0,opacity:0},animate:{scaleY:1,opacity:1,transition:{duration:.3}},exit:{scaleY:0,opacity:0,transition:{duration:.3}}},es=g.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),de=g.createContext({}),he=g.createContext(null),fe=typeof document<"u",Ke=fe?g.useLayoutEffect:g.useEffect,ns=g.createContext({strict:!1}),Ze=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Lr="framerAppearId",is="data-"+Ze(Lr),ss={skipAnimations:!1,useManualTiming:!1};class Cn{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function Br(t){let e=new Cn,n=new Cn,i=0,s=!1,r=!1;const o=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const d=u&&s,h=d?e:n;return c&&o.add(l),h.add(l)&&d&&s&&(i=e.order.length),l},cancel:l=>{n.remove(l),o.delete(l)},process:l=>{if(s){r=!0;return}if(s=!0,[e,n]=[n,e],n.clear(),i=e.order.length,i)for(let c=0;c<i;c++){const u=e.order[c];o.has(u)&&(a.schedule(u),t()),u(l)}s=!1,r&&(r=!1,a.process(l))}};return a}const _t=["prepare","read","update","preRender","render","postRender"],Fr=40;function os(t,e){let n=!1,i=!0;const s={delta:0,timestamp:0,isProcessing:!1},r=_t.reduce((d,h)=>(d[h]=Br(()=>n=!0),d),{}),o=d=>{r[d].process(s)},a=()=>{const d=performance.now();n=!1,s.delta=i?1e3/60:Math.max(Math.min(d-s.timestamp,Fr),1),s.timestamp=d,s.isProcessing=!0,_t.forEach(o),s.isProcessing=!1,n&&e&&(i=!1,t(a))},l=()=>{n=!0,i=!0,s.isProcessing||t(a)};return{schedule:_t.reduce((d,h)=>{const p=r[h];return d[h]=(m,x=!1,b=!1)=>(n||l(),p.schedule(m,x,b)),d},{}),cancel:d=>_t.forEach(h=>r[h].cancel(d)),state:s,steps:r}}const{schedule:_e,cancel:gd}=os(queueMicrotask,!1);function Or(t,e,n,i){const{visualElement:s}=g.useContext(de),r=g.useContext(ns),o=g.useContext(he),a=g.useContext(es).reducedMotion,l=g.useRef();i=i||r.renderer,!l.current&&i&&(l.current=i(t,{visualState:e,parent:s,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const c=l.current;g.useInsertionEffect(()=>{c&&c.update(n,o)});const u=g.useRef(!!(n[is]&&!window.HandoffComplete));return Ke(()=>{c&&(_e.postRender(c.render),u.current&&c.animationState&&c.animationState.animateChanges())}),g.useEffect(()=>{c&&(c.updateFeatures(),!u.current&&c.animationState&&c.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))}),c}function bt(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Ir(t,e,n){return g.useCallback(i=>{i&&t.mount&&t.mount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):bt(n)&&(n.current=i))},[e])}function It(t){return typeof t=="string"||Array.isArray(t)}function pe(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Ye=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],qe=["initial",...Ye];function me(t){return pe(t.animate)||qe.some(e=>It(t[e]))}function rs(t){return!!(me(t)||t.variants)}function Wr(t,e){if(me(t)){const{initial:n,animate:i}=t;return{initial:n===!1||It(n)?n:void 0,animate:It(i)?i:void 0}}return t.inherit!==!1?e:{}}function Nr(t){const{initial:e,animate:n}=Wr(t,g.useContext(de));return g.useMemo(()=>({initial:e,animate:n}),[Sn(e),Sn(n)])}function Sn(t){return Array.isArray(t)?t.join(" "):t}const Vn={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Wt={};for(const t in Vn)Wt[t]={isEnabled:e=>Vn[t].some(n=>!!e[n])};function $r(t){for(const e in t)Wt[e]={...Wt[e],...t[e]}}const Xe=g.createContext({}),as=g.createContext({}),zr=Symbol.for("motionComponentSymbol");function Ur({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:s}){t&&$r(t);function r(a,l){let c;const u={...g.useContext(es),...a,layoutId:Hr(a)},{isStatic:d}=u,h=Nr(a),p=i(a,d);if(!d&&fe){h.visualElement=Or(s,p,u,e);const m=g.useContext(as),x=g.useContext(ns).strict;h.visualElement&&(c=h.visualElement.loadFeatures(u,x,t,m))}return g.createElement(de.Provider,{value:h},c&&h.visualElement?g.createElement(c,{visualElement:h.visualElement,...u}):null,n(s,a,Ir(p,h.visualElement,l),p,d,h.visualElement))}const o=g.forwardRef(r);return o[zr]=s,o}function Hr({layoutId:t}){const e=g.useContext(Xe).id;return e&&t!==void 0?e+"-"+t:t}function Gr(t){function e(i,s={}){return Ur(t(i,s))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(i,s)=>(n.has(s)||n.set(s,e(s)),n.get(s))})}const Kr=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Qe(t){return typeof t!="string"||t.includes("-")?!1:!!(Kr.indexOf(t)>-1||/[A-Z]/.test(t))}const ie={};function Zr(t){Object.assign(ie,t)}const Ut=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],mt=new Set(Ut);function ls(t,{layout:e,layoutId:n}){return mt.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!ie[t]||t==="opacity")}const $=t=>!!(t&&t.getVelocity),_r={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Yr=Ut.length;function qr(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},i,s){let r="";for(let o=0;o<Yr;o++){const a=Ut[o];if(t[a]!==void 0){const l=_r[a]||a;r+=`${l}(${t[a]}) `}}return e&&!t.z&&(r+="translateZ(0)"),r=r.trim(),s?r=s(t,i?"":r):n&&i&&(r="none"),r}const cs=t=>e=>typeof e=="string"&&e.startsWith(t),us=cs("--"),Ee=cs("var(--"),Xr=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,Qr=(t,e)=>e&&typeof t=="number"?e.transform(t):t,st=(t,e,n)=>Math.min(Math.max(n,t),e),gt={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Et={...gt,transform:t=>st(0,1,t)},Yt={...gt,default:1},Lt=t=>Math.round(t*1e5)/1e5,ge=/(-)?([\d]*\.?[\d])+/g,ds=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Jr=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Ht(t){return typeof t=="string"}const Gt=t=>({test:e=>Ht(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),tt=Gt("deg"),Z=Gt("%"),C=Gt("px"),ta=Gt("vh"),ea=Gt("vw"),An={...Z,parse:t=>Z.parse(t)/100,transform:t=>Z.transform(t*100)},kn={...gt,transform:Math.round},hs={borderWidth:C,borderTopWidth:C,borderRightWidth:C,borderBottomWidth:C,borderLeftWidth:C,borderRadius:C,radius:C,borderTopLeftRadius:C,borderTopRightRadius:C,borderBottomRightRadius:C,borderBottomLeftRadius:C,width:C,maxWidth:C,height:C,maxHeight:C,size:C,top:C,right:C,bottom:C,left:C,padding:C,paddingTop:C,paddingRight:C,paddingBottom:C,paddingLeft:C,margin:C,marginTop:C,marginRight:C,marginBottom:C,marginLeft:C,rotate:tt,rotateX:tt,rotateY:tt,rotateZ:tt,scale:Yt,scaleX:Yt,scaleY:Yt,scaleZ:Yt,skew:tt,skewX:tt,skewY:tt,distance:C,translateX:C,translateY:C,translateZ:C,x:C,y:C,z:C,perspective:C,transformPerspective:C,opacity:Et,originX:An,originY:An,originZ:C,zIndex:kn,fillOpacity:Et,strokeOpacity:Et,numOctaves:kn};function Je(t,e,n,i){const{style:s,vars:r,transform:o,transformOrigin:a}=t;let l=!1,c=!1,u=!0;for(const d in e){const h=e[d];if(us(d)){r[d]=h;continue}const p=hs[d],m=Qr(h,p);if(mt.has(d)){if(l=!0,o[d]=m,!u)continue;h!==(p.default||0)&&(u=!1)}else d.startsWith("origin")?(c=!0,a[d]=m):s[d]=m}if(e.transform||(l||i?s.transform=qr(t.transform,n,u,i):s.transform&&(s.transform="none")),c){const{originX:d="50%",originY:h="50%",originZ:p=0}=a;s.transformOrigin=`${d} ${h} ${p}`}}const tn=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function fs(t,e,n){for(const i in e)!$(e[i])&&!ls(i,n)&&(t[i]=e[i])}function na({transformTemplate:t},e,n){return g.useMemo(()=>{const i=tn();return Je(i,e,{enableHardwareAcceleration:!n},t),Object.assign({},i.vars,i.style)},[e])}function ia(t,e,n){const i=t.style||{},s={};return fs(s,i,t),Object.assign(s,na(t,e,n)),s}function sa(t,e,n){const i={},s=ia(t,e,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=s,i}const oa=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function se(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||oa.has(t)}let ps=t=>!se(t);function ra(t){t&&(ps=e=>e.startsWith("on")?!se(e):t(e))}try{ra(require("@emotion/is-prop-valid").default)}catch{}function aa(t,e,n){const i={};for(const s in t)s==="values"&&typeof t.values=="object"||(ps(s)||n===!0&&se(s)||!e&&!se(s)||t.draggable&&s.startsWith("onDrag"))&&(i[s]=t[s]);return i}function jn(t,e,n){return typeof t=="string"?t:C.transform(e+n*t)}function la(t,e,n){const i=jn(e,t.x,t.width),s=jn(n,t.y,t.height);return`${i} ${s}`}const ca={offset:"stroke-dashoffset",array:"stroke-dasharray"},ua={offset:"strokeDashoffset",array:"strokeDasharray"};function da(t,e,n=1,i=0,s=!0){t.pathLength=1;const r=s?ca:ua;t[r.offset]=C.transform(-i);const o=C.transform(e),a=C.transform(n);t[r.array]=`${o} ${a}`}function en(t,{attrX:e,attrY:n,attrScale:i,originX:s,originY:r,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,d,h){if(Je(t,c,u,h),d){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:p,style:m,dimensions:x}=t;p.transform&&(x&&(m.transform=p.transform),delete p.transform),x&&(s!==void 0||r!==void 0||m.transform)&&(m.transformOrigin=la(x,s!==void 0?s:.5,r!==void 0?r:.5)),e!==void 0&&(p.x=e),n!==void 0&&(p.y=n),i!==void 0&&(p.scale=i),o!==void 0&&da(p,o,a,l,!1)}const ms=()=>({...tn(),attrs:{}}),nn=t=>typeof t=="string"&&t.toLowerCase()==="svg";function ha(t,e,n,i){const s=g.useMemo(()=>{const r=ms();return en(r,e,{enableHardwareAcceleration:!1},nn(i),t.transformTemplate),{...r.attrs,style:{...r.style}}},[e]);if(t.style){const r={};fs(r,t.style,t),s.style={...r,...s.style}}return s}function fa(t=!1){return(n,i,s,{latestValues:r},o)=>{const l=(Qe(n)?ha:sa)(i,r,o,n),u={...aa(i,typeof n=="string",t),...l,ref:s},{children:d}=i,h=g.useMemo(()=>$(d)?d.get():d,[d]);return g.createElement(n,{...u,children:h})}}function gs(t,{style:e,vars:n},i,s){Object.assign(t.style,e,s&&s.getProjectionStyles(i));for(const r in n)t.style.setProperty(r,n[r])}const xs=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ys(t,e,n,i){gs(t,e,void 0,i);for(const s in e.attrs)t.setAttribute(xs.has(s)?s:Ze(s),e.attrs[s])}function sn(t,e){const{style:n}=t,i={};for(const s in n)($(n[s])||e.style&&$(e.style[s])||ls(s,t))&&(i[s]=n[s]);return i}function vs(t,e){const n=sn(t,e);for(const i in t)if($(t[i])||$(e[i])){const s=Ut.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;n[s]=t[i]}return n}function on(t,e,n,i={},s={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,s)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,s)),e}function bs(t){const e=g.useRef(null);return e.current===null&&(e.current=t()),e.current}const oe=t=>Array.isArray(t),pa=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),ma=t=>oe(t)?t[t.length-1]||0:t;function Qt(t){const e=$(t)?t.get():t;return pa(e)?e.toValue():e}function ga({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},i,s,r){const o={latestValues:xa(i,s,r,t),renderState:e()};return n&&(o.mount=a=>n(i,a,o)),o}const ws=t=>(e,n)=>{const i=g.useContext(de),s=g.useContext(he),r=()=>ga(t,e,i,s);return n?r():bs(r)};function xa(t,e,n,i){const s={},r=i(t,{});for(const h in r)s[h]=Qt(r[h]);let{initial:o,animate:a}=t;const l=me(t),c=rs(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const d=u?a:o;return d&&typeof d!="boolean"&&!pe(d)&&(Array.isArray(d)?d:[d]).forEach(p=>{const m=on(t,p);if(!m)return;const{transitionEnd:x,transition:b,...w}=m;for(const v in w){let y=w[v];if(Array.isArray(y)){const T=u?y.length-1:0;y=y[T]}y!==null&&(s[v]=y)}for(const v in x)s[v]=x[v]}),s}const L=t=>t,{schedule:D,cancel:Q,state:O,steps:be}=os(typeof requestAnimationFrame<"u"?requestAnimationFrame:L,!0),ya={useVisualState:ws({scrapeMotionValuesFromProps:vs,createRenderState:ms,onMount:(t,e,{renderState:n,latestValues:i})=>{D.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),D.render(()=>{en(n,i,{enableHardwareAcceleration:!1},nn(e.tagName),t.transformTemplate),ys(e,n)})}})},va={useVisualState:ws({scrapeMotionValuesFromProps:sn,createRenderState:tn})};function ba(t,{forwardMotionProps:e=!1},n,i){return{...Qe(t)?ya:va,preloadedFeatures:n,useRender:fa(e),createVisualElement:i,Component:t}}function Y(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const Ts=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function xe(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const wa=t=>e=>Ts(e)&&t(e,xe(e));function q(t,e,n,i){return Y(t,e,wa(n),i)}const Ta=(t,e)=>n=>e(t(n)),nt=(...t)=>t.reduce(Ta);function Ps(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const Mn=Ps("dragHorizontal"),Dn=Ps("dragVertical");function Cs(t){let e=!1;if(t==="y")e=Dn();else if(t==="x")e=Mn();else{const n=Mn(),i=Dn();n&&i?e=()=>{n(),i()}:(n&&n(),i&&i())}return e}function Ss(){const t=Cs(!0);return t?(t(),!1):!0}class at{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Rn(t,e){const n="pointer"+(e?"enter":"leave"),i="onHover"+(e?"Start":"End"),s=(r,o)=>{if(r.pointerType==="touch"||Ss())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e),a[i]&&D.update(()=>a[i](r,o))};return q(t.current,n,s,{passive:!t.getProps()[i]})}class Pa extends at{mount(){this.unmount=nt(Rn(this.node,!0),Rn(this.node,!1))}unmount(){}}class Ca extends at{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=nt(Y(this.node.current,"focus",()=>this.onFocus()),Y(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Vs=(t,e)=>e?t===e?!0:Vs(t,e.parentElement):!1;function we(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,xe(n))}class Sa extends at{constructor(){super(...arguments),this.removeStartListeners=L,this.removeEndListeners=L,this.removeAccessibleListeners=L,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),r=q(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:u,globalTapTarget:d}=this.node.getProps();D.update(()=>{!d&&!Vs(this.node.current,a.target)?u&&u(a,l):c&&c(a,l)})},{passive:!(i.onTap||i.onPointerUp)}),o=q(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=nt(r,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=r=>{if(r.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||we("up",(l,c)=>{const{onTap:u}=this.node.getProps();u&&D.update(()=>u(l,c))})};this.removeEndListeners(),this.removeEndListeners=Y(this.node.current,"keyup",o),we("down",(a,l)=>{this.startPress(a,l)})},n=Y(this.node.current,"keydown",e),i=()=>{this.isPressing&&we("cancel",(r,o)=>this.cancelPress(r,o))},s=Y(this.node.current,"blur",i);this.removeAccessibleListeners=nt(n,s)}}startPress(e,n){this.isPressing=!0;const{onTapStart:i,whileTap:s}=this.node.getProps();s&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&D.update(()=>i(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Ss()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&D.update(()=>i(e,n))}mount(){const e=this.node.getProps(),n=q(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=Y(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=nt(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Le=new WeakMap,Te=new WeakMap,Va=t=>{const e=Le.get(t.target);e&&e(t)},Aa=t=>{t.forEach(Va)};function ka({root:t,...e}){const n=t||document;Te.has(n)||Te.set(n,{});const i=Te.get(n),s=JSON.stringify(e);return i[s]||(i[s]=new IntersectionObserver(Aa,{root:t,...e})),i[s]}function ja(t,e,n){const i=ka(e);return Le.set(t,n),i.observe(t),()=>{Le.delete(t),i.unobserve(t)}}const Ma={some:0,all:1};class Da extends at{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:s="some",once:r}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:Ma[s]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,r&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),h=c?u:d;h&&h(l)};return ja(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(Ra(e,n))&&this.startObserver()}unmount(){}}function Ra({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const Ea={inView:{Feature:Da},tap:{Feature:Sa},focus:{Feature:Ca},hover:{Feature:Pa}};function As(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function La(t){const e={};return t.values.forEach((n,i)=>e[i]=n.get()),e}function Ba(t){const e={};return t.values.forEach((n,i)=>e[i]=n.getVelocity()),e}function ye(t,e,n){const i=t.getProps();return on(i,e,n!==void 0?n:i.custom,La(t),Ba(t))}let Fa=L,rn=L;const it=t=>t*1e3,X=t=>t/1e3,Oa={current:!1},ks=t=>Array.isArray(t)&&typeof t[0]=="number";function js(t){return!!(!t||typeof t=="string"&&Ms[t]||ks(t)||Array.isArray(t)&&t.every(js))}const Rt=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Ms={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Rt([0,.65,.55,1]),circOut:Rt([.55,0,1,.45]),backIn:Rt([.31,.01,.66,-.59]),backOut:Rt([.33,1.53,.69,.99])};function Ds(t){if(t)return ks(t)?Rt(t):Array.isArray(t)?t.map(Ds):Ms[t]}function Ia(t,e,n,{delay:i=0,duration:s,repeat:r=0,repeatType:o="loop",ease:a,times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=Ds(a);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:s,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:r+1,direction:o==="reverse"?"alternate":"normal"})}function Wa(t,{repeat:e,repeatType:n="loop"}){const i=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[i]}const Rs=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Na=1e-7,$a=12;function za(t,e,n,i,s){let r,o,a=0;do o=e+(n-e)/2,r=Rs(o,i,s)-t,r>0?n=o:e=o;while(Math.abs(r)>Na&&++a<$a);return o}function Kt(t,e,n,i){if(t===e&&n===i)return L;const s=r=>za(r,0,1,t,n);return r=>r===0||r===1?r:Rs(s(r),e,i)}const Ua=Kt(.42,0,1,1),Ha=Kt(0,0,.58,1),Es=Kt(.42,0,.58,1),Ga=t=>Array.isArray(t)&&typeof t[0]!="number",Ls=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Bs=t=>e=>1-t(1-e),an=t=>1-Math.sin(Math.acos(t)),Fs=Bs(an),Ka=Ls(an),Os=Kt(.33,1.53,.69,.99),ln=Bs(Os),Za=Ls(ln),_a=t=>(t*=2)<1?.5*ln(t):.5*(2-Math.pow(2,-10*(t-1))),Ya={linear:L,easeIn:Ua,easeInOut:Es,easeOut:Ha,circIn:an,circInOut:Ka,circOut:Fs,backIn:ln,backInOut:Za,backOut:Os,anticipate:_a},En=t=>{if(Array.isArray(t)){rn(t.length===4);const[e,n,i,s]=t;return Kt(e,n,i,s)}else if(typeof t=="string")return Ya[t];return t},cn=(t,e)=>n=>!!(Ht(n)&&Jr.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),Is=(t,e,n)=>i=>{if(!Ht(i))return i;const[s,r,o,a]=i.match(ge);return{[t]:parseFloat(s),[e]:parseFloat(r),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},qa=t=>st(0,255,t),Pe={...gt,transform:t=>Math.round(qa(t))},ft={test:cn("rgb","red"),parse:Is("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Pe.transform(t)+", "+Pe.transform(e)+", "+Pe.transform(n)+", "+Lt(Et.transform(i))+")"};function Xa(t){let e="",n="",i="",s="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),s=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),s=t.substring(4,5),e+=e,n+=n,i+=i,s+=s),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const Be={test:cn("#"),parse:Xa,transform:ft.transform},wt={test:cn("hsl","hue"),parse:Is("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Z.transform(Lt(e))+", "+Z.transform(Lt(n))+", "+Lt(Et.transform(i))+")"},N={test:t=>ft.test(t)||Be.test(t)||wt.test(t),parse:t=>ft.test(t)?ft.parse(t):wt.test(t)?wt.parse(t):Be.parse(t),transform:t=>Ht(t)?t:t.hasOwnProperty("red")?ft.transform(t):wt.transform(t)},E=(t,e,n)=>-n*t+n*e+t;function Ce(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Qa({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let s=0,r=0,o=0;if(!e)s=r=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;s=Ce(l,a,t+1/3),r=Ce(l,a,t),o=Ce(l,a,t-1/3)}return{red:Math.round(s*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:i}}const Se=(t,e,n)=>{const i=t*t;return Math.sqrt(Math.max(0,n*(e*e-i)+i))},Ja=[Be,ft,wt],tl=t=>Ja.find(e=>e.test(t));function Ln(t){const e=tl(t);let n=e.parse(t);return e===wt&&(n=Qa(n)),n}const Ws=(t,e)=>{const n=Ln(t),i=Ln(e),s={...n};return r=>(s.red=Se(n.red,i.red,r),s.green=Se(n.green,i.green,r),s.blue=Se(n.blue,i.blue,r),s.alpha=E(n.alpha,i.alpha,r),ft.transform(s))};function el(t){var e,n;return isNaN(t)&&Ht(t)&&(((e=t.match(ge))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(ds))===null||n===void 0?void 0:n.length)||0)>0}const Ns={regex:Xr,countKey:"Vars",token:"${v}",parse:L},$s={regex:ds,countKey:"Colors",token:"${c}",parse:N.parse},zs={regex:ge,countKey:"Numbers",token:"${n}",parse:gt.parse};function Ve(t,{regex:e,countKey:n,token:i,parse:s}){const r=t.tokenised.match(e);r&&(t["num"+n]=r.length,t.tokenised=t.tokenised.replace(e,i),t.values.push(...r.map(s)))}function re(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Ve(n,Ns),Ve(n,$s),Ve(n,zs),n}function Us(t){return re(t).values}function Hs(t){const{values:e,numColors:n,numVars:i,tokenised:s}=re(t),r=e.length;return o=>{let a=s;for(let l=0;l<r;l++)l<i?a=a.replace(Ns.token,o[l]):l<i+n?a=a.replace($s.token,N.transform(o[l])):a=a.replace(zs.token,Lt(o[l]));return a}}const nl=t=>typeof t=="number"?0:t;function il(t){const e=Us(t);return Hs(t)(e.map(nl))}const ot={test:el,parse:Us,createTransformer:Hs,getAnimatableNone:il},Gs=(t,e)=>n=>`${n>0?e:t}`;function Ks(t,e){return typeof t=="number"?n=>E(t,e,n):N.test(t)?Ws(t,e):t.startsWith("var(")?Gs(t,e):_s(t,e)}const Zs=(t,e)=>{const n=[...t],i=n.length,s=t.map((r,o)=>Ks(r,e[o]));return r=>{for(let o=0;o<i;o++)n[o]=s[o](r);return n}},sl=(t,e)=>{const n={...t,...e},i={};for(const s in n)t[s]!==void 0&&e[s]!==void 0&&(i[s]=Ks(t[s],e[s]));return s=>{for(const r in i)n[r]=i[r](s);return n}},_s=(t,e)=>{const n=ot.createTransformer(e),i=re(t),s=re(e);return i.numVars===s.numVars&&i.numColors===s.numColors&&i.numNumbers>=s.numNumbers?nt(Zs(i.values,s.values),n):Gs(t,e)},Nt=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Bn=(t,e)=>n=>E(t,e,n);function ol(t){return typeof t=="number"?Bn:typeof t=="string"?N.test(t)?Ws:_s:Array.isArray(t)?Zs:typeof t=="object"?sl:Bn}function rl(t,e,n){const i=[],s=n||ol(t[0]),r=t.length-1;for(let o=0;o<r;o++){let a=s(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||L:e;a=nt(l,a)}i.push(a)}return i}function Ys(t,e,{clamp:n=!0,ease:i,mixer:s}={}){const r=t.length;if(rn(r===e.length),r===1)return()=>e[0];t[0]>t[r-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=rl(e,i,s),a=o.length,l=c=>{let u=0;if(a>1)for(;u<t.length-2&&!(c<t[u+1]);u++);const d=Nt(t[u],t[u+1],c);return o[u](d)};return n?c=>l(st(t[0],t[r-1],c)):l}function al(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const s=Nt(0,e,i);t.push(E(n,1,s))}}function ll(t){const e=[0];return al(e,t.length-1),e}function cl(t,e){return t.map(n=>n*e)}function ul(t,e){return t.map(()=>e||Es).splice(0,t.length-1)}function ae({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const s=Ga(i)?i.map(En):En(i),r={done:!1,value:e[0]},o=cl(n&&n.length===e.length?n:ll(e),t),a=Ys(o,e,{ease:Array.isArray(s)?s:ul(e,s)});return{calculatedDuration:t,next:l=>(r.value=a(l),r.done=l>=t,r)}}function qs(t,e){return e?t*(1e3/e):0}const dl=5;function Xs(t,e,n){const i=Math.max(e-dl,0);return qs(n-t(i),e-i)}const Ae=.001,hl=.01,Fn=10,fl=.05,pl=1;function ml({duration:t=800,bounce:e=.25,velocity:n=0,mass:i=1}){let s,r;Fa(t<=it(Fn));let o=1-e;o=st(fl,pl,o),t=st(hl,Fn,X(t)),o<1?(s=c=>{const u=c*o,d=u*t,h=u-n,p=Fe(c,o),m=Math.exp(-d);return Ae-h/p*m},r=c=>{const d=c*o*t,h=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,m=Math.exp(-d),x=Fe(Math.pow(c,2),o);return(-s(c)+Ae>0?-1:1)*((h-p)*m)/x}):(s=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-Ae+u*d},r=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const a=5/t,l=xl(s,r,a);if(t=it(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const gl=12;function xl(t,e,n){let i=n;for(let s=1;s<gl;s++)i=i-t(i)/e(i);return i}function Fe(t,e){return t*Math.sqrt(1-e*e)}const yl=["duration","bounce"],vl=["stiffness","damping","mass"];function On(t,e){return e.some(n=>t[n]!==void 0)}function bl(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!On(t,vl)&&On(t,yl)){const n=ml(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function Qs({keyframes:t,restDelta:e,restSpeed:n,...i}){const s=t[0],r=t[t.length-1],o={done:!1,value:s},{stiffness:a,damping:l,mass:c,duration:u,velocity:d,isResolvedFromDuration:h}=bl({...i,velocity:-X(i.velocity||0)}),p=d||0,m=l/(2*Math.sqrt(a*c)),x=r-s,b=X(Math.sqrt(a/c)),w=Math.abs(x)<5;n||(n=w?.01:2),e||(e=w?.005:.5);let v;if(m<1){const y=Fe(b,m);v=T=>{const S=Math.exp(-m*b*T);return r-S*((p+m*b*x)/y*Math.sin(y*T)+x*Math.cos(y*T))}}else if(m===1)v=y=>r-Math.exp(-b*y)*(x+(p+b*x)*y);else{const y=b*Math.sqrt(m*m-1);v=T=>{const S=Math.exp(-m*b*T),j=Math.min(y*T,300);return r-S*((p+m*b*x)*Math.sinh(j)+y*x*Math.cosh(j))/y}}return{calculatedDuration:h&&u||null,next:y=>{const T=v(y);if(h)o.done=y>=u;else{let S=p;y!==0&&(m<1?S=Xs(v,y,T):S=0);const j=Math.abs(S)<=n,M=Math.abs(r-T)<=e;o.done=j&&M}return o.value=o.done?r:T,o}}}function In({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:r=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],h={done:!1,value:d},p=V=>a!==void 0&&V<a||l!==void 0&&V>l,m=V=>a===void 0?l:l===void 0||Math.abs(a-V)<Math.abs(l-V)?a:l;let x=n*e;const b=d+x,w=o===void 0?b:o(b);w!==b&&(x=w-d);const v=V=>-x*Math.exp(-V/i),y=V=>w+v(V),T=V=>{const k=v(V),U=y(V);h.done=Math.abs(k)<=c,h.value=h.done?w:U};let S,j;const M=V=>{p(h.value)&&(S=V,j=Qs({keyframes:[h.value,m(h.value)],velocity:Xs(y,V,h.value),damping:s,stiffness:r,restDelta:c,restSpeed:u}))};return M(0),{calculatedDuration:null,next:V=>{let k=!1;return!j&&S===void 0&&(k=!0,T(V),M(V)),S!==void 0&&V>S?j.next(V-S):(!k&&T(V),h)}}}let Jt;function wl(){Jt=void 0}const pt={now:()=>(Jt===void 0&&pt.set(O.isProcessing||ss.useManualTiming?O.timestamp:performance.now()),Jt),set:t=>{Jt=t,queueMicrotask(wl)}},Tl=t=>{const e=({timestamp:n})=>t(n);return{start:()=>D.update(e,!0),stop:()=>Q(e),now:()=>O.isProcessing?O.timestamp:pt.now()}},Wn=2e4;function Nn(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Wn;)e+=n,i=t.next(e);return e>=Wn?1/0:e}const Pl={decay:In,inertia:In,tween:ae,keyframes:ae,spring:Qs};function le({autoplay:t=!0,delay:e=0,driver:n=Tl,keyframes:i,type:s="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:a="loop",onPlay:l,onStop:c,onComplete:u,onUpdate:d,...h}){let p=1,m=!1,x,b;const w=()=>{b=new Promise(R=>{x=R})};w();let v;const y=Pl[s]||ae;let T;y!==ae&&typeof i[0]!="number"&&(T=Ys([0,100],i,{clamp:!1}),i=[0,100]);const S=y({...h,keyframes:i});let j;a==="mirror"&&(j=y({...h,keyframes:[...i].reverse(),velocity:-(h.velocity||0)}));let M="idle",V=null,k=null,U=null;S.calculatedDuration===null&&r&&(S.calculatedDuration=Nn(S));const{calculatedDuration:xt}=S;let K=1/0,_=1/0;xt!==null&&(K=xt+o,_=K*(r+1)-o);let W=0;const yt=R=>{if(k===null)return;p>0&&(k=Math.min(k,R)),p<0&&(k=Math.min(R-_/p,k)),V!==null?W=V:W=Math.round(R-k)*p;const kt=W-e*(p>=0?1:-1),xn=p>=0?kt<0:kt>_;W=Math.max(kt,0),M==="finished"&&V===null&&(W=_);let yn=W,vn=S;if(r){const ve=Math.min(W,_)/K;let Zt=Math.floor(ve),lt=ve%1;!lt&&ve>=1&&(lt=1),lt===1&&Zt--,Zt=Math.min(Zt,r+1),!!(Zt%2)&&(a==="reverse"?(lt=1-lt,o&&(lt-=o/K)):a==="mirror"&&(vn=j)),yn=st(0,1,lt)*K}const jt=xn?{done:!1,value:i[0]}:vn.next(yn);T&&(jt.value=T(jt.value));let{done:bn}=jt;!xn&&xt!==null&&(bn=p>=0?W>=_:W<=0);const Vo=V===null&&(M==="finished"||M==="running"&&bn);return d&&d(jt.value),Vo&&At(),jt},F=()=>{v&&v.stop(),v=void 0},J=()=>{M="idle",F(),x(),w(),k=U=null},At=()=>{M="finished",u&&u(),F(),x()},vt=()=>{if(m)return;v||(v=n(yt));const R=v.now();l&&l(),V!==null?k=R-V:(!k||M==="finished")&&(k=R),M==="finished"&&w(),U=k,V=null,M="running",v.start()};t&&vt();const gn={then(R,kt){return b.then(R,kt)},get time(){return X(W)},set time(R){R=it(R),W=R,V!==null||!v||p===0?V=R:k=v.now()-R/p},get duration(){const R=S.calculatedDuration===null?Nn(S):S.calculatedDuration;return X(R)},get speed(){return p},set speed(R){R===p||!v||(p=R,gn.time=X(W))},get state(){return M},play:vt,pause:()=>{M="paused",V=W},stop:()=>{m=!0,M!=="idle"&&(M="idle",c&&c(),J())},cancel:()=>{U!==null&&yt(U),J()},complete:()=>{M="finished"},sample:R=>(k=0,yt(R))};return gn}function Cl(t){let e;return()=>(e===void 0&&(e=t()),e)}const Sl=Cl(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Vl=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),qt=10,Al=2e4,kl=(t,e)=>e.type==="spring"||t==="backgroundColor"||!js(e.ease);function jl(t,e,{onUpdate:n,onComplete:i,...s}){if(!(Sl()&&Vl.has(e)&&!s.repeatDelay&&s.repeatType!=="mirror"&&s.damping!==0&&s.type!=="inertia"))return!1;let o=!1,a,l,c=!1;const u=()=>{l=new Promise(y=>{a=y})};u();let{keyframes:d,duration:h=300,ease:p,times:m}=s;if(kl(e,s)){const y=le({...s,repeat:0,delay:0});let T={done:!1,value:d[0]};const S=[];let j=0;for(;!T.done&&j<Al;)T=y.sample(j),S.push(T.value),j+=qt;m=void 0,d=S,h=j-qt,p="linear"}const x=Ia(t.owner.current,e,d,{...s,duration:h,ease:p,times:m}),b=()=>{c=!1,x.cancel()},w=()=>{c=!0,D.update(b),a(),u()};return x.onfinish=()=>{c||(t.set(Wa(d,s)),i&&i(),w())},{then(y,T){return l.then(y,T)},attachTimeline(y){return x.timeline=y,x.onfinish=null,L},get time(){return X(x.currentTime||0)},set time(y){x.currentTime=it(y)},get speed(){return x.playbackRate},set speed(y){x.playbackRate=y},get duration(){return X(h)},play:()=>{o||(x.play(),Q(b))},pause:()=>x.pause(),stop:()=>{if(o=!0,x.playState==="idle")return;const{currentTime:y}=x;if(y){const T=le({...s,autoplay:!1});t.setWithVelocity(T.sample(y-qt).value,T.sample(y).value,qt)}w()},complete:()=>{c||x.finish()},cancel:w}}function Ml({keyframes:t,delay:e,onUpdate:n,onComplete:i}){const s=()=>(n&&n(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:L,pause:L,stop:L,then:r=>(r(),Promise.resolve()),cancel:L,complete:L});return e?le({keyframes:[0,1],duration:0,delay:e,onComplete:s}):s()}const Dl={type:"spring",stiffness:500,damping:25,restSpeed:10},Rl=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),El={type:"keyframes",duration:.8},Ll={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Bl=(t,{keyframes:e})=>e.length>2?El:mt.has(t)?t.startsWith("scale")?Rl(e[1]):Dl:Ll,Oe=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ot.test(e)||e==="0")&&!e.startsWith("url(")),Fl=new Set(["brightness","contrast","saturate","opacity"]);function Ol(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(ge)||[];if(!i)return t;const s=n.replace(i,"");let r=Fl.has(e)?1:0;return i!==n&&(r*=100),e+"("+r+s+")"}const Il=/([a-z-]*)\(.*?\)/g,Ie={...ot,getAnimatableNone:t=>{const e=t.match(Il);return e?e.map(Ol).join(" "):t}},Wl={...hs,color:N,backgroundColor:N,outlineColor:N,fill:N,stroke:N,borderColor:N,borderTopColor:N,borderRightColor:N,borderBottomColor:N,borderLeftColor:N,filter:Ie,WebkitFilter:Ie},un=t=>Wl[t];function Js(t,e){let n=un(t);return n!==Ie&&(n=ot),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const to=t=>/^0[^.\s]+$/.test(t);function Nl(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||to(t)}function $l(t,e,n,i){const s=Oe(e,n);let r;Array.isArray(n)?r=[...n]:r=[null,n];const o=i.from!==void 0?i.from:t.get();let a;const l=[];for(let c=0;c<r.length;c++)r[c]===null&&(r[c]=c===0?o:r[c-1]),Nl(r[c])&&l.push(c),typeof r[c]=="string"&&r[c]!=="none"&&r[c]!=="0"&&(a=r[c]);if(s&&l.length&&a)for(let c=0;c<l.length;c++){const u=l[c];r[u]=Js(e,a)}return r}function zl({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:s,repeat:r,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}function dn(t,e){return t[e]||t.default||t}const hn=(t,e,n,i={})=>s=>{const r=dn(i,t)||{},o=r.delay||i.delay||0;let{elapsed:a=0}=i;a=a-it(o);const l=$l(e,t,n,r),c=l[0],u=l[l.length-1],d=Oe(t,c),h=Oe(t,u);let p={keyframes:l,velocity:e.getVelocity(),ease:"easeOut",...r,delay:-a,onUpdate:m=>{e.set(m),r.onUpdate&&r.onUpdate(m)},onComplete:()=>{s(),r.onComplete&&r.onComplete()}};if(zl(r)||(p={...p,...Bl(t,p)}),p.duration&&(p.duration=it(p.duration)),p.repeatDelay&&(p.repeatDelay=it(p.repeatDelay)),!d||!h||Oa.current||r.type===!1||ss.skipAnimations)return Ml(p);if(!i.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const m=jl(e,t,p);if(m)return m}return le(p)};function ce(t){return!!($(t)&&t.add)}const eo=t=>/^\-?\d*\.?\d+$/.test(t);function fn(t,e){t.indexOf(e)===-1&&t.push(e)}function pn(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class mn{constructor(){this.subscriptions=[]}add(e){return fn(this.subscriptions,e),()=>pn(this.subscriptions,e)}notify(e,n,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,n,i);else for(let r=0;r<s;r++){const o=this.subscriptions[r];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const $n=30,Ul=t=>!isNaN(parseFloat(t));class Hl{constructor(e,n={}){this.version="11.0.3",this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,s=!0)=>{const r=pt.now();this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.canTrackVelocity=Ul(this.current),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=pt.now()}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new mn);const i=this.events[e].add(n);return e==="change"?()=>{i(),D.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=pt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>$n)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,$n);return qs(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function St(t,e){return new Hl(t,e)}const no=t=>e=>e.test(t),Gl={test:t=>t==="auto",parse:t=>t},io=[gt,C,Z,tt,ea,ta,Gl],Mt=t=>io.find(no(t)),Kl=[...io,N,ot],Zl=t=>Kl.find(no(t));function _l(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,St(n))}function Yl(t,e){const n=ye(t,e);let{transitionEnd:i={},transition:s={},...r}=n?t.makeTargetAnimatable(n,!1):{};r={...r,...i};for(const o in r){const a=ma(r[o]);_l(t,o,a)}}function ql(t,e,n){var i,s;const r=Object.keys(e).filter(a=>!t.hasValue(a)),o=r.length;if(o)for(let a=0;a<o;a++){const l=r[a],c=e[l];let u=null;Array.isArray(c)&&(u=c[0]),u===null&&(u=(s=(i=n[l])!==null&&i!==void 0?i:t.readValue(l))!==null&&s!==void 0?s:e[l]),u!=null&&(typeof u=="string"&&(eo(u)||to(u))?u=parseFloat(u):!Zl(u)&&ot.test(c)&&(u=Js(l,c)),t.addValue(l,St(u,{owner:t})),n[l]===void 0&&(n[l]=u),u!==null&&t.setBaseTarget(l,u))}}function Xl(t,e){return e?(e[t]||e.default||e).from:void 0}function Ql(t,e,n){const i={};for(const s in t){const r=Xl(s,e);if(r!==void 0)i[s]=r;else{const o=n.getValue(s);o&&(i[s]=o.get())}}return i}function Jl({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function tc(t,e){const n=t.get();if(Array.isArray(e)){for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}else return n!==e}function so(t,e,{delay:n=0,transitionOverride:i,type:s}={}){let{transition:r=t.getDefaultTransition(),transitionEnd:o,...a}=t.makeTargetAnimatable(e);const l=t.getValue("willChange");i&&(r=i);const c=[],u=s&&t.animationState&&t.animationState.getState()[s];for(const d in a){const h=t.getValue(d),p=a[d];if(!h||p===void 0||u&&Jl(u,d))continue;const m={delay:n,elapsed:0,...dn(r||{},d)};if(window.HandoffAppearAnimations){const w=t.getProps()[is];if(w){const v=window.HandoffAppearAnimations(w,d,h,D);v!==null&&(m.elapsed=v,m.isHandoff=!0)}}let x=!m.isHandoff&&!tc(h,p);if(m.type==="spring"&&(h.getVelocity()||m.velocity)&&(x=!1),h.animation&&(x=!1),x)continue;h.start(hn(d,h,p,t.shouldReduceMotion&&mt.has(d)?{type:!1}:m));const b=h.animation;ce(l)&&(l.add(d),b.then(()=>l.remove(d))),c.push(b)}return o&&Promise.all(c).then(()=>{o&&Yl(t,o)}),c}function We(t,e,n={}){const i=ye(t,e,n.custom);let{transition:s=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const r=i?()=>Promise.all(so(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:u,staggerDirection:d}=s;return ec(t,e,c+l,u,d,n)}:()=>Promise.resolve(),{when:a}=s;if(a){const[l,c]=a==="beforeChildren"?[r,o]:[o,r];return l().then(()=>c())}else return Promise.all([r(),o(n.delay)])}function ec(t,e,n=0,i=0,s=1,r){const o=[],a=(t.variantChildren.size-1)*i,l=s===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(nc).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(We(c,e,{...r,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function nc(t,e){return t.sortNodePosition(e)}function ic(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const s=e.map(r=>We(t,r,n));i=Promise.all(s)}else if(typeof e=="string")i=We(t,e,n);else{const s=typeof e=="function"?ye(t,e,n.custom):e;i=Promise.all(so(t,s,n))}return i.then(()=>t.notify("AnimationComplete",e))}const sc=[...Ye].reverse(),oc=Ye.length;function rc(t){return e=>Promise.all(e.map(({animation:n,options:i})=>ic(t,n,i)))}function ac(t){let e=rc(t);const n=cc();let i=!0;const s=(l,c)=>{const u=ye(t,c);if(u){const{transition:d,transitionEnd:h,...p}=u;l={...l,...p,...h}}return l};function r(l){e=l(t)}function o(l,c){const u=t.getProps(),d=t.getVariantContext(!0)||{},h=[],p=new Set;let m={},x=1/0;for(let w=0;w<oc;w++){const v=sc[w],y=n[v],T=u[v]!==void 0?u[v]:d[v],S=It(T),j=v===c?y.isActive:null;j===!1&&(x=w);let M=T===d[v]&&T!==u[v]&&S;if(M&&i&&t.manuallyAnimateOnMount&&(M=!1),y.protectedKeys={...m},!y.isActive&&j===null||!T&&!y.prevProp||pe(T)||typeof T=="boolean")continue;let k=lc(y.prevProp,T)||v===c&&y.isActive&&!M&&S||w>x&&S,U=!1;const xt=Array.isArray(T)?T:[T];let K=xt.reduce(s,{});j===!1&&(K={});const{prevResolvedValues:_={}}=y,W={..._,...K},yt=F=>{k=!0,p.has(F)&&(U=!0,p.delete(F)),y.needsAnimating[F]=!0};for(const F in W){const J=K[F],At=_[F];if(m.hasOwnProperty(F))continue;let vt=!1;oe(J)&&oe(At)?vt=!As(J,At):vt=J!==At,vt?J!==void 0?yt(F):p.add(F):J!==void 0&&p.has(F)?yt(F):y.protectedKeys[F]=!0}y.prevProp=T,y.prevResolvedValues=K,y.isActive&&(m={...m,...K}),i&&t.blockInitialAnimation&&(k=!1),k&&(!M||U)&&h.push(...xt.map(F=>({animation:F,options:{type:v,...l}})))}if(p.size){const w={};p.forEach(v=>{const y=t.getBaseTarget(v);y!==void 0&&(w[v]=y)}),h.push({animation:w})}let b=!!h.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(b=!1),i=!1,b?e(h):Promise.resolve()}function a(l,c,u){var d;if(n[l].isActive===c)return Promise.resolve();(d=t.variantChildren)===null||d===void 0||d.forEach(p=>{var m;return(m=p.animationState)===null||m===void 0?void 0:m.setActive(l,c)}),n[l].isActive=c;const h=o(u,l);for(const p in n)n[p].protectedKeys={};return h}return{animateChanges:o,setActive:a,setAnimateFunction:r,getState:()=>n}}function lc(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!As(e,t):!1}function ct(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function cc(){return{animate:ct(!0),whileInView:ct(),whileHover:ct(),whileTap:ct(),whileDrag:ct(),whileFocus:ct(),exit:ct()}}class uc extends at{constructor(e){super(e),e.animationState||(e.animationState=ac(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),pe(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let dc=0;class hc extends at{constructor(){super(...arguments),this.id=dc++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:i}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===s)return;const r=this.node.animationState.setActive("exit",!e,{custom:i??this.node.getProps().custom});n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const fc={animation:{Feature:uc},exit:{Feature:hc}},zn=(t,e)=>Math.abs(t-e);function pc(t,e){const n=zn(t.x,e.x),i=zn(t.y,e.y);return Math.sqrt(n**2+i**2)}class oo{constructor(e,n,{transformPagePoint:i,contextWindow:s,dragSnapToOrigin:r=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=je(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,p=pc(d.offset,{x:0,y:0})>=3;if(!h&&!p)return;const{point:m}=d,{timestamp:x}=O;this.history.push({...m,timestamp:x});const{onStart:b,onMove:w}=this.handlers;h||(b&&b(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),w&&w(this.lastMoveEvent,d)},this.handlePointerMove=(d,h)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=ke(h,this.transformPagePoint),D.update(this.updatePoint,!0)},this.handlePointerUp=(d,h)=>{this.end();const{onEnd:p,onSessionEnd:m,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=je(d.type==="pointercancel"?this.lastMoveEventInfo:ke(h,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,b),m&&m(d,b)},!Ts(e))return;this.dragSnapToOrigin=r,this.handlers=n,this.transformPagePoint=i,this.contextWindow=s||window;const o=xe(e),a=ke(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=O;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,je(a,this.history)),this.removeListeners=nt(q(this.contextWindow,"pointermove",this.handlePointerMove),q(this.contextWindow,"pointerup",this.handlePointerUp),q(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Q(this.updatePoint)}}function ke(t,e){return e?{point:e(t.point)}:t}function Un(t,e){return{x:t.x-e.x,y:t.y-e.y}}function je({point:t},e){return{point:t,delta:Un(t,ro(e)),offset:Un(t,mc(e)),velocity:gc(e,.1)}}function mc(t){return t[0]}function ro(t){return t[t.length-1]}function gc(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const s=ro(t);for(;n>=0&&(i=t[n],!(s.timestamp-i.timestamp>it(e)));)n--;if(!i)return{x:0,y:0};const r=X(s.timestamp-i.timestamp);if(r===0)return{x:0,y:0};const o={x:(s.x-i.x)/r,y:(s.y-i.y)/r};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function z(t){return t.max-t.min}function Ne(t,e=0,n=.01){return Math.abs(t-e)<=n}function Hn(t,e,n,i=.5){t.origin=i,t.originPoint=E(e.min,e.max,t.origin),t.scale=z(n)/z(e),(Ne(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=E(n.min,n.max,t.origin)-t.originPoint,(Ne(t.translate)||isNaN(t.translate))&&(t.translate=0)}function Bt(t,e,n,i){Hn(t.x,e.x,n.x,i?i.originX:void 0),Hn(t.y,e.y,n.y,i?i.originY:void 0)}function Gn(t,e,n){t.min=n.min+e.min,t.max=t.min+z(e)}function xc(t,e,n){Gn(t.x,e.x,n.x),Gn(t.y,e.y,n.y)}function Kn(t,e,n){t.min=e.min-n.min,t.max=t.min+z(e)}function Ft(t,e,n){Kn(t.x,e.x,n.x),Kn(t.y,e.y,n.y)}function yc(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?E(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?E(n,t,i.max):Math.min(t,n)),t}function Zn(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function vc(t,{top:e,left:n,bottom:i,right:s}){return{x:Zn(t.x,n,s),y:Zn(t.y,e,i)}}function _n(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function bc(t,e){return{x:_n(t.x,e.x),y:_n(t.y,e.y)}}function wc(t,e){let n=.5;const i=z(t),s=z(e);return s>i?n=Nt(e.min,e.max-i,t.min):i>s&&(n=Nt(t.min,t.max-s,e.min)),st(0,1,n)}function Tc(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const $e=.35;function Pc(t=$e){return t===!1?t=0:t===!0&&(t=$e),{x:Yn(t,"left","right"),y:Yn(t,"top","bottom")}}function Yn(t,e,n){return{min:qn(t,e),max:qn(t,n)}}function qn(t,e){return typeof t=="number"?t:t[e]||0}const Xn=()=>({translate:0,scale:1,origin:0,originPoint:0}),Tt=()=>({x:Xn(),y:Xn()}),Qn=()=>({min:0,max:0}),B=()=>({x:Qn(),y:Qn()});function G(t){return[t("x"),t("y")]}function ao({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function Cc({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function Sc(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Me(t){return t===void 0||t===1}function ze({scale:t,scaleX:e,scaleY:n}){return!Me(t)||!Me(e)||!Me(n)}function ut(t){return ze(t)||lo(t)||t.z||t.rotate||t.rotateX||t.rotateY}function lo(t){return Jn(t.x)||Jn(t.y)}function Jn(t){return t&&t!=="0%"}function ue(t,e,n){const i=t-n,s=e*i;return n+s}function ti(t,e,n,i,s){return s!==void 0&&(t=ue(t,s,i)),ue(t,n,i)+e}function Ue(t,e=0,n=1,i,s){t.min=ti(t.min,e,n,i,s),t.max=ti(t.max,e,n,i,s)}function co(t,{x:e,y:n}){Ue(t.x,e.translate,e.scale,e.originPoint),Ue(t.y,n.translate,n.scale,n.originPoint)}function Vc(t,e,n,i=!1){const s=n.length;if(!s)return;e.x=e.y=1;let r,o;for(let a=0;a<s;a++){r=n[a],o=r.projectionDelta;const l=r.instance;l&&l.style&&l.style.display==="contents"||(i&&r.options.layoutScroll&&r.scroll&&r!==r.root&&Pt(t,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,co(t,o)),i&&ut(r.latestValues)&&Pt(t,r.latestValues))}e.x=ei(e.x),e.y=ei(e.y)}function ei(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function et(t,e){t.min=t.min+e,t.max=t.max+e}function ni(t,e,[n,i,s]){const r=e[s]!==void 0?e[s]:.5,o=E(t.min,t.max,r);Ue(t,e[n],e[i],o,e.scale)}const Ac=["x","scaleX","originX"],kc=["y","scaleY","originY"];function Pt(t,e){ni(t.x,e,Ac),ni(t.y,e,kc)}function uo(t,e){return ao(Sc(t.getBoundingClientRect(),e))}function jc(t,e,n){const i=uo(t,n),{scroll:s}=e;return s&&(et(i.x,s.offset.x),et(i.y,s.offset.y)),i}const ho=({current:t})=>t?t.ownerDocument.defaultView:null,Mc=new WeakMap;class Dc{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=B(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=u=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(xe(u,"page").point)},r=(u,d)=>{const{drag:h,dragPropagation:p,onDragStart:m}=this.getProps();if(h&&!p&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Cs(h),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),G(b=>{let w=this.getAxisMotionValue(b).get()||0;if(Z.test(w)){const{projection:v}=this.visualElement;if(v&&v.layout){const y=v.layout.layoutBox[b];y&&(w=z(y)*(parseFloat(w)/100))}}this.originPoint[b]=w}),m&&D.update(()=>m(u,d),!1,!0);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},o=(u,d)=>{const{dragPropagation:h,dragDirectionLock:p,onDirectionLock:m,onDrag:x}=this.getProps();if(!h&&!this.openGlobalLock)return;const{offset:b}=d;if(p&&this.currentDirection===null){this.currentDirection=Rc(b),this.currentDirection!==null&&m&&m(this.currentDirection);return}this.updateAxis("x",d.point,b),this.updateAxis("y",d.point,b),this.visualElement.render(),x&&x(u,d)},a=(u,d)=>this.stop(u,d),l=()=>G(u=>{var d;return this.getAnimationState(u)==="paused"&&((d=this.getAxisMotionValue(u).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new oo(e,{onSessionStart:s,onStart:r,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:ho(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:s}=n;this.startAnimation(s);const{onDragEnd:r}=this.getProps();r&&D.update(()=>r(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:s}=this.getProps();if(!i||!Xt(e,s,this.currentDirection))return;const r=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=yc(o,this.constraints[e],this.elastic[e])),r.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,r=this.constraints;n&&bt(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&s?this.constraints=vc(s.layoutBox,n):this.constraints=!1,this.elastic=Pc(i),r!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&G(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=Tc(s.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!bt(e))return!1;const i=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const r=jc(i,s.root,this.visualElement.getTransformPagePoint());let o=bc(s.layout.layoutBox,r);if(n){const a=n(Cc(o));this.hasMutatedConstraints=!!a,a&&(o=ao(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:s,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=G(u=>{if(!Xt(u,n,this.currentDirection))return;let d=l&&l[u]||{};o&&(d={min:0,max:0});const h=s?200:1e6,p=s?40:1e7,m={type:"inertia",velocity:i?e[u]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...r,...d};return this.startAxisValueAnimation(u,m)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return i.start(hn(e,i,0,n))}stopAnimation(){G(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){G(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),i=this.visualElement.getProps(),s=i[n];return s||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){G(n=>{const{drag:i}=this.getProps();if(!Xt(n,i,this.currentDirection))return;const{projection:s}=this.visualElement,r=this.getAxisMotionValue(n);if(s&&s.layout){const{min:o,max:a}=s.layout.layoutBox[n];r.set(e[n]-E(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!bt(n)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};G(o=>{const a=this.getAxisMotionValue(o);if(a){const l=a.get();s[o]=wc({min:l,max:l},this.constraints[o])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),G(o=>{if(!Xt(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(E(l,c,s[o]))})}addListeners(){if(!this.visualElement.current)return;Mc.set(this.visualElement,this);const e=this.visualElement.current,n=q(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();bt(l)&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,r=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),i();const o=Y(window,"resize",()=>this.scalePositionWithinConstraints()),a=s.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(G(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),r(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:r=!1,dragElastic:o=$e,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:s,dragConstraints:r,dragElastic:o,dragMomentum:a}}}function Xt(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function Rc(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class Ec extends at{constructor(e){super(e),this.removeGroupControls=L,this.removeListeners=L,this.controls=new Dc(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||L}unmount(){this.removeGroupControls(),this.removeListeners()}}const ii=t=>(e,n)=>{t&&D.update(()=>t(e,n))};class Lc extends at{constructor(){super(...arguments),this.removePointerDownListener=L}onPointerDown(e){this.session=new oo(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ho(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:ii(e),onStart:ii(n),onMove:i,onEnd:(r,o)=>{delete this.session,s&&D.update(()=>s(r,o))}}}mount(){this.removePointerDownListener=q(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function Bc(){const t=g.useContext(he);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:i}=t,s=g.useId();return g.useEffect(()=>i(s),[]),!e&&n?[!1,()=>n&&n(s)]:[!0]}const te={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function si(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Dt={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(C.test(t))t=parseFloat(t);else return t;const n=si(t,e.target.x),i=si(t,e.target.y);return`${n}% ${i}%`}},Fc={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,s=ot.parse(t);if(s.length>5)return i;const r=ot.createTransformer(t),o=typeof s[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;s[0+o]/=a,s[1+o]/=l;const c=E(a,l,.5);return typeof s[2+o]=="number"&&(s[2+o]/=c),typeof s[3+o]=="number"&&(s[3+o]/=c),r(s)}};class Oc extends Bi.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:s}=this.props,{projection:r}=e;Zr(Ic),r&&(n.group&&n.group.add(r),i&&i.register&&s&&i.register(r),r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),te.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:s,isPresent:r}=this.props,o=i.projection;return o&&(o.isPresent=r,s||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==r&&(r?o.promote():o.relegate()||D.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),_e.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:s}=e;s&&(s.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function fo(t){const[e,n]=Bc(),i=g.useContext(Xe);return Bi.createElement(Oc,{...t,layoutGroup:i,switchLayoutGroup:g.useContext(as),isPresent:e,safeToRemove:n})}const Ic={borderRadius:{...Dt,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Dt,borderTopRightRadius:Dt,borderBottomLeftRadius:Dt,borderBottomRightRadius:Dt,boxShadow:Fc},po=["TopLeft","TopRight","BottomLeft","BottomRight"],Wc=po.length,oi=t=>typeof t=="string"?parseFloat(t):t,ri=t=>typeof t=="number"||C.test(t);function Nc(t,e,n,i,s,r){s?(t.opacity=E(0,n.opacity!==void 0?n.opacity:1,$c(i)),t.opacityExit=E(e.opacity!==void 0?e.opacity:1,0,zc(i))):r&&(t.opacity=E(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<Wc;o++){const a=`border${po[o]}Radius`;let l=ai(e,a),c=ai(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||ri(l)===ri(c)?(t[a]=Math.max(E(oi(l),oi(c),i),0),(Z.test(c)||Z.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=E(e.rotate||0,n.rotate||0,i))}function ai(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const $c=mo(0,.5,Fs),zc=mo(.5,.95,L);function mo(t,e,n){return i=>i<t?0:i>e?1:n(Nt(t,e,i))}function li(t,e){t.min=e.min,t.max=e.max}function H(t,e){li(t.x,e.x),li(t.y,e.y)}function ci(t,e,n,i,s){return t-=e,t=ue(t,1/n,i),s!==void 0&&(t=ue(t,1/s,i)),t}function Uc(t,e=0,n=1,i=.5,s,r=t,o=t){if(Z.test(e)&&(e=parseFloat(e),e=E(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=E(r.min,r.max,i);t===r&&(a-=e),t.min=ci(t.min,e,n,a,s),t.max=ci(t.max,e,n,a,s)}function ui(t,e,[n,i,s],r,o){Uc(t,e[n],e[i],e[s],e.scale,r,o)}const Hc=["x","scaleX","originX"],Gc=["y","scaleY","originY"];function di(t,e,n,i){ui(t.x,e,Hc,n?n.x:void 0,i?i.x:void 0),ui(t.y,e,Gc,n?n.y:void 0,i?i.y:void 0)}function hi(t){return t.translate===0&&t.scale===1}function go(t){return hi(t.x)&&hi(t.y)}function Kc(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function xo(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function fi(t){return z(t.x)/z(t.y)}class Zc{constructor(){this.members=[]}add(e){fn(this.members,e),e.scheduleRender()}remove(e){if(pn(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(s=>e===s);if(n===0)return!1;let i;for(let s=n;s>=0;s--){const r=this.members[s];if(r.isPresent!==!1){i=r;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:s}=e.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function pi(t,e,n){let i="";const s=t.x.translate/e.x,r=t.y.translate/e.y;if((s||r)&&(i=`translate3d(${s}px, ${r}px, 0) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:l,rotateX:c,rotateY:u}=n;l&&(i+=`rotate(${l}deg) `),c&&(i+=`rotateX(${c}deg) `),u&&(i+=`rotateY(${u}deg) `)}const o=t.x.scale*e.x,a=t.y.scale*e.y;return(o!==1||a!==1)&&(i+=`scale(${o}, ${a})`),i||"none"}const _c=(t,e)=>t.depth-e.depth;class Yc{constructor(){this.children=[],this.isDirty=!1}add(e){fn(this.children,e),this.isDirty=!0}remove(e){pn(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(_c),this.isDirty=!1,this.children.forEach(e)}}function qc(t,e){const n=pt.now(),i=({timestamp:s})=>{const r=s-n;r>=e&&(Q(i),t(r-e))};return D.read(i,!0),()=>Q(i)}function Xc(t){window.MotionDebug&&window.MotionDebug.record(t)}function Qc(t){return t instanceof SVGElement&&t.tagName!=="svg"}function Jc(t,e,n){const i=$(t)?t:St(t);return i.start(hn("",i,e,n)),i.animation}const mi=["","X","Y","Z"],tu={visibility:"hidden"},gi=1e3;let eu=0;const dt={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function yo({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(o={},a=e==null?void 0:e()){this.id=eu++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,dt.totalNodes=dt.resolvedTargetDeltas=dt.recalculatedProjection=0,this.nodes.forEach(su),this.nodes.forEach(cu),this.nodes.forEach(uu),this.nodes.forEach(ou),Xc(dt)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Yc)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new mn),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Qc(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let d;const h=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=qc(h,250),te.hasAnimatedSinceResize&&(te.hasAnimatedSinceResize=!1,this.nodes.forEach(yi))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:h,hasRelativeTargetChanged:p,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||u.getDefaultTransition()||mu,{onLayoutAnimationStart:b,onLayoutAnimationComplete:w}=u.getProps(),v=!this.targetLayout||!xo(this.targetLayout,m)||p,y=!h&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||h&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,y);const T={...dn(x,"layout"),onPlay:b,onComplete:w};(u.shouldReduceMotion||this.options.layoutRoot)&&(T.delay=0,T.type=!1),this.startAnimation(T)}else h||yi(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Q(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(du),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(xi);return}this.isUpdating||this.nodes.forEach(au),this.isUpdating=!1,this.nodes.forEach(lu),this.nodes.forEach(nu),this.nodes.forEach(iu),this.clearAllSnapshots();const a=pt.now();O.delta=st(0,1e3/60,a-O.timestamp),O.timestamp=a,O.isProcessing=!0,be.update.process(O),be.preRender.process(O),be.render.process(O),O.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,_e.read(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(ru),this.sharedNodes.forEach(hu)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,D.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){D.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=B(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!s)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!go(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||ut(this.latestValues)||u)&&(s(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),gu(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return B();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(et(a.x,l.offset.x),et(a.y,l.offset.y)),a}removeElementScroll(o){const a=B();H(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:u,options:d}=c;if(c!==this.root&&u&&d.layoutScroll){if(u.isRoot){H(a,o);const{scroll:h}=this.root;h&&(et(a.x,-h.offset.x),et(a.y,-h.offset.y))}et(a.x,u.offset.x),et(a.y,u.offset.y)}}return a}applyTransform(o,a=!1){const l=B();H(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Pt(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),ut(u.latestValues)&&Pt(l,u.latestValues)}return ut(this.latestValues)&&Pt(l,this.latestValues),l}removeTransform(o){const a=B();H(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!ut(c.latestValues))continue;ze(c.latestValues)&&c.updateSnapshot();const u=B(),d=c.measurePageBox();H(u,d),di(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return ut(this.latestValues)&&di(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==O.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:d,layoutId:h}=this.options;if(!(!this.layout||!(d||h))){if(this.resolvedRelativeTargetAt=O.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=B(),this.relativeTargetOrigin=B(),Ft(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),H(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=B(),this.targetWithTransforms=B()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),xc(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):H(this.target,this.layout.layoutBox),co(this.target,this.targetDelta)):H(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=B(),this.relativeTargetOrigin=B(),Ft(this.relativeTargetOrigin,this.target,p.target),H(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}dt.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||ze(this.parent.latestValues)||lo(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===O.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;H(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,p=this.treeScale.y;Vc(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=B());const{target:m}=a;if(!m){this.projectionTransform&&(this.projectionDelta=Tt(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Tt(),this.projectionDeltaWithTransform=Tt());const x=this.projectionTransform;Bt(this.projectionDelta,this.layoutCorrected,m,this.latestValues),this.projectionTransform=pi(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==h||this.treeScale.y!==p)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m)),dt.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=Tt();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=B(),p=l?l.source:void 0,m=this.layout?this.layout.source:void 0,x=p!==m,b=this.getStack(),w=!b||b.members.length<=1,v=!!(x&&!w&&this.options.crossfade===!0&&!this.path.some(pu));this.animationProgress=0;let y;this.mixTargetDelta=T=>{const S=T/1e3;vi(d.x,o.x,S),vi(d.y,o.y,S),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ft(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),fu(this.relativeTarget,this.relativeTargetOrigin,h,S),y&&Kc(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=B()),H(y,this.relativeTarget)),x&&(this.animationValues=u,Nc(u,c,this.latestValues,S,v,w)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Q(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=D.update(()=>{te.hasAnimatedSinceResize=!0,this.currentAnimation=Jc(0,gi,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(gi),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&vo(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||B();const d=z(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const h=z(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}H(a,l),Pt(a,u),Bt(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Zc),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const c={};for(let u=0;u<mi.length;u++){const d="rotate"+mi[u];l[d]&&(c[d]=l[d],o.setStaticValue(d,0))}o.render();for(const u in c)o.setStaticValue(u,c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return tu;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Qt(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Qt(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!ut(this.latestValues)&&(x.transform=u?u({},""):"none",this.hasProjected=!1),x}const h=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=pi(this.projectionDeltaWithTransform,this.treeScale,h),u&&(c.transform=u(h,c.transform));const{x:p,y:m}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${m.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=h.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:c.opacity=d===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const x in ie){if(h[x]===void 0)continue;const{correct:b,applyTo:w}=ie[x],v=c.transform==="none"?h[x]:b(h[x],d);if(w){const y=w.length;for(let T=0;T<y;T++)c[w[T]]=v}else c[x]=v}return this.options.layoutId&&(c.pointerEvents=d===this?Qt(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(xi),this.root.sharedNodes.clear()}}}function nu(t){t.updateLayout()}function iu(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:s}=t.layout,{animationType:r}=t.options,o=n.source!==t.layout.source;r==="size"?G(d=>{const h=o?n.measuredBox[d]:n.layoutBox[d],p=z(h);h.min=i[d].min,h.max=h.min+p}):vo(r,n.layoutBox,i)&&G(d=>{const h=o?n.measuredBox[d]:n.layoutBox[d],p=z(i[d]);h.max=h.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=Tt();Bt(a,i,n.layoutBox);const l=Tt();o?Bt(l,t.applyTransform(s,!0),n.measuredBox):Bt(l,i,n.layoutBox);const c=!go(a);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:h,layout:p}=d;if(h&&p){const m=B();Ft(m,n.layoutBox,h.layoutBox);const x=B();Ft(x,i,p.layoutBox),xo(m,x)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=x,t.relativeTargetOrigin=m,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function su(t){dt.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function ou(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function ru(t){t.clearSnapshot()}function xi(t){t.clearMeasurements()}function au(t){t.isLayoutDirty=!1}function lu(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function yi(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function cu(t){t.resolveTargetDelta()}function uu(t){t.calcProjection()}function du(t){t.resetRotation()}function hu(t){t.removeLeadSnapshot()}function vi(t,e,n){t.translate=E(e.translate,0,n),t.scale=E(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function bi(t,e,n,i){t.min=E(e.min,n.min,i),t.max=E(e.max,n.max,i)}function fu(t,e,n,i){bi(t.x,e.x,n.x,i),bi(t.y,e.y,n.y,i)}function pu(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const mu={duration:.45,ease:[.4,0,.1,1]},wi=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),Ti=wi("applewebkit/")&&!wi("chrome/")?Math.round:L;function Pi(t){t.min=Ti(t.min),t.max=Ti(t.max)}function gu(t){Pi(t.x),Pi(t.y)}function vo(t,e,n){return t==="position"||t==="preserve-aspect"&&!Ne(fi(e),fi(n),.2)}const xu=yo({attachResizeListener:(t,e)=>Y(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),De={current:void 0},bo=yo({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!De.current){const t=new xu({});t.mount(window),t.setOptions({layoutScroll:!0}),De.current=t}return De.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),yu={pan:{Feature:Lc},drag:{Feature:Ec,ProjectionNode:bo,MeasureLayout:fo}},vu=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function bu(t){const e=vu.exec(t);if(!e)return[,];const[,n,i]=e;return[n,i]}function He(t,e,n=1){const[i,s]=bu(t);if(!i)return;const r=window.getComputedStyle(e).getPropertyValue(i);if(r){const o=r.trim();return eo(o)?parseFloat(o):o}else return Ee(s)?He(s,e,n+1):s}function wu(t,{...e},n){const i=t.current;if(!(i instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(s=>{const r=s.get();if(!Ee(r))return;const o=He(r,i);o&&s.set(o)});for(const s in e){const r=e[s];if(!Ee(r))continue;const o=He(r,i);o&&(e[s]=o,n||(n={}),n[s]===void 0&&(n[s]=r))}return{target:e,transitionEnd:n}}const Tu=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),wo=t=>Tu.has(t),Pu=t=>Object.keys(t).some(wo),Ci=t=>t===gt||t===C,Si=(t,e)=>parseFloat(t.split(", ")[e]),Vi=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const s=i.match(/^matrix3d\((.+)\)$/);if(s)return Si(s[1],e);{const r=i.match(/^matrix\((.+)\)$/);return r?Si(r[1],t):0}},Cu=new Set(["x","y","z"]),Su=Ut.filter(t=>!Cu.has(t));function Vu(t){const e=[];return Su.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const Vt={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Vi(4,13),y:Vi(5,14)};Vt.translateX=Vt.x;Vt.translateY=Vt.y;const Au=(t,e,n)=>{const i=e.measureViewportBox(),s=e.current,r=getComputedStyle(s),{display:o}=r,a={};o==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(c=>{a[c]=Vt[c](i,r)}),e.render();const l=e.measureViewportBox();return n.forEach(c=>{const u=e.getValue(c);u&&u.jump(a[c]),t[c]=Vt[c](l,r)}),t},ku=(t,e,n={},i={})=>{e={...e},i={...i};const s=Object.keys(e).filter(wo);let r=[],o=!1;const a=[];if(s.forEach(l=>{const c=t.getValue(l);if(!t.hasValue(l))return;let u=n[l],d=Mt(u);const h=e[l];let p;if(oe(h)){const m=h.length,x=h[0]===null?1:0;u=h[x],d=Mt(u);for(let b=x;b<m&&h[b]!==null;b++)p?rn(Mt(h[b])===p):p=Mt(h[b])}else p=Mt(h);if(d!==p)if(Ci(d)&&Ci(p)){const m=c.get();typeof m=="string"&&c.set(parseFloat(m)),typeof h=="string"?e[l]=parseFloat(h):Array.isArray(h)&&p===C&&(e[l]=h.map(parseFloat))}else d!=null&&d.transform&&(p!=null&&p.transform)&&(u===0||h===0)?u===0?c.set(p.transform(u)):e[l]=d.transform(h):(o||(r=Vu(t),o=!0),a.push(l),i[l]=i[l]!==void 0?i[l]:e[l],c.jump(h))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,c=Au(e,t,a);return r.length&&r.forEach(([u,d])=>{t.getValue(u).set(d)}),t.render(),fe&&l!==null&&window.scrollTo({top:l}),{target:c,transitionEnd:i}}else return{target:e,transitionEnd:i}};function ju(t,e,n,i){return Pu(e)?ku(t,e,n,i):{target:e,transitionEnd:i}}const Mu=(t,e,n,i)=>{const s=wu(t,e,i);return e=s.target,i=s.transitionEnd,ju(t,e,n,i)},Ge={current:null},To={current:!1};function Du(){if(To.current=!0,!!fe)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Ge.current=t.matches;t.addListener(e),e()}else Ge.current=!1}function Ru(t,e,n){const{willChange:i}=e;for(const s in e){const r=e[s],o=n[s];if($(r))t.addValue(s,r),ce(i)&&i.add(s);else if($(o))t.addValue(s,St(r,{owner:t})),ce(i)&&i.remove(s);else if(o!==r)if(t.hasValue(s)){const a=t.getValue(s);!a.hasAnimated&&a.set(r)}else{const a=t.getStaticValue(s);t.addValue(s,St(a!==void 0?a:r,{owner:t}))}}for(const s in n)e[s]===void 0&&t.removeValue(s);return e}const Ai=new WeakMap,Po=Object.keys(Wt),Eu=Po.length,ki=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Lu=qe.length;class Bu{constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:s,visualState:r},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>D.render(this.render,!1,!0);const{latestValues:a,renderState:l}=r;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=o,this.isControllingVariants=me(n),this.isVariantNode=rs(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(n,{});for(const d in u){const h=u[d];a[d]!==void 0&&$(h)&&(h.set(a[d],!1),ce(c)&&c.add(d))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,Ai.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),To.current||Du(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ge.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Ai.delete(this.current),this.projection&&this.projection.unmount(),Q(this.notifyUpdate),Q(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const i=mt.has(e),s=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&D.update(this.notifyUpdate,!1,!0),i&&this.projection&&(this.projection.isTransformDirty=!0)}),r=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{s(),r()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},i,s,r){let o,a;for(let l=0;l<Eu;l++){const c=Po[l],{isEnabled:u,Feature:d,ProjectionNode:h,MeasureLayout:p}=Wt[c];h&&(o=h),u(n)&&(!this.features[c]&&d&&(this.features[c]=new d(this)),p&&(a=p))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:u,dragConstraints:d,layoutScroll:h,layoutRoot:p}=n;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!u||d&&bt(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:r,layoutScroll:h,layoutRoot:p})}return a}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):B()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<ki.length;i++){const s=ki[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const r=e["on"+s];r&&(this.propEventSubscriptions[s]=this.on(s,r))}this.prevMotionValues=Ru(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<Lu;i++){const s=qe[i],r=this.props[s];(It(r)||r===!1)&&(n[s]=r)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=St(n,{owner:this}),this.addValue(e,i)),i}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props,s=typeof i=="string"||typeof i=="object"?(n=on(this.props,i))===null||n===void 0?void 0:n[e]:void 0;if(i&&s!==void 0)return s;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!$(r)?r:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new mn),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class Co extends Bu{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...i},s){const r=Ql(i,e||{},this);if(s){ql(this,i,r);const o=Mu(this,i,r,n);n=o.transitionEnd,i=o.target}return{transition:e,transitionEnd:n,...i}}}function Fu(t){return window.getComputedStyle(t)}class Ou extends Co{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(mt.has(n)){const i=un(n);return i&&i.default||0}else{const i=Fu(e),s=(us(n)?i.getPropertyValue(n):i[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return uo(e,n)}build(e,n,i,s){Je(e,n,i,s.transformTemplate)}scrapeMotionValuesFromProps(e,n){return sn(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;$(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,i,s){gs(e,n,i,s)}}class Iu extends Co{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(mt.has(n)){const i=un(n);return i&&i.default||0}return n=xs.has(n)?n:Ze(n),e.getAttribute(n)}measureInstanceViewportBox(){return B()}scrapeMotionValuesFromProps(e,n){return vs(e,n)}build(e,n,i,s){en(e,n,i,this.isSVGTag,s.transformTemplate)}renderInstance(e,n,i,s){ys(e,n,i,s)}mount(e){this.isSVGTag=nn(e.tagName),super.mount(e)}}const Wu=(t,e)=>Qe(t)?new Iu(e,{enableHardwareAcceleration:!1}):new Ou(e,{enableHardwareAcceleration:!0}),Nu={layout:{ProjectionNode:bo,MeasureLayout:fo}},$u={...fc,...Ea,...yu,...Nu},zu=Gr((t,e)=>ba(t,e,$u,Wu));function So(){const t=g.useRef(!1);return Ke(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function Uu(){const t=So(),[e,n]=g.useState(0),i=g.useCallback(()=>{t.current&&n(e+1)},[e]);return[g.useCallback(()=>D.postRender(i),[i]),e]}class Hu extends g.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Gu({children:t,isPresent:e}){const n=g.useId(),i=g.useRef(null),s=g.useRef({width:0,height:0,top:0,left:0});return g.useInsertionEffect(()=>{const{width:r,height:o,top:a,left:l}=s.current;if(e||!i.current||!r||!o)return;i.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${r}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[e]),g.createElement(Hu,{isPresent:e,childRef:i,sizeRef:s},g.cloneElement(t,{ref:i}))}const Re=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:s,presenceAffectsLayout:r,mode:o})=>{const a=bs(Ku),l=g.useId(),c=g.useMemo(()=>({id:l,initial:e,isPresent:n,custom:s,onExitComplete:u=>{a.set(u,!0);for(const d of a.values())if(!d)return;i&&i()},register:u=>(a.set(u,!1),()=>a.delete(u))}),r?void 0:[n]);return g.useMemo(()=>{a.forEach((u,d)=>a.set(d,!1))},[n]),g.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=g.createElement(Gu,{isPresent:n},t)),g.createElement(he.Provider,{value:c},t)};function Ku(){return new Map}function Zu(t){return g.useEffect(()=>()=>t(),[])}const ht=t=>t.key||"";function _u(t,e){t.forEach(n=>{const i=ht(n);e.set(i,n)})}function Yu(t){const e=[];return g.Children.forEach(t,n=>{g.isValidElement(n)&&e.push(n)}),e}const qu=({children:t,custom:e,initial:n=!0,onExitComplete:i,exitBeforeEnter:s,presenceAffectsLayout:r=!0,mode:o="sync"})=>{const a=g.useContext(Xe).forceRender||Uu()[0],l=So(),c=Yu(t);let u=c;const d=g.useRef(new Map).current,h=g.useRef(u),p=g.useRef(new Map).current,m=g.useRef(!0);if(Ke(()=>{m.current=!1,_u(c,p),h.current=u}),Zu(()=>{m.current=!0,p.clear(),d.clear()}),m.current)return g.createElement(g.Fragment,null,u.map(v=>g.createElement(Re,{key:ht(v),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:r,mode:o},v)));u=[...u];const x=h.current.map(ht),b=c.map(ht),w=x.length;for(let v=0;v<w;v++){const y=x[v];b.indexOf(y)===-1&&!d.has(y)&&d.set(y,void 0)}return o==="wait"&&d.size&&(u=[]),d.forEach((v,y)=>{if(b.indexOf(y)!==-1)return;const T=p.get(y);if(!T)return;const S=x.indexOf(y);let j=v;if(!j){const M=()=>{d.delete(y);const V=Array.from(p.keys()).filter(k=>!b.includes(k));if(V.forEach(k=>p.delete(k)),h.current=c.filter(k=>{const U=ht(k);return U===y||V.includes(U)}),!d.size){if(l.current===!1)return;a(),i&&i()}};j=g.createElement(Re,{key:ht(T),isPresent:!1,onExitComplete:M,custom:e,presenceAffectsLayout:r,mode:o},T),d.set(y,j)}u.splice(S,0,j)}),u=u.map(v=>{const y=v.key;return d.has(y)?v:g.createElement(Re,{key:ht(v),isPresent:!0,presenceAffectsLayout:r,mode:o},v)}),g.createElement(g.Fragment,null,d.size?u:u.map(v=>g.cloneElement(v)))},Xu=P(zu.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
  position: absolute;
  bottom: 54px;
 
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);
  padding: 24px 13px;
  transform-origin: bottom;
  z-index: 2;

  @media screen and (max-width: 767px) {
    /* left: 50%; */
    left: ${t=>-7-t.$deltaNum}px;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 768px) {
    right: ${t=>t.$delta?"17px":""};
    left: ${t=>t.$delta?"":"17px"};
    padding: 24px 16px;
    width: 292px;
    bottom: 58px;
  }

  @media screen and (min-width: 1440px) {
    bottom: 56px;
  }

  h3 {
    color: #2f2f2f;
    font-size: 26px;
    line-height: calc(20 / 16);
  }
  p {
    color: '#2f2f2f';
    font-size:16px;
    line-height: calc(20 / 16);
    span {
      color: #407bff;
      font-size: 18px;
      font-weight: 500;
      line-height: calc(24 / 18);
    }
  }
`,Qu=({calendarRef:t,refData:e,waterData:n={}})=>{const{data:i,waterRate:s,dailyNormFulfillment:r,servingOfWater:o}=n,a=e==null?void 0:e.current.getBoundingClientRect().left,l=t==null?void 0:t.current.getBoundingClientRect().left;let c=!0;const u=a-l;return u<300&&(c=!1),f.jsx(Xu,{variants:Er,initial:"initial",animate:"animate",exit:"exit",$delta:c,$deltaNum:u,children:Object.values(n).length?f.jsxs(f.Fragment,{children:[f.jsx("h3",{children:i}),f.jsxs("p",{children:["Daily norma: ",f.jsxs("span",{children:[s," L"]})]}),f.jsxs("p",{children:["Fulfillment of the daily norm: ",f.jsxs("span",{children:[r,"%"]})]}),f.jsxs("p",{children:["How many servings of water: ",f.jsx("span",{children:o})]})]}):f.jsx("h3",{children:"You do not have info about this day."})})},Ju=({calendarRef:t,day:e,waterPercentage:n})=>{const[i,s]=g.useState(null),r=g.useRef(null),o=l=>{r.current&&!r.current.contains(l.target)&&s(null)};g.useEffect(()=>(document.addEventListener("click",o),()=>{document.removeEventListener("click",o)}),[]);const a=g.useCallback((l=null)=>{s(c=>c===l?null:l)},[]);return f.jsxs(Rr,{children:[f.jsx(qu,{children:i===e&&f.jsx(Qu,{calendarRef:t,refData:r,waterData:n},e)}),f.jsx(Ar,{ref:r,onClick:()=>a(e),$isOutlineVisible:!n||n.dailyNormFulfillment<100,children:e}),f.jsx(Mr,{children:n?`${n.dailyNormFulfillment}%`:"0%"})]},e)},td=()=>{const[t,e]=g.useState(new Date),n=rt(),i=Ot(Io),s=g.useRef(null);g.useEffect(()=>{n(Ro(t.getMonth()))},[n,t]);const r=()=>{e(new Date(t.getFullYear(),t.getMonth()+1,1))},o=()=>{e(new Date(t.getFullYear(),t.getMonth()-1,1))},a=()=>new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),l=()=>{const c=a();return Array.from({length:c},(d,h)=>h+1).map(d=>{const h=i==null?void 0:i.find(p=>Number(p.data.split(",")[0])===d);return f.jsx(Ju,{calendarRef:s,day:d,waterPercentage:h},d)})};return f.jsxs(Sr,{className:"calendar",ref:s,children:[f.jsxs(Vr,{children:[f.jsx("h2",{children:"Month"}),f.jsxs(kr,{children:[f.jsx(Pn,{"aria-label":"Previous month",onClick:o,children:f.jsx("svg",{width:"14",height:"14",children:f.jsx("use",{href:wn+"#arrow-left"})})}),f.jsx(jr,{children:new Intl.DateTimeFormat("en-US",{month:"long"}).format(t)}),f.jsx(Pn,{"aria-label":"Previous month",onClick:r,children:f.jsx("svg",{width:"14",height:"14",children:f.jsx("use",{href:wn+"#arrow-right"})})})]})]}),f.jsx(Dr,{children:l()})]})},ed=I.div`
  position: absolute;
  max-width: 320px;
  width: 100%;
  height: 570px;
  top: 28px;
  left: 0;
  z-index: -10;
  background-image: url('src/images/mobile/bottle-home-screen@1x.png'),
   url('src/images/mobile/background-element-home-screen@1x.png');
  background-size: 280px, cover;
  background-position: top 56px left 20px, top 0 left 0;
  background-repeat: no-repeat;
  
   
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('src/images/mobile/bottle-home-screen@2x.png'),
    url('src/images/mobile/background-element-home-screen@2x.png');
  }
  @media (min-width: 768px) {
    max-width: 768px;
    width: 100%;
    height: 680px;
    top: -16px;
    left: 0;
    background-image: url('src/images/tablet/bottle-home-screen@1x.png'),
     url('src/images/tablet/background-element-home-screen@1x.png');
    background-size: 518px, cover;
    background-position: top 16px left 125px, top 0 left 0;
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('src/images/tablet/bottle-home-screen@2x.png'),
       url('src/images/tablet/background-element-home-screen@2x.png');
    
  }
  @media (min-width: 1440px) {
    max-width: 1404px;
    width: 100%;
    height: 100%;
    top: 0;
    left: 9px;
    background-image: url('src/images/desktop/bottle-home-screen@1x.png'),
    url('src/images/desktop/background-element-main-page@1x.png');
    background-size: 738px, 1404px;
    background-position: top 0 left 30px, top 38px left 0;
  
     
    @media (min-device-pixel-ratio: 2),
           (min-resolution: 192dpi) {
      background-image: url('src/images/desktop/bottle-home-screen@2x.png'), 
      url('src/images/desktop/background-element-main-page@2x.png');
  }
} 
`,nd=I.div`
  margin: 0 auto;

  @media (min-width: 1440px) {
    display: flex;
    gap: 32px;   
  }
`,id=I.div`
  padding: 24px 8px;
  background-color: ${A.secondaryColor2WhiteBlue};
  border-radius: 10px;
  box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.3);
  
  @media (min-width: 768px) {
  padding: 32px 24px ;

  @media (min-width: 1440px) {
  width: 592px;
  }
  }
  
`,sd=I.div`
  height: 260px;
`,od=I.div`
margin-bottom: 40px;

@media (min-width: 1440px) {
    padding-top: 32px;
    margin-bottom: 0;
  }
`,rd=P.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`,ad=P.div`
  position: relative;

  display: block;
  width: 280px;
  height: 816px;
  padding: 24px 12px;
  border-radius: 10px;
  background-color: white;

  @media (min-width: 768px) {
    padding: 32px 24px;

    width: 704px;
    height: 696px;
  }

  @media (min-width: 1440px) {
    width: 592px;
    height: 712px;
  }
`,ld=P.button`
  position: absolute;
  top: 28px;
  left: 244px;

  padding: 0;
  margin: 0;
  border: none;
  background-color: inherit;

  cursor: pointer;

  @media (min-width: 768px) {
    top: 36px;
    left: 656px;
  }

  @media (min-width: 1440px) {
    left: 544px;
  }
`,cd=P.h1`
  margin-bottom: 24px;
  color: var(--Primery-Color-Black, #2f2f2f);
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
`,ud=P.div`
  margin-bottom: 12px;

  @media (min-width: 768px) {
    display: flex;
    gap: 24px;
  }

  .formula-text {
    color: var(--Primery-Color-Black, #2f2f2f);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }

  .formula-text:not(:last-child) {
    margin-bottom: 16px;
  }

  @media (min-width: 768px) {
    .formula-text:not(:last-child) {
      margin-bottom: 0;
    }
  }

  .formula-acsent {
    color: var(--Primery-Color-Blue, #407bff);
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }
`,dd=P.p`
  padding: 10px;
  margin-bottom: 24px;
  border-radius: 10px;
  border: 1px solid #d7e3ff;

  color: #8f8f8f;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;

  .acsent-color {
    color: var(--Primery-Color-Blue, #407bff);
  }
`,hd=P.form`
  color: var(--Primery-Color-Black, #2f2f2f);

  .sub-title {
    margin-bottom: 16px;

    color: var(--Primery-Color-Black, #2f2f2f);
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
  }

  .gender-lable {
    display: block;
    margin-bottom: 16px;
  }
  .chek-title {
    margin-left: 8px;
    margin-right: 24px;
  }
  .chek-title:not(:last-child) {
    margin-right: 24px;
  }
  .check {
    cursor: pointer;
  }
  .weight-title {
    margin-bottom: 8px;
  }
  .form-input {
    width: 256px;
    height: 44px;
    padding: 12px 10px;
    border-radius: 6px;
    border: 1px solid #d7e3ff;

    color: var(--Primery-Color-Blue, #407bff);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  .form-input:focus-visible {
    outline: none;
  }
  @media (min-width: 768px) {
    .form-input {
      width: 656px;
    }
  }

  @media (min-width: 1440px) {
    .form-input {
      width: 524px;
    }
  }

  .weight-lable {
    display: block;
    margin-bottom: 16px;
  }

  .activeTime-title {
    margin-bottom: 8px;

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }

  .activeTime-lable {
    display: block;
    margin-bottom: 16px;
  }

  .litersPerDay-container {
    display: flex;
    align-items: center;
    gap: 6px;

    margin-bottom: 24px;
  }

  .litersPerDay-text {
    width: 190px;
  }

  @media (min-width: 768px) {
    .litersPerDay-text {
      width: 328px;
    }
  }

  .calculated-litersPerDay {
    display: block;
    color: var(--Primery-Color-Blue, #407bff);
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }

  .waterToDrink-lable {
    display: block;
    margin-bottom: 24px;
  }

  .submit-btn {
    display: block;
    width: 256px;
    height: 36px;
    padding: 8px 30px;

    color: white;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;

    border-radius: 10px;
    background-color: var(--Primery-Color-Blue, #407bff);
    border: transparent;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover:focus {
      background-color: #4054ff;
    }
  }

  @media (min-width: 768px) {
    .submit-btn {
      padding: 10px 30px;
      width: 160px;
      height: 44px;

      margin-left: auto;
    }
  }
`;function fd({closeModal:t}){const e=rt(),[n,i]=g.useState(0),[s,r]=g.useState(0),[o,a]=g.useState("woman"),[l,c]=g.useState(0),[u,d]=g.useState(0);g.useEffect(()=>(window.addEventListener("keydown",h),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",h),document.body.style.overflow="auto"}));const h=w=>{w.code==="Escape"&&t()},p=w=>{w.target===w.currentTarget&&t()},m=w=>{const{name:v,value:y}=w.target;switch(v){case"weight":i(y);break;case"activeTime":r(y);break;case"waterToDrink":d(y);break;case"gender":a(y);break}},x=async w=>{w.preventDefault();const v={waterRate:u*1e3};u>0&&(e(Eo(v)),i(0),r(0),d(0),t()),alert("Something went wrong")},b=(w,v,y)=>{if(w==="woman"){const T=v*.03+y*.4;c(T.toFixed(1))}else{const T=v*.04+y*.6;c(T.toFixed(1))}};return g.useEffect(()=>{b(o,n,s)},[s,n,o]),f.jsx(rd,{onClick:p,children:f.jsxs(ad,{children:[f.jsx(ld,{onClick:t,children:f.jsx(Li,{})}),f.jsx(cd,{children:"My daily norma"}),f.jsxs(ud,{children:[f.jsxs("p",{className:"formula-text",children:["For girl:"," ",f.jsx("span",{className:"formula-acsent",children:"V=(M*0,03) + (T*0,4)"})]}),f.jsxs("p",{className:"formula-text",children:["For man:"," ",f.jsx("span",{className:"formula-acsent",children:"V=(M*0,04) + (T*0,6)"})]})]}),f.jsxs(dd,{children:[f.jsx("span",{className:"acsent-color",children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]}),f.jsxs(hd,{onSubmit:x,children:[f.jsx("h2",{className:"sub-title",children:"Calculate your rate:"}),f.jsxs("div",{className:"gender-lable",children:[f.jsxs("label",{children:[f.jsx("input",{type:"radio",name:"gender",value:"woman",onChange:m,checked:o==="woman",className:"check"}),f.jsx("span",{className:"chek-title",children:"For woman"})]}),f.jsxs("label",{htmlFor:"",children:[f.jsx("input",{type:"radio",name:"gender",value:"man",onChange:m,checked:o==="man",className:"check"}),f.jsx("span",{className:"chek-title",children:"For man"})]})]}),f.jsx("p",{className:"weight-title",children:"Your weight in kilograms:"}),f.jsx("label",{className:"weight-lable",children:f.jsx("input",{type:"number",min:0,name:"weight",value:n,onChange:m,className:"form-input"})}),f.jsx("p",{className:"activeTime-title",children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),f.jsx("label",{className:"activeTime-lable",children:f.jsx("input",{type:"number",min:0,name:"activeTime",value:s,onChange:m,className:"form-input"})}),f.jsxs("div",{className:"litersPerDay-container",children:[f.jsx("p",{className:"litersPerDay-text",children:"The required amount of water in liters per day:"})," ",f.jsxs("span",{className:"calculated-litersPerDay",children:[l," L"]})]}),f.jsx("h2",{className:"sub-title",children:"Write down how much water you will drink:"}),f.jsx("label",{className:"waterToDrink-lable",children:f.jsx("input",{type:"number",min:0,max:15,name:"waterToDrink",value:u,onChange:m,className:"form-input",required:!0})}),f.jsx("button",{type:"submit",className:"submit-btn",children:"Save"})]})]})})}const yd=()=>{const[t,e]=g.useState(!1),n=()=>{e(!t)};return f.jsxs(f.Fragment,{children:[f.jsx(ed,{}),f.jsxs(nd,{children:[f.jsxs(od,{children:[f.jsx(Oo,{openModal:n}),f.jsx(qo,{})]}),f.jsxs(id,{children:[f.jsx(sd,{children:f.jsx(Cr,{})}),f.jsx(td,{})]})]}),t&&f.jsx(fd,{closeModal:n})]})};export{yd as default};
