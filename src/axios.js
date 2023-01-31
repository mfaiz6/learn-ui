import axios from "axios"

const instance = axios.create({
    baseURL: "https://skhi-api.onrender.com/api"
    // baseURL: "http://localhost:8800/api"
});


export default instance