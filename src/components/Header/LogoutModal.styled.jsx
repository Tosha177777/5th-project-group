import styled from 'styled-components';

import colors from '/src/root/root.js';

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  padding-right: 17px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  background-color: ${colors.primaryColorWhite};

  max-width: 280px;
  width: 100%;
  height: 260px;

  padding: 32px 24px;

  border-radius: 10px;

  @media (min-width: 768px) {
    max-width: 592px;

    height: 208px;
  }
`;

export const TextWithBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0%;
  text-align: left;
  color: ${colors.primeryColorBlack};
`;

export const XCrosBtn = styled.button`
  display: flex;
  background-color: inherit;
  border: none;

  padding: 0;

  align-items: center;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row-reverse;

    margin-left: auto;
  }

  @media (min-width: 1440px) {
    flex-direction: row-reverse;

    margin-left: 0;
    margin-right: auto;
  }
`;

export const LogoutBtn = styled.button`
  background-color: ${colors.secondaryColor3};
  border: none;
  border-radius: 10px;

  width: 232px;
  padding: 8px 30px;

  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  color: ${colors.primaryColorWhite};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  @media (min-width: 768px) {
    width: 160px;

    font-size: 18px;
    line-height: 24px;
  }
`;

export const CancelBtn = styled.button`
  background-color: ${colors.secondaryColor6};
  border: none;
  border-radius: 10px;

  width: 232px;
  padding: 8px 30px;

  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  color: ${colors.primaryColorBlue};

  @media (min-width: 768px) {
    width: 160px;

    font-size: 18px;
    line-height: 24px;
  }
`;
