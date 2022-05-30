import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const getAllEventsThunk = createAsyncThunk(
  "getAllEvents",
  async (date) => {
    const url = `http://23.21.204.21:8080/api/v1/events?startDt=2022-01-01&endDt=2022-06-06`;
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    //  console.log(response.data);
    return response.data;
  }
);

export const getAllEventsSlice = createSlice({
  name: "getAllEvents",
  initialState: {
    events: [],
    status: null,
    loading: false,
  },
  reducers: {
    // Empty
  },
  extraReducers: {
    [getAllEventsThunk.pending]: (state) => {
      state.status = "Loading";
      state.loading = false;
    },
    [getAllEventsThunk.fulfilled]: (state, action) => {
      state.status = "Success";
      state.loading = true;
      state.events = action.payload;
    },
    [getAllEventsThunk.rejected]: (state) => {
      state.status = "Failed";
      state.loading = false;
    },
  },
});

export default getAllEventsSlice.reducer;
