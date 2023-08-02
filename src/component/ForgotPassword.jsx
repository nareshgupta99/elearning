import React, { useState } from 'react'
import {BsArrowLeftShort} from 'react-icons/bs'
import { useNavigate } from 'react-router';
import { requestPasswordResetService } from '../service/UserService';

function ForgotPassword() {

    const [email,setEmail]=useState();

    const navigate=useNavigate()

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

  function  requestResetLink(e){
    e.preventDefault();
    const formData=new FormData();
    formData.append("email",email);

    requestPasswordResetService(formData).then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log(err.message);
    })
  }
      
  return (
    <div>
         <div className="login-container " id="fp">
          <div className="login ">
            <p className="back" style={{ cursor: "pointer" }}>
              {" "}
              <BsArrowLeftShort
                size={40}
                onClick={() => {
                  navigate("/login")
                }}
              />
            </p>
            <form method="post" onSubmit={requestResetLink} id="send-otp">
              <div className="form-group">
                <label className="form-label" for="email">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="abc@example.com"
                  name="forgotEmail"
                  onChange={handleChange}
                  value={email}
                  required
                />
              </div>
              <input
                type="submit"
                className="btn btn-success w-100 mt-2"
                value="verify "
              />
            </form>
          </div>
        </div>
    </div>
  )
}

export default ForgotPassword