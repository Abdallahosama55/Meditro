import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchApiData } from './apiService';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk('apiCatgorey/fetchData', async (params = {}) => {
  try {
    const data = await fetchApiData(params);
    return data;
  } catch (error) {
    throw error;
  }
});

const apiReducerCatgorey = createSlice({
  name: 'apiCatgorey',
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

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = apiReducerCatgorey.actions;

export default apiReducerCatgorey.reducer;
