import { FormTitle, StyledSignUpLink } from './SignInForm.styled';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/authOperations';

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
  const initialValues = {
    email: '',
    password: '',
  };
  const dispatch = useDispatch();
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
      {/* <FormContainer> */}
      <Form autoComplete="on">
        <FormTitle>Sign In</FormTitle>
        <label className="label" htmlFor="email">
          Enter your email
          <Field name="email" type="email" placeholder="E-mail" />
          <ErrorMessage name="email" />
        </label>
        <label htmlFor="password">
          Enter your password
          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" />
        </label>
        <button type="submit">Sign In</button>
        <StyledSignUpLink to="/signup">Sign up</StyledSignUpLink>
      </Form>
      {/* </FormContainer> */}
    </Formik>
  );
};

export default SignInForm;
