import '../admin/instructorDashboard.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function InstructorDashboard() {

   const navigate=useNavigate();

  return (
    <div className="d-flex">
	<div className="wrapper sidebar-container "  >
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3><Link to="/">E-Learning </Link></h3>
            </div>
            <ul className="list-unstyled component">
                <li>
                    <button className="btn-links" id="courses-btn" onClick={()=>navigate("/instructor/courses")}>Courses</button>
                </li>
                <li>
                    <button className="btn-links" id="create-btn" onClick={()=>{navigate('/instructor/createCourse')}}>Create Course</button>
                </li>
                
                <li>
                    <button className="btn-links" id="overview-btn" onClick={()=>{navigate('/instructor/overview')}}>Overview</button>
                </li>
                <li>
                   <button className="btn-links" id="students-btn" onClick={()=>{navigate('/instructor/students')}}>Students</button>
                </li>
            </ul>
        </nav>
    </div>
    
   
    
  
	
	

</div>
 
 
  )
}

export default InstructorDashboard