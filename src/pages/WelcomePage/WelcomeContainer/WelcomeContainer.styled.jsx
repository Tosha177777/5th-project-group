import styled from 'styled-components';

import bg_desk_1x from '../../../../public/images/desktop/background-main-page@1x.png';
import bg_tabl_1x from '../../../../public/images/tablet/background-main-page@1x.png';
import bg_mobile_1x from '../../../../public/images/mobile/Background-Main-Page@1x.png';

import bg_desk_2x from '../../../../public/images/desktop/background-main-page@2x.png';
import bg_tabl_2x from '../../../../public/images/tablet/background-main-page@2x.png';
import bg_mobile_2x from '../../../../public/images/mobile/background-main-page@2x.png';

import bg_main_elements_1x from '../../../../public/images/desktop/background-element-main-page@1x.png';
import bg_main_elements_2x from '../../../../public/images/desktop/background-element-main-page@2x.png';

export const WelcomeStyledContainer = styled.section`
  min-height: 100%;
  background-image: url(${bg_mobile_1x});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;

  @media screen and (max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url(${bg_mobile_2x});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    min-height: calc(100vh - 143px);
    background-image: url(${bg_tabl_1x});
  }

  @media screen and (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url(${bg_tabl_2x});
  }

  @media screen and (min-width: 1440px) {
    min-height: calc(100vh - 121px);
    padding-top: 40px;
    background-image: url(${bg_desk_1x});

    &::before {
      content: '';
      background-image: url(${bg_main_elements_1x});
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }

  @media screen and (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url(${bg_desk_2x});

    &::before {
      background-image: url(${bg_main_elements_2x});
    }
  }
`;
