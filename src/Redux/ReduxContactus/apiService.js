import axios from 'axios';

const API_BASE_URL = 'https://endo-api.eductor.org'; // Replace with your base API URL
const API_ENDPOINT = '/users/contact_us'; // The endpoint you want to access

export const fetchApiData = async (formData) => {
  const apiUrl = `${API_BASE_URL}${API_ENDPOINT}`;

  try {
    const response = await axios.post(apiUrl, formData); // Pass the formData to the POST request
    return response.data;
  } catch (error) {
    throw error;
  }
};