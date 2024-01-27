import styled from 'styled-components';

export const AddWaterModal = styled.div``;

export const ContainerModal = styled.div`
  margin-bottom: 24px;
`;

export const AddWaterBackground = styled.div`
  background: #ffffff;

  position: relative;

  width: 280px;
  max-height: 648px;
  padding: 24px 12px 24px 12px;
  border-radius: 10px;
`;

export const PageName = styled.h2`
  color: #2f2f2f;

  width: 200px;

  font-family: Roboto;
  font-size: 26px;
  font-weight: 500;

  margin-bottom: 24px;
`;

export const CloseBtn = styled.svg`
  color: #2f2f2f;

  width: 24px;
  height: 24px;

  position: absolute;
`;

export const PageText = styled.p`
  color: #2f2f2f;

  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;

  margin-bottom: 16px;
`;

export const AmountWater = styled.p`
  color: #2f2f2f;

  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;

  margin-bottom: 12px;
`;

export const BtnPlusMinus = styled.button`
  width: 44px;
  height: 44px;
  padding: 10px;

  background-color: #ffffff;

  border-radius: 30px;
  border: 1px solid #9ebbff;
`;

export const InputWaterFix = styled.input`
  width: 92px;
  height: 36px;

  padding: 6px 10px 6px 10px;
  margin-left: 7px;
  margin-right: 7px;

  border-radius: 40px;
  background: #d7e3ff;
  border: none;

  outline: none;

  font-family: Roboto;

  color: #407bff;

  font-size: 18px;
  font-weight: 700;
`;

export const EnterTime = styled.p`
  color: #2f2f2f;

  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;

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
    width: 180px;
    height: 44px;
    opacity: 0;
  }
`;

export const AmountWaterText = styled.p`
  font-family: Roboto;
  fonst-size: 18px;
  font-weight: 500;

  margin-bottom: 16px;
`;

export const FinallyWater = styled.p`
  font-family: Roboto;

  color: #407bff;

  font-size: 18px;
  font-weight: 700;
`;

export const BtnSave = styled.button`
  width: 256px;
  height: 36px;
  padding: 8px 30px 8px 30px;
  border-radius: 10px;
  border: none;
  outline: none;

  background-color: #407bff;

  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;

  color: #ffffff;
`;
