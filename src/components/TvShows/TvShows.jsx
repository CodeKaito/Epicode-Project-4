import React from 'react'
import UpperBar from '../UpperBar/UpperBar'
import './tvshows.css'
import NetflixList from '../NetflixList/NetflixList'
import Meta from '../Meta/Meta'

const TvShows = () => {
  return (
    <div className='tvshows-container'>
        <UpperBar title="Tv Shows" />
        <Meta title="ARCHIVE81" subTitle="Universi Alternativi" />
        <NetflixList searchQuery="Harry Potter" />
    </div>
  )
}

export default TvShows