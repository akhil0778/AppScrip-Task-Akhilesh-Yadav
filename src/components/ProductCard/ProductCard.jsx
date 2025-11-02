import React, { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <button
          className={`wishlist-btn ${isFavorite ? "active" : ""}`}
          onClick={handleFavoriteToggle}
          aria-label="Add to wishlist"
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        {product.description && <p className="desc">{product.description}</p>}
        <p className="price">₹{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
