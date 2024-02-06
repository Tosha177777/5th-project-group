import axios from 'axios';

export const instance = axios.create({
  baseURL: `https://water-tracker-o2xv.onrender.com/`,
});