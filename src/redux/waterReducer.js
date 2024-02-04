import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { reqestChangeWaterRate } from '../services/authApi';

export const changeWaterRate = createAsyncThunk(
  'water/waterRate',
  async (water, thunkAPI) => {
    try {
      const waterRate = await reqestChangeWaterRate(water);
      return waterRate;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  waterToDrink: 0,
  error: null,
};
const waterRateSlice = createSlice({
  name: 'waterRate',
  initialState: INITIAL_STATE,
  reducers: {
    handlWeight(state, action) {
      state.weight = action.payload;
    },
    handlActiveTime(state, action) {
      state.activeTime = action.payload;
    },
    handlGender(state, action) {
      state.gender = action.payload;
    },
    handlRequiredWater(state, action) {
      state.requiredWater = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder

      .addCase(changeWaterRate.fulfilled, (state, action) => {
        state.waterToDrink = action.payload;
      })
      .addMatcher(isAnyOf(changeWaterRate.pending), (state) => {
        state.error = null;
      })
      .addMatcher(isAnyOf(changeWaterRate.rejected), (state, action) => {
        state.error = action.payload;
      }),
});

export const { handlWeight, handlActiveTime, handlGender, handlRequiredWater } =
  waterRateSlice.actions;
export const waterRateReducer = waterRateSlice.reducer;
