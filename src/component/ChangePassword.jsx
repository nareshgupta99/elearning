import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import AuthService from "../service/AuthService";
import { useNavigate } from "react-router";

import { toast } from "react-toastify";
import { changePassword } from "../service/UserService";
import { useFormik } from "formik";
import { changePasswordSchema } from "../schemas";

function ChangePassword() {
  console.log("in change passw");
  const initailValue = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, touched, errors } =
    useFormik({
      initialValues: initailValue,
      validationSchema: changePasswordSchema,
      onSubmit: (values, action) => {
        const formData = new FormData();
        formData.append("oldPassword", values.oldPassword);
        formData.append("newPassword", values.newPassword);
        formData.append("confirmPassword", values.confirmPassword);

        changePassword(formData)
          .then((res) => {
            let message=res.data.message;
            toast.success(`${message }!`, {
              position: toast.POSITION.TOP_RIGHT,
            });
            
          })
          .catch((err) => {
            console.log(err)
            let msg=err.message;
            // toast.error(msg, {
            //   position: toast.POSITION.TOP_RIGHT,
            // });
          });
      },
    });

  const [showPassword, setShowPassword] = useState(false);

  const passwordToogler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div class="login-container" id="login-student">
        <div class="login">
          <h3 className="fw-bold fst-italic">Change Password </h3>
          <p class="text-danger font-weight-normal"></p>
          <form method="post">
            <div class="form-group">
              <label class="form-label" for="email">
                Old Password
              </label>
              <input
                type="password"
                class="form-control"
                id="email"
                name="oldPassword"
                value={values.oldPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.oldPassword && touched.oldPassword ? (
                <p className="form-error text-danger">{errors.oldPassword}</p>
              ) : (
                ""
              )}
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
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.newPassword && touched.newPassword ? (
                <p className="form-error text-danger">{errors.newPassword}</p>
              ) : (
                ""
              )}
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
                value={values.confirmPassword}
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
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
