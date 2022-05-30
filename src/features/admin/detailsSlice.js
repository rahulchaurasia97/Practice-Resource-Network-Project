import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const detailsOfAdminsThunk = createAsyncThunk(
  " detailsOfAdmin",
  async (id) => {
    const url = `http://23.21.204.21:8080/api/v1/admins/${id}`;
    console.log(id);
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    // console.log(response.data.data);

    return response.data;
  }
);

export const detailsOfAdminsSlice = createSlice({
  name: "detailsAdmin",
  initialState: {
    admin: {},

    status: null,
    loading: false,
  },
  reducers: {
    // Empty
  },
  extraReducers: {
    [detailsOfAdminsThunk.pending]: (state) => {
      state.status = "Loading";
      state.loading = false;
    },
    [detailsOfAdminsThunk.fulfilled]: (state, action) => {
      state.status = "Success";
      state.loading = true;
      state.admin = action.payload;
    },
    [detailsOfAdminsThunk.rejected]: (state) => {
      state.status = "Failed";
      state.loading = false;
    },
  },
});

export default detailsOfAdminsSlice.reducer;
