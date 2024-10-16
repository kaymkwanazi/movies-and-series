import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Navbar } from './Navbar';
import { useNavigate } from 'react-router-dom'


export const MovieDetails = ({movies}) => {
  const pathToMovies = '/Database/movies.json';
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit/&{id}`); //navigates to edit page with movie/seris ID
  }


  useEffect(() => {
    axios.get(pathToMovies)
      .then(response => {
        const movieData = response.data.movies.find(m => m.movieID === parseInt(id));
        setMovie(movieData);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);

  const deleteMovie = (title) => {
    const updatedMovies = movie.filter(movie => movie.title !== title);
    // setMovies(updatedMovies);
    // Optionally, update the JSON file on the server
  };
  
  if (!movie) return <div>Loading...</div>;

  return (
    <>
     <Navbar title={movie.title} />
    <div className="flex flex-wrap justify-center items-center h-screen bg-gray-100">
        <img
          src={movie.imageUrl}
          alt={movie.title}
          className="w-64 h-auto rounded-lg shadow-md mb-10"
        />
        <div className="ml-20">
            <h1 className="text-3xl font-bold mb-5">{movie.title}</h1>
          <p className="text-gray-700 mb-4 whitespace-pre-line">
            {movie.description}</p>
          <p><strong>Country:</strong> {movie.country}</p>
          <p><strong>Genre:</strong> {movie.genre.join(', ')}</p>
          <p><strong>Year:</strong> {movie.year}</p>
          <p><strong>Type:</strong> {movie.type}</p>

            <div className="mt-6 flex space-x-4">
                <button onClick={() => handleEdit(movie.id)}
                  className="bg-indigo-500 text-white py-1 px-6 rounded-full">Edit</button>
                
                {/* delete button */}
                <button onClick={() => deleteMovie(movie.title)} 
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
