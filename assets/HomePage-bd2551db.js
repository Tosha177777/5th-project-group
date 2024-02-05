import{n as i,o as r,c as o,l as c,j as t,r as n,u as a}from"./index-b7f10371.js";const u=i.div`
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
    top: 0;
    left: 0;
    background-image: url('src/images/tablet/bottle-home-screen@1x.png'),
     url('src/images/tablet/background-element-home-screen@1x.png');
    background-size: 518px, cover;
    background-position: top 0 left 125px, top 0 left 0;
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
`;i.div`
  margin: 0 auto;
  padding: 0px 20px;

  @media only screen and (max-width: 767px){
    max-width: 320px;
    margin: 0 auto;
    padding: 0px 20px;

  }

  @media only screen and (min-width: 768px){
    max-width: 768px;
    padding: 0px 32px;
  }

  @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    padding: 0px 112px;
    max-width: 1404px;
    width: 100%;
    height: 650px;
   
  }

`;i.div`
  padding: 24px 0 0px 0;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding: 40px 0 0px 0;
  }
  @media only screen and (min-width: 1440px) {
    min-width: 650px;
    padding: 52px 0 0 0;
  }
  p {
    front-size: 18px;
    color: #407bff;
    padding: 30px;
  }
`;i.div`
  padding: 40px 0px;

  @media only screen and (min-width: 768px) {
    padding: 44px 0px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 20px 0px 40px 0;
  }
`;i.div`
  box-sizing: border-box;
  max-width: 100%;
  background: var(--Secondary-color-2, #ecf2ff);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  border-radius: 10px;
  padding: 24px 8px;
  height: 836px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  @media only screen and (min-width: 768px) {
    padding: 32px 24px;
    height: 688px;
  }

  @media only screen and (min-width: 1440px) {
    max-width: 592px;
    max-height: 680px;
  }
`;const p=e=>e.water,g=r(p,e=>e.waterToDrink),b=r(p,e=>e.todayWaterConsumption);r(p,e=>e.monthWaterConsumption);r(p,e=>e.isLoading);r(p,e=>e.error);const w=i.div`
padding: 8px 20px;
margin-bottom: 232px;
width: 166px;
border: 1px solid ${o.secondaryColor2WhiteBlue};
border-radius: 10px;
box-shadow: 0 4px 8px 0 rgba(158, 187, 255, 0.12);

@media (min-width: 768px) {
    margin-bottom: 326px;
  }

  @media (min-width: 768px) {
    margin-bottom: 466px;
  }

`,f=i.p`
margin-bottom: 12px;
font-size: 18px;
font-weight: 500;
line-height: 1.33;
color: ${o.primaryColorBlack};

`,y=i.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;

  p {
    font-weight: 700;
    font-size: 22px;
    line-height: 1;
    color: ${o.primaryColorBlue};

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
`,v=()=>{const e=c(g);return t.jsxs(w,{children:[t.jsx(f,{children:"My daily norma"}),t.jsxs(y,{children:[t.jsxs("p",{children:[e/1e3," L"]}),t.jsx("button",{children:"Edit"})]})]})},k=e=>n.createElement("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",strokeLinecap:"round",strokeLinejoin:"round"})),j=i.div`
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

`,S=i.div`
margin-bottom: 16px;

@media (min-width: 768px) {
    margin-bottom: 0;
    width: 356px;
  }

  @media (min-width: 1440px) {
    width: 391px;
  }
`,Z=i.p`
margin-bottom: 8px;
font-size: 18px;
line-height: 1.33;
color: ${o.primaryColorBlue};

`,L=i.div`
position: relative;
top: 0;
margin-left: auto;
margin-right: auto;
margin-bottom: 3px;
margin-top: 3px;
width: 256px;
height: 8px;
background-color:${o.secondaryColor6};
border-radius: 10px;

@media (min-width: 768px) {
    width: 325px;
  }

  @media (min-width: 1440px) {
    width: 360px;
  }

`,z=i.div`
position: absolute;                   
height: 8px;
background-color:${o.secondaryColor4};
border-radius: 10px;

`,E=i.div`
position: absolute;
top: -4px;
left: 193px;              //add valuable
width: 14px;
height: 14px;
background-color:${o.primaryColorWhite};
border: 1px solid ${o.primaryColorBlue};
border-radius: 50%;

`,W=i.div`
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
  border-left: 2px solid ${o.secondaryColor6};
}

`,$=i.span`
display: block;
position: absolute;
top: 8px;
font-size: 16px;
line-height: 1.25;
`,B=i.button`
height: 44px;
display: flex;
gap: 10px;
align-items: center;
padding: 6px 76px;
border-radius: 10px;
border: none;
stroke: ${o.primaryColorWhite};
background-color:${o.primaryColorBlue};
box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);

@media (min-width: 768px) {
    padding: 10px 104px;
  }

  @media (min-width: 1440px) {
    padding: 10px 30px;
  }

:hover {
   box-shadow: none;
  }

span{
display:inline-block;
padding: 0 9px;
font-weight: 500;
font-size: 16px;
line-height: 1.25;
color: ${o.primaryColorWhite};

@media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }

  @media (min-width: 768px) {
    padding: 0;
  }
}

`,C=()=>{const e=c(g),s=c(b),d=n.useMemo(()=>(s&&s.reduce((l,x)=>l+x.waterVolume,0),0),[s]);return n.useEffect(()=>{const l=document.getElementById("progress-line"),x=document.getElementById("drunken-water"),h=document.getElementById("progress-percent"),m=1600/2e3*100;l.style.width=`${m}%`,x.style.left=`${m-1}%`,h.style.left=`${m}%`},[d,e]),t.jsxs(j,{children:[t.jsxs(S,{children:[t.jsx(Z,{children:"Today"}),t.jsxs(L,{children:[t.jsx(z,{id:"progress-line"}),t.jsx(E,{id:"drunken-water"})]}),t.jsxs(W,{children:[t.jsx("p",{children:"0%"}),t.jsx("p",{children:"100%"}),d>0||d!==100?t.jsxs($,{id:"progress-percent",children:[d/e*100,"%"]}):null]})]}),t.jsxs(B,{children:[t.jsx(k,{}),t.jsx("span",{children:"Add Water"})]})]})},M=e=>n.createElement("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.166L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397M4.772 5.79a43.48 43.48 0 0 0-1.022.165m1.022-.165a48.111 48.111 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.967 51.967 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.668 48.668 0 0 0-7.5 0",stroke:"#2F2F2F",strokeLinecap:"round",strokeLinejoin:"round"})),F=e=>n.createElement("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 0 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10",stroke:"#2F2F2F",strokeLinecap:"round",strokeLinejoin:"round"})),H=e=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24",...e},n.createElement("path",{fill:"#407BFF",fillRule:"evenodd",d:"M12 5.25a.75.75 0 0 1 .75.75v5.25H18a.75.75 0 1 1 0 1.5h-5.25V18a.75.75 0 1 1-1.5 0v-5.25H6a.75.75 0 1 1 0-1.5h5.25V6a.75.75 0 0 1 .75-.75Z",clipRule:"evenodd"})),P=e=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:23,height:30,fill:"none",viewBox:"0 0 23 30",...e},n.createElement("path",{fill:"#407BFF",d:"M.26.13 2.4 29.79v.08h18.412L22.951.224V.13H.26ZM20.056 29.04H3.162L1.558 6.824h.881l1.45 19.578c.01.103.055.199.13.27.075.07.173.11.275.11h.034a.4.4 0 0 0 .277-.14.41.41 0 0 0 .098-.298l-1.45-19.52H21.66l-1.605 22.215Zm1.661-23.046H3.19l-.318-4.328a.423.423 0 0 0-.137-.274.412.412 0 0 0-.284-.106.413.413 0 0 0-.277.145.425.425 0 0 0-.099.299l.319 4.27H1.5L1.137.956H22.08l-.364 5.037Z"}),n.createElement("path",{fill:"#407BFF",d:"M6.78 10.932c.265 0 .524-.08.745-.23.221-.149.393-.362.495-.61a1.38 1.38 0 0 0-.291-1.485 1.325 1.325 0 0 0-1.463-.295 1.347 1.347 0 0 0-.603.502 1.376 1.376 0 0 0 .167 1.72c.252.255.593.398.95.398Zm0-1.898a.524.524 0 0 1 .488.331.544.544 0 0 1-.115.585.526.526 0 0 1-.903-.38.54.54 0 0 1 .155-.38c.1-.1.234-.156.374-.156ZM6.774 15.358c.003.269.085.53.234.752.15.222.361.394.607.494a1.325 1.325 0 0 0 1.458-.309 1.38 1.38 0 0 0 .28-1.484 1.358 1.358 0 0 0-.497-.607 1.329 1.329 0 0 0-1.697.182 1.364 1.364 0 0 0-.385.972Zm1.865 0a.542.542 0 0 1-.326.496.522.522 0 0 1-.577-.117.54.54 0 0 1 .374-.916c.14 0 .275.057.374.157.1.101.155.238.155.38ZM16.313 15.392c.265 0 .525-.08.745-.23.221-.149.393-.361.495-.61a1.38 1.38 0 0 0-.291-1.484 1.325 1.325 0 0 0-1.463-.295 1.348 1.348 0 0 0-.603.501 1.376 1.376 0 0 0 .167 1.72c.252.255.594.398.95.398Zm0-1.892a.524.524 0 0 1 .489.332.544.544 0 0 1-.117.586.527.527 0 0 1-.901-.387.54.54 0 0 1 .157-.376.525.525 0 0 1 .372-.155ZM11.637 12.825c.265 0 .525-.08.746-.23.22-.15.392-.362.494-.61a1.38 1.38 0 0 0-.29-1.485 1.324 1.324 0 0 0-1.463-.295 1.346 1.346 0 0 0-.603.501 1.376 1.376 0 0 0 .167 1.72c.251.255.593.399.949.399Zm0-1.899a.523.523 0 0 1 .489.332.544.544 0 0 1-.115.584.528.528 0 0 1-.577.117.53.53 0 0 1-.326-.496.546.546 0 0 1 .144-.398.528.528 0 0 1 .385-.167v.028ZM9.077 20.545c.006.221.076.436.2.617.126.181.301.321.504.402a1.095 1.095 0 0 0 1.2-.262 1.13 1.13 0 0 0 .227-1.223 1.122 1.122 0 0 0-.409-.5 1.098 1.098 0 0 0-.613-.188 1.13 1.13 0 0 0-.786.348 1.163 1.163 0 0 0-.323.806Zm1.11-.3a.293.293 0 0 1 .273.185.304.304 0 0 1-.065.327.295.295 0 0 1-.504-.212c0-.08.03-.156.086-.212a.294.294 0 0 1 .21-.088ZM14.441 19.293c.228.008.453-.053.646-.177.193-.123.345-.302.436-.514a1.17 1.17 0 0 0-.234-1.274 1.133 1.133 0 0 0-1.254-.25c-.21.09-.387.243-.51.437a1.166 1.166 0 0 0 .147 1.436c.204.21.48.332.77.342Zm0-1.425c.079 0 .154.032.21.088a.303.303 0 0 1 0 .424.294.294 0 0 1-.42 0 .308.308 0 0 1-.091-.212.305.305 0 0 1 .089-.214.293.293 0 0 1 .212-.086ZM16.785 9.98c.225 0 .445-.068.632-.194a1.15 1.15 0 0 0 .419-.518 1.17 1.17 0 0 0-.247-1.258 1.133 1.133 0 0 0-1.24-.25 1.142 1.142 0 0 0-.51.425 1.166 1.166 0 0 0 .141 1.457c.213.216.503.338.805.338Zm0-1.425a.292.292 0 0 1 .346.155.304.304 0 0 1-.087.373.294.294 0 0 1-.26.049.292.292 0 0 1-.345-.155.304.304 0 0 1 .086-.373.294.294 0 0 1 .26-.05ZM5.664 27.59a.41.41 0 0 0-.217.247.421.421 0 0 0 .03.33.42.42 0 0 0 .364.225.383.383 0 0 0 .182-.04 12.27 12.27 0 0 1 5.614-1.385c2.066.03 4.104.496 5.984 1.368a.404.404 0 0 0 .465-.061.417.417 0 0 0 .104-.464.425.425 0 0 0-.216-.231 15.517 15.517 0 0 0-6.337-1.443c-2.076.002-4.122.5-5.973 1.454Z"}));a.div`
    box-sizing: content-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0px;
    height: 26px;
    border-bottom: 1px solid #d7e3ff;

    p {

      font-family: Roboto;
      font-size: 18px;
    }
`;a(F)`

    color: blue;
    margin-left: 120px;
    margin-right: 12px;
`;a.button`
    background-color: #ffffff;
`;a(M)`

    color: #EF5050;
 `;a(H)`
    position: relative;
    color: blue;
    top:-90%;
    left: -45%;
    padding: 0px 8px -10px 12px;
    margin: 0px 8px 0px 8px;
`;a.button`
    width: 97px;
    height: 20px;
    padding-top: 8px; 

    p {
                
        font-family: Roboto;
        font-size: 16px;
         
    }

    @media only screen and (min-width: 768px){
        width: 114px;
        height: 24px;
    }
`;a.p`
    margin-left: 8px;
    margin-right: 16px;
    font-size: 18px;
`;a(P)`
    width: 26px;
    height: 26px;

    @media only screen and (min-width: 768px){
        width: 36px;
        height: 36px; 
    }
`;const R=()=>t.jsxs(t.Fragment,{children:[t.jsx(u,{}),t.jsx(v,{}),t.jsx(C,{})]});export{R as default};
