import React from "react";

import { moviesData } from "./MoviesData";
import MovieCard from "./MovieCard/MovieCard";

const Products = ({ moviesList, nameSearch, ratingSearch }) => {
  return (
    <div   className="movies-list"
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
    }} >
     
        {moviesData.filter(
          (el) =>
            el.name.toLowerCase().includes(nameSearch.toLowerCase().trim()) &&
            el.rating >= ratingSearch
        )
        
        .map((product) => (
          <MovieCard key={product.id} product={product} />
        ))}

    </div>
  );
};

export default Products;
