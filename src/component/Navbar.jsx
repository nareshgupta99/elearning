import React, { useState } from "react";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { Link } from "react-router-dom";
import {CgProfile} from 'react-icons/cg';

function Navbar() {

    const [login,setLogin]=useState(false);
    

  return (
    <header class=" sticky-top">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid d-flex">
          <a class="navbar-brand mx-lg-3" href="index.jsp">
            E-Learning
          </a>

          <form class="d-none d-md-flex mx-lg-5">
            <input
              class="form-control me-2 rounded-3 "
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{width: "310px" }}
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center ">
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/teach-with-us">
                  Teach With Us
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/cart ">
                <AiOutlineShoppingCart size={20} />
                </Link>
              </li>
{login==false?
                <>
              <li class="nav-item">
                <Link class="nav-link " to="/registration">
                Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/login">
                Login
                </Link>
              </li>
                </>
                :
              
<>
              <li class="nav-item">
                <Link class="nav-link " to="/logout">
                  Logout
                </Link>
                
              </li>
              

              <li class="nav-item">
                <Link class="nav-link " to="/profile">
                    <CgProfile size={25} />
                  
                </Link>
              </li>
              </>
}
            </ul>
          </div>
        </div>
      </nav>

      <div class="container-fluid mt-1 d-md-none">
        <form class="d-flex justify-content-center">
          <input
            class="form-control me-2 w-50 "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default Navbar;
