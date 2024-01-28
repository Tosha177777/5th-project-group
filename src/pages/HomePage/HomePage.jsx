import { Title, DailyContainer, Container } from './HomePage.styled';


const HomePage = () => {

  
  return  (
    <>
      <Title>Home Page</Title>
   
        <DailyContainer>
         <div>
          <h2>My daily norma</h2>
          <span>1.5 L Edit</span>
         </div>
        </DailyContainer>
        <Container>
          <div>
            <h2>Today</h2>
            <h2>Month</h2>
          </div>
        </Container>
        <div>
          <picture>
            {/* mobile */}
            <source 
            srcSet='../../images/mobile/Bottle-Home-screen@1x.png'
            type='image/png'
            />
            <source 
            srcSet='../../images/mobile/Bottle-Home-screen@2x.png'
            type='image/png'
            />
            {/* tablet */}
            <source
            media='min-width:768px'
            srcSet='../../images/tablet/Bottle-Home-screen@1x.png'
            type='image/png'/>
            <source
            media='min-width:768px'
            srcSet='../../images/tablet/Bottle-Home-screen@2x.png'
            type='image/png'
            />
            {/* desktop */}
            <source
            media='min-width:1440px'
            srcSet='../../images/desktop/Bottle-Home-screen@1x.png'
            type='image/png'
            />
            <source
            media='min-width:1440px'
            srcSet='../../images/desktop/Bottle-Home-screen@2x.png'
            type='image/png'
            />
           <img
            src='../../images/mobile/Bottle-Home-screen.png'
            alt='a bottle of water'
            loading='lazy'
            />
          </picture>
        </div>
    </>
  );
};

export default HomePage;
