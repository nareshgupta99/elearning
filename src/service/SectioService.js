import axios from "axios";
const APP_BASE_URL="http://localhost:8181/api/section";


class SectionService{

    saveSection(data){
        console.log(data)
       return axios.post(APP_BASE_URL+"/create",data);
    }

    deleteSection(id){
        axios.delete(`${APP_BASE_URL}/delete`);
    }


}

export default SectionService=new SectionService();