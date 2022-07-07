import React from 'react';

import Rate from '../Rate';

import './FilterMovie.css';

const FilterMovie = ({ setNameSearch, ratingSearch, setRatingSearch }) => {
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter Movie Name !!"
          onChange={(e) => setNameSearch(e.target.value)}
        />
        <div className="rating-search">
          <Rate rating={ratingSearch} setRatingSearch={setRatingSearch} />
        </div>
      </div>
    </div>
  );
};

export default FilterMovie;
