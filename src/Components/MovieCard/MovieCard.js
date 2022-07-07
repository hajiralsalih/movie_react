import React from 'react';

import Rate from '../Rate';

import './MovieCard.css';

const MovieCard = ({
  movie: { name, rating, image },
}) => {
  return (
    <div className="card">
      <div className="card_left">
        <img src={image} alt="poster" />
      </div>
      <div className="card_right">
        <h2>{name}</h2>
      {/*  */}
        <div className="card_right__rating">
          <Rate rating={rating} />
        </div>
     {/*  */}
      </div>
    </div>
  );
};

export default MovieCard;
