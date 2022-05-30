import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const detailsOfCliniciansThunk = createAsyncThunk(
  " detailsOfAdmin",
  async (id) => {
    const url = `http://23.21.204.21:8080/api/v1/clinicians/${id}`;

    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });

    return response.data;
  }
);

export const detailsOfCliniciansSlice = createSlice({
  name: "detailsClinician",
  initialState: {
    clinician: {},

    status: null,
    loading: false,
  },
  reducers: {
    // Empty
  },
  extraReducers: {
    [detailsOfCliniciansThunk.pending]: (state) => {
      state.status = "Loading";
      state.loading = false;
    },
    [detailsOfCliniciansThunk.fulfilled]: (state, action) => {
      state.status = "Success";
      state.loading = true;
      state.clinician = action.payload;
    },
    [detailsOfCliniciansThunk.rejected]: (state) => {
      state.status = "Failed";
      state.loading = false;
    },
  },
});

export default detailsOfCliniciansSlice.reducer;
