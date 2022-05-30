import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const createAdminThunk = createAsyncThunk(
  "createAdmin",
  async (formValue) => {
    const url = `http://23.21.204.21:8080/api/v1/admins`;
    console.log(formValue);
    const response = await axios.post(url, formValue, {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    console.log("admin is created");

    return response.data;
  }
);

const createAdminSlice = createSlice({
  name: "createAdmin",
  initialState,
  reducers: {
    //no reducers
  },
  extraReducers: {
    [createAdminThunk.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [createAdminThunk.rejected]: (state, { payload }) => {
      // console.log("payload", payload);
      state.isFetching = false;
      // state.isError = true;
      // state.errorMessage = payload.message;
    },
    [createAdminThunk.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export default createAdminSlice.reducer;
