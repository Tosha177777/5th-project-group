import DailyWaterRate from '/src/components/DailyWaterRate/DailyWaterRate';
import ProgressBar from '/src/components/ProgressBar/ProgressBar';
import Today  from '/src/components/Today/Today.jsx';
import Month from '/src/components/Calendar/Month/Month';
import {
  HomeContainer,
  StyledContainer,
  StyledDataWrap,
  StyledInfoWrap,
  StyledTodayInfo
} from './HomePage.styled';

const HomePage = () => {  
  return (
    <>
      <HomeContainer></HomeContainer>
      <StyledContainer>
        <StyledDataWrap>
          <DailyWaterRate />
          <ProgressBar />
        </StyledDataWrap>
        <StyledInfoWrap>
          <StyledTodayInfo>
            <Today />
          </StyledTodayInfo>
            <Month />          
        </StyledInfoWrap>
      </StyledContainer>
    </>
  );
};

export default HomePage;
