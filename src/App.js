import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { moviesData } from './Components/MoviesData';

import MoviesList from "./Components/MoviesList";
import About from "./Components/About";
import Error from "./Components/Error/Error";
import FilterMovie from './Components/FilterMovie/FilterMovie';
import AddMovie from './Components/AddMovie/AddMovie';
import "./App.css";

function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (e, newMovie) => { 
    e.preventDefault();
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    <div className="App">
         <FilterMovie
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch} />
      
       <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AddMovie addNewMovie={addNewMovie} />
        </div>
        
      <Routes>  
        <Route index element={<MoviesList
          moviesList={moviesList}
          nameSearch={nameSearch}
          ratingSearch={ratingSearch} 
        />} />     

        <Route path="/about/:id" element={<About/>} />

        <Route path="/*" element={<Error />} />
      </Routes>
    
    </div>
  );
}

export default App;
