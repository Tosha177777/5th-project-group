import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  registerThunk,
  loginThunk,
  logoutThunk,
  refreshThunk,
} from './authOperations';
import { userPhotoThunk } from './userInfoOperations';

const INITIAL_STATE = {
  token: null,
  user: {
    email: null,
    userName: null,
    gender: '',
    waterUser: null,
    avatarURL: null,
  },
  isSignedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      //-------------------Registration----------

      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isSignedIn = true;
      })

      //-----------LOGIN------------------

      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isSignedIn = true;
      })

      //-----------Refresh------------------

      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isSignedIn = true;
      })

      //-------------------Photo Update----------

      .addCase(userPhotoThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.avatarURL = action.payload;
        state.isSignedIn = true;
      })

      //-----------LogOut------------------
      .addCase(logoutThunk.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addMatcher(
        isAnyOf(
          logoutThunk.pending,
          loginThunk.pending,
          refreshThunk.rejected,
          registerThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          logoutThunk.rejected,
          loginThunk.rejected,
          registerThunk.rejected,
          refreshThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
