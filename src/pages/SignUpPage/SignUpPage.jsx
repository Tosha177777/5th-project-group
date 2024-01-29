import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { clearAuthError, registerThunk } from '../../redux/authOperations';
import { selectAuthError } from '../../redux/authSelectors';
import { StyledPageContainer , StyledWrap} from './SignUpPage.styled';

const SignUpSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required(),
  password: yup
    .string()
    .min(8, 'Password must be 8 or more characters')
    .max(64)
    .required(),
  repeatPassword: yup.string().when('password', (password, field) => {
    if (password) {
      return field
        .required('The passwords do not match')
        .oneOf([yup.ref('password')], 'The passwords do not match');
    }
  }),
});

const SignUpPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: ({email, password}, { resetForm }) => {
      const userValues = { email, password };
      dispatch(registerThunk(userValues));
      resetForm();
    },
  });

  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  useEffect(() => {
    if (error) {
      // toast.error('Oops! Something goes wrong...Try again.');
      dispatch(clearAuthError());
    }
  }, [error, dispatch]);

  return (
    <>
    <StyledWrap></StyledWrap>
    <StyledPageContainer>      
        <form onSubmit={formik.handleSubmit}>
          <h1>Sign Up</h1>
          <label>
            <span>Enter your email</span>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {<p>{formik.errors.email ? formik.errors.email : ''}</p>}
          </label>
          <label>
            <span>Enter your password</span>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {<p>{formik.errors.password ? formik.errors.password : ''}</p>}
          </label>
          <label>
            <span>Repeat password</span>
            <input
              id="repeatPassword"
              name="repeatPassword"
              type="password"
              placeholder="Repeat password"
              onChange={formik.handleChange}
              value={formik.values.repeatPassword}
            />
          </label>
          <button type="submit">Sign Up</button>
          <NavLink to="/sign-in">Sign in</NavLink>
        </form>
      <div>
        <picture>
          {/* mobile */}
          <source
            srcSet="../../images/mobile/Bottle-Sign-In@1x.png"
            type="image/png"
          />
          <source
            srcSet="../../images/mobile/Bottle-Sign-In@2x.png"
            type="image/png"
          />
          {/* tablet */}
          <source
            media="min-width:768px"
            srcSet="../../images/tablet/Bottle-Sign-In@1x.png"
            type="image/png"
          />
          <source
            media="min-width:768px"
            srcSet="../../images/tablet/Bottle-Sign-In@2x.png"
            type="image/png"
          />
          {/* desktop */}
          <source
            media="min-width:1440px"
            srcSet="../../images/desktop/Bottle-Sign-In@1x.png"
            type="image/png"
          />
          <source
            media="min-width:1440px"
            srcSet="../../images/desktop/Bottle-Sign-In@2x.png"
            type="image/png"
          />

          <img
            src="../../images/mobile/Bottle-Sign-In.png"
            alt="a bottle of water"
            loading="lazy"
          />
        </picture>
      </div>
      </StyledPageContainer>
      </>
  );
};

export default SignUpPage;
