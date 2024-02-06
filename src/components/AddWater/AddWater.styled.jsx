import styled from 'styled-components';
import { ReactComponent as Minus } from '../../svgs/icons/minus.svg';
import { ReactComponent as Plus } from '../../svgs/icons/plus.svg';

export const AddWaterModal = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000cc;

  z-index: 10000;
`;

export const ContainerModal = styled.div`
  margin-bottom: 24px;
`;

export const AddWaterForm = styled.form`
  background: #ffffff;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 280px;
  max-height: 648px;
  padding: 24px 12px 24px 12px;
  border-radius: 10px;

  @media only screen and (min-width: 768px) {
    max-width: 704px;
    max-height: 580px;
    padding: 32px 24px 32px 24px;
  }

  @media only screen and (min-width: 1440px) {
    max-width: 592px;
  }
`;

export const PageName = styled.h2`
  color: #2f2f2f;

  width: 200px;

  font-family: Roboto;
  font-size: 26px;
  font-weight: 500;
  font-weight: bold;
  line-height: 32px;

  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    width: 384px;
  }

  @media only screen and (min-width: 1440px) {
  }
`;

export const CloseBtn = styled.svg`
  width: 24px;
  height: 24px;

  position: absolute;
  top: 24px;
  right: 12px;

  @media only screen and (min-width: 768px) {
    top: 36px;
    right: 24px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const WaterCardsDiv = styled.div`
  margin-bottom: 24px;
`;

export const WaterCards = styled.div`
  width: 256px;
  height: 52px;

  display: flex;

  text-align: center;
  align-items: center;

  gap: 12px;

  padding: 8px 24px 8px 24px;

  background: #ecf2ff;

  border-radius: 10px;
`;

export const TimeCards = styled.p`
  color: #2f2f2f;

  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
`;

export const PageText = styled.p`
  color: #2f2f2f;

  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  font-weight: bold;
  line-height: 20px;

  margin-bottom: 16px;
`;

export const InputAndBtnWaterContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;

export const AmountWater = styled.p`
  color: #2f2f2f;

  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  margin-bottom: 12px;
`;

export const MinusSvg = styled(Minus)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  fill: #407bff;
`;
export const PlusSvg = styled(Plus)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  fill: #407bff;
`;

export const BtnPlusMinus = styled.button`
  width: 44px;
  height: 44px;
  padding: 10px;

  background-color: #ffffff;
  position: relative;

  border-radius: 30px;
  border: 1px solid #9ebbff;

  box-shadow: 0px 2px 4px 0px #407bff33;
`;

export const InputWaterFix = styled.input`
  width: 92px;
  height: 36px;

  padding: 6px 10px 6px 20px;
  margin-left: 7px;
  margin-right: 7px;

  border-radius: 40px;
  background: #d7e3ff;
  border: none;
  outline: none;

  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;

  color: #407bff;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const EnterTime = styled.p`
  color: #2f2f2f;

  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  margin-bottom: 12px;
`;

export const InputTimeWater = styled.input`
  width: 256px;
  height: 44px;

  padding: 12px 10px 12px 10px;

  border-radius: 6px;
  border: 1px solid #d7e3ff;
  outline: none;

  color: #407bff;

  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  &::-webkit-calendar-picker-indicator {
    width: 176px;
    height: 44px;
    opacity: 0;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media only screen and (min-width: 768px) {
    width: 544px;
    &::-webkit-calendar-picker-indicator {
      width: 464px;
    }
  }
`;

export const AmountWaterText = styled.p`
  color: #2f2f2f;

  font-family: Roboto;
  fonst-size: 18px;
  font-weight: 500;
  font-weight: bold;
  line-height: 20px;

  margin-bottom: 16px;
`;

export const FinallyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  justify-content: center;

  gap: 16px;

  @media only screen and (min-width: 768px) {
    justify-content: right;
    gap: 24px;
  }
`;

export const FinallyWater = styled.p`
  font-family: Roboto;

  color: #407bff;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;

  margin-bottom: 0px;
`;

export const BtnSave = styled.button`
  min-width: 256px;
  height: 36px;
  padding: 8px 30px 8px 30px;
  border-radius: 10px;
  border: none;
  outline: none;

  background-color: #407bff;
  box-shadow: 0px 4px 8px 0px #407bff57;

  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;

  color: #ffffff;

  @media only screen and (min-width: 768px) {
    min-width: 160px;
    height: 44px;
    padding: 10px 30px 10px 30px;
  }

  @media only screen and (min-width: 1440x) {
    min-width: 160px;
  }

  &: hover {
    box-shadow: 0px 4px 14px 0px #407bff8a;
  }
`;

export const ErrorMsg = styled.div`
  color: red;
  margin-bottom: 12px;
`;
