import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000/api",
  // baseURL: "https://edify-server-beta.vercel.app/api",
});

export default Api;
