
import React from "react";
import { Link } from "react-router-dom";
import Rate from '../Rate';

import './MovieCard.css';

const ProductCard = ({ product }) => {
  return (

    <div className="card">
      <div className="card_left">
     <img src={product.img} alt={product.name} />
     </div>
      <div className="card_right">
        
        <h2>{product.name}</h2> 
        <div className="card_right__rating">
          <Rate rating={product.rating} />
        </div> 
        <div className="card_right__review">
          <p>{product.description}</p>
        </div>
        <div className="card_right__button">
          <Link to={`/about/${product.id}`} state={product}>  
           WATCH MORE... </Link>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
