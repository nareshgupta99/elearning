import React, { useState } from 'react'
import AuthService from '../service/AuthService';
import Registration from './Registration';

function Student() {
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    });


    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(data);
        AuthService.registerStudent(data).then((resp)=>{
            console.log(resp);
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
        <Registration handleSubmit={handleSubmit} data={data} setData={setData}/>
    </div>
  )}

export default Student