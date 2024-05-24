import axios from 'axios';
import { baseURL } from './BaseURL';

export const deleteCourse = async (courseId) => {
  try {
    const response = await axios.delete(`${baseURL}deleteCourse/${courseId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting course:", error);
    throw error;
  }
};
