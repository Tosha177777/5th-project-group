import { ContainerBagWrap } from './SignInPage.styled';
import SignInForm from '/src/components/SignInForm/SignInForm';

const SignInPage = () => {
  return (
    <>
      <ContainerBagWrap></ContainerBagWrap>
      {/* <Container> */}

      <SignInForm />

      <div>
        <picture>
          {/* mobile */}
          <source
            srcSet="src/images/mobile/bottle-sign-in@1x.png"
            type="image/png"
          />
          <source
            srcSet="src/images/mobile/bottle-sign-in@2x.png"
            type="image/png"
          />
          {/* tablet */}
          <source
            media="min-width:768px"
            srcSet="src/images/tablet/bottle-sign-in@1x.png"
            type="image/png"
          />
          <source
            media="min-width:768px"
            srcSet="src/images/tablet/bottle-sign-in@2x.png"
            type="image/png"
          />
          {/* desktop */}
          <source
            media="min-width:1440px"
            srcSet="src/images/desktop/bottle-sign-in@1x.png"
            type="image/png"
          />
          <source
            media="min-width:1440px"
            srcSet="src/images/desktop/bottle-sign-in@2x.png"
            type="image/png"
          />

          <img
            className="img-bottle"
            src="src/images/desktop/bottle-sign-in@1x.png"
            alt="Bottle of water"
            loading="lazy"
          />
        </picture>
      </div>
      {/* </Container> */}
    </>
  );
};

export default SignInPage;
