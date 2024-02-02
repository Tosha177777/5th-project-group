import { Calendar } from './Calendar/calendar';
import { HomeContainer, DailyContainer, ControllContainer } from './HomePage.styled';
import MyComponent from './ProgresBar';

const HomePage = () => {

  return (
<HomeContainer>
  <DailyContainer>

   <MyComponent>Today</MyComponent>
     
  </DailyContainer>
  <ControllContainer>
     <Calendar></Calendar>
  </ControllContainer>
</HomeContainer>);

};

export default HomePage;
