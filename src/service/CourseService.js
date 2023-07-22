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

export function getAllPublicCourse(){
    return publicAxios.get("/course/courses");
}

export function getAllInstructorCourses(){
   return privateAxios.get("/course/instructor");    
}

export function getInstructorCourse({id}){
    return privateAxios.get(`/course/${id}/instructor`);
}

export function deleteCourse(id){
    return privateAxios.delete(`/course/${id}/delete`)
}