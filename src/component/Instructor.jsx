import React, { useState } from 'react'
import Registration from './Registration';
import AuthService from '../service/AuthService';

function Instructor() {
    

    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    });

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(data);
        AuthService.registerInstructor(data).then((resp)=>{
            console.log(resp);
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
        <Registration handleSubmit={handleSubmit} data={data} setData={setData}/>
    </div>
  )
}

export default Instructor