import React, { useState, useEffect } from 'react';
import UpperBar from "../UpperBar/UpperBar";

const Home = () => {
  const [movie, setMovie] = useState(null);
  const [movieTitle, setMovieTitle] = useState('');
  const OMDB_API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(movieTitle);
        const response = await fetch(`${API_URL}&t=${encodeURIComponent(movieTitle)}`);
        if (!response.ok) {
          throw new Error('Errore durante il fetch');
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Si è verificato un errore:', error);
      }
    };

    fetchData();
  }, [movieTitle]);

  const handleInputChange = (event) => {
    setMovieTitle(event.target.value); 
  };

  return (
    <div>
      <UpperBar title="Home" />

      {/* Input per inserire il titolo del film */}
      <input type="text" value={movieTitle} onChange={handleInputChange} placeholder="Inserisci il titolo del film" />

      {movie && (
        <div>
          <h1 className='text-secondary'>{movie.Title}</h1>
          <p className='text-secondary'>{movie?.Plot}</p>
          <img src={movie?.Poster} width={100} height={300} alt="Poster del film" />
          <p className='text-secondary'>Anno di uscita: {movie?.Year}</p>
          {/* Aggiungi altre informazioni che desideri visualizzare */}
        </div>
      )}
    </div>
  );
}

export default Home;
