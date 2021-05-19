import { createSlice } from "@reduxjs/toolkit";
import { getCensusData as getCensusDataApi } from "api";
const ERROR_MESSAGE = "There was a problem requesting data from the server.";

const censusSlice = createSlice({
  name: "census",
  initialState: {
    isLoading: false,
    error: null,
    data: [],
    friends: [],
    selectedGnome: null,
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
    addFriend(state, action) {
      state.friends.push(action.payload);
    },
    removeFriend(state, action) {
      state.friends = state.friends.filter(
        (friend) => friend.id !== action.payload
      );
    },
    selectGnome(state, action) {
      state.selectedGnome = action.payload;
    },
  },
});

export default censusSlice.reducer;

export const addFriend = censusSlice.actions.addFriend;
export const removeFriend = censusSlice.actions.removeFriend;
export const selectGnome = censusSlice.actions.selectGnome;

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
