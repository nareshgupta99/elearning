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
        config.headers.Authorization=`Bearer ${token}`
        return config;
    }
    return Promise.reject(new Error("Login To Add Item")); 
 },err=>Promise.reject(err))

 privateAxios.interceptors.response.use(
   (response) => {
     return response;
   },
   async (error) => {
     if (error.response && error.response.status === 401) {
       localStorage.setItem("token","");
       window.location.replace('/login'); // Redirect to login page
     }
     return Promise.reject(error);
   }
 );