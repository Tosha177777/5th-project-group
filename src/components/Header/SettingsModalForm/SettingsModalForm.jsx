import { ErrorMessage, Field, Formik } from 'formik';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import {
  GenderBox,
  GenderText,
  PasswordBox,
  PasswordText,
  SaveButton,
  StyledField,
  StyledForm,
  Text,
  UserInfoBox,
  YourGender,
} from './SettingsModalForm.styled';
import { selectAuthIsLoading } from '/src/redux/authSelectors';

const SignInSchema = Yup.object().shape({
  gender: Yup.string(),
  name: Yup.string(),
  email: Yup.string().email('Please enter a valid email'),
  password: Yup.string()
    .min(8, 'Password must be 8 or more characters')
    .max(30),
});

const SettingsModalForm = () => {
  const user = useSelector(selectAuthIsLoading);

  //   const dispatch = useDispatch();
  const initialValues = {
    gender: '',
    name: '',
    email: user.email,
    password: '',
    newPassword: '',
    resetPassword: '',
  };

  const handleSubmit = (values) => {
    const changedFields = {};

    Object.keys(values).forEach((fieldName) => {
      if (values[fieldName] !== initialValues[fieldName]) {
        changedFields[fieldName] = values[fieldName];
      }
    });

    console.log('Changed Fields:', changedFields);

    // dispatch(loginThunk(userValues));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm autoComplete="off">
        <UserInfoBox>
          <YourGender>Your gender identity</YourGender>
          <GenderBox role="group">
            <label htmlFor="woman">
              <Field type="radio" name="gender" value="woman" />
              <GenderText>Woman</GenderText>
            </label>
            <label htmlFor="man">
              <Field type="radio" name="gender" value="man" />
              <GenderText>Man</GenderText>
            </label>
          </GenderBox>

          <label htmlFor="name">
            Your name
            <StyledField name="name" type="text" placeholder="" />
            <ErrorMessage name="name" />
          </label>
          <label className="label" htmlFor="email">
            E-mail
            <StyledField name="email" type="email" placeholder="E-mail" />
            <ErrorMessage name="email" />
          </label>
        </UserInfoBox>
        <Text>Password</Text>
        <PasswordBox>
          <label htmlFor="password">
            <PasswordText>Outdated password:</PasswordText>
            <StyledField
              name="password"
              type="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" />
          </label>
          <label htmlFor="newPassword">
            <PasswordText>New Password:</PasswordText>
            <StyledField
              name="newPassword"
              type="password"
              placeholder="Password"
            />
            <ErrorMessage name="newPassword" />
          </label>
          <label htmlFor="resetPassword">
            <PasswordText>Repeat New Password:</PasswordText>
            <StyledField
              name="resetPassword"
              type="password"
              placeholder="Password"
            />
            <ErrorMessage name="resetPassword" />
          </label>
        </PasswordBox>
        <SaveButton type="submit">Save</SaveButton>
      </StyledForm>
    </Formik>
  );
};

export default SettingsModalForm;
