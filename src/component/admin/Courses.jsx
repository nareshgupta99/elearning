import React, { useEffect, useState } from "react";
import { getAllInstructorCourses } from "../../service/CourseService";
import './courses.css';
import { useNavigate } from "react-router";

export default function Courses() {

  const [data, setData] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    getAllInstructorCourses()
      .then((res) => {
        let data = res.data;
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
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="" >
      {data.map((d, index) => (
       
         <div
            key={index}
            className="border d-flex gap-3 border-dark m-2 w-75 course-card"
            style={{ height: "148px" }}
          >
            <img alt="image" src={d.imageBytes} width={"110px"} />
            <p className="course-title-overlay ">{d.title} </p>
            <div>
              <button onClick={()=>navigate(`/instructor/curriculum/${d.courseId}`)}>edit</button>
              <button>delete</button>
            </div>
          </div>
      ))}
    </div>
  );
}
