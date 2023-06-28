import React, { useEffect, useState } from "react";
import CourseService from "../service/CourseService";

export default function Course() {
  const overlay = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  };

  useEffect(()=>{
    CourseService.getAllCourseByUserId().then((resp)=>{
      setData(resp.data)
    }).catch((err)=>{
      console.log(err)
    })
  })
  

  const [data,setData]=useState([]);


  return (
   
<>
{data.map((d)=>(



      <div
      class="border border-dark m-2 d-flex w-75 course-card"
      style={{height:"140px"}}
    >
      <img alt="image" src="./images/image.jpg" />
      <p class="course-title-overlay "> </p>
      <div>
        <button onclick="">edit</button>
        <button onclick="">
          delete
        </button>
      </div>
    </div>
    ))}
    </>
  );
}
