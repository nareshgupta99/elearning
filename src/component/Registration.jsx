import React, { useState } from "react";
import "./registration.css";
import { Link } from "react-router-dom";

function Registration({ formik }) {
  const [showPassword, setShowPassword] = useState(false);
  const { errors, handleBlur, handleChange, handleSubmit, values, touched } =
    formik;

  const toggllePassword = (event) => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="login-container">
        <div className="login">
          <p className="text-danger font-weight-normal"></p>
          <h3>E-Learning </h3>
          <form method="post">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="firstName"
                value={values.name}
                required
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.name && touched.name ? (
                <p className="form-error text-danger">{errors.name}</p>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={values.email}
                name="email"
                required
                onChange={handleChange}
                onBlur={handleBlur}
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
                required
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="form-error text-danger">{errors.password}</p>
              ) : (
                ""
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input
                type={showPassword === true ? "text" : "password"}
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={values.confirmPassword}
                required
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <p className="form-error text-danger">
                  {errors.confirmPassword}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="form-group form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkbox"
                name="t&c"
                required
                onClick={toggllePassword}
              />
              <div className="form-check-label">Show Password</div>
            </div>

            <input
              type="submit"
              className="btn btn-success w-100 mt-3"
              value="SIGN UP"
              onClick={handleSubmit}
            />
          </form>
          <p className="mt-3">
            Already Registered<Link to="/login"> click here </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
