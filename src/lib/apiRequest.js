import axios from "axios";

console.log("api req called");

const apiRequest = axios.create({
  baseURL: "http://172.31.42.102:8800/api",
  withCredentials: true,
});

export default apiRequest;
