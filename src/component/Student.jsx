import React, { useState } from 'react'
import AuthService from '../service/AuthService';
import Registration from './Registration';
import { useNavigate } from 'react-router';
import { toast } from "react-toastify";

function Student() {

    const navigate=useNavigate();
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    });


    const handleSubmit=(event)=>{
        event.preventDefault();
        AuthService.registerStudent(data).then((resp)=>{
            console.log(resp);
            navigate("/login")

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
  )}

export default Student