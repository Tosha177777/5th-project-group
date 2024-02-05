import { instance } from "./instance";

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestRegister = async (formData) => {
  const { data } = await instance.post('auth/signup', formData);
  setToken(data.token);
  return data;
};

export const requestLogin = async (formData) => {
  const { data } = await instance.post('auth/signin', formData);
  setToken(data.token);
  return data;
};

export const requestLogout = async () => {
  const { data } = await instance.post('auth/signout');
  setToken(data.token);
  return data;
};

export const requestRefreshUser = async () => {
  const { data } = await instance.get('users/current');
  setToken(data.token);
  return data;
};

