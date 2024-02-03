import Calendar from 'react-calendar';
import { HomeContainer, DailyContainer, ControllContainer } from './HomePage.styled';
import { useState } from 'react';

// import MyComponent from './ProgresBar';

const HomePage = () => {
  // const state = {
  //   date: null  
  // };
  // const handleDateChange = date => this.setState({ date });

  // const { date } = this.state;
 
  const [calendarValue, onChangeCalendar] = useState(new Date()); 
  return (
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

};

export default HomePage;
