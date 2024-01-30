import { HomeContainer, DailyContainer, ControllContainer } from './HomePage.styled';
import MyComponent from './ProgresBar';

const HomePage = () => {
  return (
<HomeContainer>
  <DailyContainer>

   <MyComponent>Today</MyComponent>
     
  </DailyContainer>
  <ControllContainer>

  </ControllContainer>
</HomeContainer>);

};

export default HomePage;
