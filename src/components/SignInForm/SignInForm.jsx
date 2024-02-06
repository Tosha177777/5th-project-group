
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Formik, Field} from 'formik';
import { loginThunk } from '../../redux/authOperations';
import {
  StyledError,
  StyledFieldName,
  StyledForm,
  StyledSubmitBtn,
  StyledToggleBtn,
} from './SignInForm.styled';
import { ReactComponent as Eye } from '../../svgs/icons/eye.svg';
import { ReactComponent as SlashedEye } from '../../svgs/icons/slashed-eye.svg';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('E-mail is required'),
  password: Yup.string()
    .min(8, 'Password must be 8 or more characters')
    .max(30)
    .required('Password is required'),
});

const SignInForm = () => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = ({ email, password }, { resetForm }) => {
    console.log({ email, password });
    const userValues = { email, password };

    dispatch(loginThunk(userValues));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmit={handleSubmit}
    >
      
      <StyledForm autoComplete="off">
        <h1>Sign In</h1>
        <label>
          <StyledFieldName>Enter your email</StyledFieldName>
          <Field name="email" type="email" placeholder="E-mail" />
          <StyledError name="email" component="span"/>
        </label>
        <label>
          <StyledFieldName>Enter your password</StyledFieldName>
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
          <StyledError name="password" component="span"/>
        </label>
        <StyledSubmitBtn type="submit">Sign In</StyledSubmitBtn>
        <Link to="/signup">Sign up</Link>
      </StyledForm>      
    </Formik>
  );
};

export default SignInForm;
