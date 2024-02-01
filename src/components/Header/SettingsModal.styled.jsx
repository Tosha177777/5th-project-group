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
  background-color: ${colors.primaryColorWhite};

  max-width: 280px;
  width: 100%;
  height: 852px;

  padding: 32px 24px;

  border-radius: 10px;

  @media (min-width: 768px) {
    max-width: 592px;

    height: 860px;
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

  margin-bottom: 24px;
`;

export const XCrosBtn = styled.button`
  display: flex;
  background-color: inherit;
  border: none;

  padding: 0;

  align-items: center;
`;

export const Text = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;

  margin-bottom: 8px;
`;

export const PhotoUploadBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 24px;
`;

export const UserPhoto = styled.img`
  width: 80px;
  height: 80px;

  border-radius: 50%;
  overflow: hidden;
`;

export const FirstLetter = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  outline: 1px solid ${colors.primaryColorBlack};

  width: 80px;
  height: 80px;

  border-radius: 50%;
  overflow: hidden;

  font-size: 26px;
  font-weight: 500;
  color: ${colors.primaryColorBlack};
`;
