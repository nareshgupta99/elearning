import React from 'react'
import { Navigate, Outlet } from 'react-router';
import { getLoginUser, getToken } from '../service/UserDetail';

function PrivateRoutes() {



  let token=getToken();
  let user=getLoginUser();
  user.then((res)=>{

  }).catch((err)=>{
    
  })
 console.log(user)
  if(token ){

   return <Outlet />
  }
  else{
    return <Navigate to="/login" />
  }

}

export default PrivateRoutes