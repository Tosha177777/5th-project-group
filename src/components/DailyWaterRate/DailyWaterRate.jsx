import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from '/src/redux/authOperations';
import {
  StyledInfoWrap,
  StyledText,
  StyledWrap,
} from './DailyWaterRate.styled';
import { useEffect } from 'react';
import { selectAuthUserData } from '../../redux/authSelectors';

const DailyWaterRate = ({ openModal }) => {
  const userData = useSelector(selectAuthUserData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <StyledWrap>
      <StyledText>My daily norma</StyledText>
      <StyledInfoWrap>
        <p>{userData.waterRate / 1000} L</p>
        <button type="button" onClick={openModal}>
          Edit
        </button>
      </StyledInfoWrap>
    </StyledWrap>
  );
};

export default DailyWaterRate;
