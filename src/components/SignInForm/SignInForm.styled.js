import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 384px;
  margin: 0 auto;
  display: block;

  position: absolute;
  top: 162px;
  right: 100px;
  z-index: 1000;

  h1 {
    margin: 0;
    margin-bottom: 16px;
    color: #2f2f2f;
    font-family: Roboto;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
  }

  label {
    
    display: block;
    margin-bottom: 16px;
    color: #2f2f2f;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  input {
    box-sizing: border-box;
    width: 100%;
    color: #9ebbff;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
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
    line-height: 24px;
    margin-bottom: 16px;
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