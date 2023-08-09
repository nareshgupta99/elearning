import React, { useEffect } from 'react'
import initialImage from "../images/image.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccess } from '../redux/action/authActions';



function Profile() {

  const roles=useSelector((state)=>state.auth.user.roles)
  const dispatch=useDispatch();
  const user=useSelector((state)=>state.auth.user);

  function checkInstructorRole(roles){
    for (const role of roles) {
      if(role.roleName==='ROLE_INSTRUCTOR') {
        return true;
      }
      
    }
  }
    
  const navigate=useNavigate();  
  return (
    <div>
 <div className="card" style={{width: "18rem"}}>
  <ul className="list-group list-group-flush">
  <Link to="/auth/user-profile" style={{textDecoration:"none"}} >  <li className="list-group-item pb-5"><img src={initialImage} style={{width:"250px",borderRadius:"400px"}} /> {user.firstName}<p style={{fontSize:"10px"}}> {user.email}</p></li> </Link>
   <Link to="" style={{textDecoration:"none"}} > <li className="list-group-item">My Course</li> </Link>
   <Link to="/auth/purchase-history"  style={{textDecoration:"none"}}> <li className="list-group-item">Purchased History</li> </Link>
   <Link to="/cart" style={{textDecoration:"none"}}> <li className="list-group-item">My Cart</li> </Link>
   {checkInstructorRole(roles)?
   <Link to="/instructor/overview" style={{textDecoration:"none"}}> <li className="list-group-item">Instructor DashBoard</li> </Link>
  :""}
   <Link to="/auth/change-password" style={{textDecoration:"none"}}> <li className="list-group-item">Change Password</li> </Link>
  <li onClick={()=>{
      dispatch(logoutSuccess)
  }} className="list-group-item " style={{cursor:'pointer'}}>Log Out</li> 
  </ul>
</div>
    </div>
  )
}

export default Profile