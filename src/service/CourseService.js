import { privateAxios, publicAxios } from "./helper";


export  function addCourse(formData){
    return privateAxios.post("/course/creates",formData,{
        headers:{
            'Content-Type': 'multipart/form-data' 
        }
    })
}

export function getLoginUserCourse(){
    return privateAxios.get();
}

export function getAllCourse(){
    return publicAxios.get("/course/courses");
}

