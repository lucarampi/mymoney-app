import axios from "axios";

export const api = axios.create(
    {
        baseURL: `https://mymoney-app.vercel.app/api/`,
    }
)