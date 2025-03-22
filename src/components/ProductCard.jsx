import React from "react";
import '../style/ProductCard.css';

const ProductCard = (props) => {
    return (
      <div className="product-card-container">
        <div className="product-card">
          <div className="product-card-image">
            <img src={props.image} alt="Product Image" className="product-img" />
          </div>
          <div className="product-card-content">
            <h3 className="product-card-title">{props.title}</h3>
            <p className="product-card-description">
              {props.description}
            </p>
            <button className="product-card-btn">شراء</button>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;
