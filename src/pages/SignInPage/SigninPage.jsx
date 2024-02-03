
import { useSelector } from 'react-redux';
import SignInForm from '/src/components/SignInForm/SignInForm';
import { selectAuthError } from '/src/redux/authSelectors';
import { StyledBackgroundWrap, StyledErrorMessage } from './SignInPage.styled';
const SignInPage = () => {
   const authError = useSelector(selectAuthError);
  return (
     <>
      <StyledBackgroundWrap></StyledBackgroundWrap>
      <SignInForm />
      {authError && (
        <StyledErrorMessage>
          {authError}
        </StyledErrorMessage>
      )}
    </>
    
  );
};

export default SignInPage;
