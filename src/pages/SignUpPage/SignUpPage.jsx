import { useSelector } from 'react-redux';
import SignUpForm from '/src/components/SignUpForm/SignUpForm';
import { selectAuthError } from '/src/redux/authSelectors';
import { StyledBackgroundWrap, StyledErrorMessage } from './SignUpPage.styled';

const SignUpPage = () => {
  const authError = useSelector(selectAuthError);

  return (
    <>
      <StyledBackgroundWrap></StyledBackgroundWrap>
      <SignUpForm />
      {authError && (
        <StyledErrorMessage>
          {authError}
        </StyledErrorMessage>
      )}
    </>
  );
};

export default SignUpPage;
