// import { useEffect, useState } from 'react';
import {
  HomeContainer,
  StyledContainer,
  StyledDataWrap,
  StyledInfoWrap,
  StyledTodayInfo
} from './HomePage.styled';
import DailyWaterRate from '/src/components/DailyWaterRate/DailyWaterRate';
import ProgressBar from '/src/components/ProgressBar/ProgressBar';
import  Today  from '/src/components/Today/Today.jsx';

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

          {/* тут вставити календар */}

        </StyledInfoWrap>
      </StyledContainer>
    </>
  );
};

export default HomePage;
