import styled from 'styled-components';

import colors from '/src/root/root.js';

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  background-color: white;

  max-width: 280px;
  width: 100%;
  height: 260px;

  padding: 32px 24px;

  border-radius: 10px;
`;

export const TextWithBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
`;

export const XCrosBtn = styled.button`
  display: flex;
  background-color: inherit;
  border: none;

  padding: 0;

  align-items: center;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0%;
  text-align: left;
  color: ${colors.primeryColorBlack};
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
`;
