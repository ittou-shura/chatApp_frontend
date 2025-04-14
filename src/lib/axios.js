import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chattyweb-inky.vercel.app/api",
  withCredentials: true,
});
