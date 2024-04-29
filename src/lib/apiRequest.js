import axios from "axios";

console.log("api req called");

const apiRequest = axios.create({
  baseURL: "http://localhost:8800/api",
  withCredentials: true,
});

export default apiRequest;
