import axios from "axios";
import { privateAxios } from "./helper";


class SectionService{

    saveSection(data,{id}){
       return privateAxios.post(`/section/create/${id}`,data);
    }

    deleteSection(id){
        return privateAxios.delete(`/section/delete`);
    }

    saveFile(data){
        return privateAxios.post("",data);
    }


}

export default SectionService=new SectionService();