import { NavLink } from 'react-router-dom';
import { Form } from 'formik';
import styled from 'styled-components';

export const FormTitle = styled.h1`

`
export const StyledForm = styled(Form)`
  width: 100%;
  margin: 0 auto;
  display: block;
  margin-top: 24px;
  margin-bottom: 66px;

  h1 {
    margin: 0;
    margin-bottom: 16px;
    color: #2f2f2f;
    
    font-size: 26px;
    
    font-weight: 500;
    line-height: 1.23;
    
  }

  label {
    display: block;
    margin-bottom: 16px;
    color: #2f2f2f;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.33;
  }

  input {
    box-sizing: border-box;
    width: 100%;
    color: #9ebbff;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;
    padding: 10px 12px;
    margin-top: 8px;

    border-radius: 6px;
    border: 1px solid #d7e3ff;
    background: #fff;
  }

  button {
    background-color: #007bff;

    width: 100%;

    border: none;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.33;
    margin-bottom: 16px;
  }

  @media only screen and (min-width: 768px) {
    width: 336px;
    margin-top: 40px;
    margin-bottom: 0;
    margin-left: 0;
  }

  @media only screen and (min-width: 1440px) {
    width: 384px;
    position: absolute;
    top: 125px;
    right: 165px;
    z-index: 1000;
  }
`;

export const StyledSignUpLink = styled(NavLink)`
  color: #407bff;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
