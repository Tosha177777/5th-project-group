import{n as I,c as j,m as Ft,p as to,f as Nt,r as m,q as eo,j as p,t as $t,v as Vi,u as A,R as Ai,w as no,I as xn,x as io,y as so}from"./index-bade00a7.js";const oo=I.div`
padding: 8px 20px;
margin-bottom: 232px;
width: 166px;
border: 1px solid ${j.secondaryColor2WhiteBlue};
border-radius: 10px;
box-shadow: 0 4px 8px 0 rgba(158, 187, 255, 0.12);

@media (min-width: 768px) {
    margin-bottom: 326px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 466px;
  }

`,ro=I.p`
margin-bottom: 12px;
font-size: 18px;
font-weight: 500;
line-height: 1.33;
color: ${j.primaryColorBlack};

`,ao=I.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;

  p {
    font-weight: 700;
    font-size: 22px;
    line-height: 1;
    color: ${j.primaryColorBlue};

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
`,lo=({openModal:t})=>{const e=Ft(to),n=Nt();return m.useEffect(()=>{n(eo())},[n]),p.jsxs(oo,{children:[p.jsx(ro,{children:"My daily norma"}),p.jsxs(ao,{children:[p.jsxs("p",{children:[e.waterRate/1e3," L"]}),p.jsx("button",{type:"button",onClick:t,children:"Edit"})]})]})},Wt=t=>t.water;$t(Wt,t=>t.waterToDrink);const Mi=$t(Wt,t=>t.todayWaterConsumption),co=$t(Wt,t=>t.monthWaterConsumption),uo=$t(Wt,t=>t.isLoading);$t(Wt,t=>t.error);const ho=t=>m.createElement("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},m.createElement("path",{d:"M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",strokeLinecap:"round",strokeLinejoin:"round"})),fo=I.div`
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

`,po=I.div`
margin-bottom: 16px;

@media (min-width: 768px) {
  padding-bottom: 8px;
    margin-bottom: 0;
    width: 356px;
  }

  @media (min-width: 1440px) {
    width: 391px;
  }
`,mo=I.p`
margin-bottom: 8px;
font-size: 18px;
line-height: 1.33;
color: ${j.primaryColorBlue};

@media (min-width: 768px) {
    margin-bottom: 16px;    
  }

`,go=I.div`
position: relative;
top: 0;
margin-left: auto;
margin-right: auto;
margin-bottom: 3px;
margin-top: 3px;
width: 256px;
height: 8px;
background-color:${j.secondaryColor6};
border-radius: 10px;

@media (min-width: 768px) {
    width: 325px;
  }

  @media (min-width: 1440px) {
    width: 360px;
  }

`,yo=I.div`
position: absolute;                   
height: 8px;
background-color:${j.secondaryColor4};
border-radius: 10px;

`,xo=I.div`
position: absolute;
top: -4px;
left: 0;              
width: 14px;
height: 14px;
background-color:${j.primaryColorWhite};
border: 1px solid ${j.primaryColorBlue};
border-radius: 50%;

`,vo=I.div`
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
  border-left: 2px solid ${j.secondaryColor6};
}

`,bo=I.span`
display: block;
position: absolute;
top: 8px;
font-size: 16px;
line-height: 1.25;
`,wo=I.button`
height: 44px;
display: flex;
gap: 10px;
align-items: center;
padding: 6px 76px;
border-radius: 10px;
border: none;
stroke: ${j.primaryColorWhite};
background-color:${j.primaryColorBlue};
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
color: ${j.primaryColorWhite};

@media (min-width: 768px) {
    padding: 0 5px;
    font-size: 18px;
    line-height: 1.33;
  }

  @media (min-width: 1440px) {
    padding: 0;
  }
}

`,Po=()=>{const t=Ft(Mi),e=m.useRef(null),n=m.useRef(null),i=m.useRef(null),s=Nt();m.useEffect(()=>{s(Vi())},[s]);const r=m.useMemo(()=>t?t.percentage:0,[t]);return m.useEffect(()=>{const o=e.current,a=n.current,l=i.current;o&&a&&l&&(o.style.width=`${r>100?100:r}%`,a.style.left=`${r>100?100:r-1}%`,l.style.left=`${r>100?100:r}%`)},[r]),p.jsxs(fo,{children:[p.jsxs(po,{children:[p.jsx(mo,{children:"Today"}),p.jsxs(go,{children:[p.jsx(yo,{ref:e}),p.jsx(xo,{ref:n})]}),p.jsxs(vo,{children:[p.jsx("p",{children:"0%"}),p.jsx("p",{children:"100%"}),r>0||r<100?p.jsxs(bo,{ref:i,children:[r,"%"]}):null]})]}),p.jsxs(wo,{children:[p.jsx(ho,{}),p.jsx("span",{children:"Add Water"})]})]})},To=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:23,height:30,fill:"none",viewBox:"0 0 23 30",...t},m.createElement("path",{fill:"#407BFF",d:"M.26.13 2.4 29.79v.08h18.412L22.951.224V.13H.26ZM20.056 29.04H3.162L1.558 6.824h.881l1.45 19.578c.01.103.055.199.13.27.075.07.173.11.275.11h.034a.4.4 0 0 0 .277-.14.41.41 0 0 0 .098-.298l-1.45-19.52H21.66l-1.605 22.215Zm1.661-23.046H3.19l-.318-4.328a.423.423 0 0 0-.137-.274.412.412 0 0 0-.284-.106.413.413 0 0 0-.277.145.425.425 0 0 0-.099.299l.319 4.27H1.5L1.137.956H22.08l-.364 5.037Z"}),m.createElement("path",{fill:"#407BFF",d:"M6.78 10.932c.265 0 .524-.08.745-.23.221-.149.393-.362.495-.61a1.38 1.38 0 0 0-.291-1.485 1.325 1.325 0 0 0-1.463-.295 1.347 1.347 0 0 0-.603.502 1.376 1.376 0 0 0 .167 1.72c.252.255.593.398.95.398Zm0-1.898a.524.524 0 0 1 .488.331.544.544 0 0 1-.115.585.526.526 0 0 1-.903-.38.54.54 0 0 1 .155-.38c.1-.1.234-.156.374-.156ZM6.774 15.358c.003.269.085.53.234.752.15.222.361.394.607.494a1.325 1.325 0 0 0 1.458-.309 1.38 1.38 0 0 0 .28-1.484 1.358 1.358 0 0 0-.497-.607 1.329 1.329 0 0 0-1.697.182 1.364 1.364 0 0 0-.385.972Zm1.865 0a.542.542 0 0 1-.326.496.522.522 0 0 1-.577-.117.54.54 0 0 1 .374-.916c.14 0 .275.057.374.157.1.101.155.238.155.38ZM16.313 15.392c.265 0 .525-.08.745-.23.221-.149.393-.361.495-.61a1.38 1.38 0 0 0-.291-1.484 1.325 1.325 0 0 0-1.463-.295 1.348 1.348 0 0 0-.603.501 1.376 1.376 0 0 0 .167 1.72c.252.255.594.398.95.398Zm0-1.892a.524.524 0 0 1 .489.332.544.544 0 0 1-.117.586.527.527 0 0 1-.901-.387.54.54 0 0 1 .157-.376.525.525 0 0 1 .372-.155ZM11.637 12.825c.265 0 .525-.08.746-.23.22-.15.392-.362.494-.61a1.38 1.38 0 0 0-.29-1.485 1.324 1.324 0 0 0-1.463-.295 1.346 1.346 0 0 0-.603.501 1.376 1.376 0 0 0 .167 1.72c.251.255.593.399.949.399Zm0-1.899a.523.523 0 0 1 .489.332.544.544 0 0 1-.115.584.528.528 0 0 1-.577.117.53.53 0 0 1-.326-.496.546.546 0 0 1 .144-.398.528.528 0 0 1 .385-.167v.028ZM9.077 20.545c.006.221.076.436.2.617.126.181.301.321.504.402a1.095 1.095 0 0 0 1.2-.262 1.13 1.13 0 0 0 .227-1.223 1.122 1.122 0 0 0-.409-.5 1.098 1.098 0 0 0-.613-.188 1.13 1.13 0 0 0-.786.348 1.163 1.163 0 0 0-.323.806Zm1.11-.3a.293.293 0 0 1 .273.185.304.304 0 0 1-.065.327.295.295 0 0 1-.504-.212c0-.08.03-.156.086-.212a.294.294 0 0 1 .21-.088ZM14.441 19.293c.228.008.453-.053.646-.177.193-.123.345-.302.436-.514a1.17 1.17 0 0 0-.234-1.274 1.133 1.133 0 0 0-1.254-.25c-.21.09-.387.243-.51.437a1.166 1.166 0 0 0 .147 1.436c.204.21.48.332.77.342Zm0-1.425c.079 0 .154.032.21.088a.303.303 0 0 1 0 .424.294.294 0 0 1-.42 0 .308.308 0 0 1-.091-.212.305.305 0 0 1 .089-.214.293.293 0 0 1 .212-.086ZM16.785 9.98c.225 0 .445-.068.632-.194a1.15 1.15 0 0 0 .419-.518 1.17 1.17 0 0 0-.247-1.258 1.133 1.133 0 0 0-1.24-.25 1.142 1.142 0 0 0-.51.425 1.166 1.166 0 0 0 .141 1.457c.213.216.503.338.805.338Zm0-1.425a.292.292 0 0 1 .346.155.304.304 0 0 1-.087.373.294.294 0 0 1-.26.049.292.292 0 0 1-.345-.155.304.304 0 0 1 .086-.373.294.294 0 0 1 .26-.05ZM5.664 27.59a.41.41 0 0 0-.217.247.421.421 0 0 0 .03.33.42.42 0 0 0 .364.225.383.383 0 0 0 .182-.04 12.27 12.27 0 0 1 5.614-1.385c2.066.03 4.104.496 5.984 1.368a.404.404 0 0 0 .465-.061.417.417 0 0 0 .104-.464.425.425 0 0 0-.216-.231 15.517 15.517 0 0 0-6.337-1.443c-2.076.002-4.122.5-5.973 1.454Z"})),Co=t=>m.createElement("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},m.createElement("path",{d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 0 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10",strokeLinecap:"round",strokeLinejoin:"round"})),So=t=>m.createElement("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},m.createElement("path",{d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.166L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397M4.772 5.79a43.48 43.48 0 0 0-1.022.165m1.022-.165a48.111 48.111 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.967 51.967 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.668 48.668 0 0 0-7.5 0",strokeLinecap:"round",strokeLinejoin:"round"})),Vo=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...t},m.createElement("path",{fill:"#407BFF",fillRule:"evenodd",d:"M12 5.25a.75.75 0 0 1 .75.75v5.25H18a.75.75 0 1 1 0 1.5h-5.25V18a.75.75 0 1 1-1.5 0v-5.25H6a.75.75 0 1 1 0-1.5h5.25V6a.75.75 0 0 1 .75-.75Z",clipRule:"evenodd"})),Ao=A.p`
    margin-bottom: 16px;
    font-size: 24px;
    line-height: 1.25;
    font-weight: 500;
    color: ${j.primaryColorBlack};

    @media (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;   
  }
`,Mo=A.ul`
 margin-bottom: 12px;
 display: flex;
 flex-direction: column;
`,Do=A.li`
 display: flex;
 align-items: center;
 padding: 12px 0;
 margin-bottom: 12px;
 border-bottom: 1px solid ${j.secondaryColor6};
 
`,ko=A.p`
    margin-left: 12px;
    font-size: 18px;
    line-height: 1.33;
`,jo=A.p`
    margin-left: 12px;
    margin-right: 38px;
    font-size: 12px;
    line-height: 2;
    color: ${j.primaryColorBlack};

    @media (min-width: 768px) {
    margin-right: auto;
    margin-left: 16px;
  }
`,Ro=A.button`
    padding: 0;
    border: none;
    background-color: transparent;
    stroke: ${j.secondaryColor4};
    margin-right: 18px;
    
    :hover {
    border-bottom: 1px solid ${j.secondaryColor4};
    }
`,Lo=A.button`
    padding: 0;
    border: none;
    background-color: transparent;
    stroke: ${j.secondaryColor3};

    :hover {
    border-bottom: 1px solid ${j.secondaryColor3};
    }
`,Eo=A.button`
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 0;
    border: none;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    color: ${j.primaryColorBlue};
    background-color: transparent;
    transition: color ease-in-out 250ms;

    :hover {
    color: ${j.secondaryColor5};
    fill: ${j.secondaryColor5};
    }
`,vn=A.p`
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 30px;
    width: 250px;
    text-align: center;
    font-size: 16px;
    line-height: 1.33;
    color: ${j.secondaryColor4}; 
`,Fo=()=>{const t=Ft(Mi),e=Ft(uo),n=Nt();m.useEffect(()=>{n(Vi())},[n]);const i=m.useMemo(()=>t?t.dayPortions:[],[t]);return p.jsxs(p.Fragment,{children:[p.jsx(Ao,{children:"Today"}),e&&p.jsx(vn,{children:"Please wait. Loading..."}),Array.isArray(i)&&i.length>0?p.jsx(Mo,{children:i.map(({id:s,date:r,waterVolume:o})=>p.jsxs(Do,{children:[p.jsx(To,{}),p.jsx(ko,{children:r}),p.jsx(jo,{children:o}),p.jsx(Ro,{children:p.jsx(Co,{})}),p.jsx(Lo,{children:p.jsx(So,{})})]},s)).join("")}):p.jsx(vn,{children:'There are no records for today. Press "Add Water" to add.'}),p.jsxs(Eo,{children:[p.jsx(Vo,{}),p.jsx("span",{children:"Add water"})]})]})},Bo=A.div`
  display: flex;
  flex-direction: column;
  height: 506px;

  @media screen and (min-width: 768px) {
    height: 340px;
  }
  @media screen and (min-width: 1440px) {
    height: 284px;
  }
`,Oo=A.div`
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
`,bn=A.button`
  cursor: pointer;
  margin: 0 10px;
  background-color: rgba(0, 0, 255, 0);
`,Io=A.div`
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
`,No=A.div`
  color: var(--primery-color-blue, #407bff);
  display: flex;
  align-items: center;
  justify-content: center;
`,$o=A.span`
  font-size: 16px;
  line-height: 20px;
`,Wo=A.span`
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
`,zo=A.div`
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
`,Uo=A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,Ho={initial:{scaleY:0,opacity:0},animate:{scaleY:1,opacity:1,transition:{duration:.3}},exit:{scaleY:0,opacity:0,transition:{duration:.3}}},Di=m.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),le=m.createContext({}),ce=m.createContext(null),ue=typeof document<"u",Ue=ue?m.useLayoutEffect:m.useEffect,ki=m.createContext({strict:!1}),He=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Go="framerAppearId",ji="data-"+He(Go),Ri={skipAnimations:!1,useManualTiming:!1};class wn{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function Ko(t){let e=new wn,n=new wn,i=0,s=!1,r=!1;const o=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const h=u&&s,d=h?e:n;return c&&o.add(l),d.add(l)&&h&&s&&(i=e.order.length),l},cancel:l=>{n.remove(l),o.delete(l)},process:l=>{if(s){r=!0;return}if(s=!0,[e,n]=[n,e],n.clear(),i=e.order.length,i)for(let c=0;c<i;c++){const u=e.order[c];o.has(u)&&(a.schedule(u),t()),u(l)}s=!1,r&&(r=!1,a.process(l))}};return a}const _t=["prepare","read","update","preRender","render","postRender"],_o=40;function Li(t,e){let n=!1,i=!0;const s={delta:0,timestamp:0,isProcessing:!1},r=_t.reduce((h,d)=>(h[d]=Ko(()=>n=!0),h),{}),o=h=>{r[h].process(s)},a=()=>{const h=performance.now();n=!1,s.delta=i?1e3/60:Math.max(Math.min(h-s.timestamp,_o),1),s.timestamp=h,s.isProcessing=!0,_t.forEach(o),s.isProcessing=!1,n&&e&&(i=!1,t(a))},l=()=>{n=!0,i=!0,s.isProcessing||t(a)};return{schedule:_t.reduce((h,d)=>{const f=r[d];return h[d]=(g,x=!1,b=!1)=>(n||l(),f.schedule(g,x,b)),h},{}),cancel:h=>_t.forEach(d=>r[d].cancel(h)),state:s,steps:r}}const{schedule:Ge,cancel:Au}=Li(queueMicrotask,!1);function Zo(t,e,n,i){const{visualElement:s}=m.useContext(le),r=m.useContext(ki),o=m.useContext(ce),a=m.useContext(Di).reducedMotion,l=m.useRef();i=i||r.renderer,!l.current&&i&&(l.current=i(t,{visualState:e,parent:s,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const c=l.current;m.useInsertionEffect(()=>{c&&c.update(n,o)});const u=m.useRef(!!(n[ji]&&!window.HandoffComplete));return Ue(()=>{c&&(Ge.postRender(c.render),u.current&&c.animationState&&c.animationState.animateChanges())}),m.useEffect(()=>{c&&(c.updateFeatures(),!u.current&&c.animationState&&c.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))}),c}function vt(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Yo(t,e,n){return m.useCallback(i=>{i&&t.mount&&t.mount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):vt(n)&&(n.current=i))},[e])}function Bt(t){return typeof t=="string"||Array.isArray(t)}function he(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Ke=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],_e=["initial",...Ke];function de(t){return he(t.animate)||_e.some(e=>Bt(t[e]))}function Ei(t){return!!(de(t)||t.variants)}function qo(t,e){if(de(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Bt(n)?n:void 0,animate:Bt(i)?i:void 0}}return t.inherit!==!1?e:{}}function Xo(t){const{initial:e,animate:n}=qo(t,m.useContext(le));return m.useMemo(()=>({initial:e,animate:n}),[Pn(e),Pn(n)])}function Pn(t){return Array.isArray(t)?t.join(" "):t}const Tn={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ot={};for(const t in Tn)Ot[t]={isEnabled:e=>Tn[t].some(n=>!!e[n])};function Qo(t){for(const e in t)Ot[e]={...Ot[e],...t[e]}}const Ze=m.createContext({}),Fi=m.createContext({}),Jo=Symbol.for("motionComponentSymbol");function tr({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:s}){t&&Qo(t);function r(a,l){let c;const u={...m.useContext(Di),...a,layoutId:er(a)},{isStatic:h}=u,d=Xo(a),f=i(a,h);if(!h&&ue){d.visualElement=Zo(s,f,u,e);const g=m.useContext(Fi),x=m.useContext(ki).strict;d.visualElement&&(c=d.visualElement.loadFeatures(u,x,t,g))}return m.createElement(le.Provider,{value:d},c&&d.visualElement?m.createElement(c,{visualElement:d.visualElement,...u}):null,n(s,a,Yo(f,d.visualElement,l),f,h,d.visualElement))}const o=m.forwardRef(r);return o[Jo]=s,o}function er({layoutId:t}){const e=m.useContext(Ze).id;return e&&t!==void 0?e+"-"+t:t}function nr(t){function e(i,s={}){return tr(t(i,s))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(i,s)=>(n.has(s)||n.set(s,e(s)),n.get(s))})}const ir=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ye(t){return typeof t!="string"||t.includes("-")?!1:!!(ir.indexOf(t)>-1||/[A-Z]/.test(t))}const te={};function sr(t){Object.assign(te,t)}const zt=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],pt=new Set(zt);function Bi(t,{layout:e,layoutId:n}){return pt.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!te[t]||t==="opacity")}const W=t=>!!(t&&t.getVelocity),or={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},rr=zt.length;function ar(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},i,s){let r="";for(let o=0;o<rr;o++){const a=zt[o];if(t[a]!==void 0){const l=or[a]||a;r+=`${l}(${t[a]}) `}}return e&&!t.z&&(r+="translateZ(0)"),r=r.trim(),s?r=s(t,i?"":r):n&&i&&(r="none"),r}const Oi=t=>e=>typeof e=="string"&&e.startsWith(t),Ii=Oi("--"),ke=Oi("var(--"),lr=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,cr=(t,e)=>e&&typeof t=="number"?e.transform(t):t,st=(t,e,n)=>Math.min(Math.max(n,t),e),mt={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},jt={...mt,transform:t=>st(0,1,t)},Zt={...mt,default:1},Rt=t=>Math.round(t*1e5)/1e5,fe=/(-)?([\d]*\.?[\d])+/g,Ni=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,ur=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Ut(t){return typeof t=="string"}const Ht=t=>({test:e=>Ut(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),tt=Ht("deg"),_=Ht("%"),T=Ht("px"),hr=Ht("vh"),dr=Ht("vw"),Cn={..._,parse:t=>_.parse(t)/100,transform:t=>_.transform(t*100)},Sn={...mt,transform:Math.round},$i={borderWidth:T,borderTopWidth:T,borderRightWidth:T,borderBottomWidth:T,borderLeftWidth:T,borderRadius:T,radius:T,borderTopLeftRadius:T,borderTopRightRadius:T,borderBottomRightRadius:T,borderBottomLeftRadius:T,width:T,maxWidth:T,height:T,maxHeight:T,size:T,top:T,right:T,bottom:T,left:T,padding:T,paddingTop:T,paddingRight:T,paddingBottom:T,paddingLeft:T,margin:T,marginTop:T,marginRight:T,marginBottom:T,marginLeft:T,rotate:tt,rotateX:tt,rotateY:tt,rotateZ:tt,scale:Zt,scaleX:Zt,scaleY:Zt,scaleZ:Zt,skew:tt,skewX:tt,skewY:tt,distance:T,translateX:T,translateY:T,translateZ:T,x:T,y:T,z:T,perspective:T,transformPerspective:T,opacity:jt,originX:Cn,originY:Cn,originZ:T,zIndex:Sn,fillOpacity:jt,strokeOpacity:jt,numOctaves:Sn};function qe(t,e,n,i){const{style:s,vars:r,transform:o,transformOrigin:a}=t;let l=!1,c=!1,u=!0;for(const h in e){const d=e[h];if(Ii(h)){r[h]=d;continue}const f=$i[h],g=cr(d,f);if(pt.has(h)){if(l=!0,o[h]=g,!u)continue;d!==(f.default||0)&&(u=!1)}else h.startsWith("origin")?(c=!0,a[h]=g):s[h]=g}if(e.transform||(l||i?s.transform=ar(t.transform,n,u,i):s.transform&&(s.transform="none")),c){const{originX:h="50%",originY:d="50%",originZ:f=0}=a;s.transformOrigin=`${h} ${d} ${f}`}}const Xe=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Wi(t,e,n){for(const i in e)!W(e[i])&&!Bi(i,n)&&(t[i]=e[i])}function fr({transformTemplate:t},e,n){return m.useMemo(()=>{const i=Xe();return qe(i,e,{enableHardwareAcceleration:!n},t),Object.assign({},i.vars,i.style)},[e])}function pr(t,e,n){const i=t.style||{},s={};return Wi(s,i,t),Object.assign(s,fr(t,e,n)),s}function mr(t,e,n){const i={},s=pr(t,e,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=s,i}const gr=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ee(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||gr.has(t)}let zi=t=>!ee(t);function yr(t){t&&(zi=e=>e.startsWith("on")?!ee(e):t(e))}try{yr(require("@emotion/is-prop-valid").default)}catch{}function xr(t,e,n){const i={};for(const s in t)s==="values"&&typeof t.values=="object"||(zi(s)||n===!0&&ee(s)||!e&&!ee(s)||t.draggable&&s.startsWith("onDrag"))&&(i[s]=t[s]);return i}function Vn(t,e,n){return typeof t=="string"?t:T.transform(e+n*t)}function vr(t,e,n){const i=Vn(e,t.x,t.width),s=Vn(n,t.y,t.height);return`${i} ${s}`}const br={offset:"stroke-dashoffset",array:"stroke-dasharray"},wr={offset:"strokeDashoffset",array:"strokeDasharray"};function Pr(t,e,n=1,i=0,s=!0){t.pathLength=1;const r=s?br:wr;t[r.offset]=T.transform(-i);const o=T.transform(e),a=T.transform(n);t[r.array]=`${o} ${a}`}function Qe(t,{attrX:e,attrY:n,attrScale:i,originX:s,originY:r,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,h,d){if(qe(t,c,u,d),h){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:g,dimensions:x}=t;f.transform&&(x&&(g.transform=f.transform),delete f.transform),x&&(s!==void 0||r!==void 0||g.transform)&&(g.transformOrigin=vr(x,s!==void 0?s:.5,r!==void 0?r:.5)),e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),i!==void 0&&(f.scale=i),o!==void 0&&Pr(f,o,a,l,!1)}const Ui=()=>({...Xe(),attrs:{}}),Je=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Tr(t,e,n,i){const s=m.useMemo(()=>{const r=Ui();return Qe(r,e,{enableHardwareAcceleration:!1},Je(i),t.transformTemplate),{...r.attrs,style:{...r.style}}},[e]);if(t.style){const r={};Wi(r,t.style,t),s.style={...r,...s.style}}return s}function Cr(t=!1){return(n,i,s,{latestValues:r},o)=>{const l=(Ye(n)?Tr:mr)(i,r,o,n),u={...xr(i,typeof n=="string",t),...l,ref:s},{children:h}=i,d=m.useMemo(()=>W(h)?h.get():h,[h]);return m.createElement(n,{...u,children:d})}}function Hi(t,{style:e,vars:n},i,s){Object.assign(t.style,e,s&&s.getProjectionStyles(i));for(const r in n)t.style.setProperty(r,n[r])}const Gi=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Ki(t,e,n,i){Hi(t,e,void 0,i);for(const s in e.attrs)t.setAttribute(Gi.has(s)?s:He(s),e.attrs[s])}function tn(t,e){const{style:n}=t,i={};for(const s in n)(W(n[s])||e.style&&W(e.style[s])||Bi(s,t))&&(i[s]=n[s]);return i}function _i(t,e){const n=tn(t,e);for(const i in t)if(W(t[i])||W(e[i])){const s=zt.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;n[s]=t[i]}return n}function en(t,e,n,i={},s={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,s)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,s)),e}function Zi(t){const e=m.useRef(null);return e.current===null&&(e.current=t()),e.current}const ne=t=>Array.isArray(t),Sr=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),Vr=t=>ne(t)?t[t.length-1]||0:t;function Xt(t){const e=W(t)?t.get():t;return Sr(e)?e.toValue():e}function Ar({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},i,s,r){const o={latestValues:Mr(i,s,r,t),renderState:e()};return n&&(o.mount=a=>n(i,a,o)),o}const Yi=t=>(e,n)=>{const i=m.useContext(le),s=m.useContext(ce),r=()=>Ar(t,e,i,s);return n?r():Zi(r)};function Mr(t,e,n,i){const s={},r=i(t,{});for(const d in r)s[d]=Xt(r[d]);let{initial:o,animate:a}=t;const l=de(t),c=Ei(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const h=u?a:o;return h&&typeof h!="boolean"&&!he(h)&&(Array.isArray(h)?h:[h]).forEach(f=>{const g=en(t,f);if(!g)return;const{transitionEnd:x,transition:b,...w}=g;for(const v in w){let y=w[v];if(Array.isArray(y)){const P=u?y.length-1:0;y=y[P]}y!==null&&(s[v]=y)}for(const v in x)s[v]=x[v]}),s}const E=t=>t,{schedule:k,cancel:Q,state:O,steps:ye}=Li(typeof requestAnimationFrame<"u"?requestAnimationFrame:E,!0),Dr={useVisualState:Yi({scrapeMotionValuesFromProps:_i,createRenderState:Ui,onMount:(t,e,{renderState:n,latestValues:i})=>{k.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),k.render(()=>{Qe(n,i,{enableHardwareAcceleration:!1},Je(e.tagName),t.transformTemplate),Ki(e,n)})}})},kr={useVisualState:Yi({scrapeMotionValuesFromProps:tn,createRenderState:Xe})};function jr(t,{forwardMotionProps:e=!1},n,i){return{...Ye(t)?Dr:kr,preloadedFeatures:n,useRender:Cr(e),createVisualElement:i,Component:t}}function Y(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const qi=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function pe(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const Rr=t=>e=>qi(e)&&t(e,pe(e));function q(t,e,n,i){return Y(t,e,Rr(n),i)}const Lr=(t,e)=>n=>e(t(n)),nt=(...t)=>t.reduce(Lr);function Xi(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const An=Xi("dragHorizontal"),Mn=Xi("dragVertical");function Qi(t){let e=!1;if(t==="y")e=Mn();else if(t==="x")e=An();else{const n=An(),i=Mn();n&&i?e=()=>{n(),i()}:(n&&n(),i&&i())}return e}function Ji(){const t=Qi(!0);return t?(t(),!1):!0}class rt{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Dn(t,e){const n="pointer"+(e?"enter":"leave"),i="onHover"+(e?"Start":"End"),s=(r,o)=>{if(r.pointerType==="touch"||Ji())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e),a[i]&&k.update(()=>a[i](r,o))};return q(t.current,n,s,{passive:!t.getProps()[i]})}class Er extends rt{mount(){this.unmount=nt(Dn(this.node,!0),Dn(this.node,!1))}unmount(){}}class Fr extends rt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=nt(Y(this.node.current,"focus",()=>this.onFocus()),Y(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const ts=(t,e)=>e?t===e?!0:ts(t,e.parentElement):!1;function xe(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,pe(n))}class Br extends rt{constructor(){super(...arguments),this.removeStartListeners=E,this.removeEndListeners=E,this.removeAccessibleListeners=E,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),r=q(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:u,globalTapTarget:h}=this.node.getProps();k.update(()=>{!h&&!ts(this.node.current,a.target)?u&&u(a,l):c&&c(a,l)})},{passive:!(i.onTap||i.onPointerUp)}),o=q(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=nt(r,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=r=>{if(r.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||xe("up",(l,c)=>{const{onTap:u}=this.node.getProps();u&&k.update(()=>u(l,c))})};this.removeEndListeners(),this.removeEndListeners=Y(this.node.current,"keyup",o),xe("down",(a,l)=>{this.startPress(a,l)})},n=Y(this.node.current,"keydown",e),i=()=>{this.isPressing&&xe("cancel",(r,o)=>this.cancelPress(r,o))},s=Y(this.node.current,"blur",i);this.removeAccessibleListeners=nt(n,s)}}startPress(e,n){this.isPressing=!0;const{onTapStart:i,whileTap:s}=this.node.getProps();s&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&k.update(()=>i(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Ji()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&k.update(()=>i(e,n))}mount(){const e=this.node.getProps(),n=q(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=Y(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=nt(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const je=new WeakMap,ve=new WeakMap,Or=t=>{const e=je.get(t.target);e&&e(t)},Ir=t=>{t.forEach(Or)};function Nr({root:t,...e}){const n=t||document;ve.has(n)||ve.set(n,{});const i=ve.get(n),s=JSON.stringify(e);return i[s]||(i[s]=new IntersectionObserver(Ir,{root:t,...e})),i[s]}function $r(t,e,n){const i=Nr(e);return je.set(t,n),i.observe(t),()=>{je.delete(t),i.unobserve(t)}}const Wr={some:0,all:1};class zr extends rt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:s="some",once:r}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:Wr[s]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,r&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:h}=this.node.getProps(),d=c?u:h;d&&d(l)};return $r(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(Ur(e,n))&&this.startObserver()}unmount(){}}function Ur({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const Hr={inView:{Feature:zr},tap:{Feature:Br},focus:{Feature:Fr},hover:{Feature:Er}};function es(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Gr(t){const e={};return t.values.forEach((n,i)=>e[i]=n.get()),e}function Kr(t){const e={};return t.values.forEach((n,i)=>e[i]=n.getVelocity()),e}function me(t,e,n){const i=t.getProps();return en(i,e,n!==void 0?n:i.custom,Gr(t),Kr(t))}let _r=E,nn=E;const it=t=>t*1e3,X=t=>t/1e3,Zr={current:!1},ns=t=>Array.isArray(t)&&typeof t[0]=="number";function is(t){return!!(!t||typeof t=="string"&&ss[t]||ns(t)||Array.isArray(t)&&t.every(is))}const kt=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,ss={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:kt([0,.65,.55,1]),circOut:kt([.55,0,1,.45]),backIn:kt([.31,.01,.66,-.59]),backOut:kt([.33,1.53,.69,.99])};function os(t){if(t)return ns(t)?kt(t):Array.isArray(t)?t.map(os):ss[t]}function Yr(t,e,n,{delay:i=0,duration:s,repeat:r=0,repeatType:o="loop",ease:a,times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=os(a);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:s,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:r+1,direction:o==="reverse"?"alternate":"normal"})}function qr(t,{repeat:e,repeatType:n="loop"}){const i=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[i]}const rs=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Xr=1e-7,Qr=12;function Jr(t,e,n,i,s){let r,o,a=0;do o=e+(n-e)/2,r=rs(o,i,s)-t,r>0?n=o:e=o;while(Math.abs(r)>Xr&&++a<Qr);return o}function Gt(t,e,n,i){if(t===e&&n===i)return E;const s=r=>Jr(r,0,1,t,n);return r=>r===0||r===1?r:rs(s(r),e,i)}const ta=Gt(.42,0,1,1),ea=Gt(0,0,.58,1),as=Gt(.42,0,.58,1),na=t=>Array.isArray(t)&&typeof t[0]!="number",ls=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,cs=t=>e=>1-t(1-e),sn=t=>1-Math.sin(Math.acos(t)),us=cs(sn),ia=ls(sn),hs=Gt(.33,1.53,.69,.99),on=cs(hs),sa=ls(on),oa=t=>(t*=2)<1?.5*on(t):.5*(2-Math.pow(2,-10*(t-1))),ra={linear:E,easeIn:ta,easeInOut:as,easeOut:ea,circIn:sn,circInOut:ia,circOut:us,backIn:on,backInOut:sa,backOut:hs,anticipate:oa},kn=t=>{if(Array.isArray(t)){nn(t.length===4);const[e,n,i,s]=t;return Gt(e,n,i,s)}else if(typeof t=="string")return ra[t];return t},rn=(t,e)=>n=>!!(Ut(n)&&ur.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),ds=(t,e,n)=>i=>{if(!Ut(i))return i;const[s,r,o,a]=i.match(fe);return{[t]:parseFloat(s),[e]:parseFloat(r),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},aa=t=>st(0,255,t),be={...mt,transform:t=>Math.round(aa(t))},dt={test:rn("rgb","red"),parse:ds("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+be.transform(t)+", "+be.transform(e)+", "+be.transform(n)+", "+Rt(jt.transform(i))+")"};function la(t){let e="",n="",i="",s="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),s=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),s=t.substring(4,5),e+=e,n+=n,i+=i,s+=s),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const Re={test:rn("#"),parse:la,transform:dt.transform},bt={test:rn("hsl","hue"),parse:ds("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+_.transform(Rt(e))+", "+_.transform(Rt(n))+", "+Rt(jt.transform(i))+")"},$={test:t=>dt.test(t)||Re.test(t)||bt.test(t),parse:t=>dt.test(t)?dt.parse(t):bt.test(t)?bt.parse(t):Re.parse(t),transform:t=>Ut(t)?t:t.hasOwnProperty("red")?dt.transform(t):bt.transform(t)},L=(t,e,n)=>-n*t+n*e+t;function we(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function ca({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let s=0,r=0,o=0;if(!e)s=r=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;s=we(l,a,t+1/3),r=we(l,a,t),o=we(l,a,t-1/3)}return{red:Math.round(s*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:i}}const Pe=(t,e,n)=>{const i=t*t;return Math.sqrt(Math.max(0,n*(e*e-i)+i))},ua=[Re,dt,bt],ha=t=>ua.find(e=>e.test(t));function jn(t){const e=ha(t);let n=e.parse(t);return e===bt&&(n=ca(n)),n}const fs=(t,e)=>{const n=jn(t),i=jn(e),s={...n};return r=>(s.red=Pe(n.red,i.red,r),s.green=Pe(n.green,i.green,r),s.blue=Pe(n.blue,i.blue,r),s.alpha=L(n.alpha,i.alpha,r),dt.transform(s))};function da(t){var e,n;return isNaN(t)&&Ut(t)&&(((e=t.match(fe))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(Ni))===null||n===void 0?void 0:n.length)||0)>0}const ps={regex:lr,countKey:"Vars",token:"${v}",parse:E},ms={regex:Ni,countKey:"Colors",token:"${c}",parse:$.parse},gs={regex:fe,countKey:"Numbers",token:"${n}",parse:mt.parse};function Te(t,{regex:e,countKey:n,token:i,parse:s}){const r=t.tokenised.match(e);r&&(t["num"+n]=r.length,t.tokenised=t.tokenised.replace(e,i),t.values.push(...r.map(s)))}function ie(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Te(n,ps),Te(n,ms),Te(n,gs),n}function ys(t){return ie(t).values}function xs(t){const{values:e,numColors:n,numVars:i,tokenised:s}=ie(t),r=e.length;return o=>{let a=s;for(let l=0;l<r;l++)l<i?a=a.replace(ps.token,o[l]):l<i+n?a=a.replace(ms.token,$.transform(o[l])):a=a.replace(gs.token,Rt(o[l]));return a}}const fa=t=>typeof t=="number"?0:t;function pa(t){const e=ys(t);return xs(t)(e.map(fa))}const ot={test:da,parse:ys,createTransformer:xs,getAnimatableNone:pa},vs=(t,e)=>n=>`${n>0?e:t}`;function bs(t,e){return typeof t=="number"?n=>L(t,e,n):$.test(t)?fs(t,e):t.startsWith("var(")?vs(t,e):Ps(t,e)}const ws=(t,e)=>{const n=[...t],i=n.length,s=t.map((r,o)=>bs(r,e[o]));return r=>{for(let o=0;o<i;o++)n[o]=s[o](r);return n}},ma=(t,e)=>{const n={...t,...e},i={};for(const s in n)t[s]!==void 0&&e[s]!==void 0&&(i[s]=bs(t[s],e[s]));return s=>{for(const r in i)n[r]=i[r](s);return n}},Ps=(t,e)=>{const n=ot.createTransformer(e),i=ie(t),s=ie(e);return i.numVars===s.numVars&&i.numColors===s.numColors&&i.numNumbers>=s.numNumbers?nt(ws(i.values,s.values),n):vs(t,e)},It=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Rn=(t,e)=>n=>L(t,e,n);function ga(t){return typeof t=="number"?Rn:typeof t=="string"?$.test(t)?fs:Ps:Array.isArray(t)?ws:typeof t=="object"?ma:Rn}function ya(t,e,n){const i=[],s=n||ga(t[0]),r=t.length-1;for(let o=0;o<r;o++){let a=s(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||E:e;a=nt(l,a)}i.push(a)}return i}function Ts(t,e,{clamp:n=!0,ease:i,mixer:s}={}){const r=t.length;if(nn(r===e.length),r===1)return()=>e[0];t[0]>t[r-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=ya(e,i,s),a=o.length,l=c=>{let u=0;if(a>1)for(;u<t.length-2&&!(c<t[u+1]);u++);const h=It(t[u],t[u+1],c);return o[u](h)};return n?c=>l(st(t[0],t[r-1],c)):l}function xa(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const s=It(0,e,i);t.push(L(n,1,s))}}function va(t){const e=[0];return xa(e,t.length-1),e}function ba(t,e){return t.map(n=>n*e)}function wa(t,e){return t.map(()=>e||as).splice(0,t.length-1)}function se({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const s=na(i)?i.map(kn):kn(i),r={done:!1,value:e[0]},o=ba(n&&n.length===e.length?n:va(e),t),a=Ts(o,e,{ease:Array.isArray(s)?s:wa(e,s)});return{calculatedDuration:t,next:l=>(r.value=a(l),r.done=l>=t,r)}}function Cs(t,e){return e?t*(1e3/e):0}const Pa=5;function Ss(t,e,n){const i=Math.max(e-Pa,0);return Cs(n-t(i),e-i)}const Ce=.001,Ta=.01,Ln=10,Ca=.05,Sa=1;function Va({duration:t=800,bounce:e=.25,velocity:n=0,mass:i=1}){let s,r;_r(t<=it(Ln));let o=1-e;o=st(Ca,Sa,o),t=st(Ta,Ln,X(t)),o<1?(s=c=>{const u=c*o,h=u*t,d=u-n,f=Le(c,o),g=Math.exp(-h);return Ce-d/f*g},r=c=>{const h=c*o*t,d=h*n+n,f=Math.pow(o,2)*Math.pow(c,2)*t,g=Math.exp(-h),x=Le(Math.pow(c,2),o);return(-s(c)+Ce>0?-1:1)*((d-f)*g)/x}):(s=c=>{const u=Math.exp(-c*t),h=(c-n)*t+1;return-Ce+u*h},r=c=>{const u=Math.exp(-c*t),h=(n-c)*(t*t);return u*h});const a=5/t,l=Ma(s,r,a);if(t=it(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const Aa=12;function Ma(t,e,n){let i=n;for(let s=1;s<Aa;s++)i=i-t(i)/e(i);return i}function Le(t,e){return t*Math.sqrt(1-e*e)}const Da=["duration","bounce"],ka=["stiffness","damping","mass"];function En(t,e){return e.some(n=>t[n]!==void 0)}function ja(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!En(t,ka)&&En(t,Da)){const n=Va(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function Vs({keyframes:t,restDelta:e,restSpeed:n,...i}){const s=t[0],r=t[t.length-1],o={done:!1,value:s},{stiffness:a,damping:l,mass:c,duration:u,velocity:h,isResolvedFromDuration:d}=ja({...i,velocity:-X(i.velocity||0)}),f=h||0,g=l/(2*Math.sqrt(a*c)),x=r-s,b=X(Math.sqrt(a/c)),w=Math.abs(x)<5;n||(n=w?.01:2),e||(e=w?.005:.5);let v;if(g<1){const y=Le(b,g);v=P=>{const C=Math.exp(-g*b*P);return r-C*((f+g*b*x)/y*Math.sin(y*P)+x*Math.cos(y*P))}}else if(g===1)v=y=>r-Math.exp(-b*y)*(x+(f+b*x)*y);else{const y=b*Math.sqrt(g*g-1);v=P=>{const C=Math.exp(-g*b*P),M=Math.min(y*P,300);return r-C*((f+g*b*x)*Math.sinh(M)+y*x*Math.cosh(M))/y}}return{calculatedDuration:d&&u||null,next:y=>{const P=v(y);if(d)o.done=y>=u;else{let C=f;y!==0&&(g<1?C=Ss(v,y,P):C=0);const M=Math.abs(C)<=n,D=Math.abs(r-P)<=e;o.done=M&&D}return o.value=o.done?r:P,o}}}function Fn({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:r=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const h=t[0],d={done:!1,value:h},f=S=>a!==void 0&&S<a||l!==void 0&&S>l,g=S=>a===void 0?l:l===void 0||Math.abs(a-S)<Math.abs(l-S)?a:l;let x=n*e;const b=h+x,w=o===void 0?b:o(b);w!==b&&(x=w-h);const v=S=>-x*Math.exp(-S/i),y=S=>w+v(S),P=S=>{const V=v(S),U=y(S);d.done=Math.abs(V)<=c,d.value=d.done?w:U};let C,M;const D=S=>{f(d.value)&&(C=S,M=Vs({keyframes:[d.value,g(d.value)],velocity:Ss(y,S,d.value),damping:s,stiffness:r,restDelta:c,restSpeed:u}))};return D(0),{calculatedDuration:null,next:S=>{let V=!1;return!M&&C===void 0&&(V=!0,P(S),D(S)),C!==void 0&&S>C?M.next(S-C):(!V&&P(S),d)}}}let Qt;function Ra(){Qt=void 0}const ft={now:()=>(Qt===void 0&&ft.set(O.isProcessing||Ri.useManualTiming?O.timestamp:performance.now()),Qt),set:t=>{Qt=t,queueMicrotask(Ra)}},La=t=>{const e=({timestamp:n})=>t(n);return{start:()=>k.update(e,!0),stop:()=>Q(e),now:()=>O.isProcessing?O.timestamp:ft.now()}},Bn=2e4;function On(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Bn;)e+=n,i=t.next(e);return e>=Bn?1/0:e}const Ea={decay:Fn,inertia:Fn,tween:se,keyframes:se,spring:Vs};function oe({autoplay:t=!0,delay:e=0,driver:n=La,keyframes:i,type:s="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:a="loop",onPlay:l,onStop:c,onComplete:u,onUpdate:h,...d}){let f=1,g=!1,x,b;const w=()=>{b=new Promise(R=>{x=R})};w();let v;const y=Ea[s]||se;let P;y!==se&&typeof i[0]!="number"&&(P=Ts([0,100],i,{clamp:!1}),i=[0,100]);const C=y({...d,keyframes:i});let M;a==="mirror"&&(M=y({...d,keyframes:[...i].reverse(),velocity:-(d.velocity||0)}));let D="idle",S=null,V=null,U=null;C.calculatedDuration===null&&r&&(C.calculatedDuration=On(C));const{calculatedDuration:gt}=C;let K=1/0,Z=1/0;gt!==null&&(K=gt+o,Z=K*(r+1)-o);let N=0;const yt=R=>{if(V===null)return;f>0&&(V=Math.min(V,R)),f<0&&(V=Math.min(R-Z/f,V)),S!==null?N=S:N=Math.round(R-V)*f;const Vt=N-e*(f>=0?1:-1),pn=f>=0?Vt<0:Vt>Z;N=Math.max(Vt,0),D==="finished"&&S===null&&(N=Z);let mn=N,gn=C;if(r){const ge=Math.min(N,Z)/K;let Kt=Math.floor(ge),at=ge%1;!at&&ge>=1&&(at=1),at===1&&Kt--,Kt=Math.min(Kt,r+1),!!(Kt%2)&&(a==="reverse"?(at=1-at,o&&(at-=o/K)):a==="mirror"&&(gn=M)),mn=st(0,1,at)*K}const At=pn?{done:!1,value:i[0]}:gn.next(mn);P&&(At.value=P(At.value));let{done:yn}=At;!pn&&gt!==null&&(yn=f>=0?N>=Z:N<=0);const Js=S===null&&(D==="finished"||D==="running"&&yn);return h&&h(At.value),Js&&St(),At},B=()=>{v&&v.stop(),v=void 0},J=()=>{D="idle",B(),x(),w(),V=U=null},St=()=>{D="finished",u&&u(),B(),x()},xt=()=>{if(g)return;v||(v=n(yt));const R=v.now();l&&l(),S!==null?V=R-S:(!V||D==="finished")&&(V=R),D==="finished"&&w(),U=V,S=null,D="running",v.start()};t&&xt();const fn={then(R,Vt){return b.then(R,Vt)},get time(){return X(N)},set time(R){R=it(R),N=R,S!==null||!v||f===0?S=R:V=v.now()-R/f},get duration(){const R=C.calculatedDuration===null?On(C):C.calculatedDuration;return X(R)},get speed(){return f},set speed(R){R===f||!v||(f=R,fn.time=X(N))},get state(){return D},play:xt,pause:()=>{D="paused",S=N},stop:()=>{g=!0,D!=="idle"&&(D="idle",c&&c(),J())},cancel:()=>{U!==null&&yt(U),J()},complete:()=>{D="finished"},sample:R=>(V=0,yt(R))};return fn}function Fa(t){let e;return()=>(e===void 0&&(e=t()),e)}const Ba=Fa(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Oa=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Yt=10,Ia=2e4,Na=(t,e)=>e.type==="spring"||t==="backgroundColor"||!is(e.ease);function $a(t,e,{onUpdate:n,onComplete:i,...s}){if(!(Ba()&&Oa.has(e)&&!s.repeatDelay&&s.repeatType!=="mirror"&&s.damping!==0&&s.type!=="inertia"))return!1;let o=!1,a,l,c=!1;const u=()=>{l=new Promise(y=>{a=y})};u();let{keyframes:h,duration:d=300,ease:f,times:g}=s;if(Na(e,s)){const y=oe({...s,repeat:0,delay:0});let P={done:!1,value:h[0]};const C=[];let M=0;for(;!P.done&&M<Ia;)P=y.sample(M),C.push(P.value),M+=Yt;g=void 0,h=C,d=M-Yt,f="linear"}const x=Yr(t.owner.current,e,h,{...s,duration:d,ease:f,times:g}),b=()=>{c=!1,x.cancel()},w=()=>{c=!0,k.update(b),a(),u()};return x.onfinish=()=>{c||(t.set(qr(h,s)),i&&i(),w())},{then(y,P){return l.then(y,P)},attachTimeline(y){return x.timeline=y,x.onfinish=null,E},get time(){return X(x.currentTime||0)},set time(y){x.currentTime=it(y)},get speed(){return x.playbackRate},set speed(y){x.playbackRate=y},get duration(){return X(d)},play:()=>{o||(x.play(),Q(b))},pause:()=>x.pause(),stop:()=>{if(o=!0,x.playState==="idle")return;const{currentTime:y}=x;if(y){const P=oe({...s,autoplay:!1});t.setWithVelocity(P.sample(y-Yt).value,P.sample(y).value,Yt)}w()},complete:()=>{c||x.finish()},cancel:w}}function Wa({keyframes:t,delay:e,onUpdate:n,onComplete:i}){const s=()=>(n&&n(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:E,pause:E,stop:E,then:r=>(r(),Promise.resolve()),cancel:E,complete:E});return e?oe({keyframes:[0,1],duration:0,delay:e,onComplete:s}):s()}const za={type:"spring",stiffness:500,damping:25,restSpeed:10},Ua=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Ha={type:"keyframes",duration:.8},Ga={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ka=(t,{keyframes:e})=>e.length>2?Ha:pt.has(t)?t.startsWith("scale")?Ua(e[1]):za:Ga,Ee=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ot.test(e)||e==="0")&&!e.startsWith("url(")),_a=new Set(["brightness","contrast","saturate","opacity"]);function Za(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(fe)||[];if(!i)return t;const s=n.replace(i,"");let r=_a.has(e)?1:0;return i!==n&&(r*=100),e+"("+r+s+")"}const Ya=/([a-z-]*)\(.*?\)/g,Fe={...ot,getAnimatableNone:t=>{const e=t.match(Ya);return e?e.map(Za).join(" "):t}},qa={...$i,color:$,backgroundColor:$,outlineColor:$,fill:$,stroke:$,borderColor:$,borderTopColor:$,borderRightColor:$,borderBottomColor:$,borderLeftColor:$,filter:Fe,WebkitFilter:Fe},an=t=>qa[t];function As(t,e){let n=an(t);return n!==Fe&&(n=ot),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Ms=t=>/^0[^.\s]+$/.test(t);function Xa(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||Ms(t)}function Qa(t,e,n,i){const s=Ee(e,n);let r;Array.isArray(n)?r=[...n]:r=[null,n];const o=i.from!==void 0?i.from:t.get();let a;const l=[];for(let c=0;c<r.length;c++)r[c]===null&&(r[c]=c===0?o:r[c-1]),Xa(r[c])&&l.push(c),typeof r[c]=="string"&&r[c]!=="none"&&r[c]!=="0"&&(a=r[c]);if(s&&l.length&&a)for(let c=0;c<l.length;c++){const u=l[c];r[u]=As(e,a)}return r}function Ja({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:s,repeat:r,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}function ln(t,e){return t[e]||t.default||t}const cn=(t,e,n,i={})=>s=>{const r=ln(i,t)||{},o=r.delay||i.delay||0;let{elapsed:a=0}=i;a=a-it(o);const l=Qa(e,t,n,r),c=l[0],u=l[l.length-1],h=Ee(t,c),d=Ee(t,u);let f={keyframes:l,velocity:e.getVelocity(),ease:"easeOut",...r,delay:-a,onUpdate:g=>{e.set(g),r.onUpdate&&r.onUpdate(g)},onComplete:()=>{s(),r.onComplete&&r.onComplete()}};if(Ja(r)||(f={...f,...Ka(t,f)}),f.duration&&(f.duration=it(f.duration)),f.repeatDelay&&(f.repeatDelay=it(f.repeatDelay)),!h||!d||Zr.current||r.type===!1||Ri.skipAnimations)return Wa(f);if(!i.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const g=$a(e,t,f);if(g)return g}return oe(f)};function re(t){return!!(W(t)&&t.add)}const Ds=t=>/^\-?\d*\.?\d+$/.test(t);function un(t,e){t.indexOf(e)===-1&&t.push(e)}function hn(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class dn{constructor(){this.subscriptions=[]}add(e){return un(this.subscriptions,e),()=>hn(this.subscriptions,e)}notify(e,n,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,n,i);else for(let r=0;r<s;r++){const o=this.subscriptions[r];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const In=30,tl=t=>!isNaN(parseFloat(t));class el{constructor(e,n={}){this.version="11.0.3",this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,s=!0)=>{const r=ft.now();this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.canTrackVelocity=tl(this.current),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=ft.now()}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new dn);const i=this.events[e].add(n);return e==="change"?()=>{i(),k.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=ft.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>In)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,In);return Cs(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Tt(t,e){return new el(t,e)}const ks=t=>e=>e.test(t),nl={test:t=>t==="auto",parse:t=>t},js=[mt,T,_,tt,dr,hr,nl],Mt=t=>js.find(ks(t)),il=[...js,$,ot],sl=t=>il.find(ks(t));function ol(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Tt(n))}function rl(t,e){const n=me(t,e);let{transitionEnd:i={},transition:s={},...r}=n?t.makeTargetAnimatable(n,!1):{};r={...r,...i};for(const o in r){const a=Vr(r[o]);ol(t,o,a)}}function al(t,e,n){var i,s;const r=Object.keys(e).filter(a=>!t.hasValue(a)),o=r.length;if(o)for(let a=0;a<o;a++){const l=r[a],c=e[l];let u=null;Array.isArray(c)&&(u=c[0]),u===null&&(u=(s=(i=n[l])!==null&&i!==void 0?i:t.readValue(l))!==null&&s!==void 0?s:e[l]),u!=null&&(typeof u=="string"&&(Ds(u)||Ms(u))?u=parseFloat(u):!sl(u)&&ot.test(c)&&(u=As(l,c)),t.addValue(l,Tt(u,{owner:t})),n[l]===void 0&&(n[l]=u),u!==null&&t.setBaseTarget(l,u))}}function ll(t,e){return e?(e[t]||e.default||e).from:void 0}function cl(t,e,n){const i={};for(const s in t){const r=ll(s,e);if(r!==void 0)i[s]=r;else{const o=n.getValue(s);o&&(i[s]=o.get())}}return i}function ul({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function hl(t,e){const n=t.get();if(Array.isArray(e)){for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}else return n!==e}function Rs(t,e,{delay:n=0,transitionOverride:i,type:s}={}){let{transition:r=t.getDefaultTransition(),transitionEnd:o,...a}=t.makeTargetAnimatable(e);const l=t.getValue("willChange");i&&(r=i);const c=[],u=s&&t.animationState&&t.animationState.getState()[s];for(const h in a){const d=t.getValue(h),f=a[h];if(!d||f===void 0||u&&ul(u,h))continue;const g={delay:n,elapsed:0,...ln(r||{},h)};if(window.HandoffAppearAnimations){const w=t.getProps()[ji];if(w){const v=window.HandoffAppearAnimations(w,h,d,k);v!==null&&(g.elapsed=v,g.isHandoff=!0)}}let x=!g.isHandoff&&!hl(d,f);if(g.type==="spring"&&(d.getVelocity()||g.velocity)&&(x=!1),d.animation&&(x=!1),x)continue;d.start(cn(h,d,f,t.shouldReduceMotion&&pt.has(h)?{type:!1}:g));const b=d.animation;re(l)&&(l.add(h),b.then(()=>l.remove(h))),c.push(b)}return o&&Promise.all(c).then(()=>{o&&rl(t,o)}),c}function Be(t,e,n={}){const i=me(t,e,n.custom);let{transition:s=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const r=i?()=>Promise.all(Rs(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:u,staggerDirection:h}=s;return dl(t,e,c+l,u,h,n)}:()=>Promise.resolve(),{when:a}=s;if(a){const[l,c]=a==="beforeChildren"?[r,o]:[o,r];return l().then(()=>c())}else return Promise.all([r(),o(n.delay)])}function dl(t,e,n=0,i=0,s=1,r){const o=[],a=(t.variantChildren.size-1)*i,l=s===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(fl).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(Be(c,e,{...r,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function fl(t,e){return t.sortNodePosition(e)}function pl(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const s=e.map(r=>Be(t,r,n));i=Promise.all(s)}else if(typeof e=="string")i=Be(t,e,n);else{const s=typeof e=="function"?me(t,e,n.custom):e;i=Promise.all(Rs(t,s,n))}return i.then(()=>t.notify("AnimationComplete",e))}const ml=[...Ke].reverse(),gl=Ke.length;function yl(t){return e=>Promise.all(e.map(({animation:n,options:i})=>pl(t,n,i)))}function xl(t){let e=yl(t);const n=bl();let i=!0;const s=(l,c)=>{const u=me(t,c);if(u){const{transition:h,transitionEnd:d,...f}=u;l={...l,...f,...d}}return l};function r(l){e=l(t)}function o(l,c){const u=t.getProps(),h=t.getVariantContext(!0)||{},d=[],f=new Set;let g={},x=1/0;for(let w=0;w<gl;w++){const v=ml[w],y=n[v],P=u[v]!==void 0?u[v]:h[v],C=Bt(P),M=v===c?y.isActive:null;M===!1&&(x=w);let D=P===h[v]&&P!==u[v]&&C;if(D&&i&&t.manuallyAnimateOnMount&&(D=!1),y.protectedKeys={...g},!y.isActive&&M===null||!P&&!y.prevProp||he(P)||typeof P=="boolean")continue;let V=vl(y.prevProp,P)||v===c&&y.isActive&&!D&&C||w>x&&C,U=!1;const gt=Array.isArray(P)?P:[P];let K=gt.reduce(s,{});M===!1&&(K={});const{prevResolvedValues:Z={}}=y,N={...Z,...K},yt=B=>{V=!0,f.has(B)&&(U=!0,f.delete(B)),y.needsAnimating[B]=!0};for(const B in N){const J=K[B],St=Z[B];if(g.hasOwnProperty(B))continue;let xt=!1;ne(J)&&ne(St)?xt=!es(J,St):xt=J!==St,xt?J!==void 0?yt(B):f.add(B):J!==void 0&&f.has(B)?yt(B):y.protectedKeys[B]=!0}y.prevProp=P,y.prevResolvedValues=K,y.isActive&&(g={...g,...K}),i&&t.blockInitialAnimation&&(V=!1),V&&(!D||U)&&d.push(...gt.map(B=>({animation:B,options:{type:v,...l}})))}if(f.size){const w={};f.forEach(v=>{const y=t.getBaseTarget(v);y!==void 0&&(w[v]=y)}),d.push({animation:w})}let b=!!d.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(b=!1),i=!1,b?e(d):Promise.resolve()}function a(l,c,u){var h;if(n[l].isActive===c)return Promise.resolve();(h=t.variantChildren)===null||h===void 0||h.forEach(f=>{var g;return(g=f.animationState)===null||g===void 0?void 0:g.setActive(l,c)}),n[l].isActive=c;const d=o(u,l);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:r,getState:()=>n}}function vl(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!es(e,t):!1}function lt(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function bl(){return{animate:lt(!0),whileInView:lt(),whileHover:lt(),whileTap:lt(),whileDrag:lt(),whileFocus:lt(),exit:lt()}}class wl extends rt{constructor(e){super(e),e.animationState||(e.animationState=xl(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),he(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let Pl=0;class Tl extends rt{constructor(){super(...arguments),this.id=Pl++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:i}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===s)return;const r=this.node.animationState.setActive("exit",!e,{custom:i??this.node.getProps().custom});n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const Cl={animation:{Feature:wl},exit:{Feature:Tl}},Nn=(t,e)=>Math.abs(t-e);function Sl(t,e){const n=Nn(t.x,e.x),i=Nn(t.y,e.y);return Math.sqrt(n**2+i**2)}class Ls{constructor(e,n,{transformPagePoint:i,contextWindow:s,dragSnapToOrigin:r=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=Ve(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,f=Sl(h.offset,{x:0,y:0})>=3;if(!d&&!f)return;const{point:g}=h,{timestamp:x}=O;this.history.push({...g,timestamp:x});const{onStart:b,onMove:w}=this.handlers;d||(b&&b(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),w&&w(this.lastMoveEvent,h)},this.handlePointerMove=(h,d)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=Se(d,this.transformPagePoint),k.update(this.updatePoint,!0)},this.handlePointerUp=(h,d)=>{this.end();const{onEnd:f,onSessionEnd:g,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Ve(h.type==="pointercancel"?this.lastMoveEventInfo:Se(d,this.transformPagePoint),this.history);this.startEvent&&f&&f(h,b),g&&g(h,b)},!qi(e))return;this.dragSnapToOrigin=r,this.handlers=n,this.transformPagePoint=i,this.contextWindow=s||window;const o=pe(e),a=Se(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=O;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,Ve(a,this.history)),this.removeListeners=nt(q(this.contextWindow,"pointermove",this.handlePointerMove),q(this.contextWindow,"pointerup",this.handlePointerUp),q(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Q(this.updatePoint)}}function Se(t,e){return e?{point:e(t.point)}:t}function $n(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Ve({point:t},e){return{point:t,delta:$n(t,Es(e)),offset:$n(t,Vl(e)),velocity:Al(e,.1)}}function Vl(t){return t[0]}function Es(t){return t[t.length-1]}function Al(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const s=Es(t);for(;n>=0&&(i=t[n],!(s.timestamp-i.timestamp>it(e)));)n--;if(!i)return{x:0,y:0};const r=X(s.timestamp-i.timestamp);if(r===0)return{x:0,y:0};const o={x:(s.x-i.x)/r,y:(s.y-i.y)/r};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function z(t){return t.max-t.min}function Oe(t,e=0,n=.01){return Math.abs(t-e)<=n}function Wn(t,e,n,i=.5){t.origin=i,t.originPoint=L(e.min,e.max,t.origin),t.scale=z(n)/z(e),(Oe(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=L(n.min,n.max,t.origin)-t.originPoint,(Oe(t.translate)||isNaN(t.translate))&&(t.translate=0)}function Lt(t,e,n,i){Wn(t.x,e.x,n.x,i?i.originX:void 0),Wn(t.y,e.y,n.y,i?i.originY:void 0)}function zn(t,e,n){t.min=n.min+e.min,t.max=t.min+z(e)}function Ml(t,e,n){zn(t.x,e.x,n.x),zn(t.y,e.y,n.y)}function Un(t,e,n){t.min=e.min-n.min,t.max=t.min+z(e)}function Et(t,e,n){Un(t.x,e.x,n.x),Un(t.y,e.y,n.y)}function Dl(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?L(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?L(n,t,i.max):Math.min(t,n)),t}function Hn(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function kl(t,{top:e,left:n,bottom:i,right:s}){return{x:Hn(t.x,n,s),y:Hn(t.y,e,i)}}function Gn(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function jl(t,e){return{x:Gn(t.x,e.x),y:Gn(t.y,e.y)}}function Rl(t,e){let n=.5;const i=z(t),s=z(e);return s>i?n=It(e.min,e.max-i,t.min):i>s&&(n=It(t.min,t.max-s,e.min)),st(0,1,n)}function Ll(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Ie=.35;function El(t=Ie){return t===!1?t=0:t===!0&&(t=Ie),{x:Kn(t,"left","right"),y:Kn(t,"top","bottom")}}function Kn(t,e,n){return{min:_n(t,e),max:_n(t,n)}}function _n(t,e){return typeof t=="number"?t:t[e]||0}const Zn=()=>({translate:0,scale:1,origin:0,originPoint:0}),wt=()=>({x:Zn(),y:Zn()}),Yn=()=>({min:0,max:0}),F=()=>({x:Yn(),y:Yn()});function G(t){return[t("x"),t("y")]}function Fs({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function Fl({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function Bl(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Ae(t){return t===void 0||t===1}function Ne({scale:t,scaleX:e,scaleY:n}){return!Ae(t)||!Ae(e)||!Ae(n)}function ct(t){return Ne(t)||Bs(t)||t.z||t.rotate||t.rotateX||t.rotateY}function Bs(t){return qn(t.x)||qn(t.y)}function qn(t){return t&&t!=="0%"}function ae(t,e,n){const i=t-n,s=e*i;return n+s}function Xn(t,e,n,i,s){return s!==void 0&&(t=ae(t,s,i)),ae(t,n,i)+e}function $e(t,e=0,n=1,i,s){t.min=Xn(t.min,e,n,i,s),t.max=Xn(t.max,e,n,i,s)}function Os(t,{x:e,y:n}){$e(t.x,e.translate,e.scale,e.originPoint),$e(t.y,n.translate,n.scale,n.originPoint)}function Ol(t,e,n,i=!1){const s=n.length;if(!s)return;e.x=e.y=1;let r,o;for(let a=0;a<s;a++){r=n[a],o=r.projectionDelta;const l=r.instance;l&&l.style&&l.style.display==="contents"||(i&&r.options.layoutScroll&&r.scroll&&r!==r.root&&Pt(t,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,Os(t,o)),i&&ct(r.latestValues)&&Pt(t,r.latestValues))}e.x=Qn(e.x),e.y=Qn(e.y)}function Qn(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function et(t,e){t.min=t.min+e,t.max=t.max+e}function Jn(t,e,[n,i,s]){const r=e[s]!==void 0?e[s]:.5,o=L(t.min,t.max,r);$e(t,e[n],e[i],o,e.scale)}const Il=["x","scaleX","originX"],Nl=["y","scaleY","originY"];function Pt(t,e){Jn(t.x,e,Il),Jn(t.y,e,Nl)}function Is(t,e){return Fs(Bl(t.getBoundingClientRect(),e))}function $l(t,e,n){const i=Is(t,n),{scroll:s}=e;return s&&(et(i.x,s.offset.x),et(i.y,s.offset.y)),i}const Ns=({current:t})=>t?t.ownerDocument.defaultView:null,Wl=new WeakMap;class zl{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=F(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=u=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(pe(u,"page").point)},r=(u,h)=>{const{drag:d,dragPropagation:f,onDragStart:g}=this.getProps();if(d&&!f&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Qi(d),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),G(b=>{let w=this.getAxisMotionValue(b).get()||0;if(_.test(w)){const{projection:v}=this.visualElement;if(v&&v.layout){const y=v.layout.layoutBox[b];y&&(w=z(y)*(parseFloat(w)/100))}}this.originPoint[b]=w}),g&&k.update(()=>g(u,h),!1,!0);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},o=(u,h)=>{const{dragPropagation:d,dragDirectionLock:f,onDirectionLock:g,onDrag:x}=this.getProps();if(!d&&!this.openGlobalLock)return;const{offset:b}=h;if(f&&this.currentDirection===null){this.currentDirection=Ul(b),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",h.point,b),this.updateAxis("y",h.point,b),this.visualElement.render(),x&&x(u,h)},a=(u,h)=>this.stop(u,h),l=()=>G(u=>{var h;return this.getAnimationState(u)==="paused"&&((h=this.getAxisMotionValue(u).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Ls(e,{onSessionStart:s,onStart:r,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Ns(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:s}=n;this.startAnimation(s);const{onDragEnd:r}=this.getProps();r&&k.update(()=>r(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:s}=this.getProps();if(!i||!qt(e,s,this.currentDirection))return;const r=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=Dl(o,this.constraints[e],this.elastic[e])),r.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,r=this.constraints;n&&vt(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&s?this.constraints=kl(s.layoutBox,n):this.constraints=!1,this.elastic=El(i),r!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&G(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=Ll(s.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!vt(e))return!1;const i=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const r=$l(i,s.root,this.visualElement.getTransformPagePoint());let o=jl(s.layout.layoutBox,r);if(n){const a=n(Fl(o));this.hasMutatedConstraints=!!a,a&&(o=Fs(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:s,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=G(u=>{if(!qt(u,n,this.currentDirection))return;let h=l&&l[u]||{};o&&(h={min:0,max:0});const d=s?200:1e6,f=s?40:1e7,g={type:"inertia",velocity:i?e[u]:0,bounceStiffness:d,bounceDamping:f,timeConstant:750,restDelta:1,restSpeed:10,...r,...h};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return i.start(cn(e,i,0,n))}stopAnimation(){G(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){G(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),i=this.visualElement.getProps(),s=i[n];return s||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){G(n=>{const{drag:i}=this.getProps();if(!qt(n,i,this.currentDirection))return;const{projection:s}=this.visualElement,r=this.getAxisMotionValue(n);if(s&&s.layout){const{min:o,max:a}=s.layout.layoutBox[n];r.set(e[n]-L(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!vt(n)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};G(o=>{const a=this.getAxisMotionValue(o);if(a){const l=a.get();s[o]=Rl({min:l,max:l},this.constraints[o])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),G(o=>{if(!qt(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(L(l,c,s[o]))})}addListeners(){if(!this.visualElement.current)return;Wl.set(this.visualElement,this);const e=this.visualElement.current,n=q(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();vt(l)&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,r=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),i();const o=Y(window,"resize",()=>this.scalePositionWithinConstraints()),a=s.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(G(u=>{const h=this.getAxisMotionValue(u);h&&(this.originPoint[u]+=l[u].translate,h.set(h.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),r(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:r=!1,dragElastic:o=Ie,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:s,dragConstraints:r,dragElastic:o,dragMomentum:a}}}function qt(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function Ul(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class Hl extends rt{constructor(e){super(e),this.removeGroupControls=E,this.removeListeners=E,this.controls=new zl(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||E}unmount(){this.removeGroupControls(),this.removeListeners()}}const ti=t=>(e,n)=>{t&&k.update(()=>t(e,n))};class Gl extends rt{constructor(){super(...arguments),this.removePointerDownListener=E}onPointerDown(e){this.session=new Ls(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ns(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:ti(e),onStart:ti(n),onMove:i,onEnd:(r,o)=>{delete this.session,s&&k.update(()=>s(r,o))}}}mount(){this.removePointerDownListener=q(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function Kl(){const t=m.useContext(ce);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:i}=t,s=m.useId();return m.useEffect(()=>i(s),[]),!e&&n?[!1,()=>n&&n(s)]:[!0]}const Jt={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function ei(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Dt={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(T.test(t))t=parseFloat(t);else return t;const n=ei(t,e.target.x),i=ei(t,e.target.y);return`${n}% ${i}%`}},_l={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,s=ot.parse(t);if(s.length>5)return i;const r=ot.createTransformer(t),o=typeof s[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;s[0+o]/=a,s[1+o]/=l;const c=L(a,l,.5);return typeof s[2+o]=="number"&&(s[2+o]/=c),typeof s[3+o]=="number"&&(s[3+o]/=c),r(s)}};class Zl extends Ai.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:s}=this.props,{projection:r}=e;sr(Yl),r&&(n.group&&n.group.add(r),i&&i.register&&s&&i.register(r),r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),Jt.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:s,isPresent:r}=this.props,o=i.projection;return o&&(o.isPresent=r,s||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==r&&(r?o.promote():o.relegate()||k.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Ge.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:s}=e;s&&(s.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function $s(t){const[e,n]=Kl(),i=m.useContext(Ze);return Ai.createElement(Zl,{...t,layoutGroup:i,switchLayoutGroup:m.useContext(Fi),isPresent:e,safeToRemove:n})}const Yl={borderRadius:{...Dt,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Dt,borderTopRightRadius:Dt,borderBottomLeftRadius:Dt,borderBottomRightRadius:Dt,boxShadow:_l},Ws=["TopLeft","TopRight","BottomLeft","BottomRight"],ql=Ws.length,ni=t=>typeof t=="string"?parseFloat(t):t,ii=t=>typeof t=="number"||T.test(t);function Xl(t,e,n,i,s,r){s?(t.opacity=L(0,n.opacity!==void 0?n.opacity:1,Ql(i)),t.opacityExit=L(e.opacity!==void 0?e.opacity:1,0,Jl(i))):r&&(t.opacity=L(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<ql;o++){const a=`border${Ws[o]}Radius`;let l=si(e,a),c=si(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||ii(l)===ii(c)?(t[a]=Math.max(L(ni(l),ni(c),i),0),(_.test(c)||_.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=L(e.rotate||0,n.rotate||0,i))}function si(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const Ql=zs(0,.5,us),Jl=zs(.5,.95,E);function zs(t,e,n){return i=>i<t?0:i>e?1:n(It(t,e,i))}function oi(t,e){t.min=e.min,t.max=e.max}function H(t,e){oi(t.x,e.x),oi(t.y,e.y)}function ri(t,e,n,i,s){return t-=e,t=ae(t,1/n,i),s!==void 0&&(t=ae(t,1/s,i)),t}function tc(t,e=0,n=1,i=.5,s,r=t,o=t){if(_.test(e)&&(e=parseFloat(e),e=L(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=L(r.min,r.max,i);t===r&&(a-=e),t.min=ri(t.min,e,n,a,s),t.max=ri(t.max,e,n,a,s)}function ai(t,e,[n,i,s],r,o){tc(t,e[n],e[i],e[s],e.scale,r,o)}const ec=["x","scaleX","originX"],nc=["y","scaleY","originY"];function li(t,e,n,i){ai(t.x,e,ec,n?n.x:void 0,i?i.x:void 0),ai(t.y,e,nc,n?n.y:void 0,i?i.y:void 0)}function ci(t){return t.translate===0&&t.scale===1}function Us(t){return ci(t.x)&&ci(t.y)}function ic(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function Hs(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function ui(t){return z(t.x)/z(t.y)}class sc{constructor(){this.members=[]}add(e){un(this.members,e),e.scheduleRender()}remove(e){if(hn(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(s=>e===s);if(n===0)return!1;let i;for(let s=n;s>=0;s--){const r=this.members[s];if(r.isPresent!==!1){i=r;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:s}=e.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function hi(t,e,n){let i="";const s=t.x.translate/e.x,r=t.y.translate/e.y;if((s||r)&&(i=`translate3d(${s}px, ${r}px, 0) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:l,rotateX:c,rotateY:u}=n;l&&(i+=`rotate(${l}deg) `),c&&(i+=`rotateX(${c}deg) `),u&&(i+=`rotateY(${u}deg) `)}const o=t.x.scale*e.x,a=t.y.scale*e.y;return(o!==1||a!==1)&&(i+=`scale(${o}, ${a})`),i||"none"}const oc=(t,e)=>t.depth-e.depth;class rc{constructor(){this.children=[],this.isDirty=!1}add(e){un(this.children,e),this.isDirty=!0}remove(e){hn(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(oc),this.isDirty=!1,this.children.forEach(e)}}function ac(t,e){const n=ft.now(),i=({timestamp:s})=>{const r=s-n;r>=e&&(Q(i),t(r-e))};return k.read(i,!0),()=>Q(i)}function lc(t){window.MotionDebug&&window.MotionDebug.record(t)}function cc(t){return t instanceof SVGElement&&t.tagName!=="svg"}function uc(t,e,n){const i=W(t)?t:Tt(t);return i.start(cn("",i,e,n)),i.animation}const di=["","X","Y","Z"],hc={visibility:"hidden"},fi=1e3;let dc=0;const ut={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Gs({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(o={},a=e==null?void 0:e()){this.id=dc++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ut.totalNodes=ut.resolvedTargetDeltas=ut.recalculatedProjection=0,this.nodes.forEach(mc),this.nodes.forEach(bc),this.nodes.forEach(wc),this.nodes.forEach(gc),lc(ut)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new rc)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new dn),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=cc(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let h;const d=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=ac(d,250),Jt.hasAnimatedSinceResize&&(Jt.hasAnimatedSinceResize=!1,this.nodes.forEach(mi))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:d,hasRelativeTargetChanged:f,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||u.getDefaultTransition()||Vc,{onLayoutAnimationStart:b,onLayoutAnimationComplete:w}=u.getProps(),v=!this.targetLayout||!Hs(this.targetLayout,g)||f,y=!d&&f;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||d&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,y);const P={...ln(x,"layout"),onPlay:b,onComplete:w};(u.shouldReduceMotion||this.options.layoutRoot)&&(P.delay=0,P.type=!1),this.startAnimation(P)}else d||mi(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Q(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Pc),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const h=this.path[u];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(pi);return}this.isUpdating||this.nodes.forEach(xc),this.isUpdating=!1,this.nodes.forEach(vc),this.nodes.forEach(fc),this.nodes.forEach(pc),this.clearAllSnapshots();const a=ft.now();O.delta=st(0,1e3/60,a-O.timestamp),O.timestamp=a,O.isProcessing=!0,ye.update.process(O),ye.preRender.process(O),ye.render.process(O),O.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ge.read(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(yc),this.sharedNodes.forEach(Tc)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,k.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){k.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=F(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!s)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!Us(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||ct(this.latestValues)||u)&&(s(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),Ac(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return F();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(et(a.x,l.offset.x),et(a.y,l.offset.y)),a}removeElementScroll(o){const a=F();H(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:u,options:h}=c;if(c!==this.root&&u&&h.layoutScroll){if(u.isRoot){H(a,o);const{scroll:d}=this.root;d&&(et(a.x,-d.offset.x),et(a.y,-d.offset.y))}et(a.x,u.offset.x),et(a.y,u.offset.y)}}return a}applyTransform(o,a=!1){const l=F();H(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Pt(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),ct(u.latestValues)&&Pt(l,u.latestValues)}return ct(this.latestValues)&&Pt(l,this.latestValues),l}removeTransform(o){const a=F();H(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!ct(c.latestValues))continue;Ne(c.latestValues)&&c.updateSnapshot();const u=F(),h=c.measurePageBox();H(u,h),li(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return ct(this.latestValues)&&li(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==O.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:h,layoutId:d}=this.options;if(!(!this.layout||!(h||d))){if(this.resolvedRelativeTargetAt=O.timestamp,!this.targetDelta&&!this.relativeTarget){const f=this.getClosestProjectingParent();f&&f.layout&&this.animationProgress!==1?(this.relativeParent=f,this.forceRelativeParentToResolveTarget(),this.relativeTarget=F(),this.relativeTargetOrigin=F(),Et(this.relativeTargetOrigin,this.layout.layoutBox,f.layout.layoutBox),H(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=F(),this.targetWithTransforms=F()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Ml(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):H(this.target,this.layout.layoutBox),Os(this.target,this.targetDelta)):H(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const f=this.getClosestProjectingParent();f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?(this.relativeParent=f,this.forceRelativeParentToResolveTarget(),this.relativeTarget=F(),this.relativeTargetOrigin=F(),Et(this.relativeTargetOrigin,this.target,f.target),H(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ut.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Ne(this.parent.latestValues)||Bs(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===O.timestamp&&(c=!1),c)return;const{layout:u,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||h))return;H(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,f=this.treeScale.y;Ol(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=F());const{target:g}=a;if(!g){this.projectionTransform&&(this.projectionDelta=wt(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=wt(),this.projectionDeltaWithTransform=wt());const x=this.projectionTransform;Lt(this.projectionDelta,this.layoutCorrected,g,this.latestValues),this.projectionTransform=hi(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==d||this.treeScale.y!==f)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),ut.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},h=wt();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=F(),f=l?l.source:void 0,g=this.layout?this.layout.source:void 0,x=f!==g,b=this.getStack(),w=!b||b.members.length<=1,v=!!(x&&!w&&this.options.crossfade===!0&&!this.path.some(Sc));this.animationProgress=0;let y;this.mixTargetDelta=P=>{const C=P/1e3;gi(h.x,o.x,C),gi(h.y,o.y,C),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Et(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Cc(this.relativeTarget,this.relativeTargetOrigin,d,C),y&&ic(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=F()),H(y,this.relativeTarget)),x&&(this.animationValues=u,Xl(u,c,this.latestValues,C,v,w)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Q(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=k.update(()=>{Jt.hasAnimatedSinceResize=!0,this.currentAnimation=uc(0,fi,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(fi),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&Ks(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||F();const h=z(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+h;const d=z(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}H(a,l),Pt(a,u),Lt(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new sc),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const c={};for(let u=0;u<di.length;u++){const h="rotate"+di[u];l[h]&&(c[h]=l[h],o.setStaticValue(h,0))}o.render();for(const u in c)o.setStaticValue(u,c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return hc;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Xt(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Xt(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!ct(this.latestValues)&&(x.transform=u?u({},""):"none",this.hasProjected=!1),x}const d=h.animationValues||h.latestValues;this.applyTransformsToTarget(),c.transform=hi(this.projectionDeltaWithTransform,this.treeScale,d),u&&(c.transform=u(d,c.transform));const{x:f,y:g}=this.projectionDelta;c.transformOrigin=`${f.origin*100}% ${g.origin*100}% 0`,h.animationValues?c.opacity=h===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:c.opacity=h===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const x in te){if(d[x]===void 0)continue;const{correct:b,applyTo:w}=te[x],v=c.transform==="none"?d[x]:b(d[x],h);if(w){const y=w.length;for(let P=0;P<y;P++)c[w[P]]=v}else c[x]=v}return this.options.layoutId&&(c.pointerEvents=h===this?Xt(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(pi),this.root.sharedNodes.clear()}}}function fc(t){t.updateLayout()}function pc(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:s}=t.layout,{animationType:r}=t.options,o=n.source!==t.layout.source;r==="size"?G(h=>{const d=o?n.measuredBox[h]:n.layoutBox[h],f=z(d);d.min=i[h].min,d.max=d.min+f}):Ks(r,n.layoutBox,i)&&G(h=>{const d=o?n.measuredBox[h]:n.layoutBox[h],f=z(i[h]);d.max=d.min+f,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[h].max=t.relativeTarget[h].min+f)});const a=wt();Lt(a,i,n.layoutBox);const l=wt();o?Lt(l,t.applyTransform(s,!0),n.measuredBox):Lt(l,i,n.layoutBox);const c=!Us(a);let u=!1;if(!t.resumeFrom){const h=t.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:d,layout:f}=h;if(d&&f){const g=F();Et(g,n.layoutBox,d.layoutBox);const x=F();Et(x,i,f.layoutBox),Hs(g,x)||(u=!0),h.options.layoutRoot&&(t.relativeTarget=x,t.relativeTargetOrigin=g,t.relativeParent=h)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function mc(t){ut.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function gc(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function yc(t){t.clearSnapshot()}function pi(t){t.clearMeasurements()}function xc(t){t.isLayoutDirty=!1}function vc(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function mi(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function bc(t){t.resolveTargetDelta()}function wc(t){t.calcProjection()}function Pc(t){t.resetRotation()}function Tc(t){t.removeLeadSnapshot()}function gi(t,e,n){t.translate=L(e.translate,0,n),t.scale=L(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function yi(t,e,n,i){t.min=L(e.min,n.min,i),t.max=L(e.max,n.max,i)}function Cc(t,e,n,i){yi(t.x,e.x,n.x,i),yi(t.y,e.y,n.y,i)}function Sc(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Vc={duration:.45,ease:[.4,0,.1,1]},xi=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),vi=xi("applewebkit/")&&!xi("chrome/")?Math.round:E;function bi(t){t.min=vi(t.min),t.max=vi(t.max)}function Ac(t){bi(t.x),bi(t.y)}function Ks(t,e,n){return t==="position"||t==="preserve-aspect"&&!Oe(ui(e),ui(n),.2)}const Mc=Gs({attachResizeListener:(t,e)=>Y(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Me={current:void 0},_s=Gs({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Me.current){const t=new Mc({});t.mount(window),t.setOptions({layoutScroll:!0}),Me.current=t}return Me.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Dc={pan:{Feature:Gl},drag:{Feature:Hl,ProjectionNode:_s,MeasureLayout:$s}},kc=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function jc(t){const e=kc.exec(t);if(!e)return[,];const[,n,i]=e;return[n,i]}function We(t,e,n=1){const[i,s]=jc(t);if(!i)return;const r=window.getComputedStyle(e).getPropertyValue(i);if(r){const o=r.trim();return Ds(o)?parseFloat(o):o}else return ke(s)?We(s,e,n+1):s}function Rc(t,{...e},n){const i=t.current;if(!(i instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(s=>{const r=s.get();if(!ke(r))return;const o=We(r,i);o&&s.set(o)});for(const s in e){const r=e[s];if(!ke(r))continue;const o=We(r,i);o&&(e[s]=o,n||(n={}),n[s]===void 0&&(n[s]=r))}return{target:e,transitionEnd:n}}const Lc=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Zs=t=>Lc.has(t),Ec=t=>Object.keys(t).some(Zs),wi=t=>t===mt||t===T,Pi=(t,e)=>parseFloat(t.split(", ")[e]),Ti=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const s=i.match(/^matrix3d\((.+)\)$/);if(s)return Pi(s[1],e);{const r=i.match(/^matrix\((.+)\)$/);return r?Pi(r[1],t):0}},Fc=new Set(["x","y","z"]),Bc=zt.filter(t=>!Fc.has(t));function Oc(t){const e=[];return Bc.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const Ct={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Ti(4,13),y:Ti(5,14)};Ct.translateX=Ct.x;Ct.translateY=Ct.y;const Ic=(t,e,n)=>{const i=e.measureViewportBox(),s=e.current,r=getComputedStyle(s),{display:o}=r,a={};o==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(c=>{a[c]=Ct[c](i,r)}),e.render();const l=e.measureViewportBox();return n.forEach(c=>{const u=e.getValue(c);u&&u.jump(a[c]),t[c]=Ct[c](l,r)}),t},Nc=(t,e,n={},i={})=>{e={...e},i={...i};const s=Object.keys(e).filter(Zs);let r=[],o=!1;const a=[];if(s.forEach(l=>{const c=t.getValue(l);if(!t.hasValue(l))return;let u=n[l],h=Mt(u);const d=e[l];let f;if(ne(d)){const g=d.length,x=d[0]===null?1:0;u=d[x],h=Mt(u);for(let b=x;b<g&&d[b]!==null;b++)f?nn(Mt(d[b])===f):f=Mt(d[b])}else f=Mt(d);if(h!==f)if(wi(h)&&wi(f)){const g=c.get();typeof g=="string"&&c.set(parseFloat(g)),typeof d=="string"?e[l]=parseFloat(d):Array.isArray(d)&&f===T&&(e[l]=d.map(parseFloat))}else h!=null&&h.transform&&(f!=null&&f.transform)&&(u===0||d===0)?u===0?c.set(f.transform(u)):e[l]=h.transform(d):(o||(r=Oc(t),o=!0),a.push(l),i[l]=i[l]!==void 0?i[l]:e[l],c.jump(d))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,c=Ic(e,t,a);return r.length&&r.forEach(([u,h])=>{t.getValue(u).set(h)}),t.render(),ue&&l!==null&&window.scrollTo({top:l}),{target:c,transitionEnd:i}}else return{target:e,transitionEnd:i}};function $c(t,e,n,i){return Ec(e)?Nc(t,e,n,i):{target:e,transitionEnd:i}}const Wc=(t,e,n,i)=>{const s=Rc(t,e,i);return e=s.target,i=s.transitionEnd,$c(t,e,n,i)},ze={current:null},Ys={current:!1};function zc(){if(Ys.current=!0,!!ue)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>ze.current=t.matches;t.addListener(e),e()}else ze.current=!1}function Uc(t,e,n){const{willChange:i}=e;for(const s in e){const r=e[s],o=n[s];if(W(r))t.addValue(s,r),re(i)&&i.add(s);else if(W(o))t.addValue(s,Tt(r,{owner:t})),re(i)&&i.remove(s);else if(o!==r)if(t.hasValue(s)){const a=t.getValue(s);!a.hasAnimated&&a.set(r)}else{const a=t.getStaticValue(s);t.addValue(s,Tt(a!==void 0?a:r,{owner:t}))}}for(const s in n)e[s]===void 0&&t.removeValue(s);return e}const Ci=new WeakMap,qs=Object.keys(Ot),Hc=qs.length,Si=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Gc=_e.length;class Kc{constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:s,visualState:r},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>k.render(this.render,!1,!0);const{latestValues:a,renderState:l}=r;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=o,this.isControllingVariants=de(n),this.isVariantNode=Ei(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(n,{});for(const h in u){const d=u[h];a[h]!==void 0&&W(d)&&(d.set(a[h],!1),re(c)&&c.add(h))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,Ci.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),Ys.current||zc(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ze.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Ci.delete(this.current),this.projection&&this.projection.unmount(),Q(this.notifyUpdate),Q(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const i=pt.has(e),s=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&k.update(this.notifyUpdate,!1,!0),i&&this.projection&&(this.projection.isTransformDirty=!0)}),r=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{s(),r()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},i,s,r){let o,a;for(let l=0;l<Hc;l++){const c=qs[l],{isEnabled:u,Feature:h,ProjectionNode:d,MeasureLayout:f}=Ot[c];d&&(o=d),u(n)&&(!this.features[c]&&h&&(this.features[c]=new h(this)),f&&(a=f))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:u,dragConstraints:h,layoutScroll:d,layoutRoot:f}=n;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!u||h&&vt(h),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:r,layoutScroll:d,layoutRoot:f})}return a}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):F()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Si.length;i++){const s=Si[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const r=e["on"+s];r&&(this.propEventSubscriptions[s]=this.on(s,r))}this.prevMotionValues=Uc(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<Gc;i++){const s=_e[i],r=this.props[s];(Bt(r)||r===!1)&&(n[s]=r)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Tt(n,{owner:this}),this.addValue(e,i)),i}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props,s=typeof i=="string"||typeof i=="object"?(n=en(this.props,i))===null||n===void 0?void 0:n[e]:void 0;if(i&&s!==void 0)return s;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!W(r)?r:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new dn),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class Xs extends Kc{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...i},s){const r=cl(i,e||{},this);if(s){al(this,i,r);const o=Wc(this,i,r,n);n=o.transitionEnd,i=o.target}return{transition:e,transitionEnd:n,...i}}}function _c(t){return window.getComputedStyle(t)}class Zc extends Xs{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(pt.has(n)){const i=an(n);return i&&i.default||0}else{const i=_c(e),s=(Ii(n)?i.getPropertyValue(n):i[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return Is(e,n)}build(e,n,i,s){qe(e,n,i,s.transformTemplate)}scrapeMotionValuesFromProps(e,n){return tn(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;W(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,i,s){Hi(e,n,i,s)}}class Yc extends Xs{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(pt.has(n)){const i=an(n);return i&&i.default||0}return n=Gi.has(n)?n:He(n),e.getAttribute(n)}measureInstanceViewportBox(){return F()}scrapeMotionValuesFromProps(e,n){return _i(e,n)}build(e,n,i,s){Qe(e,n,i,this.isSVGTag,s.transformTemplate)}renderInstance(e,n,i,s){Ki(e,n,i,s)}mount(e){this.isSVGTag=Je(e.tagName),super.mount(e)}}const qc=(t,e)=>Ye(t)?new Yc(e,{enableHardwareAcceleration:!1}):new Zc(e,{enableHardwareAcceleration:!0}),Xc={layout:{ProjectionNode:_s,MeasureLayout:$s}},Qc={...Cl,...Hr,...Dc,...Xc},Jc=nr((t,e)=>jr(t,e,Qc,qc));function Qs(){const t=m.useRef(!1);return Ue(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function tu(){const t=Qs(),[e,n]=m.useState(0),i=m.useCallback(()=>{t.current&&n(e+1)},[e]);return[m.useCallback(()=>k.postRender(i),[i]),e]}class eu extends m.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function nu({children:t,isPresent:e}){const n=m.useId(),i=m.useRef(null),s=m.useRef({width:0,height:0,top:0,left:0});return m.useInsertionEffect(()=>{const{width:r,height:o,top:a,left:l}=s.current;if(e||!i.current||!r||!o)return;i.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${r}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[e]),m.createElement(eu,{isPresent:e,childRef:i,sizeRef:s},m.cloneElement(t,{ref:i}))}const De=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:s,presenceAffectsLayout:r,mode:o})=>{const a=Zi(iu),l=m.useId(),c=m.useMemo(()=>({id:l,initial:e,isPresent:n,custom:s,onExitComplete:u=>{a.set(u,!0);for(const h of a.values())if(!h)return;i&&i()},register:u=>(a.set(u,!1),()=>a.delete(u))}),r?void 0:[n]);return m.useMemo(()=>{a.forEach((u,h)=>a.set(h,!1))},[n]),m.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=m.createElement(nu,{isPresent:n},t)),m.createElement(ce.Provider,{value:c},t)};function iu(){return new Map}function su(t){return m.useEffect(()=>()=>t(),[])}const ht=t=>t.key||"";function ou(t,e){t.forEach(n=>{const i=ht(n);e.set(i,n)})}function ru(t){const e=[];return m.Children.forEach(t,n=>{m.isValidElement(n)&&e.push(n)}),e}const au=({children:t,custom:e,initial:n=!0,onExitComplete:i,exitBeforeEnter:s,presenceAffectsLayout:r=!0,mode:o="sync"})=>{const a=m.useContext(Ze).forceRender||tu()[0],l=Qs(),c=ru(t);let u=c;const h=m.useRef(new Map).current,d=m.useRef(u),f=m.useRef(new Map).current,g=m.useRef(!0);if(Ue(()=>{g.current=!1,ou(c,f),d.current=u}),su(()=>{g.current=!0,f.clear(),h.clear()}),g.current)return m.createElement(m.Fragment,null,u.map(v=>m.createElement(De,{key:ht(v),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:r,mode:o},v)));u=[...u];const x=d.current.map(ht),b=c.map(ht),w=x.length;for(let v=0;v<w;v++){const y=x[v];b.indexOf(y)===-1&&!h.has(y)&&h.set(y,void 0)}return o==="wait"&&h.size&&(u=[]),h.forEach((v,y)=>{if(b.indexOf(y)!==-1)return;const P=f.get(y);if(!P)return;const C=x.indexOf(y);let M=v;if(!M){const D=()=>{h.delete(y);const S=Array.from(f.keys()).filter(V=>!b.includes(V));if(S.forEach(V=>f.delete(V)),d.current=c.filter(V=>{const U=ht(V);return U===y||S.includes(U)}),!h.size){if(l.current===!1)return;a(),i&&i()}};M=m.createElement(De,{key:ht(P),isPresent:!1,onExitComplete:D,custom:e,presenceAffectsLayout:r,mode:o},P),h.set(y,M)}u.splice(C,0,M)}),u=u.map(v=>{const y=v.key;return h.has(y)?v:m.createElement(De,{key:ht(v),isPresent:!0,presenceAffectsLayout:r,mode:o},v)}),m.createElement(m.Fragment,null,h.size?u:u.map(v=>m.cloneElement(v)))},lu=A(Jc.div)`
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
`,cu=({calendarRef:t,refData:e,waterData:n={}})=>{const{data:i,waterRate:s,dailyNormFulfillment:r,servingOfWater:o}=n,a=e==null?void 0:e.current.getBoundingClientRect().left,l=t==null?void 0:t.current.getBoundingClientRect().left;let c=!0;const u=a-l;return u<300&&(c=!1),p.jsx(lu,{variants:Ho,initial:"initial",animate:"animate",exit:"exit",$delta:c,$deltaNum:u,children:Object.values(n).length?p.jsxs(p.Fragment,{children:[p.jsx("h3",{children:i}),p.jsxs("p",{children:["Daily norma: ",p.jsxs("span",{children:[s," L"]})]}),p.jsxs("p",{children:["Fulfillment of the daily norm: ",p.jsxs("span",{children:[r,"%"]})]}),p.jsxs("p",{children:["How many servings of water: ",p.jsx("span",{children:o})]})]}):p.jsx("h3",{children:"You do not have info about this day."})})},uu=({calendarRef:t,day:e,waterPercentage:n})=>{const[i,s]=m.useState(null),r=m.useRef(null),o=l=>{r.current&&!r.current.contains(l.target)&&s(null)};m.useEffect(()=>(document.addEventListener("click",o),()=>{document.removeEventListener("click",o)}),[]);const a=m.useCallback((l=null)=>{s(c=>c===l?null:l)},[]);return p.jsxs(Uo,{children:[p.jsx(au,{children:i===e&&p.jsx(cu,{calendarRef:t,refData:r,waterData:n},e)}),p.jsx(Io,{ref:r,onClick:()=>a(e),$isOutlineVisible:!n||n.dailyNormFulfillment<100,children:e}),p.jsx(Wo,{children:n?`${n.dailyNormFulfillment}%`:"0%"})]},e)},hu=()=>{const[t,e]=m.useState(new Date),n=Nt(),i=Ft(co),s=m.useRef(null);m.useEffect(()=>{n(no(t.getMonth()))},[n,t]);const r=()=>{e(new Date(t.getFullYear(),t.getMonth()+1,1))},o=()=>{e(new Date(t.getFullYear(),t.getMonth()-1,1))},a=()=>new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),l=()=>{const c=a();return Array.from({length:c},(h,d)=>d+1).map(h=>{const d=i==null?void 0:i.find(f=>Number(f.data.split(",")[0])===h);return p.jsx(uu,{calendarRef:s,day:h,waterPercentage:d},h)})};return p.jsxs(Bo,{className:"calendar",ref:s,children:[p.jsxs(Oo,{children:[p.jsx("h2",{children:"Month"}),p.jsxs(No,{children:[p.jsx(bn,{"aria-label":"Previous month",onClick:o,children:p.jsx("svg",{width:"14",height:"14",children:p.jsx("use",{href:xn+"#arrow-left"})})}),p.jsx($o,{children:new Intl.DateTimeFormat("en-US",{month:"long"}).format(t)}),p.jsx(bn,{"aria-label":"Previous month",onClick:r,children:p.jsx("svg",{width:"14",height:"14",children:p.jsx("use",{href:xn+"#arrow-right"})})})]})]}),p.jsx(zo,{children:l()})]})},du=I.div`
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
`,fu=I.div`
  margin: 0 auto;

  @media (min-width: 1440px) {
    display: flex;
    gap: 32px;   
  }
`,pu=I.div`
  padding: 24px 8px;
  background-color: ${j.secondaryColor2WhiteBlue};
  border-radius: 10px;
  box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.3);
  
  @media (min-width: 768px) {
  padding: 32px 24px ;

  @media (min-width: 1440px) {
  width: 592px;
  }
  }
  
`,mu=I.div`
  height: 260px;
`,gu=I.div`
margin-bottom: 40px;

@media (min-width: 1440px) {
    padding-top: 32px;
    margin-bottom: 0;
  }
`,yu=A.div`
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
`,xu=A.div`
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
`,vu=A.button`
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
`,bu=A.h1`
  margin-bottom: 24px;
  color: var(--Primery-Color-Black, #2f2f2f);
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
`,wu=A.div`
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
`,Pu=A.p`
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
`,Tu=A.form`
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
`;function Cu({closeModal:t}){const e=Nt(),[n,i]=m.useState(0),[s,r]=m.useState(0),[o,a]=m.useState("woman"),[l,c]=m.useState(0),[u,h]=m.useState(0);m.useEffect(()=>(window.addEventListener("keydown",d),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",d),document.body.style.overflow="auto"}));const d=w=>{w.code==="Escape"&&t()},f=w=>{w.target===w.currentTarget&&t()},g=w=>{const{name:v,value:y}=w.target;switch(v){case"weight":i(y);break;case"activeTime":r(y);break;case"waterToDrink":h(y);break;case"gender":a(y);break}},x=async w=>{w.preventDefault();const v={waterRate:u*1e3};u>0&&(e(so(v)),i(0),r(0),h(0),t()),alert("Something went wrong")},b=(w,v,y)=>{if(w==="woman"){const P=v*.03+y*.4;c(P.toFixed(1))}else{const P=v*.04+y*.6;c(P.toFixed(1))}};return m.useEffect(()=>{b(o,n,s)},[s,n,o]),p.jsx(yu,{onClick:f,children:p.jsxs(xu,{children:[p.jsx(vu,{onClick:t,children:p.jsx(io,{})}),p.jsx(bu,{children:"My daily norma"}),p.jsxs(wu,{children:[p.jsxs("p",{className:"formula-text",children:["For girl:"," ",p.jsx("span",{className:"formula-acsent",children:"V=(M*0,03) + (T*0,4)"})]}),p.jsxs("p",{className:"formula-text",children:["For man:"," ",p.jsx("span",{className:"formula-acsent",children:"V=(M*0,04) + (T*0,6)"})]})]}),p.jsxs(Pu,{children:[p.jsx("span",{className:"acsent-color",children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]}),p.jsxs(Tu,{onSubmit:x,children:[p.jsx("h2",{className:"sub-title",children:"Calculate your rate:"}),p.jsxs("div",{className:"gender-lable",children:[p.jsxs("label",{children:[p.jsx("input",{type:"radio",name:"gender",value:"woman",onChange:g,checked:o==="woman",className:"check"}),p.jsx("span",{className:"chek-title",children:"For woman"})]}),p.jsxs("label",{htmlFor:"",children:[p.jsx("input",{type:"radio",name:"gender",value:"man",onChange:g,checked:o==="man",className:"check"}),p.jsx("span",{className:"chek-title",children:"For man"})]})]}),p.jsx("p",{className:"weight-title",children:"Your weight in kilograms:"}),p.jsx("label",{className:"weight-lable",children:p.jsx("input",{type:"number",min:0,name:"weight",value:n,onChange:g,className:"form-input"})}),p.jsx("p",{className:"activeTime-title",children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),p.jsx("label",{className:"activeTime-lable",children:p.jsx("input",{type:"number",min:0,name:"activeTime",value:s,onChange:g,className:"form-input"})}),p.jsxs("div",{className:"litersPerDay-container",children:[p.jsx("p",{className:"litersPerDay-text",children:"The required amount of water in liters per day:"})," ",p.jsxs("span",{className:"calculated-litersPerDay",children:[l," L"]})]}),p.jsx("h2",{className:"sub-title",children:"Write down how much water you will drink:"}),p.jsx("label",{className:"waterToDrink-lable",children:p.jsx("input",{type:"number",min:0,max:15,name:"waterToDrink",value:u,onChange:g,className:"form-input",required:!0})}),p.jsx("button",{type:"submit",className:"submit-btn",children:"Save"})]})]})})}const Du=()=>{const[t,e]=m.useState(!1),n=()=>{e(!t)};return p.jsxs(p.Fragment,{children:[p.jsx(du,{}),p.jsxs(fu,{children:[p.jsxs(gu,{children:[p.jsx(lo,{openModal:n}),p.jsx(Po,{})]}),p.jsxs(pu,{children:[p.jsx(mu,{children:p.jsx(Fo,{})}),p.jsx(hu,{})]})]}),t&&p.jsx(Cu,{closeModal:n})]})};export{Du as default};
