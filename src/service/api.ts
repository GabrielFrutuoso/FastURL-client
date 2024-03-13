import axios from "axios";

export const api = axios.create({
    baseURL: "https://fasturl-api.onrender.com/",
})