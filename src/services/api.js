import axios from 'axios';

const instance = axios.create({
  baseURL: `some URL`,
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestRegister = async (formData) => {
  const { data } = await instance.post('endpoint', formData);
  setToken(data.token);
  return data;
};

export const requestLogin = async (formData) => {
  const { data } = await instance.post('endpoint', formData);
  setToken(data.token);
  return data;
};

export const requestLogout = async () => {
  const { data } = await instance.post('endpoint');
  return data;
};

export const requestRefreshUser = async () => {
  const { data } = await instance.get('endpoint');
  return data;
};
