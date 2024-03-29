import { RotatingLines } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled.js';
import colors from '../../root/root.js';

export const Loader = () => {
  return (
    <StyledLoader>
      <RotatingLines
        strokeColor={colors.secondaryColor4}
        strokeWidth="5"
        animationDuration="0.75"
        width="80px"
        marginLeft="auto"
        marginRight="auto"
        visible={true}
      />
    </StyledLoader>
  );
};
