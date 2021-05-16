import { createSlice } from "@reduxjs/toolkit";
import { getCensusData as getCensusDataApi } from "api";
const ERROR_MESSAGE = "There was a problem requesting data from the server.";

const censusSlice = createSlice({
  name: "census",
  initialState: {
    isLoading: false,
    error: null,
    data: [],
  },
  reducers: {
    request(state) {
      state.isLoading = true;
      state.error = null;
      state.data = [];
    },
    success(state, action) {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    },
    failure(state) {
      state.isLoading = false;
      state.error = ERROR_MESSAGE;
      state.data = [];
    },
  },
});

export default censusSlice.reducer;

const { request, success, failure } = censusSlice.actions;

export const getCensusData = () => async (dispatch) => {
  dispatch(request());
  return getCensusDataApi().then(
    (response) => {
      const { Brastlewark = [] } = response || {};
      dispatch(success(Brastlewark));
    },
    (error) => {
      dispatch(failure());
    }
  );
};
