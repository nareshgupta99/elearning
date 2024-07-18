import React, { useEffect, useState } from 'react'
import { getAllPurchasedCourses } from '../service/CourseService';

function PurchasedHistory() {

  const [courses, setCourses] = useState([])

  useEffect(() => {
    getAllPurchasedCourses().then((courses) => {
      let { data } = courses;
      console.log(data)
      setCourses(data)
    }).catch((err) => {
      console.log(err)
    })
    console.log(courses)
  }, [])

  return (
    <div>
      <h3 className='m-5 fw-bold fst-italic'>  Purchase history </h3>
      <div className='purchase-table px-4'>
        <table class="table ">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col" style={{ color: "grey" }}>Date</th>
              <th scope="col" className='' style={{ color: "grey" }}>Total price</th>
              <th scope="col" className='' style={{ color: "grey" }}>Payment type</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course,index)=>(

              
              <tr>
                <th scope="row">{index+1}</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
          )) }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PurchasedHistory