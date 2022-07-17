import { createSlice } from "@reduxjs/toolkit";

const currentTabSlice = createSlice({
  name: "currentTab",
  initialState: {
    value: "",
  },
  reducers: {
    changeTab: (state, action) => {
      state.value = action.payload;
      window.scrollTo(0,0)
      localStorage.setItem('lastTabVisited', state.value)
    },
  },
});

export const { changeTab } = currentTabSlice.actions;

export default currentTabSlice.reducer