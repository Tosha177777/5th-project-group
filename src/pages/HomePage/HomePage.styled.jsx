import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  position: absolute;
  max-width: 320px;
  width: 100%;
  height: 570px;
  top: 28px;
  left: 0;
  z-index: -10;
  background-image: url('src/images/mobile/bottle-home-screen@1x.png'),
   url('src/images/mobile/background-element-home-screen@1x.png');
  background-size: 280px, cover;
  background-position: top 56px left 20px, top 0 left 0;
  background-repeat: no-repeat;
  
   
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('src/images/mobile/bottle-home-screen@2x.png'),
    url('src/images/mobile/background-element-home-screen@2x.png');
  }
  @media (min-width: 768px) {
    max-width: 768px;
    width: 100%;
    height: 680px;
    top: 0;
    left: 0;
    background-image: url('src/images/tablet/bottle-home-screen@1x.png'),
     url('src/images/tablet/background-element-home-screen@1x.png');
    background-size: 518px, cover;
    background-position: top 0 left 125px, top 0 left 0;
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('src/images/tablet/bottle-home-screen@2x.png'),
       url('src/images/tablet/background-element-home-screen@2x.png');
    
  }
  @media (min-width: 1440px) {
    max-width: 1404px;
    width: 100%;
    height: 100%;
    top: 0;
    left: 9px;
    background-image: url('src/images/desktop/bottle-home-screen@1x.png'),
    url('src/images/desktop/background-element-main-page@1x.png');
    background-size: 738px, 1404px;
    background-position: top 0 left 30px, top 38px left 0;
  
     
    @media (min-device-pixel-ratio: 2),
           (min-resolution: 192dpi) {
      background-image: url('src/images/desktop/bottle-home-screen@2x.png'), 
      url('src/images/desktop/background-element-main-page@2x.png');
  }
} 
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0px 20px;

  @media only screen and (max-width: 767px){
    max-width: 320px;
    margin: 0 auto;
    padding: 0px 20px;

  }

  @media only screen and (min-width: 768px){
    max-width: 768px;
    padding: 0px 32px;
  }

  @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    padding: 0px 112px;
    max-width: 1404px;
    width: 100%;
    height: 650px;
   
  }

`;


export const ControllContainer = styled.div`
display: flex;
flex-direction: column;
gap: 40px;

@media only screen and (max-width: 1439px) {
  padding-bottom: 40px;
}

@media only screen and (min-width: 768px) {
  gap: 40px;
}

@media only screen and (min-width: 1440px) {
  flex-direction: row;
  gap: 32px;
}
`;



