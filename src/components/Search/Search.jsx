// Search.js
import React, { useState } from 'react';
import FetchMovie from '../../utils/fetchMovie';

const Search = () => {
  const [movieTitle, setMovieTitle] = useState('');

  const handleInputChange = (event) => {
    setMovieTitle(event.target.value); 
  };

  const movie = FetchMovie({ movieTitle });

  return (
    <div>
        <h2 className='text-light'>Search a title</h2>
      {/* Input per inserire il titolo del film */}
      <input
        type="text"
        value={movieTitle}
        onChange={handleInputChange}
        placeholder="Inserisci il titolo del film"
      />

      {movie && (
        <div>
          <h1 className="text-secondary">{movie.Title}</h1>
          <p className="text-secondary">{movie?.Plot}</p>
          <img
            src={movie?.Poster}
            width={100}
            height={300}
            alt="Poster del film"
          />
          <p className="text-secondary">Anno di uscita: {movie?.Year}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
