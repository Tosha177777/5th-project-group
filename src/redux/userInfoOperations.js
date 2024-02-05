import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestPhotoUpdate } from '../services/userApi';
import { setToken } from '../services/authApi';

export const userPhotoThunk = createAsyncThunk(
  'users/avatar',
  async (formData, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      setToken(token);
      const response = await requestPhotoUpdate(formData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userInfoThunk = createAsyncThunk(
  'users',
  async (formData, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      setToken(token);
      const response = await requestInfoUpdate(formData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
