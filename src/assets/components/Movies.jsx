
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Navbar } from './Navbar'

export const Movies = () => {
  const pathToMovies = '../../../Database/movies.json';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(pathToMovies)
            .then(response => {
                setMovies(response.data.movies);
            })
            .catch(error => {
                console.error('Error fetching the movie data:', error);
            });
    }, []);

  return (
    <>
        <div>
          <Navbar title ='LATEST MOVIES' />
        </div>
        <div className="flex justify-end items-end">
              <button className='bg-custom-blue hover:bg-blue-600 flex flex-wrap rounded-full py-1 px-6 mr-64 mt-5 text-white text-xs'>
                 <Link to='/Addmovie'>Add</Link>
              </button>
        </div>

        <div className='flex flex-wrap justify-center space-x-16 mt-20'>
            {movies.slice(0, 4).map((movies, index) => (
              <Link to= {`/movies/${movies.movieID}/${movies.title}`} key={index} >
                  <img
                  src={movies.imageUrl}
                  alt={movies.title}
                  className='h-56 w-40 object-container'
                  />
              </Link>
            ))}
          </div>
          <div className='flex flex-wrap justify-center space-x-16'>
            {movies.slice(4, 8).map((movie, index) => (
              <Link to= {`/movies/${movie.movieID}/${movie.title}`} key={index} >
                <img
                    key={index}
                    src={movie.imageUrl}
                    alt={movie.title}
                    className='h-56 w-40 object-container mt-20'
                  />
             </Link>
            ))}
          </div>
          <div className='flex justify-center space-x-16'>
            {movies.slice(8, 12).map((movie, index) => (
               <Link to= {`/movies/${movie.movieID}/${movie.title}`} key={index} >
                   <img
                      key={index}
                      src={movie.imageUrl}
                      alt={movie.title}
                      className='h-56 w-40 object-container mt-20'
                    />
                </Link>
              ))}
          </div>
          <div className='flex justify-center space-x-16'>
            {movies.slice(12, 16).map((movie, index) => (
               <Link to= {`/movies/${movie.movieID}/${movie.title}`} key={index} >
                   <img
                      key={index}
                      src={movie.imageUrl}
                      alt={movie.title}
                      className='h-56 w-40 object-container mt-20'
                    />
                </Link>
              ))}
          </div>
           
    </>
  )
}
