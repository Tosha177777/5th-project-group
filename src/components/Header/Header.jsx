import {
  HeaderEl,
  HeaderContainer,
  Navigation,
  StyledLink,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderEl>
      <HeaderContainer>
        <Navigation>
          <StyledLink to="/sign-in">Sign in</StyledLink>
        </Navigation>
      </HeaderContainer>
    </HeaderEl>
  );
};
{
  /* <StyledLink to="/sign-up">
            <IconWrapper>
              <use href={`${sprite}#icon-logo`} />
            </IconWrapper>
            SignUpPage
          </StyledLink> */
}
