import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestTodayWater,
  requestMonthWater,
  requestAddWater,
  requestDeleteWaterById,
  requestUpdateWaterById
} from '../services/waterAPI';
import { setToken } from '../services/authApi';

export const todayWaterThunk = createAsyncThunk(
  'water/today',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      setToken(token);
      const data = await requestTodayWater();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const monthWaterThunk = createAsyncThunk(
  'water/month',
  async (month, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      setToken(token);
      const data = await requestMonthWater(month + 1);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWaterThunk = createAsyncThunk(
  'water/add',
  async (newData, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      setToken(token);
      const newRecord = await requestAddWater(newData);
      return newRecord;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWaterThunk = createAsyncThunk(
  'water/delete',
  async (recordId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      setToken(token);
      const deletedRecord = await requestDeleteWaterById(recordId);
      return deletedRecord;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateWaterThunk = createAsyncThunk(
  'water/update',
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      setToken(token);
      const { recordId, newRecord } = data;
      const updatedRecord = await requestUpdateWaterById(recordId, newRecord);
      return updatedRecord;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

