import React, { useState } from "react";
import { Link } from "react-router-dom";
import { resetPasswordService } from "../service/UserService";
import { useFormik } from "formik";
import { resetPasswordSchema } from "../schemas";

function ForgotPassword(props) {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    password: "",
  };

  const { errors, handleBlur, handleChange, handleSubmit, values, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: resetPasswordSchema,
      onSubmit: (values, action) => {
        const resetToken = new URLSearchParams(document.location.search).get(
          "token"
        );
        const formData = new FormData();
        formData.append("password", values.password);
        formData.append("resetToken", resetToken);

        resetPasswordService(formData)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      },
    });

  const passwordToogler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="login-container" id="otp">
        <div className="login">
          <span id="change-email" style={{ cursor: "pointer" }}>
            <Link to="/forgot-password">Change Email </Link>
          </span>
          <form method="post" onSubmit={handleSubmit}>
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
                value={values.password}
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
  );
}

export default ForgotPassword;
