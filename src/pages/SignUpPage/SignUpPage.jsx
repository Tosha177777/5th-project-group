import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from "yup";
import { useFormik } from 'formik';
import { clearAuthError, registerThunk } from 'redux/authSlice';
import { selectAuthError } from 'redux/authSelectors';
import { StyledPageContainer } from './SignUpPage.styled';

const SignUpSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required(),
  password: yup.string().min(8, 'Password must be 8 or more characters').max(64).required(),
  repeatPassword: yup.string().when("password", (password, field) => {
      if (password) {
        return field.required('The passwords do not match').oneOf([yup.ref('password')], 'The passwords do not match');
      }
    }),
})

const SignUpPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: data => {
      dispatch(registerThunk(data));
      reset();
     },
   });

  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  // useEffect(() => {
  //   if (error) {
  //     toast.error('Oops! Something goes wrong...Try again.');
  //     dispatch(clearAuthError());
  //   }
  // }, [error, dispatch]);

 
  return (
    <div>SignUpPage</div>);
};

export default SignUpPage;
