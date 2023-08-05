import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import AuthService from "../service/AuthService";

function SimpleRoutes({ auth }) {
  const navigate = useNavigate();
  let isAuthenticated = auth.isAuthenticated;
  let isTokenValid= AuthService.isTokenValid(auth.token);


  useEffect(() => {
    if (isAuthenticated && isTokenValid) {
      navigate("/");
    }
  },[]);

  return <Outlet />;
}

export default SimpleRoutes;
