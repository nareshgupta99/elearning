import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAllInstructorCourses, getAllPurchasedCourses } from "../service/CourseService";
import { Link } from "react-router-dom";

function MyCourses(){

    const [data, setData] = useState([]);
    
    const navigate=useNavigate();
  
    useEffect(() => {
      getAllPurchasedCourses()
        .then((res) => {
          let data = res.data;
          console.log(data)
          data.map((d) => {
            //decoding a String of data which has been encoded by atob() or decoding  base64String
            const byteCharacters = atob(d.imageBytes);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            let image = new Blob([byteArray], { type: "image/jpeg" });
            // creating a image url
            let imageUrl = URL.createObjectURL(image);
            d.imageBytes = imageUrl;
          });
          setData(data);
          console.log(data)
        })
        .catch((err) => console.log(err.message));
    }, []);
  
    return(
<div>
        <h3 style={{marginLeft:"50px"}}> Purchased Courses</h3>
        <div className="" >
      {data.map((d, index) => (
       
         <div
            key={index}
            className="border d-flex gap-3 border-dark m-2 w-75 course-card"
            style={{ height: "148px" }}
          
          >
            <img alt="image" src={d.imageBytes} width={"110px"} />
            <div className="w-100">
            <p className="course-title-overlay text-center">{d.title} </p>
           
           <div className="text-center edit-delete-section">
              <Link to={`/instructor/curriculum/${d.courseId}`}>Edit</Link>
              {!d.publish?<>
              <span> /</span>
              {/* <Link onClick={(event)=>handleDeleteCourse(event,d.courseId)}> Delete</Link> */}
              </>
            :""}
            </div>
              </div>
            
          </div>
      ))}
    </div>    

</div>
    )

}
 export default MyCourses;