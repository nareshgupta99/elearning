import React, { useEffect, useState } from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart, removeFromCart } from "../redux/action/cartActions";
import { initiatePayment } from "../service/paymentService";
import axios from "axios";
import { privateAxios } from "../service/helper";
import { Link } from "react-router-dom";
function Cart() {
  let courses = useSelector((state) => state.cart.courses);
  let cart = useSelector((state) => state.cart);
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();
  const [total, setTotal] = useState({
    originalPrice: 0,
    discountedPrice: 0,
  });

  useEffect(() => {
    let disSum = 0;
    let origSum = 0;
    setCartItems(courses);
    courses.forEach((course) => {
      disSum = disSum + Number.parseInt(course.discountedPrice);
      origSum = origSum + Number.parseInt(course.originalPrice);
    });
    setTotal({ ...total, discountedPrice: disSum, originalPrice: origSum });
  }, [cart]);

  function paymentStart() {
    console.log("payment started");
    let amt = total.discountedPrice;
    let key;
    let formData = new FormData();
    formData.append("amount", amt);
    privateAxios.get("/payment/key").then(({ data }) => {
      key = data;
    });

    initiatePayment(formData)
      .then(({ data }) => {
        if (data.status === "created") {
          checkOut(data, key);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function checkOut(data, key) {
    const options = {
      key: key,
      amount: data.amount,
      currency: "INR",
      name: "E-Learning ",
      description: "",
      image:
        "https://t3.ftcdn.net/jpg/01/19/17/16/240_F_119171661_QK0G1WTgm2u5OUnXhs2p7SMqpvLhNete.jpg",
      order_id: data.id,
      callback_url: "http://localhost:3000/home",
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      notes: {
        address: "",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
    //  dispatch(emptyCart());
  }

  return (
    <div>
      <h1 className="m-3"> Shopping Cart</h1>
      <div
        className="d-flex cart-container mt-5 gap-5"
        style={{ width: "100%" }}
      >
        <div>
          {cartItems.map((item, index) => (
            <div key={index}>
              <div className="d-flex gap-5 ms-2 ">
                <img src={item.imageBytes} width="120" height="68" />
                <div className="heading">
                  <p style={{ fontWeight: " 700" }}>
                    JSP, Servlets and JDBC for Beginners: Build a Database App
                  </p>
                  <p>By Chad Darby</p>
                  <div>
                    <span>{item.duration}</span>
                    <span>118 lectures</span>
                    <span>{item.level}</span>
                  </div>
                </div>
                <p onClick={() => dispatch(removeFromCart(item.courseId))}>
                  Remove
                </p>
                <div>
                  <p>&#8377;{item.discountedPrice}</p>
                  <p>
                    <del>{item.originalPrice}</del>
                  </p>
                </div>
              </div>
              <hr />
            </div>
          ))}

          {/*** */}
        </div>

        {cartItems.length===0 ? (
           <div>
           <div className="d-flex gap-5 ms-2 ">
             {/* <img src={""} width="120" height="68" /> */}
             <div className="heading">
               <p style={{ fontWeight: " 700", marginLeft: "" }}>
                 <Link to="/home" style={{textDecorationLine:"none"}}> No, Item in cart click here to go courses page to add item in a cart </Link>
               </p>
             </div>
           </div>
           <hr />
           </div>

        ) : (
          <div className="amount">
            <h5>Total:</h5>
            <h2 style={{ fontSize: "60px" }}>
              <span style={{ fontSize: "60px" }}>&#8377;</span>
              {total.discountedPrice}
            </h2>
            <h6>
              <del>&#8377;{total.originalPrice}</del>
            </h6>
            <button className="btn checkout-btn" onClick={paymentStart}>
              Checkout
            </button>
            <hr className="" style={{ width: "70vh" }} />
          </div>
         
        )}
      </div>
    </div>
  );
}

export default Cart;
