import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const url = "http://23.21.204.21:8080/api/v1/admins?page=0&limit=25";
export const listOfAdminsThunk = createAsyncThunk("listOfAdmins", async () => {
  // console.log(token);

  const response = await axios.get(url, {
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  });
  // console.log(response.data.data);
  return response.data.data;
});

export const listOfAdminsSlice = createSlice({
  name: "listAdmin",
  initialState: {
    list: [],
    status: null,
    loading: false,
    token: "",
  },
  reducers: {
    // Empty
  },
  extraReducers: {
    [listOfAdminsThunk.pending]: (state) => {
      state.status = "Loading";
      state.loading = false;
    },
    [listOfAdminsThunk.fulfilled]: (state, action) => {
      state.status = "Success";
      state.loading = true;
      state.list = action.payload;
    },
    [listOfAdminsThunk.rejected]: (state) => {
      state.status = "Failed";
      state.loading = false;
    },
  },
});

export default listOfAdminsSlice.reducer;
