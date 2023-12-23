// apiSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchApiData } from './apiService';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const apiReducerappointments = createSlice({
  name: 'apiappointments',
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.data = action.payload.message;
      state.loading = false;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.message; // Store the error message, not the entire AxiosError object
    },
  },
});

// Modify the fetchData action creator to accept formData as a parameter
export const fetchData = createAsyncThunk('apiappointments', async (formData, { dispatch }) => {
  try {
    dispatch(fetchDataStart());
    const data = await fetchApiData(formData); // Pass the formData to fetchApiData
    dispatch(fetchDataSuccess(data));
    console.log(data.type)
    return data;
  } catch (error) {
    dispatch(fetchDataFailure(error));
    console.log(error)
    throw error;
  }
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure} = apiReducerappointments.actions;

export default apiReducerappointments.reducer;



