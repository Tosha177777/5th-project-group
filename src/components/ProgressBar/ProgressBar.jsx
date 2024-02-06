import { useDispatch, useSelector } from 'react-redux';
import { selectTodayWater } from '/src/redux/waterSelectors';
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
import { useEffect, useMemo, useRef } from 'react';
import { todayWaterThunk } from '/src/redux/waterOperations';

const ProgressBar = () => {
  const todayData = useSelector(selectTodayWater);

  const progressLineRef = useRef(null);
  const achievedProgressRef = useRef(null);
  const achievedPercentRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todayWaterThunk());
  }, [dispatch]);

  const waterPercentage = useMemo(() => {
    if (todayData) {
      return todayData.percentage;
    }
    return 0;
  }, [todayData]);

  useEffect(() => {
    const progressLine = progressLineRef.current;
    const achievedProgress = achievedProgressRef.current;
    const achievedPercent = achievedPercentRef.current;

    if (progressLine && achievedProgress && achievedPercent) {
      progressLine.style.width = `${
        waterPercentage > 100 ? 100 : waterPercentage
      }%`;
      achievedProgress.style.left = `${
        waterPercentage > 100 ? 100 : waterPercentage - 1
      }%`;
      achievedPercent.style.left = `${
        waterPercentage > 100 ? 100 : waterPercentage
      }%`;
    }
  }, [waterPercentage]);

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
          {waterPercentage > 0 || waterPercentage < 100 ? (
            <StyledPercentage ref={achievedPercentRef}>
              {waterPercentage}%
            </StyledPercentage>
          ) : null}
        </StyledNumberWrap>
      </StyledWrapper>
      <StyledButton>
        <Plus />
        <span>Add Water</span>
      </StyledButton>
    </StyledWrap>
  );
};

export default ProgressBar;
