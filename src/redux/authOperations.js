// file for coworking with backend
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  requestLogin,
  requestLogout,
  requestRefreshUser,
  requestRegister,
  setToken,
} from '../services/authApi.js';
import { toast } from 'react-toastify';

export const registerThunk = createAsyncThunk(
  'auth/signup',
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
  'auth/signin',
  async (formData, thunkAPI) => {
    try {
      const response = await requestLogin(formData);
      toast.success('Successful login');
      return response;
    } catch (error) {
      toast.error('Somthing went wrong. Try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      setToken(token);
      await requestLogout();
      toast.success('Successful logout');
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'users/current',
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

export const clearAuthError = () => ({
  type: 'auth/clearError',
});
