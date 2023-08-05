import { useEffect, useState } from "react";
import CourseContent from "../component/CourseContent";
import Player from "../component/Player";
import { useParams } from "react-router";
import { getPurchasedCourse } from "../service/CourseService";

const Course = () => {

    const [video,setVideo]=useState("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
   const {id}= useParams("id");
 
   useEffect(()=>{
    getPurchasedCourse(id).then((resp)=>{
  
        console.log(resp.data)
    }).catch((err)=>{
      console.log(err.message)
    })
   })

  return (
    <div className=" w-100">
      <div className="d-flex" style={{marginLeft: "10px",display: "flex"}}>
        <Player video={video}/>

        <CourseContent setVideo={setVideo}/>
      </div>
    </div>
  );
};

export default Course;
