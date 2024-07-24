import React, { useEffect, useState } from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { removeAllFromCart, removeFromCart } from "../redux/action/cartActions";
import { toast } from "react-toastify";
import {
  initiatePayment,
  paymentVerification,
  updateOrder,
} from "../service/paymentService";
import { privateAxios } from "../service/helper";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  let cart = useSelector((state) => state.cart);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState({
    originalPrice: 0,
    discountedPrice: 0,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    setCartItems(cart.courses);
    updateTotal(cart.courses);
  }, [cart]);

  const updateTotal = (items) => {
    let disSum = 0;
    let origSum = 0;
    items.forEach((course) => {
      disSum += Number.parseInt(course.discountedPrice);
      origSum += Number.parseInt(course.originalPrice);
    });
    setTotal({ originalPrice: origSum, discountedPrice: disSum });
  };

  function cartDetail() {
    let course = [];
    cartItems.forEach((c) => course.push(c.courseId));
    return course;
  }

  function paymentStart() {

    let amt = total.originalPrice - total.discountedPrice;

    let formData = new FormData();
    formData.append("amount", amt);
    initiatePayment(formData, "formdata")
      .then(({ data }) => {
        if (data.status === "created") {
          checkOut(data, "");

        }
      })
      .catch((err) => {
        console.log(err);
      });

  }



  function checkOut(data) {

    const options = {
      key: "",
      amount: data.amount,
      currency: "INR",
      name: "E-Learning ",
      description: "",
      image:
        "https://t3.ftcdn.net/jpg/01/19/17/16/240_F_119171661_QK0G1WTgm2u5OUnXhs2p7SMqpvLhNete.jpg",
      order_id: data.id,
      handler: function (response) {
        const formData = new FormData();
        let courses = cartDetail();
        let paymentDetails = {
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id,
          signature: response.razorpay_signature,
          coursesId: courses
        };
        paymentVerification(paymentDetails)
          .then(({ data }) => {
            if (data) {
              let coursesId = [];
              cartItems.forEach((course) => coursesId.push(course.courseId));
              dispatch(removeAllFromCart())
            }
          })
          .catch((err) => {
            console.log(err.message, "cancel");
          });
      },
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
    razorpay.on("payment.failed", function (response) {
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
    });

    razorpay.open();
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
                <img
                  src={item?.url}
                  width="120"
                  height="68"
                />
                <div className="heading">
                  <p style={{ fontWeight: " 700" }}>
                    {item.title}
                  </p>
                  <p>{item.instructorName}</p>
                  <div>
                    <span>{item.duration}</span>
                    <span>118 lectures</span>
                    <span>{item.level}</span>
                  </div>
                </div>
                <p className="" style={{ cursor: "pointer" }} onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </p>

                <div>
                  <p>&#8377;{item.originalPrice - item.discountedPrice}</p>
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

        {cartItems.length === 0 ? (
          <div>
            <div className="d-flex gap-5 ms-2 ">
              {/* <img src={""} width="120" height="68" /> */}
              <div className="heading">
                <p style={{ fontWeight: " 700", marginLeft: "" }}>
                  <Link to="/home" style={{ textDecorationLine: "none" }}>
                    {" "}
                    No, Item in cart click here to go courses page to add item
                    in a cart{" "}
                  </Link>
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
              {total.originalPrice - total.discountedPrice}
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
