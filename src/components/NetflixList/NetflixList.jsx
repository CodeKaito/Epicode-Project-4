import React, { useState, useEffect } from "react";
import FetchMovie from "../../utils/fetchMovie";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './netflixlist.css'

import { Link } from "react-router-dom";
import NetflixCard from "../NetflixCard/NetflixCard";

const NetflixList = ({ searchQuery }) => {
  // Utilizzo dello stato con useState per i dati e il caricamento
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Impostazioni per lo slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Dopo aver determinato useState, effettuo la fetch con useEffect
  useEffect(() => {
    const fetchData = async () => {
      const token = "d0b72ce5";
      const endpoint = `http://www.omdbapi.com/?apikey=${token}&movie&s=${searchQuery}`;

      try {
        const response = await fetch(endpoint);
        if (response.ok) {
          const responseData = await response.json();
          // Aggiorno lo stato con i dati ottenuti dalla chiamata API
          setData(responseData);
          setIsLoaded(true);
          console.log("Successo durante il recupero dei dati");
        } else {
          console.log("Errore durante il recupero dei dati");
        }
      } catch (error) {
        console.log(error);
      }
    };

    // Chiamata alla funzione di fetch
    fetchData();
  }, [searchQuery]); // Dipendenza da props.searchQuery

  // Rendering di tutto (con return, NON render)
  return (
    <div className="pt-5 bg-dark">
      {/* Utilizzo dello Slider con le impostazioni specificate */}
      <Slider {...settings}>
        {/* Mappo i dati ottenuti dalla chiamata API */}
        {data.Search &&
          data.Search.map((movie) => (
            <div key={movie.imdbID}>
              {/* Link per rendere cliccabile la locandina */}
              <Link to={`/movie-details/${movie.imdbID}`}>
                {/* Componente SingleMovie con l'immagine del film */}
                <NetflixCard img={movie.Poster} />
              </Link>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default NetflixList;