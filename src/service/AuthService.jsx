import axios from "axios";

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

}

export default AuthService=new AuthService();