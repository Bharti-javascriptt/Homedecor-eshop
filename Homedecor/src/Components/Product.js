import React from "react";
import "./Home.css"; // Import your CSS file for styling
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [state, dispatch]=useStateValue()

  const addToBasket = () => {
    console.log("Add to basket button clicked");

    dispatch({
      type:"ADD_To_BASKET",
      item:{
        id:id,
        image:image,
        price:price,
        rating:rating
      }
    });
    // Implement your addToBasket functionality here
  };

  return (
    <div className="product">
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-price">
            <strong>${price}</strong>
          </p>
          <div className="card-rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span key={i}>⭐</span>
              ))}
          </div>
          <button className="card-button" onClick={addToBasket}>
            Add To Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
