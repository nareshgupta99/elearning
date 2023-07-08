import React, { useState } from "react";
import "../admin/curriculum.css";
import SectioService from "../../service/SectioService";

function Curriculum() {
  const [section, setSection] = useState(null);
  const[sectionData,setSectionData]=useState({
  sectionName:""    
  })
  const [sections,setSections]=useState([]);

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
    SectioService.saveSection(sectionData).then((resp)=>{
      console.log(resp.data)
      setSections([...sections,resp.data])
      setSection(null)
    }).catch((error)=>{
      console.log(error)
    })
  }

  function handleDeleteSection(index){
    console.log(index)
    console.log(sections[index])
  }
  return (
    <div>
      <div className="course-container d-flex flex-column justify-content-center">
        <div className="container course p-3">
          <h3 className="fw-bolder">Curriculum</h3>
          <hr />
          <p className="mt-5">
            Start putting together your course by creating sections, lectures
            and practice activities (quizzes, coding exercises and assignments).
            Use your course outline to structure your content and label your
            sections and lectures clearly. If you’re intending to offer your
            course for free, the total length of video content must be less than
            2 hours.
          </p>

          <form
            className="complte-course-container "
            method="post"
            action="saveCourse"
            enctype="multipart/form-data"
          >
            <input type="submit" value="next" />
          </form>

          <div className="mt-3">
            <i className="fa-regular fa-xmark d-none" id="close"></i>
            {section===null?
            
            <button
              className="p-1 px-2 "
              id="section-button"
              onClick={sectionButton}
            >
              + section
            </button>
            :
            <button
              className="py-1 px-3 "
              id="close-button"
              onClick={() => setSection(null)}
            >
              - close
            </button>
}
          </div>
          {/* Section render on click section */}
          {section !== null ? (
            <div className="mt-3 " id="section-container">
              <div
                className="mt-4 p-2"
                id="section"
                style={{ backgroundColor: "#f7f9fa" }}
              >
                {" "}
                <div className="d-flex justify-content-between ">
                  {" "}
                  <label>New Section:</label>{" "}
                  <input
                    type="button"
                    className=" "
                    value="Add Section"
                    id="add-section"
                    onClick={handleAddSection}
                    
                  />
                </div>
              
                <div className="m-2">
                  <input
                    type="text"
                    required
                    className="w-75"
                    placeholder="Enter a Title"
                    id="title"
                    name="sectionName"
                    onChange={(e)=>{
                      setSectionData({[e.target.name]:e.target.value});
                    }}
                  />
                </div>{" "}
                <div className="m-2">
                  {" "}
                  What will students be able to do at the end of this section?
                  <input
                    type="text"
                    className="w-75"
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
        {sections.map((s,index)=>(

        
      
      <div
        id=""
        className="mt-4  border border-black"
        style={{backgroundColor: "#f7f9fa"}}
      >
        <input
          className="fw-bold ms-3 mt-3 border-0 title-label"
          id=""
          value={`${s.sectionName}`}
          name="title"
          readonly
        />
        <input
          style={{marginLeft: "21%"}}
          type="button"
          className="mt-1 mb-2 edit"
          value="edit"
          id=""
          onclick="handleEditSection(event)"
        />
        <input
          style={{marginLeft: "1em"}}
          type="button"
          className="mt-1 mb-2 "
          value="delete"
          id=""
          onClick={()=>handleDeleteSection(index)}
        />
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            {" "}
            <h2 className="accordion-header" id="">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse"
                aria-expanded="false"
                aria-controls=""
              >
                Accordion Item #3{" "}
              </button>{" "}
            </h2>
            <div
              id="flush-collapse"
              className="accordion-collapse collapse unique"
              aria-labelledby=""
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" id="accordion-body">
                <input
                  type="button"
                  className="px-2 mx-auto position-relative "
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
