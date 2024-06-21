import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flightsList: [],
  isLoading: false,
  searchNumberList: [],
  searchDestination: [],
  flightSelected: {},
  typeToSheach: "",
};

export const flightReducer = createSlice({
  name: "flightsList",
  initialState,
  reducers: {
    loading: (state) => {
      state.isLoading = true;
    },
    addList: (state, action) => {
      state.flightsList = action.payload;
      state.isLoading = false;
    },
    changeList: (state, action) => {
      state.flightsList = action.payload;
    },
    addSearchNumber: (state, action) => {
      state.searchNumberList = action.payload;
      state.searchDestination = [];
    },
    addFlightSelected: (state, action) => {
      state.flightSelected = action.payload;
    },
    addTypeToSheach: (state, action) => {
      state.typeToSheach = action.payload;
    },
  },
});

export const {
  loading,
  addList,
  changeList,
  addSearchNumber,
  addFlightSelected,
  addTypeToSheach,
} = flightReducer.actions;
export default flightReducer.reducer;
