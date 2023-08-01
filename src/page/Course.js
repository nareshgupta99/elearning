import { useState } from "react";
import CourseContent from "../component/CourseContent";
import Player from "../component/Player";

const Course = () => {

    const [video,setVideo]=useState("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")

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
