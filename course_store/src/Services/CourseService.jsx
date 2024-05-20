
import axios from 'axios';
import { baseURL } from './BaseURL';

export const fetchCourses = async () => {
  try {
    const response = await axios.get(`${baseURL}allCourses`);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};
