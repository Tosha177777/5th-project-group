import styled from "styled-components";

export const FormContainer = styled.div`
    margin: 20px;
    width: 100px;
    height: 8px;
    position: relative;

`;

export const Btn = styled.button`
    display: block;
    margin-left: auto;
    padding: 14px 28px;
    border: 2px solid var(--main-cl);
    border-radius: 40px;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.3;
    background-color: #407BFF;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: #FFFFFF;
    transition: background-color 300ms linear, color 300ms linear;
    cursor: pointer;
  
  
  &:hover {
    background-color: #407BFF;
    color: #FF9D43;
  }
`