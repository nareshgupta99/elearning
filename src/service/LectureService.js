import { privateAxios } from "./helper"

export default function saveLecture(sectionId,formData,){
   return privateAxios.post(`/lecture/create/section/${sectionId}`,formData,{
    headers:{
        'Content-Type': 'multipart/form-data' 
    }
   });
}
