import { Container } from './SignInPage.styled';
import SignInForm from '../../components/SignInForm/SignInForm';

const SignInPage = () => {
  return (
    <Container>
      <div className="background-wrap"></div>
      <img
        className="img-bottle"
        src="src/images/desktop/bottle-for-sign-in@1x.png"
        alt="Bottle of water"
      />
      <SignInForm />
    </Container>
  );
};

export default SignInPage;
