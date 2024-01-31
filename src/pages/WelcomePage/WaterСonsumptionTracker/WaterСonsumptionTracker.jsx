import { useNavigate } from 'react-router-dom';
import {
  MainTitle,
  BenefitsTitle,
  BenefitsList,
  BenefitsItem,
  Paragraph,
  TrackerContainer,
  MainButton,
  CalendarIcon,
  PresentationIcon,
  ToolsIcon,
} from './WaterСonsumptionTracker.styled';

export const WaterСonsumptionTracker = () => {
  const navigate = useNavigate();
  function OnClick() {
    navigate('/signup');
  }
  return (
    <TrackerContainer>
      <MainTitle>Water consumption tracker</MainTitle>
      <Paragraph>Record daily water intake and track</Paragraph>
      <BenefitsTitle>Tracker Benefits</BenefitsTitle>
      <BenefitsList>
        <BenefitsItem>
          <CalendarIcon />
          Habit drive
        </BenefitsItem>
        <BenefitsItem>
          <PresentationIcon />
          View statistics
        </BenefitsItem>
        <BenefitsItem>
          <ToolsIcon />
          Personal rate setting
        </BenefitsItem>
      </BenefitsList>
      <MainButton type="button" onClick={OnClick}>
        Try tracker
      </MainButton>
    </TrackerContainer>
  );
};
