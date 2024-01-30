import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  position: relative;
  height: auto;
  .background-wrap{
  background-image: url('./images/mobile/background-element-home-screen@1x.png'), url('./images/mobile/Bottle-home-screen@1x.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
   
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('./images/mobile/Bottle-home-screen@2x.png'),
      url('./images/mobile/background-element-home-screen@2x.png');
  }

  @media (min-width: 768px) {
    max-width: 768px;
    width: 100%;
    height: 680px;
    top: -104px;
    left: 0;
    background-image: url('./images/tablet/Bottle-Home-Screen@1x.png'), url('./images/tablet/Background-element-Home-Screen@1x.png');
    background-size: cover;
    background-position: top 0 left 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('./images/tablet/Bottle-Home-Screen@2x.png'), url('./images/tablet/Background-element-Home-Screen@2x.png');
    }
  }

  @media (min-width: 1440px) {
    max-width: 1404px;
    width: 100%;
    height: 680px;
    top: -140px;
    left: 18px;
    background-image: url('./images/desktop/bottle-home-screen@1x.png');background-size: cover;
    background-position:
      top 28px left -51px,
      top 0 left 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('./images/desktop/bottle-home-screen@2x.png');
    }
    }
  }
} 
`;
export const DailyContainer = styled.div`
  display: flex;
  width: 738px;
  height: 548px;
  top: 82px;
  left: 38.67px;

  h2 {
    front-size: 18px;
    color: #2F2F2F;
  }
`;
export const ControllContainer = styled.div`
  display: flex;
  width: 592px;
  height: 680px;
  top: 80px;
  left: 736px;
  padding: 32px, 24px, 32px, 24px;
  border-radius: 10px;
  gap: 24px;


  h2 { 
   front-size: 26px;
   color: #2F2F2F;
  }


`;
