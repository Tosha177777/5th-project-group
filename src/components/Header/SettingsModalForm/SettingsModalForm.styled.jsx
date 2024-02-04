import styled from 'styled-components';
import { Field, Form } from 'formik';

import colors from '/src/root/root.js';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const StyledField = styled(Field)`
  max-width: 256px;
  width: 100%;
  padding: 12px 10px;
  border: 1px solid ${colors.secondaryColor6};
  border-radius: 6px;

  color: ${colors.primaryColorBlue};

  &:focus-visible {
    border: 1px solid ${colors.secondaryColor5};
  }
`;

export const GenderBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;

  margin-bottom: 24px;
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

  margin-bottom: 8px;
`;

export const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-bottom: 24px;
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
  width: 256px;
  padding: 8px 30px;
  background-color: ${colors.primaryColorBlue};
  color: ${colors.primaryColorWhite};

  border-radius: 10px;
  border: 0;
`;
