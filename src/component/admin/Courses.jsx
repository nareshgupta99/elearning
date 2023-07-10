import React, {  useEffect, useState } from "react";


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

  const [data,setData]=useState([1]);

useEffect=(()=>{

},[])


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
