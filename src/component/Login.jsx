import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [showForgotPassword, setShowForgotPassword] = useState(true);

  const [showOtp, setShowOtp] = useState(true);

  const passwordToogler = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    let name = event.target.name;
    setData({ [name]: event.target.value });
  };

  return (
    <div>
      {showForgotPassword === false ? (
        <div class="login-container" id="login-student">
          <div class="login">
            <h3>E-Learning </h3>
            <p class="text-danger font-weight-normal"></p>
            <form method="post" action="login" class="">
              <div class="form-group">
                <label class="form-label" for="email">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group">
                <label class="form-label" for="password">
                  Password
                </label>
                <input
                  type={showPassword === true ? "text" : "password"}
                  class="form-control"
                  id="password"
                  name="password"
                  value={data.password}
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
                value="SIGN IN"
              />
            </form>
            <p class="mt-3" id="forgot-password-button">
              forgot Password{" "}
              <span
                className="text-primary"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowForgotPassword(true);
                }}
              >
                {" "}
                click here{" "}
              </span>
            </p>
          </div>
        </div>
      ) : (
        <div class="login-container " id="fp">
          <div class="login ">
            <p class="back" style={{ cursor: "pointer" }}>
              {" "}
              <BsArrowLeftShort
                size={40}
                onClick={() => {
                  setShowForgotPassword(false);
                }}
              />
            </p>
            <form method="post" action="forgot-student" id="send-otp">
              <div class="form-group">
                <label class="form-label" for="email">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="abc@example.com"
                  name="email"
                  required
                />
              </div>
              <input
                type="submit"
                class="btn btn-success w-100 mt-2"
                value="Send Otp"
              />
            </form>
          </div>
        </div>
      )}
      {showOtp === true ? (
        <div class="login-container" id="otp">
          <div class="login">
            <span id="change-email" style={{ cursor: "pointer" }}>
              Change Email
            </span>
            <form method="post" action="verify-student">
              <div class="form-group">
                <label class="form-label" for="otp">
                  Enter Otp:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="otp"
                  placeholder=""
                  name="otp"
                  required
                />
              </div>

              <input
                type="submit"
                class="btn btn-success w-100 mt-2"
                value="Next"
              />
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Login;
