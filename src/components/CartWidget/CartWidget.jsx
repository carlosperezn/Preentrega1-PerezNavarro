import React from "react";

const CartWidget = ({ cantCarrito }) => {
  return (
    <>
      <button className="btn btn-light">
        <i className="bi bi-cart">
          <p>{cantCarrito}</p>
        </i>
      </button>
    </>
  );
};

export default CartWidget;
