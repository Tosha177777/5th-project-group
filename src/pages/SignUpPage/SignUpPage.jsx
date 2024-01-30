import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { clearAuthError, registerThunk } from '../../redux/authOperations';
import { selectAuthError } from '../../redux/authSelectors';
import { StyledBackgroundWrap, StyledForm, StyledSubmitBtn, StyledToggleBtn } from './SignUpPage.styled';
import { ReactComponent as Eye } from '../../svgs/icons/eye.svg';
import { ReactComponent as SlashedEye } from '../../svgs/icons/slashed-eye.svg';

const SignUpSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('E-mail is required'),
  password: yup
    .string()
    .min(8, 'Password must be 8 or more characters')
    .max(64)
    .required('Password is required'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'The passwords do not match'),
});

const SignUpPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: ({ email, password }, { resetForm }) => {
      const userValues = { email, password };
      dispatch(registerThunk(userValues));
      resetForm();
    },
  });

  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility((prev) => !prev);
  };

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
      <StyledBackgroundWrap></StyledBackgroundWrap>
      <StyledForm onSubmit={formik.handleSubmit}>
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
            pattern=".{8,}"
          />
          <StyledToggleBtn
            type="button"
            onClick={() => togglePasswordVisibility()}
          >
             {isPasswordVisible ?  <Eye /> : <SlashedEye />}
          </StyledToggleBtn>
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
            pattern=".{8,}"
          />
          <StyledToggleBtn
            type="button"
            onClick={() => togglePasswordVisibility()}
          >
            {isPasswordVisible ? <Eye /> :<SlashedEye /> }
          </StyledToggleBtn>
          {
            <p>
              {formik.errors.repeatPassword ? formik.errors.repeatPassword : ''}
            </p>
          }
        </label>
        <StyledSubmitBtn type="submit" disabled={!formik.isValid}>
          Sign Up
        </StyledSubmitBtn>
        <Link to="/signin">Sign in</Link>
      </StyledForm>
    </>
  );
};

export default SignUpPage;
