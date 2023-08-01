import React, { useEffect, useState } from 'react'
import './course-content.css';


function CourseContent({setVideo}) {

  useEffect(()=>{
    
  })

  

  const [courses,setCourses]=useState([1,1,1,1,1,1,1,1,1,1])
  return (
    <div className='accordion-container px-3'>
      
      <div
        id="accordianWrapper"
        class="mt-4  border border-black ms-1 me-1"
        style={{backgroundColor: "white"}}
      >
          <h4 style={{borderBottom: "1px solid grey",height:"50px"}} className='p-2'>Course Content</h4>

        {courses.map((course,index)=>(

        
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            {" "}
            <h2 class="accordion-header" id="">
              <button
                class="accordion-button collapsed "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse${index}`}
                aria-expanded="false"
                aria-controls=""
                style={{backgroundColor: "#f7f9fa"}}
              >
                <div className='d-block'>

                <div style={{fontWeight:"800"}}>Section 1:Core Java</div>
                <div style={{fontSize:"12px"}} className=''>0/0 | 12hr31min </div>
                </div>
              </button>{" "}
            </h2>
            <div
              id={`flush-collapse${index}`}
              class="accordion-collapse collapse unique"
              aria-labelledby=""
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body bg-white" id={`accordion-body${index}`}>
                <input
                  type="button"
                  class="px-2 mx-auto position-relative "
                  style={{left:"90%"}}
                  value="Add Video"
                  id=""
                                  />
              </div>{" "}
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default CourseContent