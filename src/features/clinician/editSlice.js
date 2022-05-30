import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isFetching: false,
  isSuccess: false,
  isError: false,
  // errorMessage: "",
};

export const editClinicianThunk = createAsyncThunk(
  "editClinician",
  async ({ id, formValue }) => {
    const url = `http://23.21.204.21:8080/api/v1/clinicians/${id}`;
    // console.log(formValue);
    // console.log(id);
    const response = await axios.put(url, formValue, {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    console.log("clinician is edited");

    return response.data;
  }
);

const editClinicianSlice = createSlice({
  name: "editClient",
  initialState,
  reducers: {
    //no reducers
  },
  extraReducers: {
    [editClinicianThunk.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [editClinicianThunk.rejected]: (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isError = true;
      //   state.errorMessage = payload.message;
    },
    [editClinicianThunk.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export default editClinicianSlice.reducer;
