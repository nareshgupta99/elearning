import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { logoutSuccess } from '../redux/action/authActions';

function Logout() {
  const dispatch=useDispatch();

    const logout=()=>{
      dispatch(logoutSuccess());
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