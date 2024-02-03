import styled from '@emotion/styled';
import { Form } from 'formik';
import colors from '../../root/root';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  width: 100%;
  @media (min-width: 768px) {
    width: 336px;
    margin-top: 40px;
  }
  @media (min-width: 1440px) {
    width: 384px;
    margin-top: 140px;
    margin-right: 104px;
    margin-left: auto;
  }
  h1 {
    font-size: 26px;
    font-weight: 500;
    line-height: 1.23;
    color: ${colors.primaryColorBlack};
  }
  label {
    position: relative;
  }
  span {
    display: block;
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 1.33;
    color: ${colors.primaryColorBlack};
  }
  input {
    padding: 11px 10px;
    width: 100%;
    font-size: 16px;
    line-height: 1.2;
    border-radius: 6px;
    border-color: ${colors.secondaryColor6};
    color: ${colors.primaryColorBlue};
  }
  input::placeholder {
    color: ${colors.secondaryColor4};
  }
  input:focus {
    outline: ${colors.secondaryColor5};
    background-color: none;
  }
  input:invalid {
    border-color: ${colors.secondaryColor3};
  }
  input::-ms-reveal,
  input::-ms-clear {
    display: none;
  }
  p {
    margin-left: 4px;
    font-size: 14px;
    color: ${colors.secondaryColor3};
  }
  a {
    width: fit-content;
    font-size: 16px;
    line-height: 1.25;
    color: ${colors.primaryColorBlue};
    transition: color ease-in-out 250ms;
  }
  a:hover {
    color: ${colors.secondaryColor5};
  }
`;
export const StyledSubmitBtn = styled.button`
  padding: 8px 30px;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 10px;
  border: none;
  background-color: ${colors.primaryColorBlue};
  color: ${colors.primaryColorWhite};
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const StyledToggleBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 44px;
  background: none;
  border: none;
  cursor: pointer;
  stroke: ${colors.primaryColorBlue};
`;
