// import { useEffect, useState } from 'react';
import { 
  HomeContainer, 
  Container, 
  DailyContainer, 
  ControllContainer, 
  ProgressWrapper
} from './HomePage.styled';
import DailyWaterRate from '/src/components/DailyWaterRate/DailyWaterRate';
import ProgressBar from '/src/components/ProgressBar/ProgressBar';
import {Today} from '/src/components/Today/Today.jsx';

const HomePage = () => {
  

  return (
    <>    
      <HomeContainer></HomeContainer>
      {/* <Container> */}
        <DailyWaterRate />
        <ProgressBar/>
  
     {/* <DailyContainer/> */}
     {/* <ProgressWrapper>
       <ControllContainer>
         <Today />
       </ControllContainer>
     </ProgressWrapper> */}
    {/* </Container> */}

  </>
);

};

export default HomePage;
