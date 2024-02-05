import { useSelector } from 'react-redux';
import {
  selectTodayWater,
  selectWaterToDrink,
} from '../../redux/waterSelectors';
import { ReactComponent as Plus } from '../../svgs/icons/plus-circle.svg';
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
import { useEffect, useMemo } from 'react';

const ProgressBar = () => {
  const userNorma = useSelector(selectWaterToDrink);
  const todayData = useSelector(selectTodayWater);

  const drunkenWater = useMemo(() => {
    if (todayData) {
      todayData.reduce((prevValue, record) => {
        return prevValue + record.waterVolume;
      }, 0);
    }
    return 0;
  }, [todayData]);

  useEffect(() => {
    const progressLine = document.getElementById('progress-line');
    const achievedProgress = document.getElementById('drunken-water');
    const achievedPercent = document.getElementById('progress-percent');

    const todayPercentage = (1600 / 2000) * 100; //змінити на userNorma i drunkenWater

    progressLine.style.width = `${todayPercentage}%`;
    achievedProgress.style.left = `${todayPercentage-1}%`;
    achievedPercent.style.left = `${todayPercentage}%`;
  }, [drunkenWater, userNorma]);

  return (
    <StyledWrap>
      <StyledWrapper>
        <StyledText>Today</StyledText>
        <StyledLine>
          <StyledProgressLine id="progress-line" />
          <StyledDote id="drunken-water" />
        </StyledLine>
        <StyledNumberWrap>
          <p>0%</p>
          <p>100%</p>
          {/* <StyledPercentage id = "progress-percent">{(drunkenWater / userNorma) * 100}%</StyledPercentage> */}
          {drunkenWater > 0 || drunkenWater !== 100 ? (
            <StyledPercentage id = "progress-percent">
              {(drunkenWater / userNorma) * 100}%
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
