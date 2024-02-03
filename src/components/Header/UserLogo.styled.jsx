import Button from '@mui/material/Button';
import styled from 'styled-components';

import colors from '/src/root/root';

export const UserInfoBtn = styled(Button)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserName = styled.span`
  color: ${colors.primaryColorBlack};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  margin-right: 8px;
`;

export const UserPhoto = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;

  background-color: transparent;

  width: 28px;
  height: 28px;

  margin-right: 4px;
`;

export const FirstLetter = styled.span`
  font-size: 26px;
  font-weight: 500;
  color: ${colors.primaryColorBlack};
`;

export const Photo = styled.img`
  width: 24px;
  height: 24px;

  border-radius: 50%;
  overflow: hidden;
`;
