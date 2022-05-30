import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isFetching: false,
  isSuccess: false,
  isError: false,
  // errorMessage: "",
};

export const editAdminThunk = createAsyncThunk(
  "editAdmin",
  async ({ id, formValue }) => {
    const url = `http://23.21.204.21:8080/api/v1/admins/${id}`;
    console.log(formValue);
    console.log(id);
    const response = await axios.put(url, formValue, {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    console.log("admin is edited");

    return response.data;
  }
);

const editAdminSlice = createSlice({
  name: "editAdmin",
  initialState,
  reducers: {
    //no reducers
  },
  extraReducers: {
    [editAdminThunk.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [editAdminThunk.rejected]: (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isError = true;
      //   state.errorMessage = payload.message;
    },
    [editAdminThunk.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export default editAdminSlice.reducer;
