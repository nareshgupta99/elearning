import React from 'react'
import banner  from '../../images/instructor2.jpg';
import inspire from '../../images/inspire-learner.jpg';
import rewarde from "../../images/rewarde.jpg";
import teach from '../../images/teach-your-way.jpg'
import { Link } from 'react-router-dom';

function TeachWithUs() {

    const textContainer={
        
            position: "absolute",
            top: "37%",
            left: "12%",
            color: "white"
        
    }
  return (
    <div className="">
    <div className="">
        <img src={banner} className="img-fluid" alt="..." />
    </div>
    <div className="text-container" style={textContainer}>
      <h1>Come teach with us </h1>

       <p> Become an instructor and change lives â including your own </p>

       <Link to="/instructor/register" className="btn btn-dark " style={{width: "200px"}}>Get Started</Link>

    </div>

    <div className="bg-white text-center" style={{marginTop: "5rem"}}>
      <h1>So many reasons to start</h1>
      <div className="d-flex flex-column flex-md-row justify-content-center mt-5">

        <div className="teach-your-way ps-2 pe-2">
          <img src={teach} className="img-fluid" alt="..." />
          <h3>Teach your way</h3>
          <p>Publish the course you want, in the way you want, and always have control of your own content.</p>
          
        </div>
        <div>
          <img src={inspire} className="img-fluid" alt="..." />
          <h3>Inspire learners</h3>           
             <p>Teach what you know and help learners explore their interests, gain new skills, and advance their careers.</p>
        </div>
        
        <div className="ps-3 pe-3">
          <img src={rewarde} className="img-fluid" alt="..." />
          <h3>Get rewarded</h3>
          <p>Expand your professional network, build your expertise, and earn money on each paid enrollment.</p>
        </div>
        
      </div>
    </div>





</div>



  )
}

export default TeachWithUs