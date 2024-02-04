import { Container } from './WelcomePage.styled';
import WelcomeContainer from './WelcomeContainer/WelcomeContainer';
import { WhyDrinkWater } from './WhyDrinkWater/WhyDrinkWater';
import { WaterСonsumptionTracker } from './WaterСonsumptionTracker/WaterСonsumptionTracker';
import { DailyNormaModal } from '../../components/DailyNormaModal/DailyNormaModal';

const WelcomePage = () => {
  return (
    <WelcomeContainer>
      <Container>
        <WaterСonsumptionTracker />
        <WhyDrinkWater />
        <DailyNormaModal></DailyNormaModal>
      </Container>
    </WelcomeContainer>
  );
};

export default WelcomePage;
