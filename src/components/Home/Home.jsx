import React from 'react';
import Meta from './Meta/Meta';
import MovieList from '../MovieList/MovieList';

const Home = () => {
  return (
    <div>
      <div>
        <Meta title="Sopravvissuto" subTitle="The Martian" desc="Un astronauta dato per morto dopo una tempesta di sabbia viene abbandonato su Marte e lotta per sopravvivere su un pianeta ostile, inviando un messaggio a casa." />
      </div>
      <MovieList />
    </div>
    
  );
}

export default Home;
