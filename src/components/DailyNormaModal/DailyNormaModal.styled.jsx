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
  display: block;
  width: 280px;
  height: 816px;
  padding: 24px 12px;
  border-radius: 10px;
  background-color: white;
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

  .formula-text {
    color: var(--Primery-Color-Black, #2f2f2f);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }

  .formula-text:not(:last-child) {
    margin-bottom: 16px;
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

  .check:before {
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
  .weight-lable {
    display: block;
    margin-bottom: 16px;
  }

  .activeTime-title {
    margin-bottom: 8px;
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
  }
`;

export const dasdasd = styled.h1``;
