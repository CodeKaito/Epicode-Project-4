import React, { useState } from 'react';
import './detailcomponent.css';
import { FetchMoviebyId } from '../../utils/fetchMovie';
import { useParams } from 'react-router-dom';

const DetailComponent = () => {
    let { id } = useParams();
    console.log(id);

    const movie = FetchMoviebyId({ id });

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container pt-5'>
            <div className='row'>
                <div className='col-md-4 offset-md-4'>
                    <div className='card'>
                        <img src={movie.Poster} className='card-img-top' alt={movie.Title} />
                        <div className='card-body'>
                            <h5 className='card-title'>{movie.Title}</h5>
                            <p className='card-text'>Year: {movie.Year}</p>
                            <p className='card-text'>Director: {movie.Director}</p>
                            <p className='card-text'>Actors: {movie.Actors}</p>
                            <p className='card-text'>Plot: {movie.Plot}</p>
                            <a href={`https://www.imdb.com/title/${movie.imdbID}`} target='_blank' rel='noopener noreferrer' className='btn btn-primary'>View on IMDb</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailComponent;
