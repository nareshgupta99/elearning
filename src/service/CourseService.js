import axios from "axios";
const APP_BASE_URL="http://localhost:8181/api/course";

class CourseService{

    createCourse(course){
       return axios.post(APP_BASE_URL+"/create",course);
    }

    getAllCourse(){
        return axios.get(APP_BASE_URL);
    }

    getCourseById(id){
        return axios.get(APP_BASE_URL);
    }

    deleteCourse(id){
        return axios.delete(APP_BASE_URL);
    }
    getAllCourseByUserId(id){
        return axios.get(APP_BASE_URL+"/instructor",id)
    }


}

export default  CourseService= new CourseService();