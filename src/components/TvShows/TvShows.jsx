import React from 'react'
import UpperBar from '../UpperBar/UpperBar'
import './tvshows.css'
import NetflixList from '../NetflixList/NetflixList'
import Meta from '../Meta/Meta'

const TvShows = () => {
  return (
    <div className='tvshows-container'>
        <UpperBar title="Tv Shows" />
        <div>
          <Meta title="ARCHIVE81" subTitle="Universi Alternativi" />
        </div>
        <NetflixList searchQuery="Halloween" />
        <NetflixList searchQuery="Horror" />
    </div>
  )
}

export default TvShows