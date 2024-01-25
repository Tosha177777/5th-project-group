import styled from '@emotion/styled';
import example from './assets/background.png';

export const AppWrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 320px;
  height: 100vh;
  background-image: url(${example});
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100% 100%;

  @media (min-width: 768px) {
    padding: 0 32px;

    width: 768px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
  }
`;
