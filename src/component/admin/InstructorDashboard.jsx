import React, { useState } from 'react'
import '../admin/instructorDashboard.css';
import Curriculum from './Curriculum';

import CreateCourse from './CreateCourse';
import { Link } from 'react-router-dom';
import Overview from './Overview';
import Student from './Student';
import Courses from './Courses';

function InstructorDashboard() {

    const [page,setPage]=useState();

  return (
    <div className="d-flex">
	<div className="wrapper sidebar-container "  >
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3><Link to="/">E-Learning </Link></h3>
            </div>
            <ul className="list-unstyled component">
                <li>
                    <button className="btn-links" id="courses-btn" onClick={()=>{setPage('course')}}>Courses</button>
                </li>
                <li>
                    <button className="btn-links" id="create-btn" onClick={()=>{setPage('createCourse')}}>Create Course</button>
                </li>
                <li>
                	 <button className="btn-links" id=""  onClick={()=>{setPage('curriculum')}}>Curriculum</button>
                </li>
                <li>
                    <button className="btn-links" id="overview-btn" onClick={()=>{setPage('overview')}}>Overview</button>
                </li>
                <li>
                   <button className="btn-links" id="students-btn" onClick={()=>{setPage('student')}}>Students</button>
                </li>
            </ul>
        </nav>
    </div>
    
    <div className=" " id="overview" style={{width:"-moz-available"}}>
        {page==='course'? <Courses/>:""}
        {page==='curriculum' ?<Curriculum />:""}
        {page==='createCourse'?<CreateCourse />:""}
        {page==='overview'?<Overview/>:""}
        {page==='student'?<Student/>:""}
        
    </div>
    
  
	
	

</div>
 
 
  )
}

export default InstructorDashboard