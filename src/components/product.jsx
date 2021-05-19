import React from "react";
import "../App.css";

export default function Product({
  title,
  price,
  /*   description, */
  category,
  image
}) {
  return (
    <div>
      <div className="product-container">
        {category === "electronics" && price > 400 ? (
          <div className="badge-container">10% OFFER!</div>
        ) : null}
        <div className="prices-container">
          {category === "electronics" && price > 400 ? (
            <div className="electronics-price-container">${price}</div>
          ) : (
            <div className="amount-container">${price}</div>
          )}

          {category === "electronics" && price > 400 ? (
            <div className="offer-container">${price - price * 0.1}</div>
          ) : null}
        </div>

        <div className="title-container">{title}</div>
        <div>
          <button>
            <img src={image} alt={image} />
          </button>
        </div>
      </div>
    </div>
  );
}
