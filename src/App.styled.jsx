import styled from '@emotion/styled';
import example from './assets/background.png';

export const AppWrapper = styled.div`
  // background-image: url(${example});
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100% 100%;
`;

export const AppContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 320px;
  height: 100vh;
  position: relative;

  @media (min-width: 768px) {
    padding: 0 32px;

    max-width: 768px;
  }

  @media (min-width: 1440px) {
    max-width: 1280px;
  }
`;
