import React from "react";

function SideNavbar() {
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
              style="width: 310px "
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
                <a className="nav-link " aria-current="page" href="index.jsp ">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="teach-with-us.jsp">
                  Teach With Us
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="cart.jsp ">
                  cart
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="registration.jsp"></a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="login.jsp"></a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="logout"></a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="profile.jsp">
                  {" "}
                  <image
                    src="./images/image.jpg"
                    width="64px"
                    height="64px"
                    className="img-fluid rounded d-none"
                  />
                </a>
              </li>
              <li></li>
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

export default SideNavbar;
