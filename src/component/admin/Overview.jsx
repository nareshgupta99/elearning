import React, { useState } from "react";
import '../admin/overview.css';


function Overview() {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div class="course-container d-flex flex-column justify-content-center">
      <h4 class="header">Overview</h4>
      <p class="px-4">Get top insights about your performance</p>
      <div class="container-md container-fluid course p-3 ">
        <div class="d-flex gap-5">
          
            
              <div>
                <h5>Total revenu</h5>
                {data.map((d) => ( <h4>100</h4>))} 
              </div>

              <div>
                <h5>Total enrollments</h5>
                {data.map((d) => ( <h4>100</h4>))} 
              </div>
              </div>
         
        </div>
        <hr />
      </div>
    
  );
}

export default Overview;
