import React from 'react'
import image from '../images/image.jpg';
import initialImage from "../images/image.jpg";
import { Link, useNavigate } from 'react-router-dom';

function Profile() {

  const navigate=useNavigate();  
  return (
    <div>
 <div className="card" style={{width: "18rem"}}>
  <ul className="list-group list-group-flush">
  <Link to="/auth/user-profile" style={{textDecoration:"none"}} >  <li className="list-group-item pb-5"><img src={initialImage} style={{width:"250px",borderRadius:"400px"}} /> Name<p style={{fontSize:"10px"}}> naresh@example.com </p></li> </Link>
   <Link to="" style={{textDecoration:"none"}} > <li className="list-group-item">My Course</li> </Link>
   <Link to="/auth/purchase-history"  style={{textDecoration:"none"}}> <li className="list-group-item">Purchased History</li> </Link>
   <Link to="/cart" style={{textDecoration:"none"}}> <li className="list-group-item">My Cart</li> </Link>
   <Link to="/instructor/overview" style={{textDecoration:"none"}}> <li className="list-group-item">Instructor DashBoard</li> </Link>
   <Link to="/auth/change-password" style={{textDecoration:"none"}}> <li className="list-group-item">Change Password</li> </Link>
  <li onClick={()=>{
      localStorage.clear("token");
      navigate("/login")
  }} className="list-group-item " style={{cursor:'pointer'}}>Log Out</li> 
  </ul>
</div>
    </div>
  )
}

export default Profile