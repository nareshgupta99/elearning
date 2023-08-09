import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router";
import { requestPasswordResetService } from "../service/UserService";
import { useFormik } from "formik";
import { emailSchema } from "../schemas";

function ForgotPassword() {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
  };

  const { errors, handleBlur, handleChange, handleSubmit, values, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: emailSchema,
      onSubmit: (values) => {
        const formData = new FormData();
        formData.append("email", values.email);

        requestPasswordResetService(formData)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      },
    });

  return (
    <div>
      <div className="login-container " id="fp">
        <div className="login ">
          <p className="back" style={{ cursor: "pointer" }}>
            {" "}
            <BsArrowLeftShort
              size={40}
              onClick={() => {
                navigate("/login");
              }}
            />
          </p>
          <form method="post" onSubmit={handleSubmit} id="send-otp">
            <div className="form-group">
              <label className="form-label" for="email">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="abc@example.com"
                name="email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="form-error text-danger">{errors.email}</p>
              ) : (
                ""
              )}
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
  );
}

export default ForgotPassword;
