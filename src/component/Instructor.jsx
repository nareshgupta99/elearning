import React, { useState } from 'react'
import Registration from './Registration';
import AuthService from '../service/AuthService';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router';

function Instructor() {
    

  const navigate=useNavigate()
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    });

    const handleSubmit=(event)=>{
        event.preventDefault();
        AuthService.registerInstructor(data).then((resp)=>{
            let msg=resp.data.message;
            let res=resp.data.resource;
        toast.success(` ${res} ${msg}  !!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
        navigate("/instructor/courses")
        }).catch((err)=>{
            let msg=err.response.data.message
            toast.error(msg, {
                position: toast.POSITION.TOP_RIGHT,
              });
        })
    }
  return (
    <div>
        <Registration handleSubmit={handleSubmit} data={data} setData={setData}/>
    </div>
  )
}

export default Instructor