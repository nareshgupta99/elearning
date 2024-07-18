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

export function publishCourse({id},formData){
    return privateAxios.post(`course/${id}/publish`,formData);
}

export function getAllPurchasedCourses(){
    return privateAxios.get(`/purchased/course`);
}
export function getPurchasedCourse(id){
    return privateAxios.get(`course/${id}/purchase`);
}

export function search(query){
    return publicAxios.get(`course/search/${query}`);

}

export function getCourseDetailById(id){
    return publicAxios.get(`course/detail/${id}`)
}

export function imageToUrl(imageBytes){
    const byteCharacters = atob(imageBytes);
    //charCodeAt() effectively converts the character to its corresponding byte number.
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    let image = new Blob([byteArray], { type: "image/jpeg" });
    // let imageUrl = URL.createObjectURL(image);
    return image;
}

export function savePurchasedCourse(data){
 return privateAxios.post("/save/purchased-course",data)   
}