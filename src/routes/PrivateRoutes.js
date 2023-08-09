import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router';
import AuthService from '../service/AuthService';


function PrivateRoutes({auth}) {

  let isAuthenticated=auth.isAuthenticated;
  let isTokenValid= AuthService.isTokenValid(auth.token);
  let roles=auth.user.roles;
  const navigate=useNavigate()

  function checkStudentRole(roles){
    for (const role of roles) {
      if(role.roleName==='ROLE_STUDENT') {
        return true;
      }
    }
  }
    

 
  

  if(isAuthenticated && isTokenValid  ){  
    if(!checkStudentRole(roles)) {
      
      navigate("/")
    }
   

   return <Outlet />
  }

  else{
    return <Navigate to="/login" />
  }

}



export default PrivateRoutes