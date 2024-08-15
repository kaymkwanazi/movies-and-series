/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Navbar } from './Navbar';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
// import { type } from 'os';


export const Addmovie = () => {
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

      const moviesLength = movies.length;
      const seriesLength = series.length;

    const top100Countries = [
        { name: 'China' },
        { name: 'India' },
        { name: 'United States' },
        { name: 'United Kingdom' },
        { name: 'South Africa' },
        // ... other countries
    ];

    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [country, setCountry] = useState('');
    const [year, setYear] = useState('');
    const [type, setType] = useState('movie');  // default type

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target.result;
                img.onload = () => setImage(img);
                img.onerror = () => setError('Error loading image');
            };
            reader.onerror = () => setError('Error reading file');
            reader.readAsDataURL(file);
        } else {
            setError('Please upload a valid image file');
        }
    };

    const writeFile = (fileName, content) => {
      const apiEndpoint = 'http://localhost:3000/write-file';
  
      axios.post(apiEndpoint, { fileName, content })
          .then(response => {
              console.log("🚀 ~ writeFile ~ response.data.message:", response.data.message)
          })
              
          .catch(error => {
              console.error('Error writing the file:', error);
              console.log("🚀 ~ writeFile ~ error:", error)
          });
  };

    const handleSave = () => {
      let newEntry = {
        title,
        description,
        country,
        year,
       imageUrl: image ? image.src : '',
    };

    if (type === 'movies'){
      newEntry = {
        ...newEntry, movieID: moviesLength + 1,
      };
    }

    if (type === 'series'){
      newEntry = {
        ...newEntry, seriesID: seriesLength + 1,
      };
    }
    const content = type === 'movie' ? { movies: newEntry } : { series: newEntry };
    const fileName = type === 'movie' ? 'movies.json' : 'series.json';
      console.log("🚀 ~ handleSave ~ fileName:", fileName)
      
  
     writeFile(fileName, content);
  };

    return (
        <div>
            <Navbar title='Add Movie/Series' />
            <div className='flex mt-20'>
                {/* First Column for poster uploading */}
                <div className='w-1/2 flex-wrap'>
                    <div className="ml-96 object-contain items-center justify-center min-h-screen bg-gray-100">
                        <div className="w-80 h-96 border-2 border-none bg-slate-300 flex flex-wrap items-center justify-center text-center">
                            <label htmlFor="file-upload" className="cursor-pointer text-black">
                                <input type="file" onChange={handleImageUpload} />
                                {error && <p>{error}</p>}
                                {image && <img src={image.src} alt="Uploaded" />}
                            </label>
                        </div>
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                    </div>
                </div>
                {/* Second Column */}
                <div className='w-1/2'>
                    {/* Div for Form */}
                    <form className='w-full max-w-md flex-wrap'>

                        <div className='mb-4'>
                            <label className='block text-black-500 text-sm font-normal mb-2' htmlFor='title'>
                                Movie/ Series Name
                            </label>
                            <input
                                className='w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none border border-gray rounded'
                                id='title'
                                type='text'
                                placeholder='Movie/ Series Name'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-black-500 text-sm font-normal mb-2' htmlFor='description'>
                                Description
                            </label>
                            <textarea
                                className='w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none border border-gray rounded'
                                id='description'
                                placeholder='Movie/ Series Description'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows='4'
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-black-500 text-sm font-normal mb-2' htmlFor='country'>
                                Country
                            </label>
                            <Autocomplete
                                id="free-solo-demo"
                                freeSolo
                                options={top100Countries.map((option) => option.name)}
                                renderInput={(params) => <TextField {...params} label="Search Country" />}
                                value={country}
                                onChange={(event, newValue) => setCountry(newValue)}
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-black-500 text-sm font-normal mb-2' htmlFor='year'>
                                Year
                            </label>
                            <input
                                className='w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none border border-gray rounded'
                                id='year'
                                type='text'
                                placeholder='yyyy/mm/d'
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            />
                        </div>

                        <div className='mb-4'>
                          <div className='inline-flex items-center w-full'>
                              <div className='flex items-center mr-20'>
                                  <input
                                      className='mr-1 leading-tight'
                                      type='radio'
                                      id='movie'
                                      name='type'
                                      value='movie'
                                      checked={type === 'movie'}
                                      onChange={() => setType('movie')}
                                  />
                                  <label className='text-gray-700' htmlFor='movie'>
                                      Movie
                                  </label>
                              </div>
                              <div className='flex items-center ml-20'>
                                  <input
                                      className='mr-1 leading-tight'
                                      type='radio'
                                      id='series'
                                      name='type'
                                      value='series'
                                      checked={type === 'series'}
                                      onChange={() => setType('series')}
                                  />
                                  <label className='text-gray-700' htmlFor='series'>
                                      Series
                                  </label>
                              </div>
                          </div>
                        </div>

                        <div className='mb-4'>
                            <div className='w-full'>
                                <button type='button' onClick={handleSave} className='w-full py-2 px-6 bg-[#7379FF] text-white rounded-full'>
                                    Save
                                </button>
                                {error && <p>{error}</p>}
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
