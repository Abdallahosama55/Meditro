// apiSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchApiData } from './apiService';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const apiReducerContact_us = createSlice({
  name: 'apicontact_us',
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
      state.error = action.payload; // Store the error message, not the entire AxiosError object
    },
  },
});

// Modify the fetchData action creator to accept formData as a parameter
export const fetchData = createAsyncThunk('apicontact_us', async (formData, { dispatch }) => {
  try {
    dispatch(fetchDataStart());
    const data = await fetchApiData(formData); // Pass the formData to fetchApiData
    dispatch(fetchDataSuccess(data));
    console.log(data.type)
    return data;
  } catch (error) {
    dispatch(fetchDataFailure(error));
    throw error;
  }
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = apiReducerContact_us.actions;

export default apiReducerContact_us.reducer;



