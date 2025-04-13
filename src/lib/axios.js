import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:"https://chat-fawn-gamma.vercel.app/api",
  withCredentials: true,
});
