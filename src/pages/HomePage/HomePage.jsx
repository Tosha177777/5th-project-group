import { Calendar } from './Calendar/calendar';
import { HomeContainer, DailyContainer, ControllContainer } from './HomePage.styled';
import MyComponent from './ProgresBar';

const HomePage = () => {
  state = {
    daye: null  
  };
  handleDateChange = date => this.setState({ date });

  const { date } = this.state;
  return (
<HomeContainer>
  <DailyContainer>

   <MyComponent>Today</MyComponent>
     
  </DailyContainer>
  <ControllContainer>
    {date && <p>Selected date: {date.toLocaleDateString()}</p> }
     <Calendar
     onChange={this.handleDateChange} 
     />
  </ControllContainer>
</HomeContainer>);

};

export default HomePage;
