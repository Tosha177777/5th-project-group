import { instance } from './instance';
import { setToken } from './authApi';

export const requestTodayWater = async () => {
  const { data } = await instance.get(`water/today`);
  setToken(data.token);
  return data;
};

export const requestMonthWater = async (monthNum) => {
  const { data } = await instance.get(`water/month/${monthNum}`);
  setToken(data.token);
  return data;
};

export const requestAddWater = async (newData) => {
  const { data } = await instance.post(`water`, newData);
  setToken(data.token);
  return data;
};

export const requestDeleteWaterById = async (recordId) => {
  const { data } = await instance.delete(`water/${recordId}`);
  setToken(data.token);
  return data;
};

export const requestUpdateWaterById = async (recordId, newData) => {
  const { data } = await instance.patch(`water/${recordId}`, newData);
  setToken(data.token);
  return data;
};

export const requestUpdateWaterRate = async (newRate) => {
  const { data } = await instance.patch(`water-rate`, newRate);
  setToken(data.token);
  return data;
};
