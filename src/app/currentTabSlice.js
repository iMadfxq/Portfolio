import { createSlice } from "@reduxjs/toolkit";

const currentTabSlice = createSlice({
  name: "currentTab",
  initialState: {
    value: "/",
  },
  reducers: {
    changeTab: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeTab } = currentTabSlice.actions;

export default currentTabSlice.reducer