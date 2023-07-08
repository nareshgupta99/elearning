import { privateAxios } from "./helper";


export const getToken=()=>{
let token =localStorage.getItem("token");
console.log(token)
return token;
}

export const getLoginUser=(token)=>{
    if(getToken()){
        privateAxios.get("/api/user").then((resp)=>{
            console.log(resp.data)
        }).catch((error)=>{
            console.log(error);
        })
    }else{
        console.log("false")
        return false;
    }
}