import { useDispatch, useSelector } from 'react-redux';
import { todayWaterThunk } from '/src/redux/waterOperations';
import { selectTodayWater } from '/src/redux/waterSelectors';
import {selectUserNorma} from '/src/redux/authSelectors.js'
import { ReactComponent as Plus } from '/src/svgs/icons/plus-circle.svg';
import {
  StyledButton,
  StyledDote,
  StyledLine,
  StyledNumberWrap,
  StyledPercentage,
  StyledProgressLine,
  StyledText,
  StyledWrap,
  StyledWrapper,
} from './ProgressBar.styled';
import { useEffect, useMemo, useState } from 'react';
import { AddWater } from '../AddWater/AddWater';

const ProgressBar = () => {
  const todayPortions = useSelector(selectTodayWater);
  const userNorma = useSelector(selectUserNorma);
  const [isOpenedAdd, setIsOpenedAdd] = useState(false);

  const [progressWidth, setProgressWidth] = useState(0);
  const [achievedProgressLeft, setAchievedProgressLeft] = useState(0);
  const [achievedPercentLeft, setAchievedPercentLeft] = useState(0);

  const dispatch = useDispatch();

  const todayPercentage = useMemo(() => {
    if (todayPortions.length) {
      const todayWater = Math.ceil(todayPortions.reduce((prevValue, portion) => {
        return prevValue += portion.waterVolume;
      }, 0) / userNorma * 10) * 10;
      return todayWater > 100 ? 100 : todayWater;
    } return 0;
  }, [todayPortions, userNorma]);    
  

    useEffect(() => {
    dispatch(todayWaterThunk());
  }, [dispatch]);

  useEffect(() => {
    setProgressWidth(todayPercentage);
    setAchievedProgressLeft(todayPercentage);
    setAchievedPercentLeft(todayPercentage);
  }, [todayPercentage]);

  const onAddWaterModal = () => {
    setIsOpenedAdd(!isOpenedAdd);
  };

  
  return (
    <StyledWrap>
      <StyledWrapper>
        <StyledText>Today</StyledText>
        <StyledLine>
          <StyledProgressLine style={{ width: `${progressWidth}%` }} />
          <StyledDote style={{ left: `${achievedProgressLeft}%` }} />
        </StyledLine>
        <StyledNumberWrap>
          <p>0%</p>
          <p>100%</p>
          {todayPercentage > 0 || todayPercentage < 100 ? (
            <StyledPercentage style={{ left: `${achievedPercentLeft}%` }}>
              {todayPercentage}%
            </StyledPercentage>
          ) : null}
        </StyledNumberWrap>
      </StyledWrapper>
      <StyledButton onClick={onAddWaterModal}>
        <Plus />
        <span>Add Water</span>
      </StyledButton>
      {isOpenedAdd && <AddWater onClose={onAddWaterModal}/>}
    </StyledWrap>
  );
};

export default ProgressBar;
