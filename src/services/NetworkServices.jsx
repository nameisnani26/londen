import axios from "axios";

//  Create axios instance with base URL and default headers
const api = axios.create({
  baseURL: "http://127.0.0.1:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

//  GET request
export const getRequest = async (url) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error("GET request error:", error);
    throw error;
  }
};

// POST request
export const postRequest = async (url, data) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    console.error("POST request error:", error);
    throw error;
  }
};

//  PUT request
export const putRequest = async (url, data) => {
  try {
    const response = await api.put(url, data);
    return response.data;
  } catch (error) {
    console.error("PUT request error:", error);
    throw error;
  }
};

//  DELETE request
export const deleteRequest = async (url) => {
  try {
    const response = await api.delete(url);
    return response.data;
  } catch (error) {
    console.error("DELETE request error:", error);
    throw error;
  }
};

export default api;
