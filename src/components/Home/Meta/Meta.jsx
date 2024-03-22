import React from 'react';
import './meta.css';

const Meta = (props) => {
    const { title, subTitle, desc } = props;
  return (
    <div className="metaContainer">
        <h1 className='metaContainer-title'>{title}</h1>
        <h2 className='metaContainer-subtitle text-uppercase'>{subTitle}</h2>
        <div className=''>
            <p className='metaContainer-desc'>{desc}</p>
        </div>
        
    </div>
  )
}

export default Meta