import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api"; // Replace with your actual backend URL

const apiService = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    // You can add other headers like Authorization here if needed
  },
});

export default apiService;
