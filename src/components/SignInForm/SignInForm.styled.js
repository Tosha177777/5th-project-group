// import { NavLink } from 'react-router-dom';
import { Form, ErrorMessage } from 'formik';
import styled from 'styled-components';
import colors from '../../root/root';

// export const FormTitle = styled.h1`

// `
// export const StyledForm = styled(Form)`
//   width: 100%;
//   margin: 0 auto;
//   display: block;
//   margin-top: 24px;
//   margin-bottom: 66px;

//   h1 {
//     margin: 0;
//     margin-bottom: 16px;
//     color: #2f2f2f;
    
//     font-size: 26px;
    
//     font-weight: 500;
//     line-height: 1.23;
    
//   }

//   label {
//     display: block;
//     margin-bottom: 16px;
//     color: #2f2f2f;
//     font-family: Roboto;
//     font-size: 18px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 1.33;
//   }

//   input {
//     box-sizing: border-box;
//     width: 100%;
//     color: #9ebbff;
//     font-family: Roboto;
//     font-size: 16px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 1.25;
//     padding: 10px 12px;
//     margin-top: 8px;

//     border-radius: 6px;
//     border: 1px solid #d7e3ff;
//     background: #fff;
//   }

//   button {
//     background-color: #007bff;

//     width: 100%;

//     border: none;
//     border-radius: 10px;
//     cursor: pointer;
//     display: flex;
//     padding: 10px 30px;
//     justify-content: center;
//     align-items: center;
//     color: #fff;
//     text-align: center;
//     font-family: Roboto;
//     font-size: 18px;
//     font-style: normal;
//     font-weight: 500;
//     line-height: 1.33;
//     margin-bottom: 16px;
//   }

//   @media only screen and (min-width: 768px) {
//     width: 336px;
//     margin-top: 40px;
//     margin-bottom: 0;
//     margin-left: 0;
//   }

//   @media only screen and (min-width: 1440px) {
//     width: 384px;
//     position: absolute;
//     top: 125px;
//     right: 165px;
//     z-index: 1000;
//   }
// `;

// export const StyledSignUpLink = styled(NavLink)`
//   color: #407bff;
//   font-family: Roboto;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 20px;
// `;


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
 
  input {
    padding: 12px 10px;
    width: 100%;
    font-size: 16px;
    line-height: 1.2;
    border-radius: 6px;
    border: 0;
    outline: 1px solid ${colors.secondaryColor6};
    color: ${colors.primaryColorBlue};
  }
  input::placeholder {
    color: ${colors.secondaryColor4};
  }
  input:focus {
    outline-color: ${colors.secondaryColor6};
  
  }
  input:invalid {
    color: ${colors.secondaryColor3};
    border: 1px solid ${colors.secondaryColor3};
  }
  input::-ms-reveal,
  input::-ms-clear {
    display: none;
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
`
export const StyledFieldName = styled.span`
    display: block;
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 1.33;
    color: ${colors.primaryColorBlack};
 ` 

export const StyledToggleBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 44px;
  background: none;
  border: none;
  cursor: pointer;
  stroke: ${colors.primaryColorBlue};
`;

export const StyledError = styled(ErrorMessage)`
    margin-left: 4px;
    font-size: 14px;
    color: ${colors.secondaryColor3};
  `