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
import { useSelector } from 'react-redux';
import { selectAuthIsSignedIn } from '../../redux/authSelectors';
import HeaderUser from './UserLogo';

export const Header = () => {
  const isAuth = useSelector(selectAuthIsSignedIn);

  return (
    <HeaderEl>
      <HeaderContainer>
        <Navigation>
          <StyledLogoLink to="/">
            <Logo />
            <StyledLogoText>Tracker of water</StyledLogoText>
          </StyledLogoLink>
          {isAuth ? (
            <HeaderUser />
          ) : (
            <StyledSignLink to="/signin">
              Sign in
              <UnAuthUser />
            </StyledSignLink>
          )}
        </Navigation>
      </HeaderContainer>
    </HeaderEl>
  );
};
