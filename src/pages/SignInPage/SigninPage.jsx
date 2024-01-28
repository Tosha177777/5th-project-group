import { Container } from './SignInPage.styled';
import React from 'react';
import  SignInForm  from '../../components/SignInForm/SignInForm';


const SignInPage = () => {

  return (
    <Container>
      <div className="background-wrap"></div>
      <img
        className="img-bottle"
        src="./images/desktop/Bottle-for-Sign-in@1x.png"
        alt="Bottle of water"
      />
      <SignInForm />
    </Container>
  );
};

export default SignInPage;