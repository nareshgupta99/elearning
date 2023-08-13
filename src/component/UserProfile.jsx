import React, { useState } from "react";
import { updateUserDetail } from "../service/UserService";
import { useNavigate } from "react-router";
import {toast} from 'react-toastify'

function UserProfile() {

  const navigate=useNavigate()
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    profilePic: "",
    phone:""
  });

  function handleChange(event) {
    const name=event.target.name;
    setUserDetails({...userDetails,[name]:event.target.value})
  }
  function handleProfilePic(e){
    const file=e.target.files[0]
    const name=e.target.name;
    setUserDetails({...userDetails,[name]:file})
  
  }

  function handleSubmit(event){
    event.preventDefault();
    const formData=new FormData();
    formData.append("firstName",userDetails.firstName);
    formData.append("lastName",userDetails.lastName);
    formData.append("profilePic",userDetails.profilePic);
    formData.append("phone",userDetails.phone);

    updateUserDetail(formData).then((res)=>{
      toast.success("Loggin Success !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/")
    }).catch((err)=>{
      console.log(err.message)
    })
  }


  return (
    <div className="p-5">
      <h2 className="fw-bold p-3"> Profile & settings</h2>
      <form method="POST"
      encType="multipart/form-data"
      onSubmit={handleSubmit}>
      <div>
        <h4 className="fs-5 fw-bold">First Name</h4>
        <div className="d-flex course-subcontainer align-items-center">
          <input
            type="text"
            placeholder="Enter first Name"
            name="firstName"
            onChange={handleChange}
            value={userDetails.firstName}
            className="input"
            required
          />
        </div>
      </div>

      <div>
        <h4 className="fs-5 fw-bold">Last Name</h4>
        <div className="d-flex course-subcontainer align-items-center">
          <input
            type="text"
            placeholder="Enter last Name "
            name="lastName"
            onChange={handleChange}
            value={userDetails.lastName}
            className="input"
            required
          />
        </div>
      </div>

      <div>
        <h4 className="fs-5 fw-bold">Contact Number</h4>
        <div className="d-flex course-subcontainer align-items-center">
          <input
            type="tel"
            placeholder="Enter Contact Number "
            name="phone"
            onChange={handleChange}
            value={userDetails.phone}
            className="input"
            required
          />
        </div>
      </div>
      <div>
        <h4 className="fs-5 fw-bold">Profile pic</h4>
        <div className="d-flex course-subcontainer align-items-center">
          <input
            className="form-control form-control-lg"
            id="formFileLg"
            type="file"
            onChange={handleProfilePic}
            name="profilePic"
            required
          />
        </div>
      </div>

      <input type="submit" value={"submit"} className="p-1 mt-2"/>
      </form>
    </div>
  );
}

export default UserProfile;
