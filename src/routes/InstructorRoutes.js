import React from "react";
import { Navigate, Outlet } from "react-router";
import { getLoginUser, getToken } from "../service/UserDetail";
import InstructorDashboard from "../component/admin/InstructorDashboard";
function InstructorRoutes() {
  let token = getToken();
  let user = getLoginUser();
  user.then((res) => {}).catch((err) => {});
  console.log(user);
  if (token) {
    return (
      <div className="d-flex">
        <InstructorDashboard />
        <Outlet />
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
}

export default InstructorRoutes;
