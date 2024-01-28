import styled from 'styled-components';

import colors from '../../root.js/root';

export const UserInfoBtn = styled.button`
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
  border-radius: 50%;

  width: 28px;
  height: 28px;

  margin-right: 6px;
`;
