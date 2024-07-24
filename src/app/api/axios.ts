import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const instance = axios.create({
    baseURL: "https://api.thecatapi.com/v1",
    headers: {
        "x-api-key": process.env.CAT_API_KEY
    },
    withCredentials: true
});

export default instance;