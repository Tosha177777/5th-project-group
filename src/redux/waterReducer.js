import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  todayWaterThunk,
  monthWaterThunk,
  addWaterThunk,
  deleteWaterThunk,
  updateWaterThunk
} from './waterOperations';

const INITIAL_STATE = {
  todayWaterConsumption: {
    dayPortions: [],
    percentage: 0,
  },
  monthWaterConsumption: [],
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
        state.todayWaterConsumption = action.payload;
      })
      .addCase(monthWaterThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.monthWaterConsumption = action.payload;
      })
      .addCase(addWaterThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (state.todayWaterConsumption.dayPortions.length) {
          state.todayWaterConsumption.dayPortions = [
            ...state.todayWaterConsumption.dayPortions, action.payload
          ];
        } else {
          state.todayWaterConsumption.dayPortions.push(action.payload);
        }
      })
      .addCase(deleteWaterThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.todayWaterConsumption.dayPortions =
          state.todayWaterConsumption.dayPortions.filter(
            (portion) => portion._id !== action.payload._id
          );
      })
      .addCase(updateWaterThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const indexToUpdate = state.todayWaterConsumption.dayPortions.findIndex(portion => portion._id === action.payload._id);
        if (indexToUpdate !== -1) {
        state.todayWaterConsumption.dayPortions[indexToUpdate] = action.payload;
        }
      })
      
      .addMatcher(
        isAnyOf(
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
