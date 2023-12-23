// apiService.js
import axios from 'axios';

const API_BASE_URL = 'https://endo-api.eductor.org'; // Replace with your base API URL
const API_ENDPOINT = '/users/testimonials'; // The endpoint you want to access

export const fetchApiData = async () => {
  const apitestimonials = `${API_BASE_URL}${API_ENDPOINT}`;

  try {
    const response = await axios.get(apitestimonials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

