import{n as I,c as V,m as st,p as jo,f as at,r as m,q as Mo,j as f,t as ce,u as T,v as Di,b as Ei,w as Ri,d as Li,x as Do,y as Eo,z as Bi,A as Ro,B as Fi,C as Lo,R as Wi,D as Bo,G as Fo}from"./index-6171a1fc.js";import{d as Wo,a as Io}from"./background-element-main-page@2x-b99c692e.js";const Oo=I.div`
padding: 8px 20px;
margin-bottom: 232px;
width: 166px;
border: 1px solid ${V.secondaryColor2WhiteBlue};
border-radius: 10px;
box-shadow: 0 4px 8px 0 rgba(158, 187, 255, 0.12);

@media (min-width: 768px) {
    margin-bottom: 326px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 466px;
  }

`,zo=I.p`
margin-bottom: 12px;
font-size: 18px;
font-weight: 500;
line-height: 1.33;
color: ${V.primaryColorBlack};

`,Uo=I.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;

  p {
    font-weight: 700;
    font-size: 22px;
    line-height: 1;
    color: ${V.primaryColorBlue};

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
`,No=({openModal:t})=>{const e=st(jo),n=at();return m.useEffect(()=>{n(Mo())},[n]),f.jsxs(Oo,{children:[f.jsx(zo,{children:"My daily norma"}),f.jsxs(Uo,{children:[f.jsxs("p",{children:[e.waterRate/1e3," L"]}),f.jsx("button",{type:"button",onClick:t,children:"Edit"})]})]})},ue=t=>t.water,de=ce(ue,t=>t.todayWaterConsumption),Ho=ce(ue,t=>t.monthWaterConsumption),Zo=ce(ue,t=>t.isLoading);ce(ue,t=>t.error);const Ko=t=>m.createElement("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},m.createElement("path",{d:"M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",strokeLinecap:"round",strokeLinejoin:"round"})),Go=I.div`
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

`,Xo=I.div`
margin-bottom: 16px;

@media (min-width: 768px) {
  padding-bottom: 8px;
    margin-bottom: 0;
    width: 356px;
  }

  @media (min-width: 1440px) {
    width: 391px;
  }
`,qo=I.p`
margin-bottom: 8px;
font-size: 18px;
line-height: 1.33;
color: ${V.primaryColorBlue};

@media (min-width: 768px) {
    margin-bottom: 16px;    
  }

`,Yo=I.div`
position: relative;
top: 0;
margin-left: auto;
margin-right: auto;
margin-bottom: 3px;
margin-top: 3px;
width: 256px;
height: 8px;
background-color:${V.secondaryColor6};
border-radius: 10px;

@media (min-width: 768px) {
    width: 325px;
  }

  @media (min-width: 1440px) {
    width: 360px;
  }

`,Jo=I.div`
position: absolute;                   
height: 8px;
background-color:${V.secondaryColor4};
border-radius: 10px 0 0 10px;

`,Qo=I.div`
position: absolute;
top: -4px;
left: 0;              
width: 14px;
height: 14px;
background-color:${V.primaryColorWhite};
border: 1px solid ${V.primaryColorBlue};
border-radius: 50%;

`,$o=I.div`
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
  border-left: 2px solid ${V.secondaryColor6};
}

`,_o=I.span`
display: block;
position: absolute;
top: 8px;
font-size: 16px;
line-height: 1.25;
`,tr=I.button`
height: 44px;
display: flex;
gap: 10px;
align-items: center;
padding: 6px 76px;
border-radius: 10px;
border: none;
stroke: ${V.primaryColorWhite};
background-color:${V.primaryColorBlue};
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
color: ${V.primaryColorWhite};

@media (min-width: 768px) {
    padding: 0 5px;
    font-size: 18px;
    line-height: 1.33;
  }

  @media (min-width: 1440px) {
    padding: 0;
  }
}

`,er=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24",...t},m.createElement("path",{fill:"#407BFF",fillRule:"evenodd",d:"M5.25 12a.75.75 0 0 1 .75-.75h12a.75.75 0 1 1 0 1.5H6a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"})),Ii=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...t},m.createElement("path",{fill:"#407BFF",fillRule:"evenodd",d:"M12 5.25a.75.75 0 0 1 .75.75v5.25H18a.75.75 0 1 1 0 1.5h-5.25V18a.75.75 0 1 1-1.5 0v-5.25H6a.75.75 0 1 1 0-1.5h5.25V6a.75.75 0 0 1 .75-.75Z",clipRule:"evenodd"})),Oi=T.div`
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000cc;

  z-index: 10000;
`,St=T.div`
  margin-bottom: 24px;
`,zi=T.form`
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
`,Ui=T.h2`
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
`,Ni=T.svg`
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
`,nr=T.div`
  margin-bottom: 24px;
`,ir=T.div`
  width: 256px;
  height: 52px;

  display: flex;

  text-align: center;
  align-items: center;

  gap: 12px;

  padding: 8px 24px 8px 24px;

  background: #ecf2ff;

  border-radius: 10px;
`,sr=T.p`
  color: #2f2f2f;

  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
`,Hi=T.p`
  color: #2f2f2f;

  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  font-weight: bold;
  line-height: 20px;

  margin-bottom: 16px;
`,Zi=T.div`
  display: flex;
  text-align: center;
  align-items: center;
`,Ki=T.p`
  color: #2f2f2f;

  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  margin-bottom: 12px;
`,Gi=T(er)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  fill: #407bff;
`,Xi=T(Ii)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  fill: #407bff;
`,_t=T.button`
  width: 44px;
  height: 44px;
  padding: 10px;

  background-color: #ffffff;
  position: relative;

  border-radius: 30px;
  border: 1px solid #9ebbff;

  box-shadow: 0px 2px 4px 0px #407bff33;
`,qi=T.input`
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
`,Yi=T.p`
  color: #2f2f2f;

  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  margin-bottom: 12px;
`,te=T.input`
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
`,Ji=T.p`
  color: #2f2f2f;

  font-family: Roboto;
  fonst-size: 18px;
  font-weight: 500;
  font-weight: bold;
  line-height: 20px;

  margin-bottom: 16px;
`,Qi=T.div`
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
`,$i=T.p`
  font-family: Roboto;

  color: #407bff;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;

  margin-bottom: 0px;
`,_i=T.button`
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
`,or=T.div`
  color: red;
  margin-bottom: 12px;
`,ts=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24",...t},m.createElement("path",{stroke:"#407BFF",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M6 18 18 6M6 6l12 12"})),es=({onClose:t})=>{const e=at(),n=st(de),i=()=>{const h=new Date,p=h.getHours(),g=(h.getMinutes()<10?"0":"")+h.getMinutes();return`${p}:${g}`},s=h=>{const p=new Date,[g,x]=h.split(":").map(Number);return p.setHours(g+2,x),p.toISOString()},r=Di({initialValues:{amountWater:0,time:i(),firstWater:!1},validationSchema:Ei({amountWater:Ri().min(1,"You should drink at least some water").max(3e3,"It is unlikely you drank so much water").required("Amount of water is required"),time:Li().required("Recording time is required")}),onSubmit:async({amountWater:h,time:p})=>{try{const g=h,x=s(p);await e(Do({waterVolume:g,date:x}))?t():console.error("Dispatch was not successful")}catch(g){console.error("Error submitting form:",g)}}});m.useEffect(()=>{const h=p=>{p.key==="Escape"&&t()};return window.addEventListener("keydown",h),()=>{window.removeEventListener("keydown",h)}},[t]);const o=h=>{h.currentTarget===h.target&&t()},a=()=>{t()},{amountWater:l,time:c}=r.values,u=()=>{r.setFieldValue("amountWater",Math.max(0,l-50))},d=()=>{r.setFieldValue("amountWater",l+50)};return f.jsx(Oi,{onClick:o,children:f.jsxs(zi,{onSubmit:r.handleSubmit,children:[f.jsx(Ui,{children:"Add water"}),f.jsx(Ni,{onClick:a,children:f.jsx(ts,{})}),!n.length&&f.jsx("p",{children:"No notes yet"}),f.jsx(Hi,{children:"Choose a value:"}),f.jsxs(St,{children:[f.jsx(Ki,{children:"Amount of water:"}),f.jsxs(Zi,{children:[f.jsx(_t,{name:"minus",type:"button",onClick:u,children:f.jsx(Gi,{})}),f.jsx(qi,{type:"number",name:"amountWater",value:l,readOnly:!0}),f.jsx(_t,{name:"plus",type:"button",onClick:d,children:f.jsx(Xi,{})})]})]}),f.jsxs(St,{children:[f.jsx(Yi,{children:"Recording time:"}),f.jsx(te,{type:"time",name:"time",value:c,step:"300",onChange:r.handleChange})]}),f.jsxs(St,{children:[f.jsx(Ji,{children:"Enter the value of the water used:"}),f.jsx(te,{type:"number",name:"amountWater",value:l,min:0,onChange:r.handleChange})]}),r.touched.amountWater&&r.errors.amountWater?f.jsx(or,{children:r.errors.amountWater}):null,f.jsxs(Qi,{children:[f.jsxs($i,{children:[l,"ml"]}),f.jsx(_i,{type:"submit",children:"Save"})]})]})})},rr=()=>{const t=st(de),e=st(Eo),[n,i]=m.useState(!1),[s,r]=m.useState(0),[o,a]=m.useState(0),[l,c]=m.useState(0),u=at(),d=m.useMemo(()=>{if(t.length){const p=Math.ceil(t.reduce((g,x)=>g+=x.waterVolume,0)/e*10)*10;return p>100?100:p}return 0},[t,e]);m.useEffect(()=>{u(Bi())},[u]),m.useEffect(()=>{r(d),a(d),c(d)},[d]);const h=()=>{i(!n)};return f.jsxs(Go,{children:[f.jsxs(Xo,{children:[f.jsx(qo,{children:"Today"}),f.jsxs(Yo,{children:[f.jsx(Jo,{style:{width:`${s}%`}}),f.jsx(Qo,{style:{left:`${o}%`}})]}),f.jsxs($o,{children:[f.jsx("p",{children:"0%"}),f.jsx("p",{children:"100%"}),d>0||d<100?f.jsxs(_o,{style:{left:`${l}%`},children:[d,"%"]}):null]})]}),f.jsxs(tr,{onClick:h,children:[f.jsx(Ko,{}),f.jsx("span",{children:"Add Water"})]}),n&&f.jsx(es,{onClose:h})]})},ns=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:23,height:30,fill:"none",viewBox:"0 0 23 30",...t},m.createElement("path",{fill:"#407BFF",d:"M.26.13 2.4 29.79v.08h18.412L22.951.224V.13H.26ZM20.056 29.04H3.162L1.558 6.824h.881l1.45 19.578c.01.103.055.199.13.27.075.07.173.11.275.11h.034a.4.4 0 0 0 .277-.14.41.41 0 0 0 .098-.298l-1.45-19.52H21.66l-1.605 22.215Zm1.661-23.046H3.19l-.318-4.328a.423.423 0 0 0-.137-.274.412.412 0 0 0-.284-.106.413.413 0 0 0-.277.145.425.425 0 0 0-.099.299l.319 4.27H1.5L1.137.956H22.08l-.364 5.037Z"}),m.createElement("path",{fill:"#407BFF",d:"M6.78 10.932c.265 0 .524-.08.745-.23.221-.149.393-.362.495-.61a1.38 1.38 0 0 0-.291-1.485 1.325 1.325 0 0 0-1.463-.295 1.347 1.347 0 0 0-.603.502 1.376 1.376 0 0 0 .167 1.72c.252.255.593.398.95.398Zm0-1.898a.524.524 0 0 1 .488.331.544.544 0 0 1-.115.585.526.526 0 0 1-.903-.38.54.54 0 0 1 .155-.38c.1-.1.234-.156.374-.156ZM6.774 15.358c.003.269.085.53.234.752.15.222.361.394.607.494a1.325 1.325 0 0 0 1.458-.309 1.38 1.38 0 0 0 .28-1.484 1.358 1.358 0 0 0-.497-.607 1.329 1.329 0 0 0-1.697.182 1.364 1.364 0 0 0-.385.972Zm1.865 0a.542.542 0 0 1-.326.496.522.522 0 0 1-.577-.117.54.54 0 0 1 .374-.916c.14 0 .275.057.374.157.1.101.155.238.155.38ZM16.313 15.392c.265 0 .525-.08.745-.23.221-.149.393-.361.495-.61a1.38 1.38 0 0 0-.291-1.484 1.325 1.325 0 0 0-1.463-.295 1.348 1.348 0 0 0-.603.501 1.376 1.376 0 0 0 .167 1.72c.252.255.594.398.95.398Zm0-1.892a.524.524 0 0 1 .489.332.544.544 0 0 1-.117.586.527.527 0 0 1-.901-.387.54.54 0 0 1 .157-.376.525.525 0 0 1 .372-.155ZM11.637 12.825c.265 0 .525-.08.746-.23.22-.15.392-.362.494-.61a1.38 1.38 0 0 0-.29-1.485 1.324 1.324 0 0 0-1.463-.295 1.346 1.346 0 0 0-.603.501 1.376 1.376 0 0 0 .167 1.72c.251.255.593.399.949.399Zm0-1.899a.523.523 0 0 1 .489.332.544.544 0 0 1-.115.584.528.528 0 0 1-.577.117.53.53 0 0 1-.326-.496.546.546 0 0 1 .144-.398.528.528 0 0 1 .385-.167v.028ZM9.077 20.545c.006.221.076.436.2.617.126.181.301.321.504.402a1.095 1.095 0 0 0 1.2-.262 1.13 1.13 0 0 0 .227-1.223 1.122 1.122 0 0 0-.409-.5 1.098 1.098 0 0 0-.613-.188 1.13 1.13 0 0 0-.786.348 1.163 1.163 0 0 0-.323.806Zm1.11-.3a.293.293 0 0 1 .273.185.304.304 0 0 1-.065.327.295.295 0 0 1-.504-.212c0-.08.03-.156.086-.212a.294.294 0 0 1 .21-.088ZM14.441 19.293c.228.008.453-.053.646-.177.193-.123.345-.302.436-.514a1.17 1.17 0 0 0-.234-1.274 1.133 1.133 0 0 0-1.254-.25c-.21.09-.387.243-.51.437a1.166 1.166 0 0 0 .147 1.436c.204.21.48.332.77.342Zm0-1.425c.079 0 .154.032.21.088a.303.303 0 0 1 0 .424.294.294 0 0 1-.42 0 .308.308 0 0 1-.091-.212.305.305 0 0 1 .089-.214.293.293 0 0 1 .212-.086ZM16.785 9.98c.225 0 .445-.068.632-.194a1.15 1.15 0 0 0 .419-.518 1.17 1.17 0 0 0-.247-1.258 1.133 1.133 0 0 0-1.24-.25 1.142 1.142 0 0 0-.51.425 1.166 1.166 0 0 0 .141 1.457c.213.216.503.338.805.338Zm0-1.425a.292.292 0 0 1 .346.155.304.304 0 0 1-.087.373.294.294 0 0 1-.26.049.292.292 0 0 1-.345-.155.304.304 0 0 1 .086-.373.294.294 0 0 1 .26-.05ZM5.664 27.59a.41.41 0 0 0-.217.247.421.421 0 0 0 .03.33.42.42 0 0 0 .364.225.383.383 0 0 0 .182-.04 12.27 12.27 0 0 1 5.614-1.385c2.066.03 4.104.496 5.984 1.368a.404.404 0 0 0 .465-.061.417.417 0 0 0 .104-.464.425.425 0 0 0-.216-.231 15.517 15.517 0 0 0-6.337-1.443c-2.076.002-4.122.5-5.973 1.454Z"})),ar=t=>m.createElement("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},m.createElement("path",{d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 0 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10",strokeLinecap:"round",strokeLinejoin:"round"})),lr=t=>m.createElement("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},m.createElement("path",{d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.166L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397M4.772 5.79a43.48 43.48 0 0 0-1.022.165m1.022-.165a48.111 48.111 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.967 51.967 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.668 48.668 0 0 0-7.5 0",strokeLinecap:"round",strokeLinejoin:"round"})),cr=({waterCardsSave:t,onClose:e,recordId:n})=>{const i=at(),s=st(de),r=x=>{const[y,w]=x.split(":"),v=parseInt(y,10),A=v>=12?"PM":"AM";return`${v%12||12}:${w} ${A}`},o=x=>{const y=new Date,[w,v]=x.split(":").map(Number);return y.setHours(w+2,v),y.toISOString()},a=x=>{const y=new Date(x),w=y.getUTCHours().toString().padStart(2,"0"),v=y.getUTCMinutes().toString().padStart(2,"0");return`${w}:${v}`},l=Di({initialValues:{amountWater:t.waterVolume,time:a(t.date)},validationSchema:Ei({amountWater:Ri().min(50,"You should drink at least some water").max(5e3,"It is unlikely you drank so much water").required("Amount of water is required"),time:Li().required("Recording time is required")}),onSubmit:async({amountWater:x,time:y})=>{const w=x,v=o(y);await i(Ro({recordId:n,newRecord:{waterVolume:w,date:v}}))?e():console.error("Dispatch was not successful")}});m.useEffect(()=>{const x=y=>{y.key==="Escape"&&e()};return window.addEventListener("keydown",x),()=>{window.removeEventListener("keydown",x)}},[e]);const c=x=>{x.currentTarget===x.target&&e()},u=()=>{e()},{amountWater:d,time:h}=l.values,p=()=>{l.setFieldValue("amountWater",Math.max(0,d-50))},g=()=>{l.setFieldValue("amountWater",d+50)};return f.jsx(Oi,{onClick:c,children:f.jsxs(zi,{onSubmit:l.handleSubmit,children:[f.jsx(Ui,{children:"Edit the entered amount of water"}),f.jsx(Ni,{onClick:u,children:f.jsx(ts,{})}),!s.length&&f.jsx("p",{children:"No notes yet"}),f.jsx(nr,{children:f.jsxs(ir,{children:[f.jsx(ns,{}),f.jsx("p",{children:`${d} ml`}),f.jsx(sr,{children:r(h)})]})}),f.jsx(Hi,{children:"Correct entered data:"}),f.jsxs(St,{children:[f.jsx(Ki,{children:"Amount of water:"}),f.jsxs(Zi,{children:[f.jsx(_t,{name:"minus",type:"button",onClick:p,children:f.jsx(Gi,{})}),f.jsx(qi,{type:"number",name:"amountWater",value:d,onChange:l.handleChange,readOnly:!0}),f.jsx(_t,{name:"plus",type:"button",onClick:g,children:f.jsx(Xi,{})})]})]}),f.jsxs(St,{children:[f.jsx(Yi,{children:"Recording time:"}),f.jsx(te,{type:"time",name:"time",value:h,step:"300",onChange:l.handleChange})]}),f.jsxs(St,{children:[f.jsx(Ji,{children:"Enter the value of the water used:"}),f.jsx(te,{type:"number",name:"amountWater",value:d,min:0,onChange:l.handleChange})]}),f.jsxs(Qi,{children:[f.jsxs($i,{children:[d,"ml"]}),f.jsx(_i,{type:"submit",children:"Save"})]})]})})},ur=T.div`
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
`,dr=T.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  background-color: ${V.primaryColorWhite};

  max-width: 280px;
  width: 100%;
  height: 260px;

  padding: 32px 24px;

  border-radius: 10px;

  @media (min-width: 768px) {
    max-width: 592px;

    height: 208px;
  }
`,hr=T.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
`,fr=T.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0%;
  text-align: left;
  color: ${V.primeryColorBlack};
`,pr=T.button`
  display: flex;
  background-color: inherit;
  border: none;

  padding: 0;

  align-items: center;
`,mr=T.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
`,gr=T.div`
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
`,xr=T.button`
  background-color: ${V.secondaryColor3};
  border: none;
  border-radius: 10px;

  width: 232px;
  padding: 8px 30px;

  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  color: ${V.primaryColorWhite};

  @media (min-width: 768px) {
    width: 160px;

    font-size: 18px;
    line-height: 24px;
  }
`,Ar=T.button`
  background-color: ${V.secondaryColor6};
  border: none;
  border-radius: 10px;

  width: 232px;
  padding: 8px 30px;

  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  color: ${V.primaryColorBlue};

  @media (min-width: 768px) {
    width: 160px;

    font-size: 18px;
    line-height: 24px;
  }
`,yr=({onClose:t,recordId:e})=>{const n=at();m.useEffect(()=>{const o=a=>{a.key==="Escape"&&t()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[t]);const i=o=>{o.currentTarget===o.target&&t()},s=()=>{t()},r=async()=>{await n(Lo(e))?t():console.error("Dispatch was not successful")};return f.jsx(ur,{onClick:i,children:f.jsxs(dr,{children:[f.jsxs(hr,{children:[f.jsx(fr,{children:"Delete entry"}),f.jsx(pr,{type:"button",children:f.jsx(Fi,{onClick:s})})]}),f.jsx(mr,{children:"Are you sure you want to delete the entry?"}),f.jsxs(gr,{children:[f.jsx(xr,{onClick:r,children:"Delete"}),f.jsx(Ar,{onClick:s,children:"Cancel"})]})]})})},vr=T.p`
    margin-bottom: 16px;
    font-size: 24px;
    line-height: 1.25;
    font-weight: 500;
    color: ${V.primaryColorBlack};

    @media (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;   
  }
`,br=T.ul`
 margin-bottom: 12px;
 display: flex;
 flex-direction: column;
`,wr=T.li`
 display: flex;
 align-items: center;
 padding: 12px 0;
 margin-bottom: 12px;
 border-bottom: 1px solid ${V.secondaryColor6};
 
`,Tr=T.p`
    margin-left: 12px;
    font-size: 18px;
    line-height: 1.33;
`,Pr=T.p`
    margin-left: 12px;
    margin-right: 38px;
    font-size: 12px;
    line-height: 2;
    color: ${V.primaryColorBlack};

    @media (min-width: 768px) {
    margin-right: auto;
    margin-left: 16px;
  }
`,Sr=T.button`
    padding: 0;
    border: none;
    background-color: transparent;
    stroke: ${V.secondaryColor4};
    margin-right: 18px;
    
    :hover {
    border-bottom: 1px solid ${V.secondaryColor4};
    }
`,Cr=T.button`
    padding: 0;
    margin-right: 4px;
    border: none;
    background-color: transparent;
    stroke: ${V.secondaryColor3};

    :hover {
    border-bottom: 1px solid ${V.secondaryColor3};
    }
`,Vr=T.button`
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 0;
    border: none;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    color: ${V.primaryColorBlue};
    background-color: transparent;
    transition: color ease-in-out 250ms;

    :hover {
    color: ${V.secondaryColor5};
    fill: ${V.secondaryColor5};
    }
`,wn=T.p`
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 30px;
    width: 250px;
    text-align: center;
    font-size: 16px;
    line-height: 1.33;
    color: ${V.secondaryColor4}; 
`,kr=()=>{const t=st(de),e=st(Zo),[n,i]=m.useState(!1),[s,r]=m.useState(!1),[o,a]=m.useState(!1),[l,c]=m.useState(null),[u,d]=m.useState({}),h=at();m.useEffect(()=>{l!==null&&h(Bi())},[h,u,l]);const p=()=>{i(!n)},g=y=>{r(!s);const w=t.find(v=>v._id===y);c(y),d(w)},x=y=>{a(!o),c(y)};return f.jsxs(f.Fragment,{children:[f.jsx(vr,{children:"Today"}),e&&f.jsx(wn,{children:"Please wait. Loading..."}),t.length>0?f.jsx(br,{children:t.map(({_id:y,date:w,waterVolume:v})=>f.jsxs(wr,{children:[f.jsx(ns,{}),f.jsxs(Tr,{children:[v," ml"]}),f.jsx(Pr,{children:new Intl.DateTimeFormat("en",{hour:"numeric",minute:"numeric",hour12:!0,timeZone:"UTC"}).format(new Date(w))}),f.jsx(Sr,{onClick:()=>g(y),children:f.jsx(ar,{})}),f.jsx(Cr,{onClick:()=>x(y),children:f.jsx(lr,{})})]},y))}):f.jsx(wn,{children:"No notes yet"}),f.jsxs(Vr,{onClick:p,children:[f.jsx(Ii,{}),f.jsx("span",{children:"Add water"})]}),n&&f.jsx(es,{onClose:p}),s&&f.jsx(cr,{waterCardsSave:u,onClose:g,recordId:l}),o&&f.jsx(yr,{onClose:x,recordId:l})]})},jr=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 32 32",...t},m.createElement("title",null,"solidl"),m.createElement("path",{fill:"#407bff",d:"M10.294 16.707c-0.187-0.188-0.292-0.442-0.292-0.707s0.105-0.519 0.292-0.707l10-10c0.092-0.098 0.202-0.177 0.325-0.232s0.255-0.084 0.389-0.086c0.134-0.002 0.268 0.022 0.392 0.073s0.238 0.125 0.333 0.22c0.095 0.095 0.17 0.208 0.22 0.333s0.075 0.258 0.073 0.392c-0.002 0.134-0.032 0.267-0.086 0.389s-0.133 0.233-0.232 0.325l-9.293 9.293 9.293 9.293c0.098 0.092 0.177 0.202 0.232 0.325s0.084 0.255 0.086 0.39c0.002 0.134-0.022 0.268-0.073 0.392s-0.125 0.238-0.22 0.333c-0.095 0.095-0.208 0.17-0.333 0.22s-0.258 0.075-0.392 0.072c-0.134-0.002-0.267-0.032-0.389-0.086s-0.233-0.134-0.325-0.232l-10-10z"})),Mr=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 32 32",...t},m.createElement("title",null,"solid"),m.createElement("path",{fill:"#407bff",d:"M21.706 16.707c0.187-0.188 0.292-0.442 0.292-0.707s-0.105-0.519-0.292-0.707l-10-10c-0.092-0.098-0.202-0.177-0.325-0.232s-0.255-0.084-0.389-0.086c-0.134-0.002-0.268 0.022-0.392 0.073s-0.238 0.125-0.333 0.22c-0.095 0.095-0.17 0.208-0.22 0.333s-0.075 0.258-0.073 0.392c0.002 0.134 0.032 0.267 0.086 0.389s0.133 0.233 0.232 0.325l9.293 9.293-9.293 9.293c-0.098 0.092-0.177 0.202-0.232 0.325s-0.084 0.255-0.086 0.39c-0.002 0.134 0.022 0.268 0.073 0.392s0.125 0.238 0.22 0.333c0.095 0.095 0.208 0.17 0.333 0.22s0.258 0.075 0.392 0.072c0.134-0.002 0.267-0.032 0.389-0.086s0.233-0.134 0.325-0.232l10-10z"})),Dr=T.div`
  display: flex;
  flex-direction: column;
  height: 506px;

  @media screen and (min-width: 768px) {
    height: 340px;
  }
  @media screen and (min-width: 1440px) {
    height: 284px;
  }
`,Er=T.div`
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
`,Tn=T.button`
 
  cursor: pointer;
  margin: 0 10px;
  background-color: rgba(0, 0, 255, 0);
  border: none;
`,Rr=T.div`
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
`,Lr=T.div`
  color: var(--primery-color-blue, #407bff);
  display: flex;
  align-items: center;
  justify-content: center;
`,Br=T.span`
  font-size: 16px;
  line-height: 20px;
`,Fr=T.span`
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
`,Wr=T.div`
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
`,Ir=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,Or={initial:{scaleY:0,opacity:0},animate:{scaleY:1,opacity:1,transition:{duration:.3}},exit:{scaleY:0,opacity:0,transition:{duration:.3}}},is=m.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),he=m.createContext({}),fe=m.createContext(null),pe=typeof document<"u",Xe=pe?m.useLayoutEffect:m.useEffect,ss=m.createContext({strict:!1}),qe=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),zr="framerAppearId",os="data-"+qe(zr),rs={skipAnimations:!1,useManualTiming:!1};class Pn{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function Ur(t){let e=new Pn,n=new Pn,i=0,s=!1,r=!1;const o=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const d=u&&s,h=d?e:n;return c&&o.add(l),h.add(l)&&d&&s&&(i=e.order.length),l},cancel:l=>{n.remove(l),o.delete(l)},process:l=>{if(s){r=!0;return}if(s=!0,[e,n]=[n,e],n.clear(),i=e.order.length,i)for(let c=0;c<i;c++){const u=e.order[c];o.has(u)&&(a.schedule(u),t()),u(l)}s=!1,r&&(r=!1,a.process(l))}};return a}const Gt=["prepare","read","update","preRender","render","postRender"],Nr=40;function as(t,e){let n=!1,i=!0;const s={delta:0,timestamp:0,isProcessing:!1},r=Gt.reduce((d,h)=>(d[h]=Ur(()=>n=!0),d),{}),o=d=>{r[d].process(s)},a=()=>{const d=performance.now();n=!1,s.delta=i?1e3/60:Math.max(Math.min(d-s.timestamp,Nr),1),s.timestamp=d,s.isProcessing=!0,Gt.forEach(o),s.isProcessing=!1,n&&e&&(i=!1,t(a))},l=()=>{n=!0,i=!0,s.isProcessing||t(a)};return{schedule:Gt.reduce((d,h)=>{const p=r[h];return d[h]=(g,x=!1,y=!1)=>(n||l(),p.schedule(g,x,y)),d},{}),cancel:d=>Gt.forEach(h=>r[h].cancel(d)),state:s,steps:r}}const{schedule:Ye,cancel:jd}=as(queueMicrotask,!1);function Hr(t,e,n,i){const{visualElement:s}=m.useContext(he),r=m.useContext(ss),o=m.useContext(fe),a=m.useContext(is).reducedMotion,l=m.useRef();i=i||r.renderer,!l.current&&i&&(l.current=i(t,{visualState:e,parent:s,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const c=l.current;m.useInsertionEffect(()=>{c&&c.update(n,o)});const u=m.useRef(!!(n[os]&&!window.HandoffComplete));return Xe(()=>{c&&(Ye.postRender(c.render),u.current&&c.animationState&&c.animationState.animateChanges())}),m.useEffect(()=>{c&&(c.updateFeatures(),!u.current&&c.animationState&&c.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))}),c}function bt(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Zr(t,e,n){return m.useCallback(i=>{i&&t.mount&&t.mount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):bt(n)&&(n.current=i))},[e])}function It(t){return typeof t=="string"||Array.isArray(t)}function me(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Je=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Qe=["initial",...Je];function ge(t){return me(t.animate)||Qe.some(e=>It(t[e]))}function ls(t){return!!(ge(t)||t.variants)}function Kr(t,e){if(ge(t)){const{initial:n,animate:i}=t;return{initial:n===!1||It(n)?n:void 0,animate:It(i)?i:void 0}}return t.inherit!==!1?e:{}}function Gr(t){const{initial:e,animate:n}=Kr(t,m.useContext(he));return m.useMemo(()=>({initial:e,animate:n}),[Sn(e),Sn(n)])}function Sn(t){return Array.isArray(t)?t.join(" "):t}const Cn={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ot={};for(const t in Cn)Ot[t]={isEnabled:e=>Cn[t].some(n=>!!e[n])};function Xr(t){for(const e in t)Ot[e]={...Ot[e],...t[e]}}const $e=m.createContext({}),cs=m.createContext({}),qr=Symbol.for("motionComponentSymbol");function Yr({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:s}){t&&Xr(t);function r(a,l){let c;const u={...m.useContext(is),...a,layoutId:Jr(a)},{isStatic:d}=u,h=Gr(a),p=i(a,d);if(!d&&pe){h.visualElement=Hr(s,p,u,e);const g=m.useContext(cs),x=m.useContext(ss).strict;h.visualElement&&(c=h.visualElement.loadFeatures(u,x,t,g))}return m.createElement(he.Provider,{value:h},c&&h.visualElement?m.createElement(c,{visualElement:h.visualElement,...u}):null,n(s,a,Zr(p,h.visualElement,l),p,d,h.visualElement))}const o=m.forwardRef(r);return o[qr]=s,o}function Jr({layoutId:t}){const e=m.useContext($e).id;return e&&t!==void 0?e+"-"+t:t}function Qr(t){function e(i,s={}){return Yr(t(i,s))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(i,s)=>(n.has(s)||n.set(s,e(s)),n.get(s))})}const $r=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function _e(t){return typeof t!="string"||t.includes("-")?!1:!!($r.indexOf(t)>-1||/[A-Z]/.test(t))}const ee={};function _r(t){Object.assign(ee,t)}const Ut=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],gt=new Set(Ut);function us(t,{layout:e,layoutId:n}){return gt.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!ee[t]||t==="opacity")}const U=t=>!!(t&&t.getVelocity),ta={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ea=Ut.length;function na(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},i,s){let r="";for(let o=0;o<ea;o++){const a=Ut[o];if(t[a]!==void 0){const l=ta[a]||a;r+=`${l}(${t[a]}) `}}return e&&!t.z&&(r+="translateZ(0)"),r=r.trim(),s?r=s(t,i?"":r):n&&i&&(r="none"),r}const ds=t=>e=>typeof e=="string"&&e.startsWith(t),hs=ds("--"),Le=ds("var(--"),ia=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,sa=(t,e)=>e&&typeof t=="number"?e.transform(t):t,ot=(t,e,n)=>Math.min(Math.max(n,t),e),xt={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Lt={...xt,transform:t=>ot(0,1,t)},Xt={...xt,default:1},Bt=t=>Math.round(t*1e5)/1e5,xe=/(-)?([\d]*\.?[\d])+/g,fs=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,oa=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Nt(t){return typeof t=="string"}const Ht=t=>({test:e=>Nt(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),tt=Ht("deg"),X=Ht("%"),P=Ht("px"),ra=Ht("vh"),aa=Ht("vw"),Vn={...X,parse:t=>X.parse(t)/100,transform:t=>X.transform(t*100)},kn={...xt,transform:Math.round},ps={borderWidth:P,borderTopWidth:P,borderRightWidth:P,borderBottomWidth:P,borderLeftWidth:P,borderRadius:P,radius:P,borderTopLeftRadius:P,borderTopRightRadius:P,borderBottomRightRadius:P,borderBottomLeftRadius:P,width:P,maxWidth:P,height:P,maxHeight:P,size:P,top:P,right:P,bottom:P,left:P,padding:P,paddingTop:P,paddingRight:P,paddingBottom:P,paddingLeft:P,margin:P,marginTop:P,marginRight:P,marginBottom:P,marginLeft:P,rotate:tt,rotateX:tt,rotateY:tt,rotateZ:tt,scale:Xt,scaleX:Xt,scaleY:Xt,scaleZ:Xt,skew:tt,skewX:tt,skewY:tt,distance:P,translateX:P,translateY:P,translateZ:P,x:P,y:P,z:P,perspective:P,transformPerspective:P,opacity:Lt,originX:Vn,originY:Vn,originZ:P,zIndex:kn,fillOpacity:Lt,strokeOpacity:Lt,numOctaves:kn};function tn(t,e,n,i){const{style:s,vars:r,transform:o,transformOrigin:a}=t;let l=!1,c=!1,u=!0;for(const d in e){const h=e[d];if(hs(d)){r[d]=h;continue}const p=ps[d],g=sa(h,p);if(gt.has(d)){if(l=!0,o[d]=g,!u)continue;h!==(p.default||0)&&(u=!1)}else d.startsWith("origin")?(c=!0,a[d]=g):s[d]=g}if(e.transform||(l||i?s.transform=na(t.transform,n,u,i):s.transform&&(s.transform="none")),c){const{originX:d="50%",originY:h="50%",originZ:p=0}=a;s.transformOrigin=`${d} ${h} ${p}`}}const en=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function ms(t,e,n){for(const i in e)!U(e[i])&&!us(i,n)&&(t[i]=e[i])}function la({transformTemplate:t},e,n){return m.useMemo(()=>{const i=en();return tn(i,e,{enableHardwareAcceleration:!n},t),Object.assign({},i.vars,i.style)},[e])}function ca(t,e,n){const i=t.style||{},s={};return ms(s,i,t),Object.assign(s,la(t,e,n)),s}function ua(t,e,n){const i={},s=ca(t,e,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=s,i}const da=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ne(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||da.has(t)}let gs=t=>!ne(t);function ha(t){t&&(gs=e=>e.startsWith("on")?!ne(e):t(e))}try{ha(require("@emotion/is-prop-valid").default)}catch{}function fa(t,e,n){const i={};for(const s in t)s==="values"&&typeof t.values=="object"||(gs(s)||n===!0&&ne(s)||!e&&!ne(s)||t.draggable&&s.startsWith("onDrag"))&&(i[s]=t[s]);return i}function jn(t,e,n){return typeof t=="string"?t:P.transform(e+n*t)}function pa(t,e,n){const i=jn(e,t.x,t.width),s=jn(n,t.y,t.height);return`${i} ${s}`}const ma={offset:"stroke-dashoffset",array:"stroke-dasharray"},ga={offset:"strokeDashoffset",array:"strokeDasharray"};function xa(t,e,n=1,i=0,s=!0){t.pathLength=1;const r=s?ma:ga;t[r.offset]=P.transform(-i);const o=P.transform(e),a=P.transform(n);t[r.array]=`${o} ${a}`}function nn(t,{attrX:e,attrY:n,attrScale:i,originX:s,originY:r,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,d,h){if(tn(t,c,u,h),d){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:p,style:g,dimensions:x}=t;p.transform&&(x&&(g.transform=p.transform),delete p.transform),x&&(s!==void 0||r!==void 0||g.transform)&&(g.transformOrigin=pa(x,s!==void 0?s:.5,r!==void 0?r:.5)),e!==void 0&&(p.x=e),n!==void 0&&(p.y=n),i!==void 0&&(p.scale=i),o!==void 0&&xa(p,o,a,l,!1)}const xs=()=>({...en(),attrs:{}}),sn=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Aa(t,e,n,i){const s=m.useMemo(()=>{const r=xs();return nn(r,e,{enableHardwareAcceleration:!1},sn(i),t.transformTemplate),{...r.attrs,style:{...r.style}}},[e]);if(t.style){const r={};ms(r,t.style,t),s.style={...r,...s.style}}return s}function ya(t=!1){return(n,i,s,{latestValues:r},o)=>{const l=(_e(n)?Aa:ua)(i,r,o,n),u={...fa(i,typeof n=="string",t),...l,ref:s},{children:d}=i,h=m.useMemo(()=>U(d)?d.get():d,[d]);return m.createElement(n,{...u,children:h})}}function As(t,{style:e,vars:n},i,s){Object.assign(t.style,e,s&&s.getProjectionStyles(i));for(const r in n)t.style.setProperty(r,n[r])}const ys=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function vs(t,e,n,i){As(t,e,void 0,i);for(const s in e.attrs)t.setAttribute(ys.has(s)?s:qe(s),e.attrs[s])}function on(t,e){const{style:n}=t,i={};for(const s in n)(U(n[s])||e.style&&U(e.style[s])||us(s,t))&&(i[s]=n[s]);return i}function bs(t,e){const n=on(t,e);for(const i in t)if(U(t[i])||U(e[i])){const s=Ut.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;n[s]=t[i]}return n}function rn(t,e,n,i={},s={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,s)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,s)),e}function ws(t){const e=m.useRef(null);return e.current===null&&(e.current=t()),e.current}const ie=t=>Array.isArray(t),va=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),ba=t=>ie(t)?t[t.length-1]||0:t;function Jt(t){const e=U(t)?t.get():t;return va(e)?e.toValue():e}function wa({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},i,s,r){const o={latestValues:Ta(i,s,r,t),renderState:e()};return n&&(o.mount=a=>n(i,a,o)),o}const Ts=t=>(e,n)=>{const i=m.useContext(he),s=m.useContext(fe),r=()=>wa(t,e,i,s);return n?r():ws(r)};function Ta(t,e,n,i){const s={},r=i(t,{});for(const h in r)s[h]=Jt(r[h]);let{initial:o,animate:a}=t;const l=ge(t),c=ls(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const d=u?a:o;return d&&typeof d!="boolean"&&!me(d)&&(Array.isArray(d)?d:[d]).forEach(p=>{const g=rn(t,p);if(!g)return;const{transitionEnd:x,transition:y,...w}=g;for(const v in w){let A=w[v];if(Array.isArray(A)){const b=u?A.length-1:0;A=A[b]}A!==null&&(s[v]=A)}for(const v in x)s[v]=x[v]}),s}const L=t=>t,{schedule:D,cancel:$,state:W,steps:be}=as(typeof requestAnimationFrame<"u"?requestAnimationFrame:L,!0),Pa={useVisualState:Ts({scrapeMotionValuesFromProps:bs,createRenderState:xs,onMount:(t,e,{renderState:n,latestValues:i})=>{D.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),D.render(()=>{nn(n,i,{enableHardwareAcceleration:!1},sn(e.tagName),t.transformTemplate),vs(e,n)})}})},Sa={useVisualState:Ts({scrapeMotionValuesFromProps:on,createRenderState:en})};function Ca(t,{forwardMotionProps:e=!1},n,i){return{..._e(t)?Pa:Sa,preloadedFeatures:n,useRender:ya(e),createVisualElement:i,Component:t}}function Y(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const Ps=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Ae(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const Va=t=>e=>Ps(e)&&t(e,Ae(e));function J(t,e,n,i){return Y(t,e,Va(n),i)}const ka=(t,e)=>n=>e(t(n)),nt=(...t)=>t.reduce(ka);function Ss(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const Mn=Ss("dragHorizontal"),Dn=Ss("dragVertical");function Cs(t){let e=!1;if(t==="y")e=Dn();else if(t==="x")e=Mn();else{const n=Mn(),i=Dn();n&&i?e=()=>{n(),i()}:(n&&n(),i&&i())}return e}function Vs(){const t=Cs(!0);return t?(t(),!1):!0}class lt{constructor(e){this.isMounted=!1,this.node=e}update(){}}function En(t,e){const n="pointer"+(e?"enter":"leave"),i="onHover"+(e?"Start":"End"),s=(r,o)=>{if(r.pointerType==="touch"||Vs())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e),a[i]&&D.update(()=>a[i](r,o))};return J(t.current,n,s,{passive:!t.getProps()[i]})}class ja extends lt{mount(){this.unmount=nt(En(this.node,!0),En(this.node,!1))}unmount(){}}class Ma extends lt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=nt(Y(this.node.current,"focus",()=>this.onFocus()),Y(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const ks=(t,e)=>e?t===e?!0:ks(t,e.parentElement):!1;function we(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,Ae(n))}class Da extends lt{constructor(){super(...arguments),this.removeStartListeners=L,this.removeEndListeners=L,this.removeAccessibleListeners=L,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),r=J(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:u,globalTapTarget:d}=this.node.getProps();D.update(()=>{!d&&!ks(this.node.current,a.target)?u&&u(a,l):c&&c(a,l)})},{passive:!(i.onTap||i.onPointerUp)}),o=J(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=nt(r,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=r=>{if(r.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||we("up",(l,c)=>{const{onTap:u}=this.node.getProps();u&&D.update(()=>u(l,c))})};this.removeEndListeners(),this.removeEndListeners=Y(this.node.current,"keyup",o),we("down",(a,l)=>{this.startPress(a,l)})},n=Y(this.node.current,"keydown",e),i=()=>{this.isPressing&&we("cancel",(r,o)=>this.cancelPress(r,o))},s=Y(this.node.current,"blur",i);this.removeAccessibleListeners=nt(n,s)}}startPress(e,n){this.isPressing=!0;const{onTapStart:i,whileTap:s}=this.node.getProps();s&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&D.update(()=>i(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Vs()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&D.update(()=>i(e,n))}mount(){const e=this.node.getProps(),n=J(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=Y(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=nt(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Be=new WeakMap,Te=new WeakMap,Ea=t=>{const e=Be.get(t.target);e&&e(t)},Ra=t=>{t.forEach(Ea)};function La({root:t,...e}){const n=t||document;Te.has(n)||Te.set(n,{});const i=Te.get(n),s=JSON.stringify(e);return i[s]||(i[s]=new IntersectionObserver(Ra,{root:t,...e})),i[s]}function Ba(t,e,n){const i=La(e);return Be.set(t,n),i.observe(t),()=>{Be.delete(t),i.unobserve(t)}}const Fa={some:0,all:1};class Wa extends lt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:s="some",once:r}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:Fa[s]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,r&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),h=c?u:d;h&&h(l)};return Ba(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(Ia(e,n))&&this.startObserver()}unmount(){}}function Ia({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const Oa={inView:{Feature:Wa},tap:{Feature:Da},focus:{Feature:Ma},hover:{Feature:ja}};function js(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function za(t){const e={};return t.values.forEach((n,i)=>e[i]=n.get()),e}function Ua(t){const e={};return t.values.forEach((n,i)=>e[i]=n.getVelocity()),e}function ye(t,e,n){const i=t.getProps();return rn(i,e,n!==void 0?n:i.custom,za(t),Ua(t))}let Na=L,an=L;const it=t=>t*1e3,Q=t=>t/1e3,Ha={current:!1},Ms=t=>Array.isArray(t)&&typeof t[0]=="number";function Ds(t){return!!(!t||typeof t=="string"&&Es[t]||Ms(t)||Array.isArray(t)&&t.every(Ds))}const Rt=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Es={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Rt([0,.65,.55,1]),circOut:Rt([.55,0,1,.45]),backIn:Rt([.31,.01,.66,-.59]),backOut:Rt([.33,1.53,.69,.99])};function Rs(t){if(t)return Ms(t)?Rt(t):Array.isArray(t)?t.map(Rs):Es[t]}function Za(t,e,n,{delay:i=0,duration:s,repeat:r=0,repeatType:o="loop",ease:a,times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=Rs(a);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:s,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:r+1,direction:o==="reverse"?"alternate":"normal"})}function Ka(t,{repeat:e,repeatType:n="loop"}){const i=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[i]}const Ls=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Ga=1e-7,Xa=12;function qa(t,e,n,i,s){let r,o,a=0;do o=e+(n-e)/2,r=Ls(o,i,s)-t,r>0?n=o:e=o;while(Math.abs(r)>Ga&&++a<Xa);return o}function Zt(t,e,n,i){if(t===e&&n===i)return L;const s=r=>qa(r,0,1,t,n);return r=>r===0||r===1?r:Ls(s(r),e,i)}const Ya=Zt(.42,0,1,1),Ja=Zt(0,0,.58,1),Bs=Zt(.42,0,.58,1),Qa=t=>Array.isArray(t)&&typeof t[0]!="number",Fs=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Ws=t=>e=>1-t(1-e),ln=t=>1-Math.sin(Math.acos(t)),Is=Ws(ln),$a=Fs(ln),Os=Zt(.33,1.53,.69,.99),cn=Ws(Os),_a=Fs(cn),tl=t=>(t*=2)<1?.5*cn(t):.5*(2-Math.pow(2,-10*(t-1))),el={linear:L,easeIn:Ya,easeInOut:Bs,easeOut:Ja,circIn:ln,circInOut:$a,circOut:Is,backIn:cn,backInOut:_a,backOut:Os,anticipate:tl},Rn=t=>{if(Array.isArray(t)){an(t.length===4);const[e,n,i,s]=t;return Zt(e,n,i,s)}else if(typeof t=="string")return el[t];return t},un=(t,e)=>n=>!!(Nt(n)&&oa.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),zs=(t,e,n)=>i=>{if(!Nt(i))return i;const[s,r,o,a]=i.match(xe);return{[t]:parseFloat(s),[e]:parseFloat(r),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},nl=t=>ot(0,255,t),Pe={...xt,transform:t=>Math.round(nl(t))},pt={test:un("rgb","red"),parse:zs("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Pe.transform(t)+", "+Pe.transform(e)+", "+Pe.transform(n)+", "+Bt(Lt.transform(i))+")"};function il(t){let e="",n="",i="",s="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),s=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),s=t.substring(4,5),e+=e,n+=n,i+=i,s+=s),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const Fe={test:un("#"),parse:il,transform:pt.transform},wt={test:un("hsl","hue"),parse:zs("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+X.transform(Bt(e))+", "+X.transform(Bt(n))+", "+Bt(Lt.transform(i))+")"},z={test:t=>pt.test(t)||Fe.test(t)||wt.test(t),parse:t=>pt.test(t)?pt.parse(t):wt.test(t)?wt.parse(t):Fe.parse(t),transform:t=>Nt(t)?t:t.hasOwnProperty("red")?pt.transform(t):wt.transform(t)},R=(t,e,n)=>-n*t+n*e+t;function Se(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function sl({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let s=0,r=0,o=0;if(!e)s=r=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;s=Se(l,a,t+1/3),r=Se(l,a,t),o=Se(l,a,t-1/3)}return{red:Math.round(s*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:i}}const Ce=(t,e,n)=>{const i=t*t;return Math.sqrt(Math.max(0,n*(e*e-i)+i))},ol=[Fe,pt,wt],rl=t=>ol.find(e=>e.test(t));function Ln(t){const e=rl(t);let n=e.parse(t);return e===wt&&(n=sl(n)),n}const Us=(t,e)=>{const n=Ln(t),i=Ln(e),s={...n};return r=>(s.red=Ce(n.red,i.red,r),s.green=Ce(n.green,i.green,r),s.blue=Ce(n.blue,i.blue,r),s.alpha=R(n.alpha,i.alpha,r),pt.transform(s))};function al(t){var e,n;return isNaN(t)&&Nt(t)&&(((e=t.match(xe))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(fs))===null||n===void 0?void 0:n.length)||0)>0}const Ns={regex:ia,countKey:"Vars",token:"${v}",parse:L},Hs={regex:fs,countKey:"Colors",token:"${c}",parse:z.parse},Zs={regex:xe,countKey:"Numbers",token:"${n}",parse:xt.parse};function Ve(t,{regex:e,countKey:n,token:i,parse:s}){const r=t.tokenised.match(e);r&&(t["num"+n]=r.length,t.tokenised=t.tokenised.replace(e,i),t.values.push(...r.map(s)))}function se(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Ve(n,Ns),Ve(n,Hs),Ve(n,Zs),n}function Ks(t){return se(t).values}function Gs(t){const{values:e,numColors:n,numVars:i,tokenised:s}=se(t),r=e.length;return o=>{let a=s;for(let l=0;l<r;l++)l<i?a=a.replace(Ns.token,o[l]):l<i+n?a=a.replace(Hs.token,z.transform(o[l])):a=a.replace(Zs.token,Bt(o[l]));return a}}const ll=t=>typeof t=="number"?0:t;function cl(t){const e=Ks(t);return Gs(t)(e.map(ll))}const rt={test:al,parse:Ks,createTransformer:Gs,getAnimatableNone:cl},Xs=(t,e)=>n=>`${n>0?e:t}`;function qs(t,e){return typeof t=="number"?n=>R(t,e,n):z.test(t)?Us(t,e):t.startsWith("var(")?Xs(t,e):Js(t,e)}const Ys=(t,e)=>{const n=[...t],i=n.length,s=t.map((r,o)=>qs(r,e[o]));return r=>{for(let o=0;o<i;o++)n[o]=s[o](r);return n}},ul=(t,e)=>{const n={...t,...e},i={};for(const s in n)t[s]!==void 0&&e[s]!==void 0&&(i[s]=qs(t[s],e[s]));return s=>{for(const r in i)n[r]=i[r](s);return n}},Js=(t,e)=>{const n=rt.createTransformer(e),i=se(t),s=se(e);return i.numVars===s.numVars&&i.numColors===s.numColors&&i.numNumbers>=s.numNumbers?nt(Ys(i.values,s.values),n):Xs(t,e)},zt=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Bn=(t,e)=>n=>R(t,e,n);function dl(t){return typeof t=="number"?Bn:typeof t=="string"?z.test(t)?Us:Js:Array.isArray(t)?Ys:typeof t=="object"?ul:Bn}function hl(t,e,n){const i=[],s=n||dl(t[0]),r=t.length-1;for(let o=0;o<r;o++){let a=s(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||L:e;a=nt(l,a)}i.push(a)}return i}function Qs(t,e,{clamp:n=!0,ease:i,mixer:s}={}){const r=t.length;if(an(r===e.length),r===1)return()=>e[0];t[0]>t[r-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=hl(e,i,s),a=o.length,l=c=>{let u=0;if(a>1)for(;u<t.length-2&&!(c<t[u+1]);u++);const d=zt(t[u],t[u+1],c);return o[u](d)};return n?c=>l(ot(t[0],t[r-1],c)):l}function fl(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const s=zt(0,e,i);t.push(R(n,1,s))}}function pl(t){const e=[0];return fl(e,t.length-1),e}function ml(t,e){return t.map(n=>n*e)}function gl(t,e){return t.map(()=>e||Bs).splice(0,t.length-1)}function oe({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const s=Qa(i)?i.map(Rn):Rn(i),r={done:!1,value:e[0]},o=ml(n&&n.length===e.length?n:pl(e),t),a=Qs(o,e,{ease:Array.isArray(s)?s:gl(e,s)});return{calculatedDuration:t,next:l=>(r.value=a(l),r.done=l>=t,r)}}function $s(t,e){return e?t*(1e3/e):0}const xl=5;function _s(t,e,n){const i=Math.max(e-xl,0);return $s(n-t(i),e-i)}const ke=.001,Al=.01,Fn=10,yl=.05,vl=1;function bl({duration:t=800,bounce:e=.25,velocity:n=0,mass:i=1}){let s,r;Na(t<=it(Fn));let o=1-e;o=ot(yl,vl,o),t=ot(Al,Fn,Q(t)),o<1?(s=c=>{const u=c*o,d=u*t,h=u-n,p=We(c,o),g=Math.exp(-d);return ke-h/p*g},r=c=>{const d=c*o*t,h=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,g=Math.exp(-d),x=We(Math.pow(c,2),o);return(-s(c)+ke>0?-1:1)*((h-p)*g)/x}):(s=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-ke+u*d},r=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const a=5/t,l=Tl(s,r,a);if(t=it(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const wl=12;function Tl(t,e,n){let i=n;for(let s=1;s<wl;s++)i=i-t(i)/e(i);return i}function We(t,e){return t*Math.sqrt(1-e*e)}const Pl=["duration","bounce"],Sl=["stiffness","damping","mass"];function Wn(t,e){return e.some(n=>t[n]!==void 0)}function Cl(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!Wn(t,Sl)&&Wn(t,Pl)){const n=bl(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function to({keyframes:t,restDelta:e,restSpeed:n,...i}){const s=t[0],r=t[t.length-1],o={done:!1,value:s},{stiffness:a,damping:l,mass:c,duration:u,velocity:d,isResolvedFromDuration:h}=Cl({...i,velocity:-Q(i.velocity||0)}),p=d||0,g=l/(2*Math.sqrt(a*c)),x=r-s,y=Q(Math.sqrt(a/c)),w=Math.abs(x)<5;n||(n=w?.01:2),e||(e=w?.005:.5);let v;if(g<1){const A=We(y,g);v=b=>{const S=Math.exp(-g*y*b);return r-S*((p+g*y*x)/A*Math.sin(A*b)+x*Math.cos(A*b))}}else if(g===1)v=A=>r-Math.exp(-y*A)*(x+(p+y*x)*A);else{const A=y*Math.sqrt(g*g-1);v=b=>{const S=Math.exp(-g*y*b),k=Math.min(A*b,300);return r-S*((p+g*y*x)*Math.sinh(k)+A*x*Math.cosh(k))/A}}return{calculatedDuration:h&&u||null,next:A=>{const b=v(A);if(h)o.done=A>=u;else{let S=p;A!==0&&(g<1?S=_s(v,A,b):S=0);const k=Math.abs(S)<=n,M=Math.abs(r-b)<=e;o.done=k&&M}return o.value=o.done?r:b,o}}}function In({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:r=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],h={done:!1,value:d},p=C=>a!==void 0&&C<a||l!==void 0&&C>l,g=C=>a===void 0?l:l===void 0||Math.abs(a-C)<Math.abs(l-C)?a:l;let x=n*e;const y=d+x,w=o===void 0?y:o(y);w!==y&&(x=w-d);const v=C=>-x*Math.exp(-C/i),A=C=>w+v(C),b=C=>{const j=v(C),H=A(C);h.done=Math.abs(j)<=c,h.value=h.done?w:H};let S,k;const M=C=>{p(h.value)&&(S=C,k=to({keyframes:[h.value,g(h.value)],velocity:_s(A,C,h.value),damping:s,stiffness:r,restDelta:c,restSpeed:u}))};return M(0),{calculatedDuration:null,next:C=>{let j=!1;return!k&&S===void 0&&(j=!0,b(C),M(C)),S!==void 0&&C>S?k.next(C-S):(!j&&b(C),h)}}}let Qt;function Vl(){Qt=void 0}const mt={now:()=>(Qt===void 0&&mt.set(W.isProcessing||rs.useManualTiming?W.timestamp:performance.now()),Qt),set:t=>{Qt=t,queueMicrotask(Vl)}},kl=t=>{const e=({timestamp:n})=>t(n);return{start:()=>D.update(e,!0),stop:()=>$(e),now:()=>W.isProcessing?W.timestamp:mt.now()}},On=2e4;function zn(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<On;)e+=n,i=t.next(e);return e>=On?1/0:e}const jl={decay:In,inertia:In,tween:oe,keyframes:oe,spring:to};function re({autoplay:t=!0,delay:e=0,driver:n=kl,keyframes:i,type:s="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:a="loop",onPlay:l,onStop:c,onComplete:u,onUpdate:d,...h}){let p=1,g=!1,x,y;const w=()=>{y=new Promise(E=>{x=E})};w();let v;const A=jl[s]||oe;let b;A!==oe&&typeof i[0]!="number"&&(b=Qs([0,100],i,{clamp:!1}),i=[0,100]);const S=A({...h,keyframes:i});let k;a==="mirror"&&(k=A({...h,keyframes:[...i].reverse(),velocity:-(h.velocity||0)}));let M="idle",C=null,j=null,H=null;S.calculatedDuration===null&&r&&(S.calculatedDuration=zn(S));const{calculatedDuration:At}=S;let G=1/0,q=1/0;At!==null&&(G=At+o,q=G*(r+1)-o);let O=0;const yt=E=>{if(j===null)return;p>0&&(j=Math.min(j,E)),p<0&&(j=Math.min(E-q/p,j)),C!==null?O=C:O=Math.round(E-j)*p;const jt=O-e*(p>=0?1:-1),An=p>=0?jt<0:jt>q;O=Math.max(jt,0),M==="finished"&&C===null&&(O=q);let yn=O,vn=S;if(r){const ve=Math.min(O,q)/G;let Kt=Math.floor(ve),ct=ve%1;!ct&&ve>=1&&(ct=1),ct===1&&Kt--,Kt=Math.min(Kt,r+1),!!(Kt%2)&&(a==="reverse"?(ct=1-ct,o&&(ct-=o/G)):a==="mirror"&&(vn=k)),yn=ot(0,1,ct)*G}const Mt=An?{done:!1,value:i[0]}:vn.next(yn);b&&(Mt.value=b(Mt.value));let{done:bn}=Mt;!An&&At!==null&&(bn=p>=0?O>=q:O<=0);const ko=C===null&&(M==="finished"||M==="running"&&bn);return d&&d(Mt.value),ko&&kt(),Mt},F=()=>{v&&v.stop(),v=void 0},_=()=>{M="idle",F(),x(),w(),j=H=null},kt=()=>{M="finished",u&&u(),F(),x()},vt=()=>{if(g)return;v||(v=n(yt));const E=v.now();l&&l(),C!==null?j=E-C:(!j||M==="finished")&&(j=E),M==="finished"&&w(),H=j,C=null,M="running",v.start()};t&&vt();const xn={then(E,jt){return y.then(E,jt)},get time(){return Q(O)},set time(E){E=it(E),O=E,C!==null||!v||p===0?C=E:j=v.now()-E/p},get duration(){const E=S.calculatedDuration===null?zn(S):S.calculatedDuration;return Q(E)},get speed(){return p},set speed(E){E===p||!v||(p=E,xn.time=Q(O))},get state(){return M},play:vt,pause:()=>{M="paused",C=O},stop:()=>{g=!0,M!=="idle"&&(M="idle",c&&c(),_())},cancel:()=>{H!==null&&yt(H),_()},complete:()=>{M="finished"},sample:E=>(j=0,yt(E))};return xn}function Ml(t){let e;return()=>(e===void 0&&(e=t()),e)}const Dl=Ml(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),El=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),qt=10,Rl=2e4,Ll=(t,e)=>e.type==="spring"||t==="backgroundColor"||!Ds(e.ease);function Bl(t,e,{onUpdate:n,onComplete:i,...s}){if(!(Dl()&&El.has(e)&&!s.repeatDelay&&s.repeatType!=="mirror"&&s.damping!==0&&s.type!=="inertia"))return!1;let o=!1,a,l,c=!1;const u=()=>{l=new Promise(A=>{a=A})};u();let{keyframes:d,duration:h=300,ease:p,times:g}=s;if(Ll(e,s)){const A=re({...s,repeat:0,delay:0});let b={done:!1,value:d[0]};const S=[];let k=0;for(;!b.done&&k<Rl;)b=A.sample(k),S.push(b.value),k+=qt;g=void 0,d=S,h=k-qt,p="linear"}const x=Za(t.owner.current,e,d,{...s,duration:h,ease:p,times:g}),y=()=>{c=!1,x.cancel()},w=()=>{c=!0,D.update(y),a(),u()};return x.onfinish=()=>{c||(t.set(Ka(d,s)),i&&i(),w())},{then(A,b){return l.then(A,b)},attachTimeline(A){return x.timeline=A,x.onfinish=null,L},get time(){return Q(x.currentTime||0)},set time(A){x.currentTime=it(A)},get speed(){return x.playbackRate},set speed(A){x.playbackRate=A},get duration(){return Q(h)},play:()=>{o||(x.play(),$(y))},pause:()=>x.pause(),stop:()=>{if(o=!0,x.playState==="idle")return;const{currentTime:A}=x;if(A){const b=re({...s,autoplay:!1});t.setWithVelocity(b.sample(A-qt).value,b.sample(A).value,qt)}w()},complete:()=>{c||x.finish()},cancel:w}}function Fl({keyframes:t,delay:e,onUpdate:n,onComplete:i}){const s=()=>(n&&n(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:L,pause:L,stop:L,then:r=>(r(),Promise.resolve()),cancel:L,complete:L});return e?re({keyframes:[0,1],duration:0,delay:e,onComplete:s}):s()}const Wl={type:"spring",stiffness:500,damping:25,restSpeed:10},Il=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Ol={type:"keyframes",duration:.8},zl={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ul=(t,{keyframes:e})=>e.length>2?Ol:gt.has(t)?t.startsWith("scale")?Il(e[1]):Wl:zl,Ie=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(rt.test(e)||e==="0")&&!e.startsWith("url(")),Nl=new Set(["brightness","contrast","saturate","opacity"]);function Hl(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(xe)||[];if(!i)return t;const s=n.replace(i,"");let r=Nl.has(e)?1:0;return i!==n&&(r*=100),e+"("+r+s+")"}const Zl=/([a-z-]*)\(.*?\)/g,Oe={...rt,getAnimatableNone:t=>{const e=t.match(Zl);return e?e.map(Hl).join(" "):t}},Kl={...ps,color:z,backgroundColor:z,outlineColor:z,fill:z,stroke:z,borderColor:z,borderTopColor:z,borderRightColor:z,borderBottomColor:z,borderLeftColor:z,filter:Oe,WebkitFilter:Oe},dn=t=>Kl[t];function eo(t,e){let n=dn(t);return n!==Oe&&(n=rt),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const no=t=>/^0[^.\s]+$/.test(t);function Gl(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||no(t)}function Xl(t,e,n,i){const s=Ie(e,n);let r;Array.isArray(n)?r=[...n]:r=[null,n];const o=i.from!==void 0?i.from:t.get();let a;const l=[];for(let c=0;c<r.length;c++)r[c]===null&&(r[c]=c===0?o:r[c-1]),Gl(r[c])&&l.push(c),typeof r[c]=="string"&&r[c]!=="none"&&r[c]!=="0"&&(a=r[c]);if(s&&l.length&&a)for(let c=0;c<l.length;c++){const u=l[c];r[u]=eo(e,a)}return r}function ql({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:s,repeat:r,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}function hn(t,e){return t[e]||t.default||t}const fn=(t,e,n,i={})=>s=>{const r=hn(i,t)||{},o=r.delay||i.delay||0;let{elapsed:a=0}=i;a=a-it(o);const l=Xl(e,t,n,r),c=l[0],u=l[l.length-1],d=Ie(t,c),h=Ie(t,u);let p={keyframes:l,velocity:e.getVelocity(),ease:"easeOut",...r,delay:-a,onUpdate:g=>{e.set(g),r.onUpdate&&r.onUpdate(g)},onComplete:()=>{s(),r.onComplete&&r.onComplete()}};if(ql(r)||(p={...p,...Ul(t,p)}),p.duration&&(p.duration=it(p.duration)),p.repeatDelay&&(p.repeatDelay=it(p.repeatDelay)),!d||!h||Ha.current||r.type===!1||rs.skipAnimations)return Fl(p);if(!i.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const g=Bl(e,t,p);if(g)return g}return re(p)};function ae(t){return!!(U(t)&&t.add)}const io=t=>/^\-?\d*\.?\d+$/.test(t);function pn(t,e){t.indexOf(e)===-1&&t.push(e)}function mn(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class gn{constructor(){this.subscriptions=[]}add(e){return pn(this.subscriptions,e),()=>mn(this.subscriptions,e)}notify(e,n,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,n,i);else for(let r=0;r<s;r++){const o=this.subscriptions[r];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Un=30,Yl=t=>!isNaN(parseFloat(t));class Jl{constructor(e,n={}){this.version="11.0.3",this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,s=!0)=>{const r=mt.now();this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.canTrackVelocity=Yl(this.current),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=mt.now()}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new gn);const i=this.events[e].add(n);return e==="change"?()=>{i(),D.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=mt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Un)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Un);return $s(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ct(t,e){return new Jl(t,e)}const so=t=>e=>e.test(t),Ql={test:t=>t==="auto",parse:t=>t},oo=[xt,P,X,tt,aa,ra,Ql],Dt=t=>oo.find(so(t)),$l=[...oo,z,rt],_l=t=>$l.find(so(t));function tc(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Ct(n))}function ec(t,e){const n=ye(t,e);let{transitionEnd:i={},transition:s={},...r}=n?t.makeTargetAnimatable(n,!1):{};r={...r,...i};for(const o in r){const a=ba(r[o]);tc(t,o,a)}}function nc(t,e,n){var i,s;const r=Object.keys(e).filter(a=>!t.hasValue(a)),o=r.length;if(o)for(let a=0;a<o;a++){const l=r[a],c=e[l];let u=null;Array.isArray(c)&&(u=c[0]),u===null&&(u=(s=(i=n[l])!==null&&i!==void 0?i:t.readValue(l))!==null&&s!==void 0?s:e[l]),u!=null&&(typeof u=="string"&&(io(u)||no(u))?u=parseFloat(u):!_l(u)&&rt.test(c)&&(u=eo(l,c)),t.addValue(l,Ct(u,{owner:t})),n[l]===void 0&&(n[l]=u),u!==null&&t.setBaseTarget(l,u))}}function ic(t,e){return e?(e[t]||e.default||e).from:void 0}function sc(t,e,n){const i={};for(const s in t){const r=ic(s,e);if(r!==void 0)i[s]=r;else{const o=n.getValue(s);o&&(i[s]=o.get())}}return i}function oc({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function rc(t,e){const n=t.get();if(Array.isArray(e)){for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}else return n!==e}function ro(t,e,{delay:n=0,transitionOverride:i,type:s}={}){let{transition:r=t.getDefaultTransition(),transitionEnd:o,...a}=t.makeTargetAnimatable(e);const l=t.getValue("willChange");i&&(r=i);const c=[],u=s&&t.animationState&&t.animationState.getState()[s];for(const d in a){const h=t.getValue(d),p=a[d];if(!h||p===void 0||u&&oc(u,d))continue;const g={delay:n,elapsed:0,...hn(r||{},d)};if(window.HandoffAppearAnimations){const w=t.getProps()[os];if(w){const v=window.HandoffAppearAnimations(w,d,h,D);v!==null&&(g.elapsed=v,g.isHandoff=!0)}}let x=!g.isHandoff&&!rc(h,p);if(g.type==="spring"&&(h.getVelocity()||g.velocity)&&(x=!1),h.animation&&(x=!1),x)continue;h.start(fn(d,h,p,t.shouldReduceMotion&&gt.has(d)?{type:!1}:g));const y=h.animation;ae(l)&&(l.add(d),y.then(()=>l.remove(d))),c.push(y)}return o&&Promise.all(c).then(()=>{o&&ec(t,o)}),c}function ze(t,e,n={}){const i=ye(t,e,n.custom);let{transition:s=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const r=i?()=>Promise.all(ro(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:u,staggerDirection:d}=s;return ac(t,e,c+l,u,d,n)}:()=>Promise.resolve(),{when:a}=s;if(a){const[l,c]=a==="beforeChildren"?[r,o]:[o,r];return l().then(()=>c())}else return Promise.all([r(),o(n.delay)])}function ac(t,e,n=0,i=0,s=1,r){const o=[],a=(t.variantChildren.size-1)*i,l=s===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(lc).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(ze(c,e,{...r,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function lc(t,e){return t.sortNodePosition(e)}function cc(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const s=e.map(r=>ze(t,r,n));i=Promise.all(s)}else if(typeof e=="string")i=ze(t,e,n);else{const s=typeof e=="function"?ye(t,e,n.custom):e;i=Promise.all(ro(t,s,n))}return i.then(()=>t.notify("AnimationComplete",e))}const uc=[...Je].reverse(),dc=Je.length;function hc(t){return e=>Promise.all(e.map(({animation:n,options:i})=>cc(t,n,i)))}function fc(t){let e=hc(t);const n=mc();let i=!0;const s=(l,c)=>{const u=ye(t,c);if(u){const{transition:d,transitionEnd:h,...p}=u;l={...l,...p,...h}}return l};function r(l){e=l(t)}function o(l,c){const u=t.getProps(),d=t.getVariantContext(!0)||{},h=[],p=new Set;let g={},x=1/0;for(let w=0;w<dc;w++){const v=uc[w],A=n[v],b=u[v]!==void 0?u[v]:d[v],S=It(b),k=v===c?A.isActive:null;k===!1&&(x=w);let M=b===d[v]&&b!==u[v]&&S;if(M&&i&&t.manuallyAnimateOnMount&&(M=!1),A.protectedKeys={...g},!A.isActive&&k===null||!b&&!A.prevProp||me(b)||typeof b=="boolean")continue;let j=pc(A.prevProp,b)||v===c&&A.isActive&&!M&&S||w>x&&S,H=!1;const At=Array.isArray(b)?b:[b];let G=At.reduce(s,{});k===!1&&(G={});const{prevResolvedValues:q={}}=A,O={...q,...G},yt=F=>{j=!0,p.has(F)&&(H=!0,p.delete(F)),A.needsAnimating[F]=!0};for(const F in O){const _=G[F],kt=q[F];if(g.hasOwnProperty(F))continue;let vt=!1;ie(_)&&ie(kt)?vt=!js(_,kt):vt=_!==kt,vt?_!==void 0?yt(F):p.add(F):_!==void 0&&p.has(F)?yt(F):A.protectedKeys[F]=!0}A.prevProp=b,A.prevResolvedValues=G,A.isActive&&(g={...g,...G}),i&&t.blockInitialAnimation&&(j=!1),j&&(!M||H)&&h.push(...At.map(F=>({animation:F,options:{type:v,...l}})))}if(p.size){const w={};p.forEach(v=>{const A=t.getBaseTarget(v);A!==void 0&&(w[v]=A)}),h.push({animation:w})}let y=!!h.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(y=!1),i=!1,y?e(h):Promise.resolve()}function a(l,c,u){var d;if(n[l].isActive===c)return Promise.resolve();(d=t.variantChildren)===null||d===void 0||d.forEach(p=>{var g;return(g=p.animationState)===null||g===void 0?void 0:g.setActive(l,c)}),n[l].isActive=c;const h=o(u,l);for(const p in n)n[p].protectedKeys={};return h}return{animateChanges:o,setActive:a,setAnimateFunction:r,getState:()=>n}}function pc(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!js(e,t):!1}function ut(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function mc(){return{animate:ut(!0),whileInView:ut(),whileHover:ut(),whileTap:ut(),whileDrag:ut(),whileFocus:ut(),exit:ut()}}class gc extends lt{constructor(e){super(e),e.animationState||(e.animationState=fc(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),me(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let xc=0;class Ac extends lt{constructor(){super(...arguments),this.id=xc++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:i}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===s)return;const r=this.node.animationState.setActive("exit",!e,{custom:i??this.node.getProps().custom});n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const yc={animation:{Feature:gc},exit:{Feature:Ac}},Nn=(t,e)=>Math.abs(t-e);function vc(t,e){const n=Nn(t.x,e.x),i=Nn(t.y,e.y);return Math.sqrt(n**2+i**2)}class ao{constructor(e,n,{transformPagePoint:i,contextWindow:s,dragSnapToOrigin:r=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Me(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,p=vc(d.offset,{x:0,y:0})>=3;if(!h&&!p)return;const{point:g}=d,{timestamp:x}=W;this.history.push({...g,timestamp:x});const{onStart:y,onMove:w}=this.handlers;h||(y&&y(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),w&&w(this.lastMoveEvent,d)},this.handlePointerMove=(d,h)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=je(h,this.transformPagePoint),D.update(this.updatePoint,!0)},this.handlePointerUp=(d,h)=>{this.end();const{onEnd:p,onSessionEnd:g,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Me(d.type==="pointercancel"?this.lastMoveEventInfo:je(h,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,y),g&&g(d,y)},!Ps(e))return;this.dragSnapToOrigin=r,this.handlers=n,this.transformPagePoint=i,this.contextWindow=s||window;const o=Ae(e),a=je(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=W;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,Me(a,this.history)),this.removeListeners=nt(J(this.contextWindow,"pointermove",this.handlePointerMove),J(this.contextWindow,"pointerup",this.handlePointerUp),J(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),$(this.updatePoint)}}function je(t,e){return e?{point:e(t.point)}:t}function Hn(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Me({point:t},e){return{point:t,delta:Hn(t,lo(e)),offset:Hn(t,bc(e)),velocity:wc(e,.1)}}function bc(t){return t[0]}function lo(t){return t[t.length-1]}function wc(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const s=lo(t);for(;n>=0&&(i=t[n],!(s.timestamp-i.timestamp>it(e)));)n--;if(!i)return{x:0,y:0};const r=Q(s.timestamp-i.timestamp);if(r===0)return{x:0,y:0};const o={x:(s.x-i.x)/r,y:(s.y-i.y)/r};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function N(t){return t.max-t.min}function Ue(t,e=0,n=.01){return Math.abs(t-e)<=n}function Zn(t,e,n,i=.5){t.origin=i,t.originPoint=R(e.min,e.max,t.origin),t.scale=N(n)/N(e),(Ue(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=R(n.min,n.max,t.origin)-t.originPoint,(Ue(t.translate)||isNaN(t.translate))&&(t.translate=0)}function Ft(t,e,n,i){Zn(t.x,e.x,n.x,i?i.originX:void 0),Zn(t.y,e.y,n.y,i?i.originY:void 0)}function Kn(t,e,n){t.min=n.min+e.min,t.max=t.min+N(e)}function Tc(t,e,n){Kn(t.x,e.x,n.x),Kn(t.y,e.y,n.y)}function Gn(t,e,n){t.min=e.min-n.min,t.max=t.min+N(e)}function Wt(t,e,n){Gn(t.x,e.x,n.x),Gn(t.y,e.y,n.y)}function Pc(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?R(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?R(n,t,i.max):Math.min(t,n)),t}function Xn(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function Sc(t,{top:e,left:n,bottom:i,right:s}){return{x:Xn(t.x,n,s),y:Xn(t.y,e,i)}}function qn(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function Cc(t,e){return{x:qn(t.x,e.x),y:qn(t.y,e.y)}}function Vc(t,e){let n=.5;const i=N(t),s=N(e);return s>i?n=zt(e.min,e.max-i,t.min):i>s&&(n=zt(t.min,t.max-s,e.min)),ot(0,1,n)}function kc(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Ne=.35;function jc(t=Ne){return t===!1?t=0:t===!0&&(t=Ne),{x:Yn(t,"left","right"),y:Yn(t,"top","bottom")}}function Yn(t,e,n){return{min:Jn(t,e),max:Jn(t,n)}}function Jn(t,e){return typeof t=="number"?t:t[e]||0}const Qn=()=>({translate:0,scale:1,origin:0,originPoint:0}),Tt=()=>({x:Qn(),y:Qn()}),$n=()=>({min:0,max:0}),B=()=>({x:$n(),y:$n()});function K(t){return[t("x"),t("y")]}function co({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function Mc({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function Dc(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function De(t){return t===void 0||t===1}function He({scale:t,scaleX:e,scaleY:n}){return!De(t)||!De(e)||!De(n)}function dt(t){return He(t)||uo(t)||t.z||t.rotate||t.rotateX||t.rotateY}function uo(t){return _n(t.x)||_n(t.y)}function _n(t){return t&&t!=="0%"}function le(t,e,n){const i=t-n,s=e*i;return n+s}function ti(t,e,n,i,s){return s!==void 0&&(t=le(t,s,i)),le(t,n,i)+e}function Ze(t,e=0,n=1,i,s){t.min=ti(t.min,e,n,i,s),t.max=ti(t.max,e,n,i,s)}function ho(t,{x:e,y:n}){Ze(t.x,e.translate,e.scale,e.originPoint),Ze(t.y,n.translate,n.scale,n.originPoint)}function Ec(t,e,n,i=!1){const s=n.length;if(!s)return;e.x=e.y=1;let r,o;for(let a=0;a<s;a++){r=n[a],o=r.projectionDelta;const l=r.instance;l&&l.style&&l.style.display==="contents"||(i&&r.options.layoutScroll&&r.scroll&&r!==r.root&&Pt(t,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,ho(t,o)),i&&dt(r.latestValues)&&Pt(t,r.latestValues))}e.x=ei(e.x),e.y=ei(e.y)}function ei(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function et(t,e){t.min=t.min+e,t.max=t.max+e}function ni(t,e,[n,i,s]){const r=e[s]!==void 0?e[s]:.5,o=R(t.min,t.max,r);Ze(t,e[n],e[i],o,e.scale)}const Rc=["x","scaleX","originX"],Lc=["y","scaleY","originY"];function Pt(t,e){ni(t.x,e,Rc),ni(t.y,e,Lc)}function fo(t,e){return co(Dc(t.getBoundingClientRect(),e))}function Bc(t,e,n){const i=fo(t,n),{scroll:s}=e;return s&&(et(i.x,s.offset.x),et(i.y,s.offset.y)),i}const po=({current:t})=>t?t.ownerDocument.defaultView:null,Fc=new WeakMap;class Wc{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=B(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=u=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ae(u,"page").point)},r=(u,d)=>{const{drag:h,dragPropagation:p,onDragStart:g}=this.getProps();if(h&&!p&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Cs(h),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),K(y=>{let w=this.getAxisMotionValue(y).get()||0;if(X.test(w)){const{projection:v}=this.visualElement;if(v&&v.layout){const A=v.layout.layoutBox[y];A&&(w=N(A)*(parseFloat(w)/100))}}this.originPoint[y]=w}),g&&D.update(()=>g(u,d),!1,!0);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},o=(u,d)=>{const{dragPropagation:h,dragDirectionLock:p,onDirectionLock:g,onDrag:x}=this.getProps();if(!h&&!this.openGlobalLock)return;const{offset:y}=d;if(p&&this.currentDirection===null){this.currentDirection=Ic(y),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",d.point,y),this.updateAxis("y",d.point,y),this.visualElement.render(),x&&x(u,d)},a=(u,d)=>this.stop(u,d),l=()=>K(u=>{var d;return this.getAnimationState(u)==="paused"&&((d=this.getAxisMotionValue(u).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new ao(e,{onSessionStart:s,onStart:r,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:po(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:s}=n;this.startAnimation(s);const{onDragEnd:r}=this.getProps();r&&D.update(()=>r(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:s}=this.getProps();if(!i||!Yt(e,s,this.currentDirection))return;const r=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=Pc(o,this.constraints[e],this.elastic[e])),r.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,r=this.constraints;n&&bt(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&s?this.constraints=Sc(s.layoutBox,n):this.constraints=!1,this.elastic=jc(i),r!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&K(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=kc(s.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!bt(e))return!1;const i=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const r=Bc(i,s.root,this.visualElement.getTransformPagePoint());let o=Cc(s.layout.layoutBox,r);if(n){const a=n(Mc(o));this.hasMutatedConstraints=!!a,a&&(o=co(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:s,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=K(u=>{if(!Yt(u,n,this.currentDirection))return;let d=l&&l[u]||{};o&&(d={min:0,max:0});const h=s?200:1e6,p=s?40:1e7,g={type:"inertia",velocity:i?e[u]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...r,...d};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return i.start(fn(e,i,0,n))}stopAnimation(){K(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){K(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),i=this.visualElement.getProps(),s=i[n];return s||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){K(n=>{const{drag:i}=this.getProps();if(!Yt(n,i,this.currentDirection))return;const{projection:s}=this.visualElement,r=this.getAxisMotionValue(n);if(s&&s.layout){const{min:o,max:a}=s.layout.layoutBox[n];r.set(e[n]-R(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!bt(n)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};K(o=>{const a=this.getAxisMotionValue(o);if(a){const l=a.get();s[o]=Vc({min:l,max:l},this.constraints[o])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),K(o=>{if(!Yt(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(R(l,c,s[o]))})}addListeners(){if(!this.visualElement.current)return;Fc.set(this.visualElement,this);const e=this.visualElement.current,n=J(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();bt(l)&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,r=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),i();const o=Y(window,"resize",()=>this.scalePositionWithinConstraints()),a=s.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(K(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),r(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:r=!1,dragElastic:o=Ne,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:s,dragConstraints:r,dragElastic:o,dragMomentum:a}}}function Yt(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function Ic(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class Oc extends lt{constructor(e){super(e),this.removeGroupControls=L,this.removeListeners=L,this.controls=new Wc(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||L}unmount(){this.removeGroupControls(),this.removeListeners()}}const ii=t=>(e,n)=>{t&&D.update(()=>t(e,n))};class zc extends lt{constructor(){super(...arguments),this.removePointerDownListener=L}onPointerDown(e){this.session=new ao(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:po(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:ii(e),onStart:ii(n),onMove:i,onEnd:(r,o)=>{delete this.session,s&&D.update(()=>s(r,o))}}}mount(){this.removePointerDownListener=J(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function Uc(){const t=m.useContext(fe);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:i}=t,s=m.useId();return m.useEffect(()=>i(s),[]),!e&&n?[!1,()=>n&&n(s)]:[!0]}const $t={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function si(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Et={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(P.test(t))t=parseFloat(t);else return t;const n=si(t,e.target.x),i=si(t,e.target.y);return`${n}% ${i}%`}},Nc={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,s=rt.parse(t);if(s.length>5)return i;const r=rt.createTransformer(t),o=typeof s[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;s[0+o]/=a,s[1+o]/=l;const c=R(a,l,.5);return typeof s[2+o]=="number"&&(s[2+o]/=c),typeof s[3+o]=="number"&&(s[3+o]/=c),r(s)}};class Hc extends Wi.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:s}=this.props,{projection:r}=e;_r(Zc),r&&(n.group&&n.group.add(r),i&&i.register&&s&&i.register(r),r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),$t.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:s,isPresent:r}=this.props,o=i.projection;return o&&(o.isPresent=r,s||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==r&&(r?o.promote():o.relegate()||D.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Ye.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:s}=e;s&&(s.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function mo(t){const[e,n]=Uc(),i=m.useContext($e);return Wi.createElement(Hc,{...t,layoutGroup:i,switchLayoutGroup:m.useContext(cs),isPresent:e,safeToRemove:n})}const Zc={borderRadius:{...Et,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Et,borderTopRightRadius:Et,borderBottomLeftRadius:Et,borderBottomRightRadius:Et,boxShadow:Nc},go=["TopLeft","TopRight","BottomLeft","BottomRight"],Kc=go.length,oi=t=>typeof t=="string"?parseFloat(t):t,ri=t=>typeof t=="number"||P.test(t);function Gc(t,e,n,i,s,r){s?(t.opacity=R(0,n.opacity!==void 0?n.opacity:1,Xc(i)),t.opacityExit=R(e.opacity!==void 0?e.opacity:1,0,qc(i))):r&&(t.opacity=R(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<Kc;o++){const a=`border${go[o]}Radius`;let l=ai(e,a),c=ai(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||ri(l)===ri(c)?(t[a]=Math.max(R(oi(l),oi(c),i),0),(X.test(c)||X.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=R(e.rotate||0,n.rotate||0,i))}function ai(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const Xc=xo(0,.5,Is),qc=xo(.5,.95,L);function xo(t,e,n){return i=>i<t?0:i>e?1:n(zt(t,e,i))}function li(t,e){t.min=e.min,t.max=e.max}function Z(t,e){li(t.x,e.x),li(t.y,e.y)}function ci(t,e,n,i,s){return t-=e,t=le(t,1/n,i),s!==void 0&&(t=le(t,1/s,i)),t}function Yc(t,e=0,n=1,i=.5,s,r=t,o=t){if(X.test(e)&&(e=parseFloat(e),e=R(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=R(r.min,r.max,i);t===r&&(a-=e),t.min=ci(t.min,e,n,a,s),t.max=ci(t.max,e,n,a,s)}function ui(t,e,[n,i,s],r,o){Yc(t,e[n],e[i],e[s],e.scale,r,o)}const Jc=["x","scaleX","originX"],Qc=["y","scaleY","originY"];function di(t,e,n,i){ui(t.x,e,Jc,n?n.x:void 0,i?i.x:void 0),ui(t.y,e,Qc,n?n.y:void 0,i?i.y:void 0)}function hi(t){return t.translate===0&&t.scale===1}function Ao(t){return hi(t.x)&&hi(t.y)}function $c(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function yo(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function fi(t){return N(t.x)/N(t.y)}class _c{constructor(){this.members=[]}add(e){pn(this.members,e),e.scheduleRender()}remove(e){if(mn(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(s=>e===s);if(n===0)return!1;let i;for(let s=n;s>=0;s--){const r=this.members[s];if(r.isPresent!==!1){i=r;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:s}=e.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function pi(t,e,n){let i="";const s=t.x.translate/e.x,r=t.y.translate/e.y;if((s||r)&&(i=`translate3d(${s}px, ${r}px, 0) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:l,rotateX:c,rotateY:u}=n;l&&(i+=`rotate(${l}deg) `),c&&(i+=`rotateX(${c}deg) `),u&&(i+=`rotateY(${u}deg) `)}const o=t.x.scale*e.x,a=t.y.scale*e.y;return(o!==1||a!==1)&&(i+=`scale(${o}, ${a})`),i||"none"}const tu=(t,e)=>t.depth-e.depth;class eu{constructor(){this.children=[],this.isDirty=!1}add(e){pn(this.children,e),this.isDirty=!0}remove(e){mn(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(tu),this.isDirty=!1,this.children.forEach(e)}}function nu(t,e){const n=mt.now(),i=({timestamp:s})=>{const r=s-n;r>=e&&($(i),t(r-e))};return D.read(i,!0),()=>$(i)}function iu(t){window.MotionDebug&&window.MotionDebug.record(t)}function su(t){return t instanceof SVGElement&&t.tagName!=="svg"}function ou(t,e,n){const i=U(t)?t:Ct(t);return i.start(fn("",i,e,n)),i.animation}const mi=["","X","Y","Z"],ru={visibility:"hidden"},gi=1e3;let au=0;const ht={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function vo({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(o={},a=e==null?void 0:e()){this.id=au++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ht.totalNodes=ht.resolvedTargetDeltas=ht.recalculatedProjection=0,this.nodes.forEach(uu),this.nodes.forEach(mu),this.nodes.forEach(gu),this.nodes.forEach(du),iu(ht)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new eu)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new gn),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=su(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let d;const h=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=nu(h,250),$t.hasAnimatedSinceResize&&($t.hasAnimatedSinceResize=!1,this.nodes.forEach(Ai))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:h,hasRelativeTargetChanged:p,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||u.getDefaultTransition()||bu,{onLayoutAnimationStart:y,onLayoutAnimationComplete:w}=u.getProps(),v=!this.targetLayout||!yo(this.targetLayout,g)||p,A=!h&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||A||h&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,A);const b={...hn(x,"layout"),onPlay:y,onComplete:w};(u.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b)}else h||Ai(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,$(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(xu),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(xi);return}this.isUpdating||this.nodes.forEach(fu),this.isUpdating=!1,this.nodes.forEach(pu),this.nodes.forEach(lu),this.nodes.forEach(cu),this.clearAllSnapshots();const a=mt.now();W.delta=ot(0,1e3/60,a-W.timestamp),W.timestamp=a,W.isProcessing=!0,be.update.process(W),be.preRender.process(W),be.render.process(W),W.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ye.read(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(hu),this.sharedNodes.forEach(Au)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,D.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){D.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=B(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!s)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!Ao(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||dt(this.latestValues)||u)&&(s(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),wu(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return B();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(et(a.x,l.offset.x),et(a.y,l.offset.y)),a}removeElementScroll(o){const a=B();Z(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:u,options:d}=c;if(c!==this.root&&u&&d.layoutScroll){if(u.isRoot){Z(a,o);const{scroll:h}=this.root;h&&(et(a.x,-h.offset.x),et(a.y,-h.offset.y))}et(a.x,u.offset.x),et(a.y,u.offset.y)}}return a}applyTransform(o,a=!1){const l=B();Z(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Pt(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),dt(u.latestValues)&&Pt(l,u.latestValues)}return dt(this.latestValues)&&Pt(l,this.latestValues),l}removeTransform(o){const a=B();Z(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!dt(c.latestValues))continue;He(c.latestValues)&&c.updateSnapshot();const u=B(),d=c.measurePageBox();Z(u,d),di(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return dt(this.latestValues)&&di(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==W.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:d,layoutId:h}=this.options;if(!(!this.layout||!(d||h))){if(this.resolvedRelativeTargetAt=W.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=B(),this.relativeTargetOrigin=B(),Wt(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Z(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=B(),this.targetWithTransforms=B()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Tc(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Z(this.target,this.layout.layoutBox),ho(this.target,this.targetDelta)):Z(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=B(),this.relativeTargetOrigin=B(),Wt(this.relativeTargetOrigin,this.target,p.target),Z(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ht.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||He(this.parent.latestValues)||uo(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===W.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;Z(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,p=this.treeScale.y;Ec(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=B());const{target:g}=a;if(!g){this.projectionTransform&&(this.projectionDelta=Tt(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Tt(),this.projectionDeltaWithTransform=Tt());const x=this.projectionTransform;Ft(this.projectionDelta,this.layoutCorrected,g,this.latestValues),this.projectionTransform=pi(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==h||this.treeScale.y!==p)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),ht.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=Tt();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=B(),p=l?l.source:void 0,g=this.layout?this.layout.source:void 0,x=p!==g,y=this.getStack(),w=!y||y.members.length<=1,v=!!(x&&!w&&this.options.crossfade===!0&&!this.path.some(vu));this.animationProgress=0;let A;this.mixTargetDelta=b=>{const S=b/1e3;yi(d.x,o.x,S),yi(d.y,o.y,S),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Wt(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),yu(this.relativeTarget,this.relativeTargetOrigin,h,S),A&&$c(this.relativeTarget,A)&&(this.isProjectionDirty=!1),A||(A=B()),Z(A,this.relativeTarget)),x&&(this.animationValues=u,Gc(u,c,this.latestValues,S,v,w)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&($(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=D.update(()=>{$t.hasAnimatedSinceResize=!0,this.currentAnimation=ou(0,gi,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(gi),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&bo(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||B();const d=N(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const h=N(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}Z(a,l),Pt(a,u),Ft(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new _c),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const c={};for(let u=0;u<mi.length;u++){const d="rotate"+mi[u];l[d]&&(c[d]=l[d],o.setStaticValue(d,0))}o.render();for(const u in c)o.setStaticValue(u,c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return ru;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Jt(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Jt(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!dt(this.latestValues)&&(x.transform=u?u({},""):"none",this.hasProjected=!1),x}const h=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=pi(this.projectionDeltaWithTransform,this.treeScale,h),u&&(c.transform=u(h,c.transform));const{x:p,y:g}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${g.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=h.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:c.opacity=d===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const x in ee){if(h[x]===void 0)continue;const{correct:y,applyTo:w}=ee[x],v=c.transform==="none"?h[x]:y(h[x],d);if(w){const A=w.length;for(let b=0;b<A;b++)c[w[b]]=v}else c[x]=v}return this.options.layoutId&&(c.pointerEvents=d===this?Jt(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(xi),this.root.sharedNodes.clear()}}}function lu(t){t.updateLayout()}function cu(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:s}=t.layout,{animationType:r}=t.options,o=n.source!==t.layout.source;r==="size"?K(d=>{const h=o?n.measuredBox[d]:n.layoutBox[d],p=N(h);h.min=i[d].min,h.max=h.min+p}):bo(r,n.layoutBox,i)&&K(d=>{const h=o?n.measuredBox[d]:n.layoutBox[d],p=N(i[d]);h.max=h.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=Tt();Ft(a,i,n.layoutBox);const l=Tt();o?Ft(l,t.applyTransform(s,!0),n.measuredBox):Ft(l,i,n.layoutBox);const c=!Ao(a);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:h,layout:p}=d;if(h&&p){const g=B();Wt(g,n.layoutBox,h.layoutBox);const x=B();Wt(x,i,p.layoutBox),yo(g,x)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=x,t.relativeTargetOrigin=g,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function uu(t){ht.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function du(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function hu(t){t.clearSnapshot()}function xi(t){t.clearMeasurements()}function fu(t){t.isLayoutDirty=!1}function pu(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Ai(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function mu(t){t.resolveTargetDelta()}function gu(t){t.calcProjection()}function xu(t){t.resetRotation()}function Au(t){t.removeLeadSnapshot()}function yi(t,e,n){t.translate=R(e.translate,0,n),t.scale=R(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function vi(t,e,n,i){t.min=R(e.min,n.min,i),t.max=R(e.max,n.max,i)}function yu(t,e,n,i){vi(t.x,e.x,n.x,i),vi(t.y,e.y,n.y,i)}function vu(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const bu={duration:.45,ease:[.4,0,.1,1]},bi=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),wi=bi("applewebkit/")&&!bi("chrome/")?Math.round:L;function Ti(t){t.min=wi(t.min),t.max=wi(t.max)}function wu(t){Ti(t.x),Ti(t.y)}function bo(t,e,n){return t==="position"||t==="preserve-aspect"&&!Ue(fi(e),fi(n),.2)}const Tu=vo({attachResizeListener:(t,e)=>Y(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ee={current:void 0},wo=vo({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Ee.current){const t=new Tu({});t.mount(window),t.setOptions({layoutScroll:!0}),Ee.current=t}return Ee.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Pu={pan:{Feature:zc},drag:{Feature:Oc,ProjectionNode:wo,MeasureLayout:mo}},Su=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Cu(t){const e=Su.exec(t);if(!e)return[,];const[,n,i]=e;return[n,i]}function Ke(t,e,n=1){const[i,s]=Cu(t);if(!i)return;const r=window.getComputedStyle(e).getPropertyValue(i);if(r){const o=r.trim();return io(o)?parseFloat(o):o}else return Le(s)?Ke(s,e,n+1):s}function Vu(t,{...e},n){const i=t.current;if(!(i instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(s=>{const r=s.get();if(!Le(r))return;const o=Ke(r,i);o&&s.set(o)});for(const s in e){const r=e[s];if(!Le(r))continue;const o=Ke(r,i);o&&(e[s]=o,n||(n={}),n[s]===void 0&&(n[s]=r))}return{target:e,transitionEnd:n}}const ku=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),To=t=>ku.has(t),ju=t=>Object.keys(t).some(To),Pi=t=>t===xt||t===P,Si=(t,e)=>parseFloat(t.split(", ")[e]),Ci=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const s=i.match(/^matrix3d\((.+)\)$/);if(s)return Si(s[1],e);{const r=i.match(/^matrix\((.+)\)$/);return r?Si(r[1],t):0}},Mu=new Set(["x","y","z"]),Du=Ut.filter(t=>!Mu.has(t));function Eu(t){const e=[];return Du.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const Vt={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Ci(4,13),y:Ci(5,14)};Vt.translateX=Vt.x;Vt.translateY=Vt.y;const Ru=(t,e,n)=>{const i=e.measureViewportBox(),s=e.current,r=getComputedStyle(s),{display:o}=r,a={};o==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(c=>{a[c]=Vt[c](i,r)}),e.render();const l=e.measureViewportBox();return n.forEach(c=>{const u=e.getValue(c);u&&u.jump(a[c]),t[c]=Vt[c](l,r)}),t},Lu=(t,e,n={},i={})=>{e={...e},i={...i};const s=Object.keys(e).filter(To);let r=[],o=!1;const a=[];if(s.forEach(l=>{const c=t.getValue(l);if(!t.hasValue(l))return;let u=n[l],d=Dt(u);const h=e[l];let p;if(ie(h)){const g=h.length,x=h[0]===null?1:0;u=h[x],d=Dt(u);for(let y=x;y<g&&h[y]!==null;y++)p?an(Dt(h[y])===p):p=Dt(h[y])}else p=Dt(h);if(d!==p)if(Pi(d)&&Pi(p)){const g=c.get();typeof g=="string"&&c.set(parseFloat(g)),typeof h=="string"?e[l]=parseFloat(h):Array.isArray(h)&&p===P&&(e[l]=h.map(parseFloat))}else d!=null&&d.transform&&(p!=null&&p.transform)&&(u===0||h===0)?u===0?c.set(p.transform(u)):e[l]=d.transform(h):(o||(r=Eu(t),o=!0),a.push(l),i[l]=i[l]!==void 0?i[l]:e[l],c.jump(h))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,c=Ru(e,t,a);return r.length&&r.forEach(([u,d])=>{t.getValue(u).set(d)}),t.render(),pe&&l!==null&&window.scrollTo({top:l}),{target:c,transitionEnd:i}}else return{target:e,transitionEnd:i}};function Bu(t,e,n,i){return ju(e)?Lu(t,e,n,i):{target:e,transitionEnd:i}}const Fu=(t,e,n,i)=>{const s=Vu(t,e,i);return e=s.target,i=s.transitionEnd,Bu(t,e,n,i)},Ge={current:null},Po={current:!1};function Wu(){if(Po.current=!0,!!pe)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Ge.current=t.matches;t.addListener(e),e()}else Ge.current=!1}function Iu(t,e,n){const{willChange:i}=e;for(const s in e){const r=e[s],o=n[s];if(U(r))t.addValue(s,r),ae(i)&&i.add(s);else if(U(o))t.addValue(s,Ct(r,{owner:t})),ae(i)&&i.remove(s);else if(o!==r)if(t.hasValue(s)){const a=t.getValue(s);!a.hasAnimated&&a.set(r)}else{const a=t.getStaticValue(s);t.addValue(s,Ct(a!==void 0?a:r,{owner:t}))}}for(const s in n)e[s]===void 0&&t.removeValue(s);return e}const Vi=new WeakMap,So=Object.keys(Ot),Ou=So.length,ki=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],zu=Qe.length;class Uu{constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:s,visualState:r},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>D.render(this.render,!1,!0);const{latestValues:a,renderState:l}=r;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=o,this.isControllingVariants=ge(n),this.isVariantNode=ls(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(n,{});for(const d in u){const h=u[d];a[d]!==void 0&&U(h)&&(h.set(a[d],!1),ae(c)&&c.add(d))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,Vi.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),Po.current||Wu(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ge.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Vi.delete(this.current),this.projection&&this.projection.unmount(),$(this.notifyUpdate),$(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const i=gt.has(e),s=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&D.update(this.notifyUpdate,!1,!0),i&&this.projection&&(this.projection.isTransformDirty=!0)}),r=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{s(),r()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},i,s,r){let o,a;for(let l=0;l<Ou;l++){const c=So[l],{isEnabled:u,Feature:d,ProjectionNode:h,MeasureLayout:p}=Ot[c];h&&(o=h),u(n)&&(!this.features[c]&&d&&(this.features[c]=new d(this)),p&&(a=p))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:u,dragConstraints:d,layoutScroll:h,layoutRoot:p}=n;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!u||d&&bt(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:r,layoutScroll:h,layoutRoot:p})}return a}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):B()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<ki.length;i++){const s=ki[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const r=e["on"+s];r&&(this.propEventSubscriptions[s]=this.on(s,r))}this.prevMotionValues=Iu(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<zu;i++){const s=Qe[i],r=this.props[s];(It(r)||r===!1)&&(n[s]=r)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Ct(n,{owner:this}),this.addValue(e,i)),i}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props,s=typeof i=="string"||typeof i=="object"?(n=rn(this.props,i))===null||n===void 0?void 0:n[e]:void 0;if(i&&s!==void 0)return s;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!U(r)?r:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new gn),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class Co extends Uu{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...i},s){const r=sc(i,e||{},this);if(s){nc(this,i,r);const o=Fu(this,i,r,n);n=o.transitionEnd,i=o.target}return{transition:e,transitionEnd:n,...i}}}function Nu(t){return window.getComputedStyle(t)}class Hu extends Co{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(gt.has(n)){const i=dn(n);return i&&i.default||0}else{const i=Nu(e),s=(hs(n)?i.getPropertyValue(n):i[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return fo(e,n)}build(e,n,i,s){tn(e,n,i,s.transformTemplate)}scrapeMotionValuesFromProps(e,n){return on(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;U(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,i,s){As(e,n,i,s)}}class Zu extends Co{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(gt.has(n)){const i=dn(n);return i&&i.default||0}return n=ys.has(n)?n:qe(n),e.getAttribute(n)}measureInstanceViewportBox(){return B()}scrapeMotionValuesFromProps(e,n){return bs(e,n)}build(e,n,i,s){nn(e,n,i,this.isSVGTag,s.transformTemplate)}renderInstance(e,n,i,s){vs(e,n,i,s)}mount(e){this.isSVGTag=sn(e.tagName),super.mount(e)}}const Ku=(t,e)=>_e(t)?new Zu(e,{enableHardwareAcceleration:!1}):new Hu(e,{enableHardwareAcceleration:!0}),Gu={layout:{ProjectionNode:wo,MeasureLayout:mo}},Xu={...yc,...Oa,...Pu,...Gu},qu=Qr((t,e)=>Ca(t,e,Xu,Ku));function Vo(){const t=m.useRef(!1);return Xe(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function Yu(){const t=Vo(),[e,n]=m.useState(0),i=m.useCallback(()=>{t.current&&n(e+1)},[e]);return[m.useCallback(()=>D.postRender(i),[i]),e]}class Ju extends m.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Qu({children:t,isPresent:e}){const n=m.useId(),i=m.useRef(null),s=m.useRef({width:0,height:0,top:0,left:0});return m.useInsertionEffect(()=>{const{width:r,height:o,top:a,left:l}=s.current;if(e||!i.current||!r||!o)return;i.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${r}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[e]),m.createElement(Ju,{isPresent:e,childRef:i,sizeRef:s},m.cloneElement(t,{ref:i}))}const Re=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:s,presenceAffectsLayout:r,mode:o})=>{const a=ws($u),l=m.useId(),c=m.useMemo(()=>({id:l,initial:e,isPresent:n,custom:s,onExitComplete:u=>{a.set(u,!0);for(const d of a.values())if(!d)return;i&&i()},register:u=>(a.set(u,!1),()=>a.delete(u))}),r?void 0:[n]);return m.useMemo(()=>{a.forEach((u,d)=>a.set(d,!1))},[n]),m.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=m.createElement(Qu,{isPresent:n},t)),m.createElement(fe.Provider,{value:c},t)};function $u(){return new Map}function _u(t){return m.useEffect(()=>()=>t(),[])}const ft=t=>t.key||"";function td(t,e){t.forEach(n=>{const i=ft(n);e.set(i,n)})}function ed(t){const e=[];return m.Children.forEach(t,n=>{m.isValidElement(n)&&e.push(n)}),e}const nd=({children:t,custom:e,initial:n=!0,onExitComplete:i,exitBeforeEnter:s,presenceAffectsLayout:r=!0,mode:o="sync"})=>{const a=m.useContext($e).forceRender||Yu()[0],l=Vo(),c=ed(t);let u=c;const d=m.useRef(new Map).current,h=m.useRef(u),p=m.useRef(new Map).current,g=m.useRef(!0);if(Xe(()=>{g.current=!1,td(c,p),h.current=u}),_u(()=>{g.current=!0,p.clear(),d.clear()}),g.current)return m.createElement(m.Fragment,null,u.map(v=>m.createElement(Re,{key:ft(v),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:r,mode:o},v)));u=[...u];const x=h.current.map(ft),y=c.map(ft),w=x.length;for(let v=0;v<w;v++){const A=x[v];y.indexOf(A)===-1&&!d.has(A)&&d.set(A,void 0)}return o==="wait"&&d.size&&(u=[]),d.forEach((v,A)=>{if(y.indexOf(A)!==-1)return;const b=p.get(A);if(!b)return;const S=x.indexOf(A);let k=v;if(!k){const M=()=>{d.delete(A);const C=Array.from(p.keys()).filter(j=>!y.includes(j));if(C.forEach(j=>p.delete(j)),h.current=c.filter(j=>{const H=ft(j);return H===A||C.includes(H)}),!d.size){if(l.current===!1)return;a(),i&&i()}};k=m.createElement(Re,{key:ft(b),isPresent:!1,onExitComplete:M,custom:e,presenceAffectsLayout:r,mode:o},b),d.set(A,k)}u.splice(S,0,k)}),u=u.map(v=>{const A=v.key;return d.has(A)?v:m.createElement(Re,{key:ft(v),isPresent:!0,presenceAffectsLayout:r,mode:o},v)}),m.createElement(m.Fragment,null,d.size?u:u.map(v=>m.cloneElement(v)))},id=T(qu.div)`
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
`,sd=({calendarRef:t,refData:e,waterData:n={}})=>{const{data:i,waterRate:s,dailyNormFulfillment:r,servingOfWater:o}=n,a=e==null?void 0:e.current.getBoundingClientRect().left,l=t==null?void 0:t.current.getBoundingClientRect().left;let c=!0;const u=a-l;return u<300&&(c=!1),f.jsx(id,{variants:Or,initial:"initial",animate:"animate",exit:"exit",$delta:c,$deltaNum:u,children:Object.values(n).length?f.jsxs(f.Fragment,{children:[f.jsx("h3",{children:i}),f.jsxs("p",{children:["Daily norma: ",f.jsxs("span",{children:[s," L"]})]}),f.jsxs("p",{children:["Fulfillment of the daily norm: ",f.jsxs("span",{children:[r,"%"]})]}),f.jsxs("p",{children:["How many servings of water: ",f.jsx("span",{children:o})]})]}):f.jsx("h3",{children:"You do not have info about this day."})})},od=({calendarRef:t,day:e,waterPercentage:n})=>{const[i,s]=m.useState(null),r=m.useRef(null),o=l=>{r.current&&!r.current.contains(l.target)&&s(null)};m.useEffect(()=>(document.addEventListener("click",o),()=>{document.removeEventListener("click",o)}),[]);const a=m.useCallback((l=null)=>{s(c=>c===l?null:l)},[]);return f.jsxs(Ir,{children:[f.jsx(nd,{children:i===e&&f.jsx(sd,{calendarRef:t,refData:r,waterData:n==null?void 0:n.percentage},e)}),f.jsx(Rr,{ref:r,onClick:()=>a(e),$isOutlineVisible:!(n!=null&&n.percentage)||n.dailyNormFulfillment<100,children:e}),f.jsx(Fr,{children:n!=null&&n.percentage?`${n.percentage}%`:"0%"})]},e)},rd=()=>{const[t,e]=m.useState(new Date),n=at(),i=st(Ho),s=m.useRef(null);m.useEffect(()=>{n(Bo(t.getMonth()))},[n,t]);const r=()=>{e(new Date(t.getFullYear(),t.getMonth()+1,1))},o=()=>{e(new Date(t.getFullYear(),t.getMonth()-1,1))},a=()=>new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),l=()=>{const c=a();return Array.from({length:c},(d,h)=>h+1).map(d=>{const h=i==null?void 0:i.find(p=>Number(p.data.split(",")[0])===d);return f.jsx(od,{calendarRef:s,day:d,waterPercentage:h},d)})};return f.jsxs(Dr,{className:"calendar",ref:s,children:[f.jsxs(Er,{children:[f.jsx("h2",{children:"Month"}),f.jsxs(Lr,{children:[f.jsx(Tn,{"aria-label":"Previous month",onClick:o,children:f.jsx(jr,{})}),f.jsx(Br,{children:new Intl.DateTimeFormat("en-US",{month:"long"}).format(t)}),f.jsx(Tn,{"aria-label":"Previous month",onClick:r,children:f.jsx(Mr,{})})]})]}),f.jsx(Wr,{children:l()})]})},ji="data:image/png;base64,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",Mi="data:image/png;base64,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",ad="/5th-project-group/assets/bottle-home-screen@1x-3e49b9b1.png",ld="data:image/png;base64,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",cd="/5th-project-group/assets/bottle-home-screen@2x-f33f821a.png",ud="/5th-project-group/assets/background-element-home-screen@2x-6484bcc9.png",dd="/5th-project-group/assets/bottle-home-screen@1x-844f0318.png",hd="/5th-project-group/assets/bottle-home-screen@2x-9f5b1d1b.png",fd=I.div`
  position: absolute;
  max-width: 320px;
  width: 100%;
  height: 570px;
  top: 28px;
  left: 0;
  z-index: -10;
  background-image: url(${ji}),
    url(${Mi});
  background-size: 280px, cover;
  background-position:
    top 56px left 20px,
    top 0 left 0;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${ji}),
      url(${Mi});
  }
  @media (min-width: 768px) {
    max-width: 768px;
    width: 100%;
    height: 680px;
    top: -16px;
    left: 0;
    background-image: url(${ad}),
      url(${ld});
    background-size: 518px, cover;
    background-position:
      top 16px left 125px,
      top 0 left 0;
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${cd}),
        url(${ud});
    }
  }
  @media (min-width: 1440px) {
    max-width: 1404px;
    width: 100%;
    height: 100%;
    top: 0;
    left: 9px;
    background-image: url(${dd}),
      url(${Wo});
    background-size: 738px, 1404px;
    background-position:
      top 0 left 30px,
      top 38px left 0;

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${hd}),
        url(${Io});
    }
  }
`,pd=I.div`
  margin: 0 auto;

  @media (min-width: 1440px) {
    display: flex;
    gap: 32px;
  }
`,md=I.div`
  padding: 24px 8px;
  background-color: ${V.secondaryColor2WhiteBlue};
  border-radius: 10px;
  box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.3);

  @media (min-width: 768px) {
    padding: 32px 24px;

    @media (min-width: 1440px) {
      width: 592px;
    }
  }
`,gd=I.div`
  height: 260px;
  overflow-y: auto;
  margin-bottom: 24px;

  &::-webkit-scrollbar {
    width: 4px;
    height: 100%;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${V.secondaryColor4};
    border-radius: 8px;
  }
`,xd=I.div`
  margin-bottom: 40px;

  @media (min-width: 1440px) {
    padding-top: 32px;
    margin-bottom: 0;
  }
`,Ad=T.div`
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
`,yd=T.div`
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
`,vd=T.button`
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
`,bd=T.h1`
  margin-bottom: 24px;
  color: var(--Primery-Color-Black, #2f2f2f);
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
`,wd=T.div`
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
`,Td=T.p`
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
`,Pd=T.form`
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

  .valid-text {
    color: red;
    margin-top: -20px;
  }
`;function Sd({closeModal:t}){const e=at(),[n,i]=m.useState(0),[s,r]=m.useState(0),[o,a]=m.useState("woman"),[l,c]=m.useState(0),[u,d]=m.useState(0),[h,p]=m.useState(!1);m.useEffect(()=>(window.addEventListener("keydown",g),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",g),document.body.style.overflow="auto"}));const g=A=>{A.code==="Escape"&&t()},x=A=>{A.target===A.currentTarget&&t()},y=A=>{const{name:b,value:S}=A.target;switch(b){case"weight":i(S);break;case"activeTime":r(S);break;case"waterToDrink":d(S);break;case"gender":a(S);break}},w=async A=>{A.preventDefault();const b={waterRate:u*1e3};if(u<=0){p(!0);return}if(u>15){p(!0);return}await e(Fo(b)),i(0),r(0),d(0),p(!1),t()},v=(A,b,S)=>{if(A==="woman"){const k=b*.03+S*.4;c(k.toFixed(1))}else{const k=b*.04+S*.6;c(k.toFixed(1))}};return m.useEffect(()=>{v(o,n,s)},[s,n,o]),f.jsx(Ad,{onClick:x,children:f.jsxs(yd,{children:[f.jsx(vd,{onClick:t,children:f.jsx(Fi,{})}),f.jsx(bd,{children:"My daily norma"}),f.jsxs(wd,{children:[f.jsxs("p",{className:"formula-text",children:["For girl:"," ",f.jsx("span",{className:"formula-acsent",children:"V=(M*0,03) + (T*0,4)"})]}),f.jsxs("p",{className:"formula-text",children:["For man:"," ",f.jsx("span",{className:"formula-acsent",children:"V=(M*0,04) + (T*0,6)"})]})]}),f.jsxs(Td,{children:[f.jsx("span",{className:"acsent-color",children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]}),f.jsxs(Pd,{onSubmit:w,children:[f.jsx("h2",{className:"sub-title",children:"Calculate your rate:"}),f.jsxs("div",{className:"gender-lable",children:[f.jsxs("label",{children:[f.jsx("input",{type:"radio",name:"gender",value:"woman",onChange:y,checked:o==="woman",className:"check"}),f.jsx("span",{className:"chek-title",children:"For woman"})]}),f.jsxs("label",{htmlFor:"",children:[f.jsx("input",{type:"radio",name:"gender",value:"man",onChange:y,checked:o==="man",className:"check"}),f.jsx("span",{className:"chek-title",children:"For man"})]})]}),f.jsx("p",{className:"weight-title",children:"Your weight in kilograms:"}),f.jsx("label",{className:"weight-lable",children:f.jsx("input",{type:"number",min:0,name:"weight",value:n,onChange:y,className:"form-input"})}),f.jsx("p",{className:"activeTime-title",children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),f.jsx("label",{className:"activeTime-lable",children:f.jsx("input",{type:"number",min:0,name:"activeTime",value:s,onChange:y,className:"form-input"})}),f.jsxs("div",{className:"litersPerDay-container",children:[f.jsx("p",{className:"litersPerDay-text",children:"The required amount of water in liters per day:"})," ",f.jsxs("span",{className:"calculated-litersPerDay",children:[l," L"]})]}),f.jsx("h2",{className:"sub-title",children:"Write down how much water you will drink:"}),f.jsx("label",{className:"waterToDrink-lable",children:f.jsx("input",{type:"number",name:"waterToDrink",value:u,onChange:y,className:"form-input",required:!0})}),h&&f.jsx("p",{className:"valid-text",children:"Enter a value between 1 and 15"}),f.jsx("button",{type:"submit",className:"submit-btn",children:"Save"})]})]})})}const Dd=()=>{const[t,e]=m.useState(!1),n=()=>{e(!t)};return f.jsxs(f.Fragment,{children:[f.jsx(fd,{}),f.jsxs(pd,{children:[f.jsxs(xd,{children:[f.jsx(No,{openModal:n}),f.jsx(rr,{})]}),f.jsxs(md,{children:[f.jsx(gd,{children:f.jsx(kr,{})}),f.jsx(rd,{})]})]}),t&&f.jsx(Sd,{closeModal:n})]})};export{Dd as default};
