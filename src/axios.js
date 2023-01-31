import axios from "axios"

const instance = axios.create({
    baseURL: "https://skhi-api.onrender.com/api"
});


export default instance