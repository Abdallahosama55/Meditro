import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchApiData } from './apiService';
import {fetchApiDataDetails } from './apiService';
const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk('apiProductDetails/fetchData', async (id) => {
  try {
    const data = await fetchApiData(id);
    return data;
  } catch (error) {
    throw error;
  }
});



const apiReducerProductDetails = createSlice({
  name: 'apiProductDetails',
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});


export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = apiReducerProductDetails.actions;

export default apiReducerProductDetails.reducer;
