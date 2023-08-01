import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import AuthService from "../service/AuthService";
import { useNavigate } from "react-router";

import {toast} from 'react-toastify';
import { changePassword } from "../service/UserService";

function ChangePassword() {

  const [userDetail, setUserDetail] = useState({
   oldPassword: "",
    newPassword: "",
    confirmPassword:""
  });

  
  function handleSubmit(e){
    e.preventDefault();
    if(!userDetail.confirmPassword===userDetail.newPassword){
        console.log("new & confirm password does not match");
        return;
    }

    const formData=new FormData();
    formData.append("oldPassword",userDetail.oldPassword);
    formData.append("newPassword",userDetail.newPassword);
    formData.append("confirmPassword",userDetail.confirmPassword);

    changePassword(formData).then((res)=>{
        console.log(res.data)
    }).catch((err)=>{
        console.log(err.message);
    })

  }

  

  const [showPassword, setShowPassword] = useState(false);


  const passwordToogler = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    let name = event.target.name;
    console.log(userDetail);
    setUserDetail({ ...userDetail,[name]: event.target.value });
  };

  return (
    <div>
      
        <div class="login-container" id="login-student">
          <div class="login">
            <h3 className='fw-bold fst-italic'>Change Password </h3>
            <p class="text-danger font-weight-normal"></p>
            <form method="post" onSubmit={handleSubmit}>
              <div class="form-group">
                <label class="form-label" for="email">
                    Old Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="email"
                  name="oldPassword"
                  value={userDetail.oldPassword}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group">
                <label class="form-label" for="password">
                 New Password
                </label>
                <input
                  type={showPassword === true ? "text" : "password"}
                  class="form-control"
                  id="password"
                  name="newPassword"
                  value={userDetail.newPassword}
                  onChange={handleChange}
                />
              </div>

              <div class="form-group">
                <label class="form-label" for="password">
                Confirm Password
                </label>
                <input
                  type={showPassword === true ? "text" : "password"}
                  class="form-control"
                  id="password"
                  name="confirmPassword"
                  value={userDetail.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <div class="form-group form-check">
                <input
                  class="form-check-input"
                  id="checkbox"
                  type="checkbox"
                  onClick={passwordToogler}
                />
                <label class="form-check-label" for="checkbox">
                  Show Password
                </label>
              </div>
              <input
                type="submit"
                class="btn btn-success w-100 mt-2"
                value="Change password"
                
              />
            </form>
            
          </div>
        </div>

    </div>
  );
}

export default ChangePassword;
