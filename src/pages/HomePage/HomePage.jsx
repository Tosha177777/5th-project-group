import { useSelector } from 'react-redux';
import { selectWaterIsLoading } from '../../redux/waterSelectors';
import { 
  HomeContainer, 
  Container, 
  ControllContainer, 
} from './HomePage.styled';
import DailyWaterRate from '/src/components/DailyWaterRate/DailyWaterRate';
import ProgressBar from '/src/components/ProgressBar/ProgressBar';
import Calendar from '../../components/Calendar/Calendar';
import { Loader } from '../../components/Loader/Loader';

const HomePage = () => {
  
  const isLoading = useSelector(selectWaterIsLoading);

  return (
    <>    
      <HomeContainer></HomeContainer>
      <Container>
        <DailyWaterRate />
        <ProgressBar/>
     
       <ControllContainer>
       {isLoading && <Loader />}
        <DailyWaterRate />
        <Calendar />
       </ControllContainer>
     
     </Container>

  </>
);

};

export default HomePage;
