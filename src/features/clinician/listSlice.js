import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const url =
  "http://23.21.204.21:8080/api/v1/clinicians?activeFlag=true&page=0&limit=25";
export const listOfClinicianThunk = createAsyncThunk(
  "listOfClinicians",
  async () => {
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });

    return response.data.data;
  }
);

export const listOfCliniciansSlice = createSlice({
  name: "listClinicians",
  initialState: {
    list: [],
    status: null,
    loading: false,
  },
  reducers: {
    // Empty
  },
  extraReducers: {
    [listOfClinicianThunk.pending]: (state) => {
      state.status = "Loading";
      state.loading = false;
    },
    [listOfClinicianThunk.fulfilled]: (state, action) => {
      state.status = "Success";
      state.loading = true;
      state.list = action.payload;
    },
    [listOfClinicianThunk.rejected]: (state) => {
      state.status = "Failed";
      state.loading = false;
    },
  },
});

export default listOfCliniciansSlice.reducer;
