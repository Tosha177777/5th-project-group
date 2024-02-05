// import { useEffect, useState } from 'react';
import { 
  HomeContainer, 
  Container, 
  DailyContainer, 
  ControllContainer, 
  ProgressWrapper
} from './HomePage.styled';
// import ProgressBar from './ProgresBar';
import {Today} from '../../components/Today/Today.jsx';

const HomePage = () => {
  // const [progress, setProgress] = useState(0);
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setProgress(Math.random()*100);
  //   }, 3000);
  //   return () => {
  //     clearInterval(id);
  //   }
  // }, []);

  return (
    <>
    <Container>
     <HomeContainer></HomeContainer>
  
     <DailyContainer>
       <p>My daily norma</p>
       <span>1.5 L edit</span>

   {/* <ProgressBar value={progress} /> */}
     </DailyContainer>
     <ProgressWrapper>
       <ControllContainer>
         <Today />
       </ControllContainer>
     </ProgressWrapper>
    </Container>

  </>
);

};

export default HomePage;
