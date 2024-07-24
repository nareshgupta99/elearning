import React, { useEffect, useState } from "react";
import "../admin/curriculum.css";
import SectioService from "../../service/SectioService";
import { useNavigate, useParams } from "react-router";
import { getInstructorCourse } from "../../service/CourseService";
import { deleteLecture, saveLecture } from "../../service/LectureService";

function Curriculum() {
  const [sectionToggler, setSectionToggler] = useState(null);
  const [fileToggler, setFileToggler] = useState(false);
  const [sectionData, setSectionData] = useState({
    sectionName: null,
    objective: null,
  });
  const [lectureData, setLectureData] = useState({
    name: "",
    video: "",
  });
  const [sections, setSections] = useState([]);
  const [lecture, setLecture] = useState([]);
  const [isPublish,setIsPublish]=useState();
  const id = useParams("id");
  const navigate = useNavigate();

  function handleSectionChange(e) {
    let { name, value } = e.target;
    setSectionData((prevSectionData) => ({
      ...prevSectionData,
      [name]: value,
    }));
  }

  useEffect(() => {
    getInstructorCourse(id)
      .then((res) => {
        setSections(res.data.sections);
        setIsPublish(res.data.publish)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const sectionButton = () => {
    let object = {
      title: "",
      objective: "",
    };
    setSectionToggler(object);
  };

  const handleDeleteLecture = (lectureId, sectionIndex, lectureIndex) => {
    deleteLecture(lectureId)
      .then((res) => {
        const updatedSection = { ...sections[sectionIndex] };
        // Filter out the lecture with the specified ID
        updatedSection.lecture = updatedSection.lecture.filter(
          (lecture) => lecture.lectureId !== lectureId
        );

        // Copy the sections array and update the section with the filtered lectures
        const updatedSections = [...sections];
        updatedSections[sectionIndex] = updatedSection;

        // Update the state with the new sections array
        setSections(updatedSections);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const [errors, setErrors] = useState({
    sectionName: null,
    objective: null,
    name:null,
    file:null,
    next:null

  });

  function handleAddSection() {
    if (
      sectionData.sectionName === "" ||
      sectionData.sectionName === null ||
      sectionData.sectionName.trim() < 4
    ) {
      setErrors({ ...errors, sectionName: "Title Must be 4 charater long" });
      return;
    }
    if (
      sectionData.objective === "" ||
      sectionData.objective === null ||
      sectionData.objective.trim() < 15
    ) {
      setErrors({ ...errors, objective: "Objective Must be 15 charater long" });
      return;
    }

    SectioService.saveSection(sectionData, id)
      .then((resp) => {
        let sec = resp.data;
        sec.lecture = [];

        setSections([...sections, resp.data]);
        setSectionToggler(null);
        setErrors({ [errors.objective]: null });
        setErrors({ [errors.sectionName]: null });
        setSectionData({...sectionData,sectionName:null,objective:null})
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function handleDeleteSection(id) {
    SectioService.deleteSection(id)
      .then((res) => {
        const list = sections.filter((section) => section.id !== id);
        setSections(list);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const handleNext = (e) => {
    if(sections.length===0  ){
      setErrors({...errors,next:"courses has no Content to publish"})
      return
    }
    navigate(`/instructor/course/review/${id.id}`);
  };

  function handleSubmit(event, id, index) {
    event.preventDefault();
    if(lectureData.name===null || lectureData.name==='' || lectureData.name.trim()<4){
      setErrors({...errors,name:"Lecture name must be 4 character"})
      return
    }
    if(lectureData.video===null || lectureData.video===''){
      setErrors({...errors,name:"Video is Required"})
      return
    }
    const form = new FormData();
    form.append("name", lectureData.name);
    form.append("file", lectureData.video);

    saveLecture(id, form)
      .then((res) => {
        const updatedSactions = [...sections];
        setSections([...sections], sections[index].lecture.push(res.data));
        setFileToggler(false);
          setLectureData({...lectureData,name:null,video:null})
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div>
      <div className="course-container d-flex flex-column justify-content-center">
        <div className="container course p-3">
          <h3 className="fw-bolder">Curriculum</h3>
          <hr />
          <p className="mt-5">
            Start putting together your course by creating sections, lectures
            and practice activities (quizzes, coding exercises and assignments).
            Use your course outline to structure your content and label your
            sections and lectures clearly. If you’re intending to offer your
            course for free, the total length of video content must be less than
            2 hours.
          </p>

          <div className="mt-3">
            <i className="fa-regular fa-xmark d-none" id="close"></i>
            {sectionToggler === null ? (
              <button
                className={`p-1 px-2 btn btn-success`}
                id="section-button"
                onClick={sectionButton}
              >
                + section
              </button>
            ) : (
              <button
                className="py-1 px-3 btn btn-danger"
                id="close-button"
                onClick={() => setSectionToggler(null)}
              >
                - close
              </button>
            )}
          </div>
          {/* Section render on click section */}
          {sectionToggler !== null ? (
            <div className="mt-3 " id="section-container">
              <div
                className="mt-4 p-2"
                id="section"
                style={{ backgroundColor: "#f7f9fa" }}
              >
                {" "}
                <div className="d-flex justify-content-between ">
                  {" "}
                  <label>New Section:</label>{" "}
                  <input
                    type="button"
                    className="btn  btn-success "
                    value="Add Section"
                    id="add-section"
                    onClick={handleAddSection}
                  />
                </div>
                <div className="m-2">
                  <input
                    type="text"
                    required
                    className="w-75"
                    placeholder="Enter a Title"
                    id="title"
                    name="sectionName"
                    onChange={handleSectionChange}
                  />
                  {errors.sectionName ? (
                    <p className="text-danger">{errors.sectionName}</p>
                  ) : (
                    ""
                  )}
                </div>{" "}
                <div className="m-2">
                  {" "}
                  What will students be able to do at the end of this section?
                  <input
                    type="text"
                    className="w-75"
                    placeholder="Enter a Learning Objective"
                    required
                    id="section-objective"
                    name="objective"
                    value={sectionData.objective}
                    onChange={handleSectionChange}
                  />
                  {errors.objective ? (
                    <p className="text-danger">{errors.objective}</p>
                  ) : (
                    ""
                  )}
                </div>{" "}
              </div>
            </div>
          ) : (
            ""
          )}

          {/* sections */}
          {sections.map((s, index) => (
            <div
              id=""
              key={index}
              className="mt-4  border border-black"
              style={{ backgroundColor: "#f7f9fa" }}
            >
              <input
                className="fw-bold ms-3 mt-3 border-0 title-label"
                id=""
                value={`${s.sectionName}`}
                name="title"
                readOnly
              />
              
              <input
                style={{ marginLeft: "1em" }}
                type="button"
                className="mt-1 mb-2 btn btn-danger"
                value="delete"
                id=""
                onClick={() => handleDeleteSection(s.id)}
              />
              <div
                className="accordion accordion-flush"
                id={`accordionFlushExample`}
              >
                <div className="accordion-item">
                  {" "}
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse-${index}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapse-${index}`}
                      id={index}
                    >
                      {" "}
                    </button>{" "}
                  </h2>
                  <div
                    id={`flush-collapse-${index}`}
                    className={`accordion-collapse collapse unique`}
                    aria-labelledby=""
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body" id={`accordion-body`}>
                      {fileToggler === index ? (
                        <div className=" ">
                          <input
                            type="button"
                            className="px-2 mx-auto position-relative "
                            style={{ left: "90%" }}
                            value="close"
                            id=""
                            onClick={() => {
                              setFileToggler(false);
                            }}
                          />

                          <form
                            method="post"
                            encType="multipart/form-data"
                            onSubmit={(event) =>
                              handleSubmit(event, s.id, index)
                            }
                          >
                            <div className="  border border-dark p-2 d-flex flex-column gap-2  w-75">
                              <div className="w-50 d-flex flex-column gap-2 p-2">
                                <input
                                  className="form-control formFile w-100 "
                                  type="file"
                                  id=""
                                  name="video"
                                  accept="video/*"
                                  onChange={(e) => {
                                    const file = e.target.files[0];
                                    setLectureData({
                                      ...lectureData,
                                      [e.target.name]: file,
                                    });
                                  }}
                                />
                                {errors.file?<p className="text-danger">{errors.file}</p>:""}
                                <input
                                  class="form-control formFile w-100 "
                                  type="text"
                                  id=""
                                  name="name"
                                  placeholder="Enter your Lecture Name"
                                  onChange={(e) =>
                                    setLectureData({
                                      ...lectureData,
                                      [e.target.name]: e.target.value,
                                    })
                                  }
                                />
                                {errors.name?<p className="text-danger">{errors.name}</p>:""}
                              </div>
                              <div className="">
                                <input
                                  type="submit"
                                  className="px-3"
                                  id=""
                                  value="save"
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                      ) : (
                        <input
                          type="button"
                          className="px-2 mx-auto position-relative "
                          style={{ left: "90%" }}
                          value="Add Video"
                          onClick={() => {
                            setFileToggler(index);
                          }}
                        />
                      )}
                      {sections[index].lecture != null ? (
                        <div className="mt-2">
                          {sections[index].lecture.map((lect, lectureIndex) => (
                            <div
                              className=" border-success d-flex "
                              key={lectureIndex}
                            >
                              <p>{lect.name}</p>
                              <button
                                className="px-3 position-absolute"
                                style={{ right: "15em" }}
                                onClick={() =>
                                  handleDeleteLecture(
                                    sections[index].lecture[lectureIndex]
                                      .lectureId,
                                    index,
                                    lectureIndex
                                  )
                                }
                              >
                                {" "}
                                Delete
                              </button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div>
            {
              !isPublish?
              <input
              type="button"
              value="next"
              className="px-3 mt-4 btn btn-success"
              onClick={handleNext}
              style={{ position: "relative", top: 1, left: "93%" }}
              />
            :""}
            {errors.next?<p className="text-danger">{errors.next}</p>:""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
