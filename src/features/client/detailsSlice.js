import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const detailsOfClientsThunk = createAsyncThunk(
  " detailsOfAdmin",
  async (id) => {
    const url = `http://23.21.204.21:8080/api/v1/clients/${id}`;

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

export const detailsOfClientsSlice = createSlice({
  name: "detailsClient",
  initialState: {
    client: {},

    status: null,
    loading: false,
  },
  reducers: {
    // Empty
  },
  extraReducers: {
    [detailsOfClientsThunk.pending]: (state) => {
      state.status = "Loading";
      state.loading = false;
    },
    [detailsOfClientsThunk.fulfilled]: (state, action) => {
      state.status = "Success";
      state.loading = true;
      state.client = action.payload;
    },
    [detailsOfClientsThunk.rejected]: (state) => {
      state.status = "Failed";
      state.loading = false;
    },
  },
});

export default detailsOfClientsSlice.reducer;
