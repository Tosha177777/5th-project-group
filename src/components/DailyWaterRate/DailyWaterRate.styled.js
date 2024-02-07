import styled from '@emotion/styled';
import colors from '../../root/root';

export const StyledWrap = styled.div`
padding: 8px 20px;
margin-bottom: 232px;
width: 166px;
border: 1px solid ${colors.secondaryColor2WhiteBlue};
border-radius: 10px;
box-shadow: 0 4px 8px 0 rgba(158, 187, 255, 0.12);

@media (min-width: 768px) {
    margin-bottom: 326px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 466px;
  }

`
export const StyledText = styled.p`
margin-bottom: 12px;
font-size: 18px;
font-weight: 500;
line-height: 1.33;
color: ${colors.primaryColorBlack};

`
export const StyledInfoWrap = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;

  p {
    font-weight: 700;
    font-size: 22px;
    line-height: 1;
    color: ${colors.primaryColorBlue};

    @media (min-width: 768px) {
    font-size: 24px;
  }
  }

  button {
    padding: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: #8baeff;
    border: none;
    background-color: transparent;
  }
`
