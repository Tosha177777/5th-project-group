import styled from 'styled-components';

export const ContainerBagWrap = styled.div`

    background-image: url(src/images/mobile/background-element-sign-in@1x.png);
    position: absolute;
    background-position: center;
    background-repeat: no-repeat;
    width: 320px;
    width: 100%;
    height: 842px;
    z-index: -100;
    background-size: contain;
  
 @media only screen and (min-width: 768px) {
  background-image: url(src/images/tablet/bottle-for-sign-in@1x.png);
      
      background-position: center;
      background-repeat: no-repeat;
      max-width: 760px;

      width: 100%;
      height: 680px;

      background-size: contain;
      top: -110px;
 }

   @media only screen and (min-width: 1440px) {
    background-image: url(src/images/desktop/background-element-main-page@1x.png);
      max-width: 1440px;

      height: 582px;

      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      left: 18px; 
      top: -149px;

   }
`

export const SignInForm = styled.div`

  position: relative;
  max-height: 680px;
  overflow: hidden;


   
  .img-bottle {
    width: 100%;
  }


  @media only screen and (min-width: 768px) {
    overflow: visible;
    position: relative;
    
    .img-bottle {
      display: none;
    }
  }

  @media only screen and (min-width: 1440px) {
    .img-bottle {
      display: flex;
      max-width: 916px;
      position: absolute;
      top: 20px;
      left: -130px;
    }

    
  }
`;
