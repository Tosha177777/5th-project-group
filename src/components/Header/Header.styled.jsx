import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderEl = styled.header`
  display: flex;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  margin: 0 auto;
  padding: 0 20px;
  max-width: 320px;
  width: 100%;
  height: 48px;
  @media (min-width: 768px) {
    padding: 0 32px;

    max-width: 768px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const StyledPersonDiv = styled.div``;

export const StyledLink = styled(Link)`
  color: #407bff;
  font-size: 16px;
  font-style: normal;
  line-height: 20px;
`;

export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '12px'};
  height: ${(props) => props.size || '12px'};
  fill: ${(props) => props.color || '#ffffff'};
  display: inline-block;
  margin-right: 5px;
  box-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;
