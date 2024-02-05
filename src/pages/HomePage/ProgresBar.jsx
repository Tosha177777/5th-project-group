import { useEffect, useRef } from 'react';

import { ProgressbarContainer, Progressbar, Bar, ProgressbarTextContainer } from './ProgressBar.styled.js';


function ProgressBar({value}){
  const progressTextRef = useRef(null);
  useEffect (() => {
    const progressText = progressTextRef.current?.textContent;
     
  return(
    <ProgressbarContainer>
      <Progressbar>
        <Bar />
      </Progressbar>
      <ProgressbarTextContainer>
        <p ref={progressTextRef}>0</p>
        <p>%</p>
      </ProgressbarTextContainer>
    </ProgressbarContainer>
  );
}

export default ProgressBar;
// import React from "react";
// import {Container, ProgressContainer, Progressbar} from "./ProgressBar.styled";

// export const ProgressBar =()=>{
//   return(
//     <Container>
//       <ProgressContainer>
//         <ProgressBar>Today</ProgressBar>
//       </ProgressContainer>
//     </Container>
//   )
// }