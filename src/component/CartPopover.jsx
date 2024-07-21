import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../redux/action/cartActions";

function CartPopover() {
  let cart = useSelector((state) => state.cart.courses);
  const dispatch=useDispatch();
  console.log(cart)

  return (
    <div >
      <div className="" style={{ width: "18rem" }}>
        <ul className="list-group ">
          {cart.map((c) => (
            <div className="d-flex">
            <Link to="/cart"  className="d-flex" style={{ textDecoration: "none" }}>
              {" "}
              <li className=" pb-5">
                <img src={c.url} style={{ width: "80px", borderRadius: "4px" }} />{" "}
               {c.title}<p style={{ fontSize: "10px" }}> naresh@example.com </p>
              </li>{" "}
            </Link>
            <button className="btn btn-danger" style={{height:"3em" ,marginLeft:"1em"}}
              onClick={()=>{
               dispatch(removeFromCart(c.id))
              }}
            >
              
              Remove
            
            </button  >
            </div>
          ))}

          {cart.length === 0 ? (
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
