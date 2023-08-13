import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCourseDetailById } from "../../service/CourseService";
import { GiCheckMark } from "react-icons/gi";
import { auto } from "@popperjs/core";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/action/cartActions";

function CourseDetail() {
  let { id } = useParams("id");
  const [course, setCourse] = useState({
    sectionDto:[]
  });

  const dispatch=useDispatch();
  let cart=useSelector((state)=>state.cart)

  useEffect(() => {
    getCourseDetailById(id)
      .then((res) => {
        console.log(res.data);
        setCourse(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="">
      <div className="d-flex">
      <div className="border w-50 m-2 mt-4 ">
        <h5 className="text-center "> What will You learn</h5>

        {course.sectionDto.map((section)=>(

          <div className="d-flex align-item-center  m-2 ">
            <GiCheckMark className="me-2"/>
            <p>{section.objective}</p>
          </div>
        ))
        }
      </div>

      <div className="w-50">
        <div className="accordion-container px-3 w-100">
          <div
            id="accordianWrapper"
            className="mt-4  border border-black ms-1 me-1"
            style={{ backgroundColor: "white" }}
          >
            <h4
              style={{ borderBottom: "1px solid grey", height: "50px" }}
              className="p-2"
            >
              Course Content
            </h4>

            {course.sectionDto.map((section, index) => (
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
                key={index}
              >
                <div className="accordion-item">
                  {" "}
                  <h2 className="accordion-header" id="">
                    <button
                      className="accordion-button collapsed "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse${index}`}
                      aria-expanded="false"
                      aria-controls=""
                      style={{ backgroundColor: "#f7f9fa" }}
                    >
                      <div className="d-block">
                        <div style={{ fontWeight: "800" }}>
                          Section {index}:{section.sectionName}
                        </div>
                        <div style={{ fontSize: "12px" }} className="">
                          0/0 | 12hr31min{" "}
                        </div>
                      </div>
                    </button>{" "}
                  </h2>
                  <div
                    id={`flush-collapse${index}`}
                    className="accordion-collapse collapse unique"
                    aria-labelledby=""
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className="accordion-body bg-white"
                      id={`accordion-body${index}`}
                    >
                      {section.lectureDto.map((lecture) => (
                        <p style={{ cursor: "pointer" }}>{lecture.name}</p>
                      ))}
                    </div>{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
</div>
      {/** About course */}
      <div className="  m-2 mt-4 d-flex  ">
        <div className=" border w-50">

        <h5 className="text-center "> About the course</h5>
          <p>{course.about}</p>
          <p> instructor: {course.creater}</p>
          <p>Original Price:<del>{course.originalPrice}</del></p>
          <p>Original Price:{course.discountedPrice}</p>
        </div>

          <div className="border w-50 m-3 ">
            <div className="text-center">
            {!cart.courses.some((c) => c.courseId == course.courseId)?
           
            <button className="btn btn-success mt-2  "  onClick={()=>dispatch(addToCart(course))} style={{width:"86%"}}> Add To Cart</button>:
            <button className="btn btn-danger mt-2  " onClick={()=>dispatch(removeFromCart(course.courseId))} style={{width:"86%"}}> Remove From Cart</button>
           
            }
            <button className="btn btn-success mt-2  d-none"  style={{width:"86%"}}> Start Learning</button>
            </div>
             
          </div>
        
      </div>

    </div>
  );
}

export default CourseDetail;
