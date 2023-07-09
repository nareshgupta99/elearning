import { privateAxios } from "./helper";


export  function addCourse(formData){
    return privateAxios.post("/course/creates",formData,{
        headers:{
            'Content-Type': 'multipart/form-data' 
        }
    })
    }