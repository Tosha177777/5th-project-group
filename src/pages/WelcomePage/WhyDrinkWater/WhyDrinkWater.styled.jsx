import styled from "styled-components";

export const WhyDrinkWaterContainer = styled.div`
  padding: 24px 16px;
  border-radius: 10px;
  background-color: var(--Secondary-color-2, #ECF2FF);
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
  color: var(--Primery-Color-Black, #2F2F2F);
`

export const InfoList = styled.ul``;
export const InfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 16px;
  line-height: 1.25;

  &::before {
    content: '';
    border-color: var(--Primery-Color-Blue, #407BFF);
    border-style: solid;
    border-width: 0 8px 8px 0;
    border-radius: 50%;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;