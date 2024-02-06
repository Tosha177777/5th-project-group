import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  todayWaterThunk,
  monthWaterThunk,
  addWaterThunk,
  deleteWaterThunk,
  updateWaterThunk,
  updateWaterRateThunk
} from './waterOperations';

const INITIAL_STATE = {
  waterToDrink: 2000,
  todayWaterConsumption: [],
  monthWaterCOnsumption: [],
  isLoading: false,
  error: null,
};

const waterRateSlice = createSlice({
  name: 'water',
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(todayWaterThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.today = action.payload;
      })
      .addCase(monthWaterThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.today = action.payload;
      })
      .addCase(addWaterThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.today = action.payload;
      })
      .addCase(deleteWaterThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.today = action.payload;
      })
      .addCase(updateWaterThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.today = action.payload;
      })
      .addCase(updateWaterRateThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.waterToDrink = action.payload;
      })
      .addMatcher(
        isAnyOf(
          updateWaterRateThunk.pending,
          todayWaterThunk.pending,
          monthWaterThunk.pending,
          addWaterThunk.pending,
          deleteWaterThunk.pending,
          updateWaterThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          updateWaterRateThunk.rejected,
          todayWaterThunk.rejected,
          monthWaterThunk.rejected,
          addWaterThunk.rejected,
          deleteWaterThunk.rejected,
          updateWaterThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const waterReducer = waterRateSlice.reducer;