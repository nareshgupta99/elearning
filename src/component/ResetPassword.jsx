import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { resetPasswordService } from '../service/UserService';

function ForgotPassword(props) {

    const [password,setPassword]=useState();
    const [showPassword, setShowPassword] = useState(false);

  const passwordToogler = () => {
    setShowPassword(!showPassword);
  };

    function handleChange(e){
        setPassword(e.target.value);
       
    }

    function resetPassword(e){
      e.preventDefault();
      const resetToken = new URLSearchParams(document.location.search).get("token");
      const formData=new FormData();
      formData.append("password",password);
      formData.append("resetToken",resetToken);

      resetPasswordService(formData).then((res)=>{
        console.log(res.data)
      }).catch((err)=>{
        console.log(err.message)
      })
    }

  return (

<div>

    <div className="login-container" id="otp">
    <div className="login">
      <span id="change-email" style={{ cursor: "pointer" }}>
        <Link to="/forgot-password" >Change Email </Link>
      </span>
      <form method="post" onSubmit={resetPassword} >
        <div className="form-group">
          <label className="form-label" for="otp">
           Password:
          </label>
          <input
            type={showPassword === true ? "text" : "password"}
            className="form-control"
            placeholder=""
            name="password"
            required
            onChange={handleChange}
            value={password}
            />
        </div>

        <div className="form-group form-check">
              <input
                className="form-check-input"
                id="checkbox"
                type="checkbox"
                onClick={passwordToogler}
              />
              <label className="form-check-label" for="checkbox">
                Show Password
              </label>
            </div>

        <input
          type="submit"
          className="btn btn-success w-100 mt-2"
          value="update password"
          />
      </form>
    </div>
  </div>



      </div>
  )
}

export default ForgotPassword