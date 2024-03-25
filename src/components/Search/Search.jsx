import React, { useState } from 'react';
import FetchMoviebyTitle from '../../utils/fetchMovie';
import './search.css';

const Search = () => {
  const [movieTitle, setMovieTitle] = useState('');

  const handleInputChange = (event) => {
    setMovieTitle(event.target.value); 
  };

  const movie = FetchMoviebyTitle({ movieTitle });

  return (
    <div className='container search-container'>
      <h2 className='text-light'>Search a title</h2>
      {/* Input per inserire il titolo del film */}
      <input
        type="text"
        value={movieTitle}
        onChange={handleInputChange}
        className="form-control"
        placeholder="Insert a title"
      />

      {movie && (
        <div className="mt-4">
          <h1 className="text-secondary">{movie.Title}</h1>
          <p className="text-secondary">{movie?.Plot}</p>
          <img
            src={movie?.Poster}
            className="img-fluid"
            alt="Poster del film"
          />
          <p className="text-secondary">Anno di uscita: {movie?.Year}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
