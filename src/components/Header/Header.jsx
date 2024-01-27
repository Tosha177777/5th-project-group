import {
  HeaderEl,
  HeaderContainer,
  Navigation,
  StyledSignLink,
  StyledLogoLink,
  StyledLogoText,
} from './Header.styled';
import { ReactComponent as Logo } from '../../svgs/header/logo.svg';
import { ReactComponent as UnAuthUser } from '../../svgs/icons/user.svg';

export const Header = () => {
  return (
    <HeaderEl>
      <HeaderContainer>
        <Navigation>
          <StyledLogoLink to="/">
            <Logo />
            <StyledLogoText>Tracker of water</StyledLogoText>
          </StyledLogoLink>

          <StyledSignLink to="/sign-in">
            Sign in
            <UnAuthUser />
          </StyledSignLink>
        </Navigation>
      </HeaderContainer>
    </HeaderEl>
  );
};
