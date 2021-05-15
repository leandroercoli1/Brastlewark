import { configureStore } from "@reduxjs/toolkit";
import censusReducer from "./slices";

export const store = configureStore({
  reducer: {
    census: censusReducer,
  },
});
