import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestPhotoUpdate, setToken } from '../services/userApi';

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
