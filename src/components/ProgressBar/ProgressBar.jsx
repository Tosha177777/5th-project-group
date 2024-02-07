import { useDispatch, useSelector } from 'react-redux';
import { todayWaterThunk } from '/src/redux/waterOperations';
import { selectTodayPercentage } from '../../redux/waterSelectors';
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
import { useEffect, useRef, useState } from 'react';
import { AddWater } from '../AddWater/AddWater';

const ProgressBar = () => {
  const todayPercentage = useSelector(selectTodayPercentage);
  const [isOpenedAdd, setIsOpenedAdd] = useState(false);

  const progressLineRef = useRef(null);
  const achievedProgressRef = useRef(null);
  const achievedPercentRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todayWaterThunk());
  }, [dispatch, todayPercentage]);

   const onAddWaterModal = () => {
    setIsOpenedAdd(!isOpenedAdd);
  };

  useEffect(() => {
    const progressLine = progressLineRef.current;
    const achievedProgress = achievedProgressRef.current;
    const achievedPercent = achievedPercentRef.current;

    if (progressLine && achievedProgress && achievedPercent) {
      progressLine.style.width = `${
        todayPercentage > 100 ? 100 : todayPercentage
      }%`;
      achievedProgress.style.left = `${
        todayPercentage > 100 ? 100 : todayPercentage - 1
      }%`;
      achievedPercent.style.left = `${
        todayPercentage > 100 ? 100 : todayPercentage
      }%`;
    }
  }, [todayPercentage]);

  return (
    <StyledWrap>
      <StyledWrapper>
        <StyledText>Today</StyledText>
        <StyledLine>
          <StyledProgressLine ref={progressLineRef} />
          <StyledDote ref={achievedProgressRef} />
        </StyledLine>
        <StyledNumberWrap>
          <p>0%</p>
          <p>100%</p>
          {todayPercentage > 0 || todayPercentage < 100 ? (
            <StyledPercentage ref={achievedPercentRef}>
              {todayPercentage}%
            </StyledPercentage>
          ) : null}
        </StyledNumberWrap>
      </StyledWrapper>
      <StyledButton onClick={onAddWaterModal}>
        <Plus />
        <span>Add Water</span>
      </StyledButton>
    {isOpenedAdd && <AddWater onClose={onAddWaterModal} />}
    </StyledWrap>
    
  );
};

export default ProgressBar;
