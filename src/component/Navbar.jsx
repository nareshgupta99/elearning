import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import AuthService from "../service/AuthService";
import "./navbar.css";
import { useSelector } from "react-redux";
import { Popover } from "antd";
import Profile from "./Profile";
import CartPopover from "./CartPopover";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { search } from "../service/CourseService";

function Navbar({ auth }) {
  const navigate=useNavigate();
  let cart = useSelector((state) => state.cart);
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [counter, setCounter] = useState();
  let roles = auth.user.roles;
  let user=auth.user;
  console.log(user)
  let isAuthenticated = auth.isAuthenticated;
  let isTokenValid = AuthService.isTokenValid(auth.token);

  let isInstructorPresent = AuthService.isInstructorPresent(roles);

  useEffect(() => {
    let num = cart.courses.length;
    setCounter(num);
  }, [cart]);

  function searchHandler(e) {
    console.log(query);
    navigate(`/search/${query}`)
    setQuery("")
  }

  function changeHandler(e) {
    let val = e.target.value;
    setQuery(val);
    search(val)
      .then((res) => {
        setSearchData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function clearSearch() {
    setQuery("");
    setSearchData([]);
  }

  return (
    <header className=" sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex">
          <a className="navbar-brand mx-lg-3" >
           <Link to="/" style={{textDecoration:"none",color:"black"}}> E-Learning </Link>
          </a>

          <div className="d-none d-md-block">
            <div
              className="flex border items-center bg-white   "
              style={{ borderRadius: "5px" }}
            >
              <input
                type="text"
                className=" my-1  p-2 ml-2  w-full focus:outline-none"
                placeholder="Search Products.."
                value={query}
                onChange={changeHandler}
                style={{
                  width: "310px",
                  outline: "none",
                  border: "none",
                  height: "30px",
                }}
              />
              {query || searchData.length > 0 ? (
                <RxCross2
                  onClick={clearSearch}
                  className="pr-2 "
                  style={{ cursor: "pointer" }}
                  size={15}
                />
              ) : (
                ""
              )}

              <AiOutlineSearch
                size={25}
                className="cursor-pointer pr-4"
                onClick={searchHandler}
                style={{ cursor: "pointer" }}
              />
            </div>

            <div
              className="border bg-white rounded-xl  border-t "
              style={{
                position: "absolute",
                zIndex: 10,
                width: "351px",
                borderRadius: "10px",
              }}
            >
              {searchData.map((course) => (
                <Link to={`search/${course.title}`} onClick={()=>{}} className="">
                  {" "}
                  <div className="p-2 hover:bg-gray-50  " key={course.courseId}>
                    {" "}
                    {course.title} {course.subtitle}
                  </div>{" "}
                </Link>
              ))}
            </div>
          </div>

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
              <li>

              <div className="container-fluid mt-1 d-md-none 0">
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
            </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/cart ">
                  <Popover placement="bottom" content={<CartPopover />}>
                    <AiOutlineShoppingCart size={20} />
                  </Popover>
                  <span
                    className="text-white circle fw-bolder"
                    style={{
                      backgroundColor: "rgb(3, 207, 252)",
                      position: "relative",
                      bottom: "11px",
                      right: "12px",
                    }}
                  >
                    {counter}
                  </span>
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
                    <Link className="nav-link " to="/auth/user-profile">
                      <Popover placement="bottom" content={<Profile />} >
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

     
    </header>
  );
}

export default Navbar;
