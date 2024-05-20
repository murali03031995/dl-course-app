import axios from "axios";
import React from "react";
import { baseURL } from './BaseURL';

export const newCourse = async(data)=>{

  console.log(data);
  try{
    const response = await axios.post(`${baseURL}createCourse`,data)
    return response.data
  } catch(error){
    console.log(error);
    throw error
  }
}