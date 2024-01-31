import axios from 'axios';

const instance = axios.create({
  baseURL: `https://water-tracker-o2xv.onrender.com/auth`,
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestRegister = async (formData) => {
  const { data } = await instance.post('/signup', formData);
  setToken(data.token);
  return data;
};

export const requestLogin = async (formData) => {
  const { data } = await instance.post('/signin', formData);
  setToken(data.token);
  return data;
};

export const requestLogout = async () => {
  const { data } = await instance.post('/signout');
  return data;
};

// export const requestRefreshUser = async () => {
//   const { data } = await instance.get('endpoint');
//   return data;
// };
