import { privateAxios } from "./helper"

export  function saveLecture(sectionId,formData,){
   return privateAxios.post(`/lecture/create/section/${sectionId}`,formData,{
    headers:{
        'Content-Type': 'multipart/form-data' 
    }
   })
}

export function deleteLecture(lectureId){
    return privateAxios.delete(`lecture/${lectureId}/delete`);
}