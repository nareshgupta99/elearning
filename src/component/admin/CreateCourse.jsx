import React from "react";
import "../admin/create-course.css";
import initialImage from "../../images/image.jpg";
import { useState,useRef,useEffect } from "react";
import { privateAxios } from "../../service/helper";
import { addCourse } from "../../service/CourseService";



function CreateCourse() {
  const [course, setCourse] = useState({
    courseName: "",
    courseDescription: "",
    language: "",
    level: "",
    category: "",
  });

  const [image,setImage]=useState(initialImage)
  const [languages,setLanguages]=useState(["English (US)","English (UK)","HINDI","HINGLISH"])
  const[categories,setCategories]=useState(["Development","Business","Finance & Accounting","IT & Software","Design"])
  function handleData(e) {
    console.log(course);
    let name = e.target.name;
    let value = e.target.value;
    setCourse({ ...course, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addCourse(course).then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log(err.message)
    })
   
 	}
	  function handleImage(e){
      let previous; 
      // setCourse({...course,[e.target.name]:URL.createObjectURL(e.target.files[0])})
      
		setImage((pre)=>{
      return URL.createObjectURL(e.target.files[0])
    });
    
    
    
   
	  }
  return (
    <div className="  course-container d-flex flex-column justify-content-center ">
      <div className=" container course p-3" style={{ height: "100%" }}>
        <h3 className="fw-bolder">Course landing page</h3>
        <hr />
        <p className="mt-5">
          Your course landing page is crucial to your success on Udemy. If itâs
          done right, it can also help you gain visibility in search engines
          like Google. As you complete this section, think about creating a
          compelling Course Landing Page that demonstrates why someone would
          want to enroll in your course. Learn more about creating your course
          landing page and course title standards.
        </p>
        {/* <form
          method="post"
          action="create-course"
          enctype="multipart/form-data"
        >*/}
          <div> 
            <h4 className="fs-5 fw-bold">Course title</h4>
            <div className="d-flex course-subcontainer align-items-center">
              <input
                type="text"
                placeholder="insert your course title "
                name="courseName"
                onChange={handleData}
                value={course.courseName}
                className="input"
                required
              />
              <p className="pe-2" style={{ color: "grey" }} id="title-range">
                60
              </p>
            </div>
            <p className="info">
              Your title should be a mix of attention-grabbing, informative, and
              optimized for search
            </p>
          </div>

          <div className="text-editor">
            <h4 className="fs-5 fw-bold">Course Description</h4>
            <section className="mx-auto mt-4">
              <div className="row mt-1">
                <div className="col">
                  <textarea
                    id="textarea1"
                    placeholder="insert your course description."
                    name="courseDescription"
                    value={course.courseDescription}
                    onChange={handleData}
                  ></textarea>
                </div>
              </div>
            </section>
          </div>
          <div className="d-flex gap-4 mt-5">
            <h4 className="fs-5 fw-bold">Basic info</h4>
            <select
              name="language"
              className="form-select form-select-lg mb-3 w-25 border-black border-1"
              onChange={handleData}
              value={course.language}
              aria-label=".form-select-lg example"
            >
              <option defaultChecked>---Select Language---</option>
              {languages.map((lang,index)=>(
                
                <option key={index} aria-readonly={true}  value={lang}>{lang}</option>
              ))

              }
              
            </select>{" "}
            <select
              name="level"
              onChange={handleData}
              className="form-select form-select-lg mb-3 w-25 border-black border-1"
              aria-label=".form-select-lg example"
            >
              <option defaultChecked  >---Select Level---</option>
              <option value="Beginner">Beginner Level</option>
              <option value="Intermediate">Intermediate Level</option>
              <option value="Expert">Expert Level</option>
              <option value="All">All Levels</option>
            </select>{" "}
            <select
              name="category"
              onChange={handleData}
              className="form-select form-select-lg mb-3 w-25 border-black border-1"
              aria-label=".form-select-lg example"
            >
              <option defaultChecked >---Select Category---</option>
              {categories.map((cat,index)=>(
                <option key={index} aria-readonly={true} value={cat}>{cat}</option>

              ))
                
              }
            </select>
          </div>

          <div className="mt-4">
            <h4 className="fs-5 fw-bold">Course image</h4>
            <div className="d-flex">
              <div>
                <img
                  src={image}
                  width="480px"
                  height="270px"
                  id="renderImage"
                  alt={""}
                />
              </div>

              <div className="p-2">
                <p>
                  Upload your course image here. It must meet our course image
                  quality standards to be accepted. Important guidelines:
                  750x422 pixels; .jpg, .jpeg,.gif, or .png. no text on the
                  image.
                </p>
                <div>
                  <input
                    className="form-control form-control-lg"
                    id="formFileLg"
                    type="file"
                    name="courseImage"
                    onChange={handleImage}
                  />
                </div>
              </div>
            </div>
          </div>

          <input
            type="submit"
            value="Create Course"
            className="mt-2"
            onClick={handleSubmit}
          />
        {/* </form> */}
      </div>
    </div>
  );
}

export default CreateCourse;
