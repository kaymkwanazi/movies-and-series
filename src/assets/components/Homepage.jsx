/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';

export const Homepage = () => {
  const pathToMovies = '../../../Database/movies.json';
  const pathToSeries = '../../../Database/series.json';
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  

    useEffect(() => {
      axios.get(pathToMovies)
              .then(response => {
                  setMovies(response.data.movies);
              })
              .catch(error => {
                  console.error('Error fetching the movie data:', error);
              });
      }, []);

    useEffect(() => {
      axios.get(pathToSeries)
              .then(response => {
                setSeries(response.data.series);
              })
              .catch(error => {
                  console.error('Error fetching the movie data:', error);
              });
      }, []);



  return (
    <div>
      <Navbar title='' />
      {/* ------------mOVIES-------------- */}
          <div className='mt-20 mb-20 text-center decoration text-xl'>LATEST MOVIES</div>
            <div>
                <div className='flex justify-center space-x-16'>
                  {movies.slice(0, 4).map((movie, index) => (
                    <Link to={`/movies/${movie.movieID}/${movie.title}`} key={index}>
                      <img
                        src={movie.imageUrl}
                        alt={movie.title}
                        className='h-56 w-40 object-container'
                      />
                    </Link>
                  ))}
                </div>
                <div className='flex justify-center space-x-16'>
                  {movies.slice(4, 8).map((movie, index) => (
                      <img
                        key={index}
                        src={movie.imageUrl}
                        alt={movie.title}
                        className='h-56 w-40 object-container mt-20'
                      />
                   
                  ))}
                </div>
                <div className="flex justify-end items-end">
                    <button className='bg-custom-blue hover:bg-blue-600 rounded-full py-1 px-6 mr-64 mt-5 text-white text-xs'>
                        <Link to='/movies'>More</Link>
                    </button>
                </div>
          </div>

          
          {/* -------SERIES----------- */}
          <div className='mt-20 mb-20 text-center decoration text-xl'>LATEST Series</div>
              <div>
                  <div className='flex justify-center space-x-16'>
                      {series.slice(0, 4).map((serie, index) => (
                          <img
                              key={index}
                              src={serie.imageUrl }
                              alt={serie.title}
                              className='h-56 w-40 object-container'
                          />
                      ))}
                  </div>
                  <div className='flex justify-center space-x-16'>
                      {series.slice(4, 8).map((serie, index) => (
                          <img
                              key={index}
                              src={serie.imageUrl}
                              alt={serie.title}
                              className='h-56 w-40 object-container mt-20'
                          />
                      ))}
                  </div>
                  <div className="flex justify-end items-end">
                      <button className='bg-custom-blue hover:bg-blue-600 rounded-full py-1 px-6 mr-64 mt-5 text-white text-xs'>
                          <Link to='/series'>More</Link>
                      </button>
                  </div>
            </div>
        
    </div>
  )
}
