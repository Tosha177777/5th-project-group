import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  todayWaterThunk,
  monthWaterThunk,
  addWaterThunk,
  deleteWaterThunk,
  updateWaterThunk,
} from './waterOperations';


const INITIAL_STATE = {
  todayWaterConsumption:[],
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
        state.todayWaterConsumption = action.payload;
        state.error = null;
      })
      .addCase(monthWaterThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.monthWaterConsumption = action.payload;
        state.error = null;
      })
      .addCase(addWaterThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.todayWaterConsumption.length) {
          state.todayWaterConsumption = [
            ...state.todayWaterConsumption,
            action.payload,
          ];
        } else {
          state.todayWaterConsumption.push(action.payload);
        }   
         state.error = null;
      })
      .addCase(deleteWaterThunk.fulfilled, (state, action) => {
        state.isLoading = false;

        state.todayWaterConsumption =
          state.todayWaterConsumption.filter(
            (portion) => portion._id !== action.payload._id
          );
        state.error = null;
      })
      .addCase(updateWaterThunk.fulfilled, (state, action) => {
        state.isLoading = false;

        const indexToUpdate = state.todayWaterConsumption.findIndex(
          (portion) => portion._id === action.payload._id
        );
        if (indexToUpdate !== -1) {
          state.todayWaterConsumption[indexToUpdate] =
            action.payload;
        }
        state.error = null;
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
