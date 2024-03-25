import React from 'react';
import Meta from './Meta/Meta';
import NetflixList from '../NetflixList/NetflixList';
import './home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <div>
        <Meta title="Sopravvissuto" subTitle="The Martian" desc="Un astronauta dato per morto dopo una tempesta di sabbia viene abbandonato su Marte e lotta per sopravvivere su un pianeta ostile, inviando un messaggio a casa." />
      </div>
      <NetflixList searchQuery="Harry Potter" />
    </div>
    
  );
}

export default Home;
