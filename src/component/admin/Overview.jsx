import React, { useState } from "react";
import '../admin/overview.css';


function Overview() {
  const [data, setData] = useState([100, 200, 300, 400, 52, 61]);

  return (
    <div className="course-container d-flex flex-column justify-content-center w-100">
      <h4 className="header">Overview</h4>
      <p className="px-4">Get top insights about your performance</p>
      <div className="container-md container-fluid course p-3 ">
        <div className="d-flex gap-5">
          
            
              <div>
                <h5>Total revenu</h5>
                {data.map((d,index) => ( <h4 key={index}>100</h4>))} 
              </div>

              <div>
                <h5>Total enrollments</h5>
                {data.map((d,index) => ( <h4 key={index}>100</h4>))} 
              </div>
              </div>
         
        </div>
        <hr />
      </div>
    
  );
}

export default Overview;
