import styled from 'styled-components';

export const Container = styled.div`

  position: relative;
  max-height: 680px;
  overflow: hidden;


   .background-wrap {
    background-image: url(src/images/mobile/background-element-sign-in@1x.png);
    position: absolute;
    background-position: center;
    background-repeat: no-repeat;
    width: 320px;
    width: 100%;
    height: 842px;
    z-index: -100;
    background-size: contain;
  }
  .img-bottle {
    width: 100%;
  }


  @media only screen and (min-width: 768px) {
    overflow: visible;
    position: relative;
    .background-wrap {
      background-image: url(src/images/tablet/bottle-for-sign-in@1x.png);
      position: absolute;
      background-position: center;
      background-repeat: no-repeat;
      max-width: 760px;

      width: 100%;
      height: 680px;

      background-size: contain;
      top: -110px;
    }
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

    .background-wrap {
      background-image: url(src/images/desktop/background-element-main-page@1x.png);
      max-width: 1440px;

      height: 582px;

      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      position: absolute;
      top: 49px;
    }
  }
`;
