import React, { useState } from "react";
import "../admin/curriculum.css";

function Curriculum() {
  const [section, setSection] = useState(null);
  const[lecture,setLecture]=useState([]);

  const sectionButton = () => {
    console.log("hello");
    let object = {
      title: "",
      objective: "",
    };
    setSection(object);
  };

  function handleAddSection() {
    let object={
      title:"",
      objective:""
    }
    setLecture([...lecture,object])
    setSection(null)
  }

  function handleDeleteSection(index){
    console.log(index)
  }
  return (
    <div>
      <div class="course-container d-flex flex-column justify-content-center">
        <div class="container course p-3">
          <h3 class="fw-bolder">Curriculum</h3>
          <hr />
          <p class="mt-5">
            Start putting together your course by creating sections, lectures
            and practice activities (quizzes, coding exercises and assignments).
            Use your course outline to structure your content and label your
            sections and lectures clearly. If you’re intending to offer your
            course for free, the total length of video content must be less than
            2 hours.
          </p>

          <form
            class="complte-course-container "
            method="post"
            action="saveCourse"
            enctype="multipart/form-data"
          >
            <input type="submit" value="next" />
          </form>

          <div class="mt-3">
            <i class="fa-regular fa-xmark d-none" id="close"></i>
            {section===null?
            
            <button
              class="p-1 px-2 "
              id="section-button"
              onClick={sectionButton}
            >
              + section
            </button>
            :
            <button
              class="py-1 px-3 "
              id="close-button"
              onClick={() => setSection(null)}
            >
              - close
            </button>
}
          </div>
          {/* Section render on click section */}
          {section !== null ? (
            <div class="mt-3 " id="section-container">
              <div
                class="mt-4 p-2"
                id="section"
                style={{ backgroundColor: "#f7f9fa" }}
              >
                {" "}
                <div class="d-flex justify-content-between ">
                  {" "}
                  <label>New Section:</label>{" "}
                  <input
                    type="button"
                    class=" "
                    value="Add Section"
                    id="add-section"
                    onClick={handleAddSection}
                  />
                </div>
              
                <div class="m-2">
                  <input
                    type="text"
                    required
                    class="w-75"
                    placeholder="Enter a Title"
                    id="title"
                    name="title"
                  />
                </div>{" "}
                <div class="m-2">
                  {" "}
                  What will students be able to do at the end of this section?
                  <input
                    type="text"
                    class="w-75"
                    placeholder="Enter a Learning Objective"
                    required
                    id="section-objective"
                    name="section-objective"
                  />
                  
                </div>{" "}
              </div>
            </div>
          ) : (
            ""
          )}

          
        {/* sections */}
        {lecture.map((lecture,index)=>(

        
      
      <div
        id=""
        class="mt-4  border border-black"
        style={{backgroundColor: "#f7f9fa"}}
      >
        <input
          class="fw-bold ms-3 mt-3 border-0 title-label"
          id=""
          value=""
          name="lecture"
          readonly
        />
        <input
          style={{marginLeft: "21%"}}
          type="button"
          class="mt-1 mb-2 edit"
          value="edit"
          id=""
          onclick="handleEditSection(event)"
        />
        <input
          style={{marginLeft: "1em"}}
          type="button"
          class="mt-1 mb-2 "
          value="delete"
          id=""
          onClick={()=>handleDeleteSection(index)}
        />
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            {" "}
            <h2 class="accordion-header" id="">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse${dynamicId}"
                aria-expanded="false"
                aria-controls=""
              >
                Accordion Item #3{" "}
              </button>{" "}
            </h2>
            <div
              id="flush-collapse${dynamicId}"
              class="accordion-collapse collapse unique"
              aria-labelledby=""
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" id="accordion-body${dynamicId}">
                <input
                  type="button"
                  class="px-2 mx-auto position-relative "
                  style={{left:"90%"}}
                  value="Add Video"
                  id=""
                  onClick="addInputFile(event)"
                />
              </div>{" "}
            </div>
          </div>
        </div>
        
      </div>
      ))}
        </div>



    

      </div>
    </div>
  );
}

export default Curriculum;
