import { createSlice } from "@reduxjs/toolkit";
const ERROR_MESSAGE = "There was a problem requesting data from the server.";

const censusSlice = createSlice({
  name: "census",
  initialState: {
    isLoading: false,
    error: null,
  },
  reducers: {
    request(state) {
      state.isLoading = true;
      state.error = null;
    },
    success(state) {
      state.isLoading = false;
      state.error = null;
    },
    failure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default censusSlice.reducer;
