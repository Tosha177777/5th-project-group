import { useSelector } from 'react-redux';
import { selectWaterToDrink } from '../../redux/waterSelectors';
import { StyledInfoWrap, StyledText, StyledWrap } from './DailyWaterRate.styled';

const DailyWaterRate = () => {
  const userNorma = useSelector(selectWaterToDrink);
  
  return (
    <StyledWrap>
      <StyledText>My daily norma</StyledText>
      <StyledInfoWrap>
        <p>{userNorma/1000} L</p>
        <button>Edit</button>
      </StyledInfoWrap>
    </StyledWrap>
  );
};

export default DailyWaterRate;
