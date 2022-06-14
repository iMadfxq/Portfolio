import { configureStore, createSlice } from "@reduxjs/toolkit";

import currentTabSlice from "./currentTabSlice";

export default configureStore({
  reducer: {
    currentTab: currentTabSlice,
  },
});
