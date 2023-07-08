import axios from "axios";

const setAuthHeader=(token )=>{
    if(token){
        
    }else{
        delete axios.defaults.headers.Authorization;
    }
}

export default setAuthHeader;