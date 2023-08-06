import Registration from "./Registration";
import AuthService from "../service/AuthService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

function Instructor() {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      AuthService.registerInstructor(values)
        .then((resp) => {
          let msg = resp.data.message;
          let res = resp.data.resource;
          toast.success(` ${res} ${msg}  !!`, {
            position: toast.POSITION.TOP_RIGHT,
          });
          navigate("/instructor/courses");
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

export default Instructor;