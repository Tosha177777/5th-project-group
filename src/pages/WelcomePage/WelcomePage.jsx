import { Container } from './WelcomePage.styled';
// import  WelcomeContainer from './WelcomeContainer/WelcomeContainer';
import { WhyDrinkWater } from './WhyDrinkWater/WhyDrinkWater';
import { WaterСonsumptionTracker } from './WaterСonsumptionTracker/WaterСonsumptionTracker';

const WelcomePage = () => {
  return (
    // <WelcomeContainer>
      <Container>
       <WaterСonsumptionTracker/>
       <WhyDrinkWater/>
      </Container>
    // {/* </WelcomeContainer> */}
  );
};

export default WelcomePage;
