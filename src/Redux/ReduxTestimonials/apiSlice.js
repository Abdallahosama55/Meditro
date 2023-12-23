import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchApiData } from './apiService';
const initialState = {
  data: [],
  loading: false,
  error: null,
};

const apiSlicetestimonials = createSlice({
  name: 'apitestimonials',
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const fetchData = createAsyncThunk('api/fetchData', async () => {
  try {
    const data = await fetchApiData();
    return data;
  } catch (error) {
    throw error;
  }
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = apiSlicetestimonials.actions;

export default apiSlicetestimonials.reducer;
