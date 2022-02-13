import axios from "axios";

export const api = axios.create(
    {
        baseURL: `https://mymoney-app-lucarampi.vercel.app/api/`,
    }
)