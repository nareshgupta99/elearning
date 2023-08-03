import axios from "axios";
import { privateAxios } from "./helper";

const APP_BASE_URL="http://localhost:8181/api/auth";

class AuthService{

     registerInstructor(data) {
        return axios.post(APP_BASE_URL+"/instructor",data);
    }

    registerStudent(data){
        return axios.post(APP_BASE_URL+"/student",data);
    }

    login(data){
        return axios.post(APP_BASE_URL+"/login",data);
    }

    isTokenValid(token){
       
        if(!token) return false;

        const decodedToken=JSON.parse(atob(token.split('.')[1]))  // decode jwt token
        const expirationDate=new Date(decodedToken.exp*1000); // // Convert the 'exp' claim to milliseconds

        return expirationDate>new Date();
    }

    getRole(){
       privateAxios.get("/user/roles").then((res)=>{
         console.log(res.data)   
         return res.data
       }).catch((err)=>{console.log(err.message)
    })
    }

}

export default AuthService=new AuthService();