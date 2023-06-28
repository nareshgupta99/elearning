import React, { useState } from 'react'
import '../admin/instructorDashboard.css';
import Curriculum from './Curriculum';
import Course from '../Course';
import CreateCourse from './CreateCourse';
import { Link } from 'react-router-dom';
import Overview from './Overview';
import Student from './Student';

function InstructorDashboard() {

    const [page,setPage]=useState();

  return (
    <div class="d-flex">
	<div class="wrapper sidebar-container "  >
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3><Link to="/">E-Learning </Link></h3>
            </div>
            <ul class="list-unstyled component">
                <li>
                    <button class="btn-links" id="courses-btn" onClick={()=>{setPage('course')}}>Courses</button>
                </li>
                <li>
                    <button class="btn-links" id="create-btn" onClick={()=>{setPage('createCourse')}}>Create Course</button>
                </li>
                <li>
                	 <button class="btn-links" id=""  onClick={()=>{setPage('curriculum')}}>Curriculum</button>
                </li>
                <li>
                    <button class="btn-links" id="overview-btn" onClick={()=>{setPage('overview')}}>Overview</button>
                </li>
                <li>
                   <button class="btn-links" id="students-btn" onClick={()=>{setPage('student')}}>Students</button>
                </li>
            </ul>
        </nav>
    </div>
    
    <div class=" " id="overview" style={{width:"-moz-available"}}>
        {page==='course'? <Course />:""}
        {page==='curriculum' ?<Curriculum />:""}
        {page==='createCourse'?<CreateCourse />:""}
        {page==='overview'?<Overview/>:""}
        {page==='student'?<Student/>:""}
        
    </div>
    
  
	
	

</div>
 
 
  )
}

export default InstructorDashboard