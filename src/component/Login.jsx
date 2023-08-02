import React, { useState } from "react";
import AuthService from "../service/AuthService";
import { useNavigate } from "react-router";

import { toast } from "react-toastify";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    AuthService.login(data)
      .then((resp) => {
        let token = resp.data.token;
        localStorage.setItem("token", token);
        toast.success("Loggin Success !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((err) => {
        toast.error("Wrong UserName and Password ", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  }

  const [showPassword, setShowPassword] = useState(false);

  const passwordToogler = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    let name = event.target.name;
    console.log(data);
    setData({ ...data, [name]: event.target.value });
  };

  return (
    <div>
      <div className="login-container" id="login-student">
        <div className="login">
          <h3>E-Learning </h3>
          <p className="text-danger font-weight-normal"></p>
          <form method="post" action="login" className="">
            <div className="form-group">
              <label className="form-label" for="email">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" for="password">
                Password
              </label>
              <input
                type={showPassword === true ? "text" : "password"}
                className="form-control"
                id="password"
                name="password"
                value={data.password}
                onChange={handleChange}
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
              value="SIGN IN"
              onClick={handleLogin}
            />
          </form>
          <p className="mt-3" id="forgot-password-button">
            forgot Password{" "}
            <span
              className="text-primary"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              {" "}
              click here{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
