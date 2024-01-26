import axios from "axios";

const waterTrackerInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

export const setToken = (token) => {
   waterTrackerInstance.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const removeToken = () => {
  waterTrackerInstance.defaults.headers.common.Authorization = '';
};

export const requestRegister = async (userData) => {
  const { data } = await waterTrackerInstance.post('/users/signup', contactData);
  setToken(data.token)
  return data;
};