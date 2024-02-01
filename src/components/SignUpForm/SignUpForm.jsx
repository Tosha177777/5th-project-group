import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';
import { clearAuthError, registerThunk } from '../../redux/authOperations';
import {StyledForm, StyledSubmitBtn, StyledToggleBtn} from './SignUpForm.styled';
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
    .oneOf([yup.ref('password'), null], 'The passwords do not match')
    .required('Repeat password field is required'),
});

const SignUpForm = () => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [isRepeatPasswordVisible, setRepeatPasswordVisibility] = useState(false);

  const dispatch = useDispatch();

  const formInitialValues = {
    email: '',
    password: '',
    repeatPassword: '',
  };

  const handleSubmit = ({ email, password }, { resetForm }) => {
    event.preventDefault();
    const userValues = { email, password };
    dispatch(registerThunk(userValues));
    dispatch(clearAuthError());
    resetForm();
  };
  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={SignUpSchema}
      onSubmit={handleSubmit}
    >
   <StyledForm>
          <h1>Sign Up</h1>
          <label>
            <span>Enter your email</span>
            <Field name="email" type="email" placeholder="E-mail" />
            <ErrorMessage name="email" component="p" />
          </label>
          <label>
            <span>Enter your password</span>
            <Field
              name="password"
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Password"
              pattern=".{8,}"
            />
            <StyledToggleBtn
              type="button"
              onClick={() => setPasswordVisibility(!isPasswordVisible)}
            >
              {isPasswordVisible ? <Eye /> : <SlashedEye />}
            </StyledToggleBtn>
            <ErrorMessage name="password" component="p" />
          </label>
          <label>
            <span>Repeat password</span>
            <Field
              name="repeatPassword"
              type={isRepeatPasswordVisible ? 'text' : 'password'}
              placeholder="Repeat password"
              pattern=".{8,}"
            />
            <StyledToggleBtn
              type="button"
              onClick={() =>
                setRepeatPasswordVisibility(!isRepeatPasswordVisible)
              }
            >
              {isRepeatPasswordVisible ? <Eye /> : <SlashedEye />}
            </StyledToggleBtn>
            <ErrorMessage name="repeatPassword" component="p" />
          </label>
          <StyledSubmitBtn type="submit">Sign Up</StyledSubmitBtn>
          <Link to="/signin">Sign in</Link>
          </StyledForm>
    </Formik>
    
  )
}

export default SignUpForm;
