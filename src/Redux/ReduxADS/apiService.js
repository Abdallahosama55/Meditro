// apiService.js
import axios from 'axios';

const API_BASE_URL = 'https://endo-api.eductor.org'; // Replace with your base API URL
const API_ENDPOINT = '/users/ads'; // The endpoint you want to access

export const fetchApiData = async () => {
  const apiUrl = `${API_BASE_URL}${API_ENDPOINT}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
};

