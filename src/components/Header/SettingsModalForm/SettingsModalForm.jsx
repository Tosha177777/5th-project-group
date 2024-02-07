import { ErrorMessage, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { useState } from 'react';
import { toast } from 'react-toastify';

import {
  GenderBox,
  GenderText,
  PassLab,
  PasswordBox,
  PasswordText,
  Radio,
  SaveButton,
  StyledField,
  StyledForm,
  StyledToggleBtn,
  Text,
  UserBox,
  UserInfoBox,
  UserInfoSpan,
  UserLabel,
  YourGender,
} from './SettingsModalForm.styled';
import { selectAuthUserData } from '/src/redux/authSelectors';
import { userInfoThunk } from '/src/redux/userInfoOperations';
import { ReactComponent as Eye } from '/src/svgs/icons/eye.svg';
import { ReactComponent as SlashedEye } from '/src/svgs/icons/slashed-eye.svg';

const SignInSchema = yup.object().shape({
  gender: yup.string(),
  name: yup.string().min(2, 'Name must be 2 or more characters'),
  email: yup.string().email('Please enter a valid email'),
  oldPassword: yup
    .string()
    .min(8, 'Password must be 8 or more characters')
    .max(30),
  newPassword: yup.string().when('oldPassword', {
    is: (oldPassword) => oldPassword && oldPassword.length > 0,
    then: () =>
      yup
        .string()
        .min(8, 'Password must be 2 or more characters')
        .max(30, 'Too much characters')
        .required('New password is required'),
    otherwise: () => yup.string().notRequired(),
  }),
  resetPassword: yup.string().when('newPassword', {
    is: (newPassword) => newPassword && newPassword.length > 0,
    then: () =>
      yup
        .string()
        .required('Repeat password is required')
        .oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
    otherwise: () => yup.string().notRequired(),
  }),
});

const SettingsModalForm = ({ onClose }) => {
  const user = useSelector(selectAuthUserData);

  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [isRepeatPasswordVisible, setRepeatPasswordVisibility] =
    useState(false);
  const [isNewPasswordVisible, setNewPasswordVisibility] = useState(false);

  const dispatch = useDispatch();

  const initialValues = {
    gender: user.gender || 'female',
    name: user.name || '',
    email: user.email,
    oldPassword: '',
    newPassword: '',
    resetPassword: '',
  };

  const handleSubmit = async (values) => {
    if (values === initialValues) {
      toast.warn('No changes were made.');
      return;
    }

    const changedFields = {};
    Object.keys(values).forEach((fieldName) => {
      if (
        values[fieldName] !== initialValues[fieldName] &&
        fieldName !== 'resetPassword'
      ) {
        changedFields[fieldName] = values[fieldName];
      }
    });

    try {
      const result = await dispatch(userInfoThunk(changedFields));
      if (!result.error) {
        onClose();
      }
    } catch (error) {
      console.error(error);
    }

    return;
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <StyledForm autoComplete="off">
          <div className="box">
            <UserInfoBox>
              <YourGender>Your gender identity</YourGender>
              <GenderBox role="group">
                <label htmlFor="female">
                  <Radio
                    type="radio"
                    name="gender"
                    value="female"
                    checked={props.values.gender === 'female'}
                  />
                  <GenderText>Woman</GenderText>
                </label>
                <label htmlFor="male">
                  <Radio
                    type="radio"
                    name="gender"
                    value="male"
                    checked={props.values.gender === 'male'}
                  />
                  <GenderText>Man</GenderText>
                </label>
              </GenderBox>
              <UserBox>
                <div>
                  <UserLabel htmlFor="name">
                    <UserInfoSpan>Your name</UserInfoSpan>
                    <StyledField
                      name="name"
                      type="text"
                      id="name"
                      placeholder=""
                      value={props.values.name}
                      pattern=".{2,}"
                    />
                  </UserLabel>
                  <ErrorMessage name="name" component="p" />
                </div>
                <div>
                  <UserLabel htmlFor="email">
                    <UserInfoSpan>E-mail</UserInfoSpan>
                    <StyledField
                      name="email"
                      type="email"
                      id="email"
                      value={props.values.email}
                      placeholder="E-mail"
                    />
                  </UserLabel>
                  <ErrorMessage name="email" component="p" />
                </div>
              </UserBox>
            </UserInfoBox>

            <PasswordBox>
              <Text>Password</Text>
              <div>
                <PassLab htmlFor="oldPassword">
                  <PasswordText>Outdated password:</PasswordText>
                  <StyledField
                    name="oldPassword"
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
                </PassLab>
                <ErrorMessage name="oldPassword" component="p" />
              </div>
              <div>
                <PassLab htmlFor="newPassword">
                  <PasswordText>New Password:</PasswordText>
                  <StyledField
                    name="newPassword"
                    type={isNewPasswordVisible ? 'text' : 'password'}
                    placeholder="Password"
                    pattern=".{8,}"
                  />
                  <StyledToggleBtn
                    type="button"
                    onClick={() =>
                      setNewPasswordVisibility(!isNewPasswordVisible)
                    }
                  >
                    {isNewPasswordVisible ? <Eye /> : <SlashedEye />}
                  </StyledToggleBtn>
                </PassLab>
                <ErrorMessage name="newPassword" component="p" />
              </div>
              <div>
                <PassLab htmlFor="resetPassword">
                  <PasswordText>Repeat New Password:</PasswordText>
                  <StyledField
                    name="resetPassword"
                    type={isRepeatPasswordVisible ? 'text' : 'password'}
                    placeholder="Password"
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
                </PassLab>
                <ErrorMessage name="resetPassword" component="p" />
              </div>
            </PasswordBox>
          </div>
          <SaveButton type="submit">Save</SaveButton>
        </StyledForm>
      )}
    </Formik>
  );
};

export default SettingsModalForm;
