import React, { useState } from "react";
import "./hero.css";
import image from '../images/image.jpg';
import { Link } from "react-router-dom";

function Hero() {
  const [courses, setCourses] = useState([1, 2, 2, 3, 4, 4, 45, 5, 5]);

  return (
    <div>
      <div className="card m-2 d-none" id="popover" style={{ width: "20rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            [NEW] Spring Boot 3, Spring 6 & Hibernate for Beginners
          </h5>
          <span className="time fs-11 txt-grey">44hours</span>
          <span className="level fs-11 txt-grey">Beginner</span>
          <p className="about">
            Spring Boot 3: Learn Spring 6, Spring REST API, Spring MVC, Spring
            Security, Thymeleaf, JPA & Hibernate
          </p>
          <p className="key-point">
            NEW FOR 2023: SPRING BOOT 3, SPRING 6 and IntelliJ (free version)
            You will TYPE IN EVERY LINE of code with me in the videos. I EXPLAIN
            every line of code to help you learn! LEARN key Spring Boot 3
            features: Core, Annotations, Java Config, Spring MVC, Hibernate/JPA
            and Maven
          </p>

          <button className="card-button btn">Add to cart</button>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        {courses.map((c,index) => (
          <div className="card m-2" style={{ width: "18rem" }} id="course-popover " key={index}>
            <Link to={`course`}>
            <img src={image} className="card-img-top" alt="..." />
            </Link>
            
            <div className="card-body d-flex flex-column">
              <span
                style={{ fontSize: "16px" }}
                className="fw-bold"
                id="card-heading"
              >
                Jdbc Servlet
              </span>
              <span id="instructor-name" className="txt-grey fs-11">
                {" "}
                Naresh
              </span>
              <section className="d-flex">
                <p id="price">&#8377;389</p>
                <p id="original-price" className="ms-4 txt-grey">
                  <del>&#8377;3000</del>
                </p>
              </section>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
