import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestInfoUpdate, requestPhotoUpdate } from '../services/userApi';
import { setToken } from '../services/authApi';
import { toast } from 'react-toastify';

export const userPhotoThunk = createAsyncThunk(
  'users/avatar',
  async (formData, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      setToken(token);
      const response = await requestPhotoUpdate(formData);
      toast('Wow so beautiful !');
      return response;
    } catch (error) {
      toast.error(error.message);
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
      toast('Wow so easy !');
      return response;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
