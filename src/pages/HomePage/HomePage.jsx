<<<<<<< HEAD
import Calendar from 'react-calendar';
import { HomeContainer, DailyContainer, ControllContainer } from './HomePage.styled';
import { useState } from 'react';

// import MyComponent from './ProgresBar';

const HomePage = () => {
  // const state = {
  //   date: null  
  // };
  // const handleDateChange = date => this.setState({ date });
=======
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
>>>>>>> bb2e24364ed54dd974bedc023f7835f2d2824fe9

  // const { date } = this.state;
 
  const [calendarValue, onChangeCalendar] = useState(new Date()); 
  return (
<<<<<<< HEAD
    <>
<HomeContainer></HomeContainer>
<p>My daily norma</p>
  <span>1.5 L edit</span>
   <DailyContainer>
{/* 
    <MyComponent>Today</MyComponent> */}
     
  </DailyContainer> 
  <ControllContainer>
    <div>Today</div>
    <div>
      <Calendar onChange={onChangeCalendar} value={calendarValue} />
    </div>

  </ControllContainer>
  </>
);

=======
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
>>>>>>> bb2e24364ed54dd974bedc023f7835f2d2824fe9
};

export default HomePage;
