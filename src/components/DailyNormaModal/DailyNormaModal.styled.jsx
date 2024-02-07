import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const DailyNormaModalContent = styled.div`
  position: relative;

  display: block;
  width: 280px;
  height: 816px;
  padding: 24px 12px;
  border-radius: 10px;
  background-color: white;

  @media (min-width: 768px) {
    padding: 32px 24px;

    width: 704px;
    height: 696px;
  }

  @media (min-width: 1440px) {
    width: 592px;
    height: 712px;
  }
`;

export const ExitBtn = styled.button`
  position: absolute;
  top: 28px;
  left: 244px;

  padding: 0;
  margin: 0;
  border: none;
  background-color: inherit;

  cursor: pointer;

  @media (min-width: 768px) {
    top: 36px;
    left: 656px;
  }

  @media (min-width: 1440px) {
    left: 544px;
  }
`;

export const ModalTitle = styled.h1`
  margin-bottom: 24px;
  color: var(--Primery-Color-Black, #2f2f2f);
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
`;

export const FormulaCover = styled.div`
  margin-bottom: 12px;

  @media (min-width: 768px) {
    display: flex;
    gap: 24px;
  }

  .formula-text {
    color: var(--Primery-Color-Black, #2f2f2f);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }

  .formula-text:not(:last-child) {
    margin-bottom: 16px;
  }

  @media (min-width: 768px) {
    .formula-text:not(:last-child) {
      margin-bottom: 0;
    }
  }

  .formula-acsent {
    color: var(--Primery-Color-Blue, #407bff);
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const FormulaExplanation = styled.p`
  padding: 10px;
  margin-bottom: 24px;
  border-radius: 10px;
  border: 1px solid #d7e3ff;

  color: #8f8f8f;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;

  .acsent-color {
    color: var(--Primery-Color-Blue, #407bff);
  }
`;

export const ModalForm = styled.form`
  color: var(--Primery-Color-Black, #2f2f2f);

  .sub-title {
    margin-bottom: 16px;

    color: var(--Primery-Color-Black, #2f2f2f);
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
  }

  .gender-lable {
    display: block;
    margin-bottom: 16px;
  }
  .chek-title {
    margin-left: 8px;
    margin-right: 24px;
  }
  .chek-title:not(:last-child) {
    margin-right: 24px;
  }
  .check {
    cursor: pointer;
  }
  .weight-title {
    margin-bottom: 8px;
  }
  .form-input {
    width: 256px;
    height: 44px;
    padding: 12px 10px;
    border-radius: 6px;
    border: 1px solid #d7e3ff;

    color: var(--Primery-Color-Blue, #407bff);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  .form-input:focus-visible {
    outline: none;
  }
  @media (min-width: 768px) {
    .form-input {
      width: 656px;
    }
  }

  @media (min-width: 1440px) {
    .form-input {
      width: 524px;
    }
  }

  .weight-lable {
    display: block;
    margin-bottom: 16px;
  }

  .activeTime-title {
    margin-bottom: 8px;

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }

  .activeTime-lable {
    display: block;
    margin-bottom: 16px;
  }

  .litersPerDay-container {
    display: flex;
    align-items: center;
    gap: 6px;

    margin-bottom: 24px;
  }

  .litersPerDay-text {
    width: 190px;
  }

  @media (min-width: 768px) {
    .litersPerDay-text {
      width: 328px;
    }
  }

  .calculated-litersPerDay {
    display: block;
    color: var(--Primery-Color-Blue, #407bff);
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }

  .waterToDrink-lable {
    display: block;
    margin-bottom: 24px;
  }

  .submit-btn {
    display: block;
    width: 256px;
    height: 36px;
    padding: 8px 30px;

    color: white;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;

    border-radius: 10px;
    background-color: var(--Primery-Color-Blue, #407bff);
    border: transparent;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover:focus {
      background-color: #4054ff;
    }
  }

  @media (min-width: 768px) {
    .submit-btn {
      padding: 10px 30px;
      width: 160px;
      height: 44px;

      margin-left: auto;
    }
  }

  .valid-text {
    color: red;
    margin-top: -20px;
  }
`;
