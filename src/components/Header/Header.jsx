import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
} from './Header.styled';
import sprite from 'assets/sprite.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Welcome
        </StyledLink>
        <StyledLink to="/sign-in">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          SignInPage
        </StyledLink>
        <StyledLink to="/sign-up">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          SignUpPage
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
