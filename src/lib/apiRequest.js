import axios from "axios";

console.log("api req called");

const apiRequest = axios.create({
  baseURL: "http://16.171.129.205:8800/api",
  withCredentials: true,
});

export default apiRequest;
