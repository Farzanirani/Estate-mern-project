import axios from "axios";

const apiRequest = axios.create({
    baseURL: "https://estate-vtw4.onrender.com/api",
    withCredentials:true,
})

export default apiRequest;
