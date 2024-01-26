// file for coworking with backend
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  requestLogin,
  requestLogout,
  requestRefreshUser,
  requestRegister,
  setToken,
} from '../services/api.js';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const regData = await requestRegister(formData);
      return regData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const response = await requestLogin(formData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      setToken(token);
      const responseRefresh = await requestRefreshUser();
      return responseRefresh;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (!token) return false;
      return true;
    },
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await requestLogout();
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
