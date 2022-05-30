import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const createClinicianThunk = createAsyncThunk(
  "createClinician",
  async (formValue) => {
    const url = `http://23.21.204.21:8080/api/v1/clinicians`;
    console.log(formValue);
    const response = await axios.post(url, formValue, {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    console.log("clinician is created");

    return response.data;
  }
);

const createClinicianSlice = createSlice({
  name: "createClinician",
  initialState,
  reducers: {
    //no reducers
  },
  extraReducers: {
    [createClinicianThunk.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [createClinicianThunk.rejected]: (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isError = true;
      // state.errorMessage = payload.message;
    },
    [createClinicianThunk.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export default createClinicianSlice.reducer;
