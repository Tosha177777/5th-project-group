import { RotatingLines } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled.js';

export const Loader = () => {
  return (
    <StyledLoader>
    <RotatingLines
      strokeColor="#171241"
      strokeWidth="5"
      animationDuration="0.75"
      width="120"
      marginLeft="300px"
      visible={true}
      />
      </StyledLoader>
  );
};
