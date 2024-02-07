import styled from 'styled-components';
import { Field, Form } from 'formik';

import colors from '/src/root/root.js';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;

  div.box {
    @media (min-width: 1440px) {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;

      margin-bottom: 24px;
    }
  }

  input:focus-visible {
    outline: 1px solid ${colors.secondaryColor6};
  }
  input:invalid {
    outline: 1px solid ${colors.secondaryColor3};
    color: ${colors.secondaryColor3};
  }

  p {
    margin-top: 4px;

    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: ${colors.secondaryColor3};
  }

  input::placeholder {
    color: ${colors.secondaryColor4};
  }
`;

export const Radio = styled(Field)`
  /* color: ${colors.primaryColorBlue}; */
  border: 1px solid ${colors.primaryColorBlue};
`;

export const StyledField = styled(Field)`
  max-width: 256px;
  width: 100%;
  padding: 12px 10px;
  outline: 1px solid ${colors.secondaryColor6};
  border-radius: 6px;
  border: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${colors.primaryColorBlue};

  :invalid {
    outline: 1px solid ${colors.secondaryColor3};
    color: ${colors.secondaryColor3};
  }

  @media (min-width: 768px) {
    max-width: 392px;
  }
`;

export const GenderBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
`;

export const GenderText = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${colors.primaryColorBlack};

  margin-left: 8px;
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  @media (min-width: 1440px) {
    width: 392px;

    margin: 0;
  }
`;

export const YourGender = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;

  margin-bottom: 12px;
`;

export const Text = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;

  margin-bottom: 12px;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-top: 24px;

  @media (min-width: 1440px) {
    margin-top: auto;
  }
`;

export const UserLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const UserInfoSpan = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: ${colors.primaryColorBlack};
`;

export const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-bottom: 24px;

  @media (min-width: 1440px) {
    width: 544px;

    margin: 0;
  }
`;

export const PassLab = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;

  max-width: 256px;
  @media (min-width: 768px) {
    max-width: 392px;
  }
`;

export const PasswordText = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${colors.primaryColorBlack};

  margin-bottom: 8px;
`;

export const SaveButton = styled.button`
  max-width: 256px;
  width: 100%;
  padding: 8px 30px;
  background-color: ${colors.primaryColorBlue};
  color: ${colors.primaryColorWhite};
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);

  border-radius: 10px;
  border: 0;

  @media (min-width: 768px) {
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;

    max-width: 160px;

    padding: 10px 30px;

    margin-left: auto;
  }
`;

export const StyledToggleBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  background: none;
  border: none;
  cursor: pointer;
  stroke: ${colors.primaryColorBlue};
`;
