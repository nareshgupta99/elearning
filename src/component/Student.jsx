import AuthService from "../service/AuthService";
import Registration from "./Registration";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

function Student() {
  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      AuthService.registerStudent(values)
        .then((resp) => {
          let msg = resp.data.message;
          let res = resp.data.resource;
          toast.success(` ${res} ${msg}  !!`, {
            position: toast.POSITION.TOP_RIGHT,
          });

          navigate("/login");
        })
        .catch((err) => {
          let msg = err.response.data.message;
          toast.error(msg, {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    },
  });

  return (
    <div>
      <Registration formik={formik} />
    </div>
  );
}

export default Student;
