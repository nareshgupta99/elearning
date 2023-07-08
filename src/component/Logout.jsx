import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router';

function Logout() {

    const logout=()=>{
        localStorage.clear("token");
    }
    const navigate=useNavigate();
    useEffect(()=>{
        logout();
navigate("/");
    },[])
  return (
    <>
    
    </>
  )
}

export default Logout