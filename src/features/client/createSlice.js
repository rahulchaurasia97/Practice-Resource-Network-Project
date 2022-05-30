import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const createClientThunk = createAsyncThunk(
  "createClient",
  async (formValue) => {
    const url = `http://23.21.204.21:8080/api/v1/clients`;
    console.log(formValue);
    const response = await axios.post(url, formValue, {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    console.log("client is created");

    return response.data;
  }
);

const createClientSlice = createSlice({
  name: "createClient",
  initialState,
  reducers: {
    //no reducers
  },
  extraReducers: {
    [createClientThunk.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [createClientThunk.rejected]: (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [createClientThunk.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export default createClientSlice.reducer;
