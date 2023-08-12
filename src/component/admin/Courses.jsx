import React, { useEffect, useState } from "react";
import { deleteCourse, getAllInstructorCourses } from "../../service/CourseService";
import './courses.css';
import { useNavigate } from "react-router";
import {toast} from 'react-toastify'
import { Link } from "react-router-dom";

export default function Courses() {

  const [data, setData] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    getAllInstructorCourses()
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



  function handleDeleteCourse(event,courseId){
    event.preventDefault();
    deleteCourse(courseId).then((res)=>{
      toast.success("Deleted ", {
        position: toast.POSITION.TOP_RIGHT
      });
    
      let updateCourse=data.filter((course)=>courseId!==course.courseId);
      setData(updateCourse)

    }).catch((err)=>{
      console.log(err.message)
    })
  }

  return (
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
              <span> /</span>
              <Link onClick={(event)=>handleDeleteCourse(event,d.courseId)}> Delete</Link>
            </div>
              </div>
            
          </div>
      ))}
    </div>
  );
}
