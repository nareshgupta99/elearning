import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import AuthService from "../service/AuthService";
import './navbar.css';
import { useSelector } from "react-redux";
import { Popover } from "antd";
import Profile from "./Profile";
import CartPopover from "./CartPopover";

function Navbar({ auth }) {
  let cart=useSelector((state)=>state.cart)
  const [counter,setCounter]=useState();
  let roles = auth.roles;
  let isAuthenticated = auth.isAuthenticated;
  let isTokenValid = AuthService.isTokenValid(auth.token);

  let isInstructorPresent = AuthService.isInstructorPresent(roles);
 

  useEffect(() => {
    let num=cart.courses.length;
    setCounter(num);
  }, [cart]);

  return (
    <header className=" sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex">
          <a className="navbar-brand mx-lg-3" href="index.jsp">
            E-Learning
          </a>

          <form className="d-none d-md-flex mx-lg-5">
            <input
              className="form-control me-2 rounded-3 "
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "310px" }}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center ">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/cart ">
                  <Popover placement="bottom" content={<CartPopover />}>
                  <AiOutlineShoppingCart size={20} />
                  </Popover>
                  <span className="text-white circle fw-bolder" style={{backgroundColor:"rgb(3, 207, 252)",position:"relative" ,bottom:"11px",right:"12px"}}>{counter}</span>
                 
                </Link>
              </li>

              {!(isAuthenticated && isTokenValid) ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/teach-with-us">
                      Teach With Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link " to="/student/register">
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/login">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  {isInstructorPresent ? (
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Student
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}

                  <li className="nav-item">
                    <Link className="nav-link " to="/logout">
                      Logout
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link " to="/profile">
                      <Popover placement="bottom" content={<Profile />}>
                      <CgProfile size={25} />
                      </Popover>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid mt-1 d-md-none">
        <form className="d-flex justify-content-center">
          <input
            className="form-control me-2 w-50 "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default Navbar;
