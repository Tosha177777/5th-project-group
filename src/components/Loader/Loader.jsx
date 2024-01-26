import { RotatingLines } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoader>
    <RotatingLines
      strokeColor="#171241"
      strokeWidth="5"
      animationDuration="0.75"
      width="80"
      marginLeft="300px"
      visible={true}
      />
      </StyledLoader>
  );
};
