import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "./cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Item({ img_url, brand, model, description, price }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = {
      id: brand + model, // Create a unique ID
      img_url,
      brand,
      model,
      description,
      price,
    };
    dispatch(addItemToCart(item));
    toast.success("Added item to cart successfully!");
  };

  return (
    <div className="item_div">
      <img src={img_url} alt="item" />
      <div className="item-inner">
        <span>
          <b> {brand} </b> {model}{" "}
        </span>{" "}
        <p>
          <i className=""> Specifications: </i> {description}{" "}
        </p>{" "}
        <p className="price">
          Price: <b> $ {price} </b>{" "}
        </p>{" "}
        <div className="add-cart" onClick={handleAddToCart}>
          <i className="fa-solid fa-cart-plus" id="cart_btn">
            {" "}
          </i>{" "}
          <h2 className="ADD-CART-h2"> Add to cart </h2>{" "}
        </div>{" "}
      </div>{" "}
      <ToastContainer className="NotificationContainer" />
    </div>
  );
}
