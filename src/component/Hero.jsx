import React, { useState } from "react";
import "./hero.css";
import image from '../images/image.jpg';
import { Link } from "react-router-dom";

function Hero() {
  const [courses, setCourses] = useState([1, 2, 2, 3, 4, 4, 45, 5, 5]);

  return (
    <div>
      <div class="card m-2 d-none" id="popover" style={{ width: "20rem" }}>
        <div class="card-body">
          <h5 class="card-title">
            [NEW] Spring Boot 3, Spring 6 & Hibernate for Beginners
          </h5>
          <span class="time fs-11 txt-grey">44hours</span>
          <span class="level fs-11 txt-grey">Beginner</span>
          <p class="about">
            Spring Boot 3: Learn Spring 6, Spring REST API, Spring MVC, Spring
            Security, Thymeleaf, JPA & Hibernate
          </p>
          <p class="key-point">
            NEW FOR 2023: SPRING BOOT 3, SPRING 6 and IntelliJ (free version)
            You will TYPE IN EVERY LINE of code with me in the videos. I EXPLAIN
            every line of code to help you learn! LEARN key Spring Boot 3
            features: Core, Annotations, Java Config, Spring MVC, Hibernate/JPA
            and Maven
          </p>

          <button class="card-button btn">Add to cart</button>
        </div>
      </div>

      <div class="d-flex flex-wrap justify-content-center">
        {courses.map((c) => (
          <div class="card m-2" style={{ width: "18rem" }} id="course-popover ">
            <Link to={`course`}>
            <img src={image} class="card-img-top" alt="..." />
            </Link>
            
            <div class="card-body d-flex flex-column">
              <span
                style={{ fontSize: "16px" }}
                class="fw-bold"
                id="card-heading"
              >
                Jdbc Servlet
              </span>
              <span id="instructor-name" class="txt-grey fs-11">
                {" "}
                Naresh
              </span>
              <section class="d-flex">
                <p id="price">&#8377;389</p>
                <p id="original-price" class="ms-4 txt-grey">
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
