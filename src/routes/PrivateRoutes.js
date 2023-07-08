import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router';
import { getLoginUser, getToken } from '../service/UserDetail';

function PrivateRoutes() {



  let token=getToken();
  let user=getLoginUser();
 console.log(user)
  if(token ){

   return <Outlet />
  }
  else{
    return <Navigate to="/login" />
  }

}

export default PrivateRoutes