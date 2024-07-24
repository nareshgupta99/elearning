import { useEffect, useState } from "react";
import CourseContent from "../component/CourseContent";
import Player from "../component/Player";
import { useParams } from "react-router";
import { getPurchasedCourse } from "../service/CourseService";
import { toast } from "react-toastify";
import { getVideo } from "../service/LectureService";

const Course = () => {

    const [video,setVideo]=useState("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
   const {id}= useParams("id");

 
   const [course,setCourse]=useState(  )
   const [sections,setSections]=useState([]);

   const [videoUrl,setVideoUrl]=useState();

   function playVideo(videoName){
    setVideoUrl(videoName)
    getVideo(videoName).then(response => response.arrayBuffer())
    .then(data => {
      console.log(data);
    }).catch((err)=>{
      console.log(err.message)
    })
  }
  
  
  
   useEffect(()=>{
     getPurchasedCourse(id).then((res)=>{
      let sec=res.data.sectionDto
       setSections(sec);
       setVideoUrl(sec[0].lectureDto[0].videoName)
     }).catch((err)=>{
       console.log(err.message)
       toast.error("Something went wrong", {
        position: toast.POSITION.TOP_RIGHT,
      });
     })
     
   },[])
 
 

  return (
    <div className=" w-100 d-flex">
      <div className=" w-60" >
        <Player videoUrl={videoUrl} video={video} />
      </div>
      <div className="w-50">
        <CourseContent playVideo={playVideo} sections={sections} />
      </div>
    </div>
  );
};

export default Course;
