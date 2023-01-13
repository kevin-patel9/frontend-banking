import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://banking-3rn6.onrender.com"
})