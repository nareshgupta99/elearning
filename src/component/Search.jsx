import React, { useEffect, useState } from "react";
import "./cart.css";
import { useParams } from "react-router";
import { imageToUrl, search } from "../service/CourseService";
import { Link } from "react-router-dom";

function Search() {
 
  const {q}=useParams("q");
  const [query,setQuery]=useState();
  const [courses, setCourses] = useState([]);
 
  useEffect(()=>{
    setQuery(q);
  })

  useEffect(() => {
    console.log(q)  
    search(q).then((res)=>{
      let c=res.data
      setCourses(c)
    }).catch((err)=>{
      console.log(err.message)
    })


  }, [query]);

  
  
  return (
    <div>
      <h1 className="m-3"> {`${courses.length} results "${q}"`}</h1>
      <div
        className=" cart-container mt-5 gap-5"
        style={{ width: "100%" }}
      >
        <div className="ms-5">
          {courses.map((item, index) => (
            <div key={index} >
              <Link to="" style={{textDecoration:"none",color:"black"}}>
              <div className="d-flex gap-5 ms-2 ">
                <img src={ URL.createObjectURL(imageToUrl(item.imageBytes))} width="120" height="68" />
                <div className="heading">
                  <p style={{ fontWeight: " 700" }}>
                    JSP, Servlets and JDBC for Beginners: Build a Database App
                  </p>
                  <p>By Chad Darby</p>
                  <div>
                    <span>{item.duration}</span>
                    <span>118 lectures</span>
                    <span>{item.level}</span>
                  </div>
                </div>
                <div>
                  <p>&#8377;{item.discountedPrice}</p>
                  <p>
                    <del>{item.originalPrice}</del>
                  </p>
                </div>
              </div>
              </Link>
              <hr />
            </div>
          ))}

          {/*** */}
        </div>

      
      </div>
    </div>
  );
}

export default Search;
