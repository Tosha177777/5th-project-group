import Calendar from 'react-calendar';
import { HomeContainer, DailyContainer, ControllContainer } from './HomePage.styled';
import { useState } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";


const HomePage = () => {
  const [calendarValue, onChangeCalendar] = useState(new Date());
  return (
    <>
      <HomeContainer></HomeContainer>
       <p>My daily norma</p>
       <span>1.5 L edit</span>
      <DailyContainer>
       <p>Today</p>
      <ProgressBar completed={100}  />
      <button type="button">
        Add Water
      </button>     
      </DailyContainer> 
      <ControllContainer>
       <div>
        <p>Today</p>
        </div>

      <div>
        <Calendar onChange={onChangeCalendar} value={calendarValue} />
      </div>

      </ControllContainer>
    </>
  );
};

export default HomePage;
