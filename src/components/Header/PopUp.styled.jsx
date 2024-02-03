import styled from 'styled-components';

import colors from '/src/root/root.js';

export const StyledPopover = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  gap: 16px;
`;

export const LogoutBtn = styled.button`
  display: flex;
  align-items: center;

  background-color: inherit;
  border: none;

  padding: 0;
`;

export const StyledText = styled.span`
  color: ${colors.primaryColorBlue};
  font-size: 16px;

  margin-left: 8px;
`;
