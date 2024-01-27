import {
  HeaderEl,
  HeaderContainer,
  Navigation,
  StyledLink,
  StyledPersonDiv,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderEl>
      <HeaderContainer>
        <Navigation>
          <StyledLink to="/">Welcome</StyledLink>
          <StyledPersonDiv>
            <StyledLink to="/sign-in">Sign in</StyledLink>
          </StyledPersonDiv>
        </Navigation>
      </HeaderContainer>
    </HeaderEl>
  );
};
