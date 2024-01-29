import React from 'react';

import { FormContainer, StyledSignUpLink } from './SignInForm.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email').required(),
  password: Yup.string()
    .min(8, 'Password must be 8 or more characters')
    .max(30)
    .required(),
});


const SignInForm = () => {
  

  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmit={handleSubmit}
    >
      <FormContainer>
        <Form autoComplete="off">
          <h1>Sign In</h1>
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
          <StyledSignUpLink to="/sign-up">Sign up</StyledSignUpLink>
        </Form>
      </FormContainer>
    </Formik>
  );
};

export default SignInForm;
