import { privateAxios } from "./helper";

export  function addCourse(course){
return privateAxios.post("/course/create",course)
}