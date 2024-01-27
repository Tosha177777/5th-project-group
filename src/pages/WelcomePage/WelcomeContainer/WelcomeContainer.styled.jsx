import styled from "styled-components";

import bg_desk from '../../../../img/welcomePage/bg-desktop.png';
import bg_tabl from '../../../../img/welcomePage/bg-tablet.png';
import bg_mobile from '../../../../img/welcomePage/bg-mobile.png';
import bg_elements from '../../../../img/welcomePage/bg-elements.png';

export const WelcomeStyledContainer = styled.section`
  min-height: 100%;
  background-image: url(${bg_mobile});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;

@media screen and (min-width: 768px) and (max-width: 1439px) {
    min-height: calc(100vh - 143px);
    background-image: url(${bg_tabl});
  }

@media screen and (min-width: 1440px) {
    min-height: calc(100vh - 121px);
    padding-top: 40px;
    background-image: url(${bg_desk});
    
    &::before {
    content: "";
    background-image: url(${bg_elements});
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  }
`;