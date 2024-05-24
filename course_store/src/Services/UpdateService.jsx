import axios from 'axios';
import { baseURL } from './BaseURL';

export const updateCourse = async (courseData) => {
  try {
    const response = await axios.put(`${baseURL}updateCourse/${courseData.id}`, courseData); // Use PUT request to update course
    return response.data;
  } catch (error) {
    console.error("Error updating course:", error);
    throw error;
  }
};
