import React from "react";

function SideNavbar() {
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
              style="width: 310px "
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
                <a class="nav-link " aria-current="page" href="index.jsp ">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="teach-with-us.jsp">
                  Teach With Us
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="cart.jsp ">
                  cart
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link " href="registration.jsp"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="login.jsp"></a>
              </li>

              <li class="nav-item">
                <a class="nav-link " href="logout"></a>
              </li>

              <li class="nav-item">
                <a class="nav-link " href="profile.jsp">
                  {" "}
                  <image
                    src="./images/image.jpg"
                    width="64px"
                    height="64px"
                    class="img-fluid rounded d-none"
                  />
                </a>
              </li>
              <li></li>
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

export default SideNavbar;
