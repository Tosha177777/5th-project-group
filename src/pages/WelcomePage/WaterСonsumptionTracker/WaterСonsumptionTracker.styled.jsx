import styled from "styled-components";

import { ReactComponent as CalendarSvg } from '../../../svgs/icons/calendar.svg';
import { ReactComponent as PresentationSvg } from '../../../svgs/icons/presentation.svg';
import { ReactComponent as ToolsSvg } from '../../../svgs/icons/tools.svg';

export const MainTitle = styled.h1`
  color: var(--Primery-Color-Black, #2F2F2F);
  font-size: 36px;
  font-weight: 700;
  line-height: 1.16;

  margin-bottom: 16px;


  @media only screen and (max-width: 767px) {
    font-size: 28px;
    line-height: 1.14;
  }
`;

export const BenefitsTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  color: var(--Primery-Color-Black, #2F2F2F);
  margin-bottom: 12px;
`;

export const BenefitsList = styled.ul`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;

  @media only screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const BenefitsItem = styled.li`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    &:not(:last-child) {
        margin-bottom: 16px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:not(:last-child) {
        margin-bottom: 16px;
    }
  }
`

export const Paragraph = styled.p`
  color: var(--Primery-Color-Black, #2F2F2F);
  font-size: 24px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`;

export const TrackerContainer = styled.div`
  margin-bottom: 40px;

  @media only screen and (min-width: 1440px) {
    margin-right: 81px;
    margin-bottom: 0;
  }

  @media only screen and (min-width: 767px) and (max-width: 1439px) {
    margin-bottom: 60px;
  }
`;

export const MainButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 36px;
  margin-top: 24px;

  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;

  border-radius: 10px;
  background-color: var(--Primery-Color-Blue, #407BFF);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  &:active {
    box-shadow: none;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 44px;
    font-size: 18px;
    line-height: 1.33;
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
  }
`;

export const CalendarIcon = styled(CalendarSvg)`
   margin-right: 8px;
`;

export const PresentationIcon = styled(PresentationSvg)`
   margin-right: 8px;
`;

export const ToolsIcon = styled(ToolsSvg)`
   margin-right: 8px;
`;