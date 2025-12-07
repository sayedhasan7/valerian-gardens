"use-client"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchServices = createAsyncThunk(
  "services/fetchAll",
  async () => {
    const res = await fetch("https://valerian-garden-backend.vercel.app/api/services");
    const data = await res.json();
    return data.services || [];
  }
);

const serviceSlice = createSlice({
  name: "services",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchServices.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default serviceSlice.reducer;
