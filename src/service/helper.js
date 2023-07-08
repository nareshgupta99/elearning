import axios from "axios"
import { getToken } from "./UserDetail";


 const BASE_URL="http://localhost:8181/api"

 export const publicAxios=axios.create({
    baseURL:BASE_URL
 })

 export const privateAxios=axios.create({
    baseURL:BASE_URL
 });

 privateAxios.interceptors.request.use(config=>{
    const token=getToken();
    if(token){
        console.log("in config")
        config.headers.Authorization=`Bearer ${token}`
        return config;
    }
 },err=>Promise.reject(err))