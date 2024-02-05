import axios from 'axios';

const BASE_URL = `https://water-tracker-o2xv.onrender.com`;

export const requestTodayWater = async () => {
  const { data } = await axios.get(`${BASE_URL}/water/today`);
  return data;
};

export const requestMonthWater = async (monthNum) => {
  const { data } = await axios.get(`${BASE_URL}/water/month/${monthNum}`);
  return data;
};

export const requestAddWater = async (newData) => {
  const { data } = await axios.post(`${BASE_URL}/water/`, newData);
  return data;
};

export const requestDeleteWaterById = async (recordId) => {
  const { data } = await axios.post(`${BASE_URL}/water/${recordId}`);
  return data;
};

export const requestUpdateWaterById = async (recordId, newData) => {
  const { data } = await axios.patch(`${BASE_URL}/water/${recordId}`, newData);
  return data;
};

export const requestUpdateWaterRate = async (newRate) => {
  const { data } = await axios.patch(`${BASE_URL}/water-rate`, newRate);
  return data;
};

