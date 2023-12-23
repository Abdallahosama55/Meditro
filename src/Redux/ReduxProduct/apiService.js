// apiService.js
import axios from 'axios';

const API_BASE_URL = 'https://endo-api.eductor.org'; // Replace with your base API URL
export const fetchApiData = async (params) => {
  const apiUrl = `${API_BASE_URL}/users/products`;

  try {
    const response = await axios.get(apiUrl, {
      params, // Pass the parameters as an object
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fetchApiDataDetails = async (id) => {
  const apiUrl = `${API_BASE_URL}/users/products/${id}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
};
