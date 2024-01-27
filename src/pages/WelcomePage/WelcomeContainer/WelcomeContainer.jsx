import { WelcomeStyledContainer } from "./WelcomeContainer.styled";

const WelcomeContainer = ({ children }) =>{
  return (
    <>
    <WelcomeStyledContainer>
        { children }
    </WelcomeStyledContainer>
    </>
  )
}

export default WelcomeContainer;