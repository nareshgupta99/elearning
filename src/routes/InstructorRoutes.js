import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router";
import InstructorDashboard from "../component/admin/InstructorDashboard";
import AuthService from "../service/AuthService";
function InstructorRoutes({auth}) {
 
  const navigate=useNavigate()
  let isAuthenticated=auth.isAuthenticated;
  let isTokenValid= AuthService.isTokenValid(auth.token);
  let roles=auth.user.roles;

  useEffect(()=>{
    if(!checkInstructorRole(roles)){
      navigate("/")
    }

  },[])

  if (isAuthenticated && isTokenValid  && checkInstructorRole(roles)) {
    
  

    return (
      <div className="d-flex">
        <InstructorDashboard />
        <div className="w-100">
        <Outlet />
        </div>
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }

  function checkInstructorRole(roles){
    for (const role of roles) {
      if(role.roleName==='ROLE_INSTRUCTOR') {
        return true;
      }
      
    }
  }



}

export default InstructorRoutes;
