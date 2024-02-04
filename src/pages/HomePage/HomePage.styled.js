import styled from '@emotion/styled';

export const HomeContainer = styled.div`

  position: absolute;
  max-width: 320px;
  width: 100%;
  height: 570px;
  top: 26px;
  z-index: 10px;
  background-image: url('src/images/mobile/Bottle-home-screen@1x.png'), url('src/images/mobile/background-element-home-screen@1x.png');
  background-size: 280px, cover;
  background-position: top 106px left 20px, top 0 left 0;
  background-repeat: no-repeat;
  
   
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('src/images/mobile/Bottle-home-screen@2x.png'),
      url('src/images/mobile/background-element-home-screen@2x.png');
  }

  @media (min-width: 768px) {
    max-width: 768px;
    width: 100%;
    height: 680px;
    top: -16px;
    left: 0;
    background-image: url('src/images/tablet/Bottle-Home-Screen@1x.png'), url('src/images/tablet/Background-element-Home-Screen@1x.png');
    background-size: 518px, cover;
    background-position: top 0 left 25px, top 0 left 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('src/images/tablet/Bottle-Home-Screen@2x.png'), url('src/images/tablet/Background-element-Home-Screen@2x.png');
    
  }

  @media (min-width: 1440px) {
    max-width: 1404px;
    width: 100%;
    height: 620px;
    top: -140px;
    left: 18px;
    background-image: url('src/images/desktop/bottle-home-screen@1x.png'), url('src/images/desktop/background-element-main-page@1x.png');
    background-size: 738px, cover;
    background-position:
      top 28px left -51px,
      top 0 left 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('src/images/desktop/bottle-home-screen@2x.png'), url('src/images/desktop/background-element-main-page@2x.png');
  }
} 
`;
export const DailyContainer = styled.div`

  width: 390px;
  height: 548px;
  top: 82px;
  left: 38.67px;
  padding:400px 0 ;

  button {
    display: flex;
    margin-top: 8px;
  }

  p {
    front-size: 18px;
    color: #407BFF;
    padding: 
  }
  
 `;
export const ControllContainer = styled.div`

  width: 592px;
  height: 680px;
  top: 80px;
  left: 736px;
  padding: 32px, 24px, 32px, 24px;
  border-radius: 10px;
  gap: 24px;


  div { 
   
   font-size: 26px;
   color: #2F2F2F;
  }
  
  h2 {

    color: #2F2F2F;
  }

`;

