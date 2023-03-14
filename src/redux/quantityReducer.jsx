import { createSlice } from "@reduxjs/toolkit";

export const quantitySlice = createSlice({
  name: "quantity",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value === 0) {
        return;
      } else state.value -= 1;
    },
  },
});

export const { increment, decrement } = quantitySlice.actions;

export default quantitySlice.reducer;
