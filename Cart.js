import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="cart">
      <h2> Your Cart </h2>{" "}
      {cartItems.length === 0 ? (
        <p> Your cart is empty </p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img_url} alt={item.model} />{" "}
            <div className="cart-item-details">
              <span>
                {" "}
                <b> {item.brand} </b>
                {item.model}
              </span>
              <p> {item.description} </p>{" "}
              <p>
                {" "}
                Price: <b> $ {item.price} </b>
              </p>
            </div>{" "}
          </div>
        ))
      )}{" "}
    </div>
  );
}
