import styled from '@emotion/styled';

export const StyledPageContainer = styled.div`
  form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  width: 100%;

  h1{
  font-size: 26px;
  line-height: 1.23;
  }

  span{
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 1.33;
  }

  input{
    padding: 12px 10px;
    width: 100%;
    font-size: 16px;
    line-height: 1.2;
    border-radius: 6px;
  }

`
export const StyledWrap = styled.div`
  max-width: 320px;
  width: 100%;
  height: 500px;
  position: absolute;
  top: 28px;
  left: 0;
  z-index: -10;
  background-image: url('./images/mobile/Background-element-Sign In@1x.png');
  background-size: cover;
  background-repeat:no-repeat;

  @media (min-device-pixel-ratio: 2),
  (-webkit-min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
    background-image: url('./images/mobile/Background-element-Sign In@2x.png');
  }
`