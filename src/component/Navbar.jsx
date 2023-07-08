import React, { useState } from "react";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { Link} from "react-router-dom";
import {CgProfile} from 'react-icons/cg';

function Navbar() {

    const [login,setLogin]=useState(false);

  

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
              style={{width: "310px" }}
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
                <Link className="nav-link" to="/teach-with-us">
                  Teach With Us
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/cart ">
                <AiOutlineShoppingCart size={20} />
                </Link>
              </li>
{login===false?
                <>
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
                :
              
<>
              <li className="nav-item">
                <Link className="nav-link " to="/logout">
                  Logout
                </Link>
                
              </li>
              


              <li className="nav-item">
                <Link className="nav-link " to="/profile">
                    <CgProfile size={25} />
                  
                </Link>
              </li>
              </>
}
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
