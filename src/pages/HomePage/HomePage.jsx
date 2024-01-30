import { Container, DailyContainer, ControllContainer } from './HomePage.styled';
import MyComponent from './ProgresBar';

const HomePage = () => {
  return (
<Container>
  <DailyContainer>

   <MyComponent>Today</MyComponent>
     
  </DailyContainer>
  <ControllContainer>
    
  </ControllContainer>
</Container>);

};

export default HomePage;
