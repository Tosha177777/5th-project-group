import styled from '@emotion/styled';
import colors from '/src/root/root';

import mobBottle from '/src/images/mobile/bottle-home-screen@1x.png';
import mobBubbles from '/src/images/mobile/background-element-home-screen@1x.png';

import mobBottle2x from '/src/images/mobile/bottle-home-screen@1x.png';
import mobBubbles2x from '/src/images/mobile/background-element-home-screen@1x.png';

import tabBottle from 'src/images/tablet/bottle-home-screen@1x.png';
import tabBubbles from '/src/images/tablet/background-element-home-screen@1x.png';

import tabBottle2x from 'src/images/tablet/bottle-home-screen@2x.png';
import tabBubbles2x from '/src/images/tablet/background-element-home-screen@2x.png';

import deskBottle from 'src/images/desktop/bottle-home-screen@1x.png';
import deskBub from 'src/images/desktop/background-element-main-page@1x.png';

import deskBottle2x from 'src/images/desktop/bottle-home-screen@2x.png';
import deskBub2x from 'src/images/desktop/background-element-main-page@2x.png';


export const HomeContainer = styled.div`
  position: absolute;
  max-width: 320px;
  width: 100%;
  height: 570px;
  top: 28px;
  left: 0;
  z-index: -10;
  background-image: url(${mobBottle}),
    url(${mobBubbles});
  background-size: 280px, cover;
  background-position:
    top 56px left 20px,
    top 0 left 0;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mobBottle2x}),
      url(${mobBubbles2x});
  }
  @media (min-width: 768px) {
    max-width: 768px;
    width: 100%;
    height: 680px;
    top: -16px;
    left: 0;
    background-image: url(${tabBottle}),
      url(${tabBubbles});
    background-size: 518px, cover;
    background-position:
      top 16px left 125px,
      top 0 left 0;
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tabBottle2x}),
        url(${tabBubbles2x});
    }
  }
  @media (min-width: 1440px) {
    max-width: 1404px;
    width: 100%;
    height: 100%;
    top: 0;
    left: 9px;
    background-image: url(${deskBottle}),
      url(${deskBub});
    background-size: 738px, 1404px;
    background-position:
      top 0 left 30px,
      top 38px left 0;

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${deskBottle2x}),
        url(${deskBub2x});
    }
  }
`;

export const StyledContainer = styled.div`
  margin: 0 auto;

  @media (min-width: 1440px) {
    display: flex;
    gap: 32px;
  }
`;

export const StyledInfoWrap = styled.div`
  padding: 24px 8px;
  background-color: ${colors.secondaryColor2WhiteBlue};
  border-radius: 10px;
  box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.3);

  @media (min-width: 768px) {
    padding: 32px 24px;

    @media (min-width: 1440px) {
      width: 592px;
    }
  }
`;
export const StyledTodayInfo = styled.div`
  height: 260px;
  overflow-y: auto;
  margin-bottom: 24px;

  &::-webkit-scrollbar {
    width: 4px;
    height: 100%;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.secondaryColor4};
    border-radius: 8px;
  }
`;

export const StyledDataWrap = styled.div`
  margin-bottom: 40px;

  @media (min-width: 1440px) {
    padding-top: 32px;
    margin-bottom: 0;
  }
`;
