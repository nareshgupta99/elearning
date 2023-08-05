import React, { useEffect, useState } from "react";
import "./hero.css";
import { Link } from "react-router-dom";
import { Popover } from "antd";
import { getAllPublicCourse } from "../service/CourseService";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action/cartActions";

function Hero() {
  const [courses, setCourses] = useState([]);
  const dispatch=useDispatch();
  
  useEffect(() => {
    
 getAllPublicCourse()
      .then((res) => {
        let data = res.data;
        data.map((d) => {
          //decoding a String of data which has been encoded by btoa() or decoding  base64String
          const byteCharacters = atob(d.imageBytes);
          //charCodeAt() effectively converts the character to its corresponding byte number.
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          let image = new Blob([byteArray], { type: "image/jpeg" });
          // creating a image url
          let imageUrl = URL.createObjectURL(image);
          d.imageBytes = imageUrl;
        });
        setCourses(data);

      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  

  const content = (course)=>(
    <div className="card m-2 " id="" style={{ width: "20rem" }}>
      <div className="card-body">
        <h5 className="card-title">
        {course.title}
         {/*  [NEW] Spring Boot 3, Spring 6 & Hibernate for Beginners */}
        </h5>
        <span className="time fs-11 txt-grey">{course.duration}</span>
        <span className="level fs-11 txt-grey">{course.level}</span>
        <p className="about">
          {/* Spring Boot 3: Learn Spring 6, Spring REST API, Spring MVC, Spring
          Security, Thymeleaf, JPA & Hibernate */}
          {course.about}
        </p>
        <p className="key-point">
          NEW FOR 2023: SPRING BOOT 3, SPRING 6 and IntelliJ (free version) You
          will TYPE IN EVERY LINE of code with me in the videos. I EXPLAIN every
          line of code to help you learn! LEARN key Spring Boot 3 features:
          Core, Annotations, Java Config, Spring MVC, Hibernate/JPA and Maven
        </p>
        <button className="card-button btn" onClick={()=>{dispatch(addToCart(course))}}>Add to cart</button>
      </div>
    </div>
  );


  return (
    <div>
      <div className="d-flex  ">
        
        {courses.map((course, index) => (
          <Popover content={content(course)} placement="right" key={index}>
            <div
              className="card m-2 course-popover "
              style={{ width: "18rem" }}
              
            >
              <Link to={`course`}>
                <img src={course.imageBytes} className="card-img-top" alt="..." />
              </Link>

              <div className="card-body d-flex flex-column">
                <span
                  style={{ fontSize: "16px" }}
                  className="fw-bold"
                  id="card-heading"
                >
                {course.courseSubtitle}
                </span>
                <span id="instructor-name" className="txt-grey fs-11">
                  {" "}
                  Naresh
                </span>
                <section className="d-flex">
                  <p id="price">&#8377;{course.discountedPrice}</p>
                  <p id="original-price" className="ms-4 txt-grey">
                    <del>&#8377;{course.originalPrice}</del>
                  </p>
                </section>
              </div>
            </div>
          </Popover>
          
        ))}
      </div>
    </div>
  );
}

export default Hero;
