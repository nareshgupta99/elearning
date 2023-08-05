import React, { useEffect } from "react";
import "../admin/create-course.css";
import { toast } from "react-toastify";
import { useState } from "react";
import { publishCourse } from "../../service/CourseService";
import { useNavigate, useParams } from "react-router";

function Review() {

    const id=useParams("id");
    const navigate=useNavigate()
    

    const [data,setData]=useState({
        duration:"",
        originalPrice:null,
        discountedPrice:null,
        timeUnit:""
    })

  useEffect(() => {});

  function handleData(event) {
   const name= event.target.name;
   setData({...data,[name]:event.target.value})
   
  }

  function handleSubmit(event){
    event.preventDefault();
    const formData=new FormData();
    formData.append("duration",`${data.duration} ${data.timeUnit}`);
    formData.append("originalPrice",data.originalPrice);
    formData.append("discountedPrice",data.discountedPrice);

  
    
    publishCourse(id,formData).then((res)=>{
        let resource=res.data.resource;
        let message=res.data.message;
        toast.success(`${resource} ${message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/instructor/courses");

    }).catch((err)=>{
        console.log(err.message)
    })
  }

  return (
    <div className="  course-container d-flex flex-column justify-content-center ">
      <form  method="post"
          onSubmit={handleSubmit}>
        <div className=" container course p-3" style={{ height: "100%" }}>
          <div className="">
            <h4 className="fs-5 fw-bold">Course Time</h4>
            <div className=" d-flex gap-2">
              <div className=" course-subcontainer align-items-center">
                <input
                  type="text"   
                  placeholder="Total course time  "
                  name="duration"
                  value={data.duration}
                  onChange={handleData}
                  className="input"
                  style={{ height: "27px" }}
                />
              </div>
              <select className="px-1" onChange={handleData} name="timeUnit">
                <option defaultChecked>select</option>
                <option >hours</option>
                <option >minutes</option>
              </select>
            </div>
          </div>

          <div className="text-editor">
            <h4 className="fs-5 fw-bold">Original Price</h4>
            {/* <section className="mx-auto mt-4"> */}
            <div className="">
              <div className=" d-flex gap-2">
                <div className=" course-subcontainer align-items-center">
                  <input
                    type="text"
                    placeholder="Enter price "
                    name="originalPrice"
                    value={data.originalPrice}
                    onChange={handleData}
                    className="input"
                    style={{ height: "27px" }}
                  />
                </div>
              </div>
            </div>
            {/* </section> */}
          </div>


          <div className="text-editor">
            <h4 className="fs-5 fw-bold">Discounted Price</h4>
            {/* <section className="mx-auto mt-4"> */}
            <div className="">
              <div className=" d-flex gap-2">
                <div className=" course-subcontainer align-items-center">
                  <input
                    type="text"
                    placeholder="Enter price "
                    name="discountedPrice"
                    onChange={handleData}
                    value={data.discountedPrice}
                    className="input"
                    style={{ height: "27px" }}
                  />
                </div>
              </div>
            </div>
            {/* </section> */}
          </div>


          <input type="submit" value="Publish " className="p-1 mt-3 btn btn-success" />
        </div>
      </form>
    </div>
  );
}

export default Review;
