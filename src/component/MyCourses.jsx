import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAllInstructorCourses, getAllPurchasedCourses } from "../service/CourseService";
import { Link } from "react-router-dom";

function MyCourses() {

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    getAllPurchasedCourses().then((res) => {
      let { data } = res;
      setData(data);
      console.log(data)

    }).catch((err) => console.log(err))
  }, []);

  return (
    <div>
      <h3 style={{ marginLeft: "50px" }}> Purchased Courses</h3>
      <div className="" >
        {data.map((d, index) => (

          <Link to={`/auth/course/play/${d.courseId}`} >

            <div
              key={index}
              className="border d-flex gap-3 border-dark m-2 w-75 course-card"
              style={{ height: "148px" }}

            >
              <img alt="image" src={d.image.url} width={"110px"} />
              <div className="w-100">
                <p className="course-title-overlay text-center">{d.title} </p>

              </div>

            </div>
          </Link>
        ))}

      </div>

    </div>
  )

}
export default MyCourses;