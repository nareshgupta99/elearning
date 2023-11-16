import React, { useState } from "react";
import AuthService from "../service/AuthService";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/action/authActions";
import { useFormik } from "formik";
import { loginSchema } from "../schemas";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };
  
  const { errors, handleBlur, handleChange, handleSubmit, values, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        AuthService.login(values)
          .then((resp) => {
            // let roles = AuthService.fetchUserRoles();
            let token = resp.data.token;
            dispatch(loginSuccess(token));
            toast.success("Loggin Success !", {
              position: toast.POSITION.TOP_RIGHT,
            });

            if (AuthService.isInstructorPresent) {
              navigate("/instructor/overview");
            } else {
              navigate("/home");
            }
          })
          .catch((err) => {
            let msg = err.response.data.message;
            toast.error(msg, {
              position: toast.POSITION.TOP_RIGHT,
            });
          });
      },
    });

  const passwordToogler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="login-container" id="login-student">
        <div className="login">
          <h3>E-Learning </h3>
          <p className="text-danger font-weight-normal"></p>
          <form method="post" action="login" className="">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.email && touched.email ? (
                <p className="form-error text-danger">{errors.email}</p>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type={showPassword === true ? "text" : "password"}
                className="form-control"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="form-error text-danger">{errors.password}</p>
              ) : (
                ""
              )}
            </div>

            <div className="form-group form-check">
              <input
                className="form-check-input"
                id="checkbox"
                type="checkbox"
                onClick={passwordToogler}
              />
              <label className="form-check-label">Show Password</label>
            </div>
            <input
              type="submit"
              className="btn btn-success w-100 mt-2"
              value="SIGN IN"
              onClick={handleSubmit}
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
