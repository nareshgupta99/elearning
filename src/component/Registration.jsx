import React, { useState } from "react";
import './registration.css';
import { Link } from "react-router-dom";

function Registration({handleSubmit,data,setData}) {

    const [showPassword,setShowPassword]=useState(false);

    const handleChange=(event)=>{
        let name=event.target.name;
        setData({...data,[name]:event.target.value});
        console.log(data)
    }

    const toggllePassword=(event)=>{
        setShowPassword(!showPassword);

    }

  return (
    <div>
      <div class="login-container">
        <div class="login">
          <p class="text-danger font-weight-normal"></p>
          <h3>E-Learning </h3>
          <form method="post" action="/learning-management-system/registration">
            <div class="form-group">
              <label class="form-label" for="Name">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                value={data.name}
                required
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label class="form-label" for="email">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                value={data.email}
                name="email"
                required
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label class="form-label" for="password">
                Password
              </label>
              <input
                type={showPassword===true?"text":"password"}
                class="form-control"
                id="password"
                name="password"
                value={data.password}
                required
                onChange={handleChange}
              />
            </div>

            <div class="form-group form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="checkbox"
                name="t&c"
                required
                onClick={toggllePassword}
              />
              <div class="form-check-label" for="checkbox">
                Show Password
              </div>
            </div>

            <input
              type="submit"
              class="btn btn-success w-100 mt-3"
              value="SIGN UP"
              onClick={handleSubmit}
            />
          </form>
          <p class="mt-3">
            Already Registered<Link to="/login"> click here </Link>
            
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
