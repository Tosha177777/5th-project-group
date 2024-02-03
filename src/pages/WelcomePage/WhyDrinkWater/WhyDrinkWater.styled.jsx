import styled from "styled-components";
import colors from "../../../root/root";

export const WhyDrinkWaterContainer = styled.div`
  padding: 24px 16px;
  border-radius: 10px;
  background-color: ${colors.secondaryColor2WhiteBlue};
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.30);

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding: 32px 24px;
    width: 446px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 34px;
  }
`;

export const WhyDrinkWaterTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  color: ${colors.primaryColorBlack};
  margin-bottom: 12px
`

export const InfoList = styled.ul`
color: ${colors.primaryColorBlack};
`;
export const InfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 16px;
  line-height: 1.25;

  &::before {
    content: '';
    border-color: ${colors.primaryColorBlue};
    border-style: solid;
    border-width: 0 8px 8px 0;
    border-radius: 50%;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;