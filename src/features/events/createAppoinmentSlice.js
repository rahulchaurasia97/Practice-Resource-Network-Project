import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const createAppoinmentThunk = createAsyncThunk(
  "createAppoinment",
  async (formValue) => {
    const url = `http://23.21.204.21:8080/api/v1/events/appointments`;
    console.log(formValue);
    const response = await axios.post(url, formValue, {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    console.log("Appoinment is created");

    return response.data;
  }
);

const createAppoinmentSlice = createSlice({
  name: "createAppoinment",
  initialState,
  reducers: {
    //no reducers
  },
  extraReducers: {
    [createAppoinmentThunk.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [createAppoinmentThunk.rejected]: (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [createAppoinmentThunk.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export default createAppoinmentSlice.reducer;
