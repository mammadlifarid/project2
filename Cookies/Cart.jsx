import React from 'react';
import { useSelector } from 'react-redux';

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="modal fade" id="cart_modal">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title mx-2">Your Cart</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="parent">
              {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                cartItems.map((product, index) => (
                  <div key={index} className="child">
                    <img
                      className="cart-item-photo"
                      src={product.img_url}
                      alt={`${product.brand} ${product.model}`}
                    />
                    <div className="cart-item-details">
                      <h4 className="cart-item-name">
                        <span className="text-bold">{product.brand}</span>{" "}
                        {product.model}
                      </h4>
                      <p className="cart-item-specs">
                        <span className="text-bold">Specifications:</span>{" "}
                        {product.description}
                      </p>
                      <p className="cart-item-price">
                        <span className="text-bold">Price:</span>{" "}
                        <span className="text-color-primary">
                          ${product.price.toFixed(2)}
                        </span>
                      </p>
                    </div>
                    <div className="cart-item-total">
                      <p>
                        <span className="text-bold">Total:</span>{" "}
                        <span className="text-color-primary">
                          ${product.price.toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="subtotal">
              <p className="subtotal-label text-bold text-color-primary">
                Subtotal:
              </p>
              <p className="subtotal-amount text-bold">${calculateTotal()}</p>
              <p className="terms-p">
                By continuing, you agree to Our
                <a href="#"> Conditions of Use</a> and
                <a href="#"> Privacy Notice</a>.
              </p>
            </div>
          </div>
          <div className="modal-footer mx-auto w-50">
            <button
              type="button"
              className="btn btn-linn btn-dark"
              data-dismiss="modal"
              data-target="#paymentModal"
              data-toggle="modal"
            >
              {" "}
              Pay <i className="fa-solid fa-caret-right"></i>{" "}
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
