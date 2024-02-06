import { useSelector } from 'react-redux';
import { selectWaterIsLoading } from '/src/redux/waterSelectors';
import DailyWaterRate from '/src/components/DailyWaterRate/DailyWaterRate';
import ProgressBar from '/src/components/ProgressBar/ProgressBar';
import  Today  from '/src/components/Today/Today.jsx';
import Calendar from '/src/components/Calendar/Calendar';
import { Loader } from '/src/components/Loader/Loader';
import {
  HomeContainer,
  StyledContainer,
  StyledDataWrap,
  StyledInfoWrap,
  StyledTodayInfo
} from './HomePage.styled';

const HomePage = () => {  
  const isLoading = useSelector(selectWaterIsLoading);

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
    {isLoading && <Loader/> }
            <Today />
          </StyledTodayInfo>
    {isLoading && <Loader/> }
          <Calendar />          
        </StyledInfoWrap>
      </StyledContainer>
    </>
  );
};

export default HomePage;
