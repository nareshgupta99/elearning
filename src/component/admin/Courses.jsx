import React, { useEffect, useState } from "react";
import { getAllInstructorCourses } from "../../service/CourseService";

export default function Courses() {
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

  const [data, setData] = useState([]);

  useEffect(() => {
    getAllInstructorCourses()
      .then((res) => {
        let data=res.data;
        data.map((d)=>{
          //decoding a String of data which has been encoded by atob() or decoding  base64String
          const byteCharacters = atob(d.imageBytes);
          const byteNumbers=new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          let image = new Blob([byteArray], { type: "image/jpeg" });
          // creating a image url
          let imageUrl = URL.createObjectURL(image);
          d.imageBytes = imageUrl; 
        })
        setData(data);
      })
      .catch((err) => console.log(err));
  },[]);

  return (
    <>
      {data.map((d, index) => (
        <div
          key={index}
          className="border border-dark m-2   w-75 course-card"
          style={{ height: "140px" }}
        >
          
          <img alt="image" src={d.imageBytes} width={"110px"}/>
          <p className="course-title-overlay "> </p>
          <div>
            <button>edit</button>
            <button>delete</button>
          </div>
        </div>
      ))}
    </>
  );
}
