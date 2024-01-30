import styled from '@emotion/styled';
import colors from '../../root/root';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  width: 100%;

  @media (min-width: 768px){
    width: 336px;
    margin-top: 40px;
  }

  @media (min-width: 1440px){
    width: 384px;
    margin-top: 140px;
    margin-right: 104px;
    margin-left: auto;
  }

  h1{
  font-size: 26px;
  line-height: 1.23;
  color: ${colors.primaryColorBlack};
  }

  label{
    position: relative;
  }

  span{
    display: block;
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 1.33;
    color: #2f2f2f;
  }

  input{
    padding: 12px 10px;
    width: 100%;
    font-size: 16px;
    line-height: 1.2;
    border-radius: 6px;
    border-color: #d7e3ff;
    color: #407bff;
  }

  input::placeholder{
    color: #9ebbff;
  }

  input:focus{
    outline: #d7e3ff;
    background-color: none;
  }

  input:invalid {
  border-color:#ef5050;
}

 p{
  margin-left: 4px;
  font-size: 14px;
  color: #ef5050;
 }

  a{
  font-size: 16px;
  line-height: 1.25;
  color: #407bff;
 }

`
export const StyledSubmitBtn = styled.button`
  padding: 8px 30px;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 10px;
  border: none;
  background-color: #407bff;
  color: #ffffff;

  @media (min-width: 768px){
  font-size: 18px;
  }
`

export const StyledToggleBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 54px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  stroke: ${colors.primaryColorBlue};
`

export const StyledBackgroundWrap = styled.div`
  max-width: 320px;
  width: 100%;
  height: 570px;
  position: absolute;
  top: 26px;
  left: 0;
  z-index: -10;
  background-image: url('./images/mobile/bottle-sign-in@1x.png'), url('./images/mobile/background-element-sign-in@1x.png');
  background-size: 280px, cover;
  background-repeat:no-repeat;
  background-position: top 342px left 20px, top 0 left 0;

  @media (min-device-pixel-ratio: 2),
  (-webkit-min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
    background-image: url('./images/mobile/bottle-sign-in@2x.png'), url('./images/mobile/background-element-sign-in@2x.png');
  }

  @media (min-width: 768px){
  max-width: 768px;
  width: 100%;
  height: 680px;
  top: -104px;
  left: 0;
  background-image: url('./images/tablet/bottle-for-sign-in@1x.png');
  background-size: cover;
  background-position: top 0 left 0;

  
  @media (min-device-pixel-ratio: 2),
  (-webkit-min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
    background-image: url('./images/tablet/bottle-for-sign-in@2x.png');
  }
  }

  @media (min-width: 1440px){
    max-width: 1404px;
    width: 100%;
    height: 680px;
    top: -140px;
    left: 18px;
    background-image: url('./images/desktop/bottle-for-sign-in@1x.png'), url('./images/desktop/background-element-main-page@1x.png');
    background-size: 916px, 1404px;
    background-position: top 28px left -51px, top 0 left 0;

  @media (min-device-pixel-ratio: 2),
  (-webkit-min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
    background-image: url('./images/desktop/bottle-for-sign-in@2x.png'), url('./images/desktop/background-element-main-page@2x.png');
  }
  }

`