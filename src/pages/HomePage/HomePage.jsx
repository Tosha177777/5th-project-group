import { Calendar } from './Calendar/Calendar';
import {
  HomeContainer,
  DailyContainer,
  ControllContainer,
} from './HomePage.styled';
import MyComponent from './ProgresBar';

const HomePage = () => {
  const state = {
    daye: null,
  };
  const handleDateChange = (date) => setState({ date });

  const { date } = this.state;
  return (
    <HomeContainer>
      <DailyContainer>
        <MyComponent>Today</MyComponent>
      </DailyContainer>
      <ControllContainer>
        {date && <p>Selected date: {date.toLocaleDateString()}</p>}
        <Calendar onChange={this.handleDateChange} />
      </ControllContainer>
    </HomeContainer>
  );
};

export default HomePage;
