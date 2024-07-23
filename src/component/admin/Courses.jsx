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
        setData(data);
        console.log(data)
      })
      .catch((err) => console.log(err.message));
  }, []);



  function handleDeleteCourse(event,courseId){
    event.preventDefault();
    deleteCourse(courseId).then((res)=>{
      toast.success(res.data, {
        position: toast.POSITION.TOP_RIGHT
      });
    
      let updateCourse=data.filter((course)=>courseId!==course.courseId);
      setData(updateCourse)

    }).catch((err)=>{
      let message=err.response.data.message
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT
      });
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
            <img alt="image" src={d.image.url} width={"110px"} />
            <div className="w-100">
            <p className="course-title-overlay text-center">{d.title} </p>
           
           <div className="text-center edit-delete-section">
              <Link to={`/instructor/curriculum/${d.courseId}`}>Edit</Link>
              {!d.publish?<>
              <span> /</span>
              <Link onClick={(event)=>handleDeleteCourse(event,d.courseId)}> Delete</Link>
              </>
            :""}
            </div>
              </div>
            
          </div>
      ))}
    </div>
  );
}
