import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartPopover() {
  let cart = useSelector((state) => state.cart);

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <ul className="list-group list-group-flush">
          {cart.courses.map((c) => (
            <Link to="/cart" style={{ textDecoration: "none" }}>
              {" "}
              <li className="list-group-item pb-5">
                <img src={""} style={{ width: "25px", borderRadius: "4px" }} />{" "}
               {c.title}<p style={{ fontSize: "10px" }}> naresh@example.com </p>
              </li>{" "}
            </Link>
          ))}

          {cart.courses.length === 0 ? (
            <li className="list-group-item pb-5">
              <p style={{ fontWeight: " 700", marginLeft: "" }}>
                <Link to="" style={{ textDecorationLine: "none" }}>
                  {" "}
                  No, Item in cart{" "}
                </Link>
              </p>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
}

export default CartPopover;
