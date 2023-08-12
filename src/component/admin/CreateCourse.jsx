import React from "react";
import "../admin/create-course.css";
import initialImage from "../../images/image.jpg";
import { useState } from "react";
import { addCourse } from "../../service/CourseService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import { addCourseSchema } from "../../schemas";
function CreateCourse() {
  const navigate = useNavigate();
  const [image, setImage] = useState(initialImage);
  const [course, setCourse] = useState({
    image: initialImage,
  });

  let initial = {
    title: "",
    about: "",
    language: "",
    level: "",
    category: "",
    subTitle: "",
  };

  const { errors, handleChange, handleBlur, values, handleSubmit, touched } =
    useFormik({
      initialValues: initial,
      validationSchema: addCourseSchema,
      onSubmit: (values) => {
        console.log(values);
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("about", values.about);
        formData.append("language", values.language);
        formData.append("level", values.level);
        formData.append("category", values.category);
        formData.append("image", course.image);
        formData.append("subTitle", values.subTitle);

        addCourse(formData)
          .then((res) => {
            let data = res.data;
            toast.success("suucess", {
              position: toast.POSITION.TOP_RIGHT,
            });
            navigate(`/instructor/curriculum/${data.id}`);
          })
          .catch((err) => {
            console.log(err);
            toast.error(err.message, {
              position: toast.POSITION.TOP_RIGHT,
            });
          });
      },
    });
  const [languages, setLanguages] = useState([
    "English (US)",
    "English (UK)",
    "HINDI",
    "HINGLISH",
  ]);
  const [categories, setCategories] = useState([
    "Development",
    "Business",
    "Finance & Accounting",
    "IT & Software",
    "Design",
  ]);

  function handleImage(e) {
    setImage(URL.createObjectURL(e.target.files[0]));
    setCourse({
      ...course,
      [e.target.name]: e.target.files[0],
    });
  }
  return (
    <div className="  course-container d-flex flex-column justify-content-center ">
      <div className=" container course p-3" style={{ height: "100%" }}>
        <h3 className="fw-bolder">Course landing page</h3>
        <hr />
        <p className="mt-5">
          Your course landing page is crucial to your success on Udemy. If itâs
          done right, it can also help you gain visibility in search engines
          like Google. As you complete this section, think about creating a
          compelling Course Landing Page that demonstrates why someone would
          want to enroll in your course. Learn more about creating your course
          landing page and course title standards.
        </p>
        <form
          method="post"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div>
            <h4 className="fs-5 fw-bold">Course title</h4>
            <div className="d-flex course-subcontainer align-items-center">
              <input
                type="text"
                placeholder="insert your course title "
                name="title"
                onChange={handleChange}
                value={values.title}
                className="input"
                onBlur={handleBlur}
              />
              <p className="pe-2" style={{ color: "grey" }} id="title-range">
                60
              </p>
            </div>
            {errors.title && touched.title ? (
              <p className="form-error text-danger">{errors.title}</p>
            ) : (
              ""
            )}
            <p className="info">
              Your title should be a mix of attention-grabbing, informative, and
              optimized for search
            </p>
          </div>

          <div>
            <h4 className="fs-5 fw-bold">Course Subtitle</h4>
            <div className="d-flex course-subcontainer align-items-center">
              <input
                type="text"
                placeholder="insert your Subtitle "
                name="subTitle"
                onChange={handleChange}
                value={values.subTitle}
                className="input"
                onBlur={handleBlur}
              />
              <p className="pe-2" style={{ color: "grey" }} id="title-range">
                40
              </p>
            </div>
            {errors.subTitle && touched.subTitle ? (
              <p className="form-error text-danger">{errors.subTitle}</p>
            ) : (
              ""
            )}
          </div>

          <div className="text-editor">
            <h4 className="fs-5 fw-bold">Course Description</h4>
            <section className="mx-auto mt-4">
              <div className="row mt-1">
                <div className="col">
                  <textarea
                    id="textarea1"
                    placeholder="insert your course description."
                    name="about"
                    value={values.about}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></textarea>
                </div>
              </div>
              {errors.about && touched.about ? (
                <p className="form-error text-danger">{errors.about}</p>
              ) : (
                ""
              )}
            </section>
          </div>
          <div className="d-flex gap-4 mt-5">
            <h4 className="fs-5 fw-bold">Basic info</h4>
            <select
              name="language"
              className="form-select form-select-lg mb-3 w-25 border-black border-1"
              onChange={handleChange}
              value={values.language}
              onBlur={handleBlur}
              aria-label=".form-select-lg example"
            >
              <option defaultChecked>---Select Language---</option>
              {languages.map((lang, index) => (
                <option key={index} aria-readonly={true} value={lang}>
                  {lang}
                </option>
              ))}
            </select>{" "}
            <select
              name="level"
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-select form-select-lg mb-3 w-25 border-black border-1"
              aria-label=".form-select-lg example"
            >
              <option defaultChecked>---Select Level---</option>
              <option value="Beginner">Beginner Level</option>
              <option value="Intermediate">Intermediate Level</option>
              <option value="Expert">Expert Level</option>
              <option value="All">All Levels</option>
            </select>{" "}
            <select
              name="category"
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-select form-select-lg mb-3 w-25 border-black border-1"
              aria-label=".form-select-lg example"
            >
              <option defaultChecked>---Select Category---</option>
              {categories.map((cat, index) => (
                <option key={index} aria-readonly={true} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="d-flex gap-5 error">
            {errors.language && touched.language ? (
              <p className="form-error text-danger">{errors.language}</p>
            ) : (
              ""
            )}
            {errors.category && touched.category ? (
              <p className="form-error text-danger">{errors.category}</p>
            ) : (
              ""
            )}
            {errors.level && touched.level ? (
              <p className="form-error text-danger">{errors.level}</p>
            ) : (
              ""
            )}
          </div>
          <div className="mt-4">
            <h4 className="fs-5 fw-bold">Course image</h4>
            <div className="d-flex">
              <div>
                <img
                  src={image}
                  width="480px"
                  height="270px"
                  id="renderImage"
                  alt={""}
                />
              </div>

              <div className="p-2">
                <p>
                  Upload your course image here. It must meet our course image
                  quality standards to be accepted. Important guidelines:
                  750x422 pixels; .jpg, .jpeg,.gif, or .png. no text on the
                  image.
                </p>
                <div>
                  <input
                    className="form-control form-control-lg"
                    id="formFileLg"
                    type="file"
                    name="image"
                    onChange={handleImage}
                  />
                </div>
              </div>
            </div>
          </div>

          <input
            type="submit"
            value="Create Course"
            className="mt-2 btn btn-success"
          />
        </form>
      </div>
    </div>
  );
}

export default CreateCourse;
