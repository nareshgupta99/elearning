import React from "react";
import "./cart.css";

function Cart() {
  return (
    <div>
      <h1 className="m-3"> Shopping Cart</h1>
      <div
        className="d-flex cart-container mt-5 gap-5"
        style={{ width: "100%" }}
      >
        <div>
          <div className="d-flex gap-5 ms-2">
            <img src="./computer-cart.jpg" width="120" height="68" />
            <div className="heading">
              <p style={{ fontWeight: " 700" }}>
                JSP, Servlets and JDBC for Beginners: Build a Database App
              </p>
              <p>By Chad Darby</p>
              <div>
                <span>9 total hours</span>
                <span>118 lectures</span>
                <span>All levels</span>
              </div>
            </div>
            <a href="#">Remove</a>
            <div>
              <p>&#8377;389</p>
              <p>
                <del>2879</del>
              </p>
            </div>
          </div>
          <hr />

          <div>
            <div className="d-flex gap-5 ms-2">
              <img src="./computer-cart.jpg" width="120" height="68" />
              <div className="heading">
                <p style={{ fontWeight: "700" }}>
                  JSP, Servlets and JDBC for Beginners: Build a Database App
                </p>
                <p>By Chad Darby</p>
                <div>
                  <span>9 total hours</span>
                  <span>118 lectures</span>
                  <span>All levels</span>
                </div>
              </div>
              <a href="#">Remove</a>
              <div>
                <p>&#8377;389</p>
                <p>
                  <del>2879</del>
                </p>
              </div>
            </div>
            <hr />
          </div>

          <div>
            <div className="d-flex gap-5 ms-2">
              <img src="./computer-cart.jpg" width="120" height="68" />
              <div className="heading">
                <p style={{ fontWeight: "700" }}>
                  JSP, Servlets and JDBC for Beginners: Build a Database App
                </p>
                <p>By Chad Darby</p>
                <div>
                  <span>9 total hours</span>
                  <span>118 lectures</span>
                  <span>All levels</span>
                </div>
              </div>
              <a href="#">Remove</a>
              <div>
                <p>&#8377;389</p>
                <p>
                  <del>2879</del>
                </p>
              </div>
            </div>
            <hr />
          </div>
        </div>

        <div className="amount">
          <h5>Total:</h5>
          <h2 style={{ fontSize: "60px" }}>
            <span style={{ fontSize: "60px" }}>&#8377;</span>389
          </h2>
          <h6>
            <del>&#8377;2877</del>
          </h6>
          <button className="btn checkout-btn">Checkout</button>
          <hr className="" style={{ width: "70vh" }} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
