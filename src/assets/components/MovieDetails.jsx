/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Navbar } from './Navbar';

export const MovieDetails = () => {
  const pathToMovies = '../../../Database/movies.json';
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`../../../Database/movies.json`)
      .then(response => {
        const movieData = response.data.movies.find(m => m.movieID === parseInt(id));
        setMovie(movieData);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <>
     <Navbar title={movie.title} />
    <div className="flex m1-20 justify-center items-center h-screen bg-gray-100">
      
        <img
          src={movie.imageUrl}
          alt={movie.title}
          className="w-64 h-auto rounded-lg shadow-md"
        />
        <div className="ml-20">
            <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          <p className="text-gray-700 mb-4">{movie.description}</p>
          <p><strong>Country:</strong> {movie.country}</p>
          <p><strong>Genre:</strong> {movie.genre.join(', ')}</p>
          <p><strong>Year:</strong> {movie.year}</p>
          <p><strong>Type:</strong> {movie.type}</p>

            <div className="mt-6 flex space-x-4">
                <button
                className="bg-indigo-500 text-white py-1 px-6 rounded-full"
                style={{
                    backgroundColor: '#7379FF',
                    borderRadius: '15px 15px 15px 15px',
                    padding: '7px 24px',
                    width: '82px',
                    height: '32px',
                    opacity: 1
                }}
                >
                Edit
                </button>
                <button
                className="bg-indigo-500 text-white py-1 px-6 rounded-full"
                style={{
                    backgroundColor: '#7379FF',
                    borderRadius: '15px 15px 15px 15px',
                    padding: '7px 24px',
                    width: '105px',
                    height: '32px',
                    opacity: 1
                }}
                >
                Delete
                </button>
            </div>
        </div>
      
    </div>
    </>
  );
};
