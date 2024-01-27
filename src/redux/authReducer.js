import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { registerThunk, loginThunk, logoutThunk } from './authOperations';

const INITIAL_STATE = {
  token: null,
  user: {
    email: null,
    name: null,
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

      //-----------LogOut------------------
      .addCase(logoutThunk.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addMatcher(
        isAnyOf(
          logoutThunk.pending,
          loginThunk.pending,

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
          registerThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
