import DailyWaterRate from '/src/components/DailyWaterRate/DailyWaterRate';
import ProgressBar from '/src/components/ProgressBar/ProgressBar';
import Today from '/src/components/Today/Today.jsx';
import Month from '/src/components/Calendar/Month/Month';
import {
  HomeContainer,
  StyledContainer,
  StyledDataWrap,
  StyledInfoWrap,
  StyledTodayInfo,
} from './HomePage.styled';
import { DailyNormaModal } from '../../components/DailyNormaModal/DailyNormaModal';
import { useState } from 'react';

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);

  const toglModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <HomeContainer></HomeContainer>
      <StyledContainer>
        <StyledDataWrap>
          <DailyWaterRate openModal={toglModal} />
          <ProgressBar />
        </StyledDataWrap>
        <StyledInfoWrap>
          <StyledTodayInfo>
            <Today />
          </StyledTodayInfo>
          <Month />
        </StyledInfoWrap>
      </StyledContainer>
      {openModal && <DailyNormaModal closeModal={toglModal} />}
    </>
  );
};

export default HomePage;
