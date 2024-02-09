import { createSelector } from "@reduxjs/toolkit";
const selectWater = (state) => state.water;
export const selectTodayWater = createSelector(selectWater, (water) => water.todayWaterConsumption);
export const selectMonthWater = createSelector(selectWater, (water) => water.monthWaterConsumption);
export const selectWaterIsLoading = createSelector(selectWater,(water) => water.isLoading);
export const selectWaterError = createSelector(selectWater,(water) => water.error);
