// FetchMovie.js
import { useState, useEffect } from 'react';

const FetchMovie = ({ movieTitle }) => {
  const [movie, setMovie] = useState(null);
  const OMDB_API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(movieTitle);
        const response = await fetch(`${API_URL}&t=${encodeURIComponent(movieTitle)}`);
        if (!response.ok) {
          throw new Error('Error while fetching movie: ' + movieTitle);
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error with the fetchData function:', error);
      }
    };

    fetchData();
  }, [movieTitle]);

  return movie;
};

export default FetchMovie;
