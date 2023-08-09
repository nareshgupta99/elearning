import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { getCourseDetailById } from '../../service/CourseService';

function CourseDetail() {

    let {id}=useParams("id");

    useEffect(()=>{
        getCourseDetailById(id).then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err.message)
        })

    },[])

  return (

    <></>
    // <div>
    //         <div className="accordion-container px-3 w-100">
    //   <div
    //     id="accordianWrapper"
    //     className="mt-4  border border-black ms-1 me-1"
    //     style={{ backgroundColor: "white" }}
    //   >
    //     <h4
    //       style={{ borderBottom: "1px solid grey", height: "50px" }}
    //       className="p-2"
    //     >
    //       Course Content
    //     </h4>

    //     {sections.map((section, index) => (
    //       <div
            
    //         className="accordion accordion-flush"
    //         id="accordionFlushExample"
    //         key={index}
    //       >
    //         <div className="accordion-item">
    //           {" "}
    //           <h2 className="accordion-header" id="">
    //             <button
    //               className="accordion-button collapsed "
    //               type="button"
    //               data-bs-toggle="collapse"
    //               data-bs-target={`#flush-collapse${index}`}
    //               aria-expanded="false"
    //               aria-controls=""
    //               style={{ backgroundColor: "#f7f9fa" }}
    //             >
    //               <div className="d-block">
    //                 <div style={{ fontWeight: "800" }}>
    //                   Section {index}:{section.sectionName}
    //                 </div>
    //                 <div style={{ fontSize: "12px" }} className="">
    //                   0/0 | 12hr31min{" "}
    //                 </div>
    //               </div>
    //             </button>{" "}
    //           </h2>
    //           <div
    //             id={`flush-collapse${index}`}
    //             className="accordion-collapse collapse unique"
    //             aria-labelledby=""
    //             data-bs-parent="#accordionFlushExample"
    //           >
    //             <div
    //               className="accordion-body bg-white"
    //               id={`accordion-body${index}`}
    //             >
    //               {section.lectureDto.map((lecture) => (
    //                 <p  style={{cursor:"pointer"}}>{lecture.name}</p>
    //               ))}
    //             </div>{" "}
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    // </div>
  )
}

export default CourseDetail