import React from 'react';
import './meta.css';
import { Button } from'react-bootstrap';
import { FaPlay } from 'react-icons/fa';
import { FaCircleInfo  } from "react-icons/fa6";

const Meta = (props) => {
    const { title, subTitle, desc } = props;
  return (
    <div className="metaContainer">
        <h1 className='metaContainer-title'>{title}</h1>
        <h2 className='metaContainer-subtitle text-uppercase'>{subTitle}</h2>
        <div className=''>
            <p className='metaContainer-desc'>{desc}</p>
        </div>
        <div className='d-flex'>
          <Button variant='light'>
            <div className='d-flex justify-content-center align-items-center py-2 px-3 mx-2'>
              <FaPlay className='fa-play' />
              <span className='ms-3 riproduci'>Riproduci</span>
            </div>
          </Button>
          <Button variant='secondary' className='mx-3 button-info'>
            <div className='d-flex justify-content-center align-items-center py-2 px-3'>
              <FaCircleInfo  className='FaCircleInfo ' />
              <span className='ms-3 altre-info'>Altre info</span>
            </div>
          </Button>
        </div>
        
    </div>
  )
}

export default Meta