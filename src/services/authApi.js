import axios from 'axios';

const instance = axios.create({
  baseURL: `https://water-tracker-o2xv.onrender.com`,
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestRegister = async (formData) => {
  const { data } = await instance.post('/auth/signup', formData);
  setToken(data.token);
  return data;
};

export const requestLogin = async (formData) => {
  const { data } = await instance.post('/auth/signin', formData);
  setToken(data.token);
  return data;
};

export const requestLogout = async () => {
  const { data } = await instance.post('/auth/signout');
  return data;
};

// export const requestRefreshUser = async () => {
//   const { data } = await instance.get('endpoint');
//   return data;
// };

export const reqestChangeWaterRate = async (water) => {
  const { data } = await instance.patch('/water-rate', water);
  return data;
};
