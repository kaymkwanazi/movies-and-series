import React, {useState} from 'react'
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
              </label>
              <input 
                type="file"
                id="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
    
            {/* Right section for form inputs */}
            <div className="w-2/3">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Movie/ Series Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Movie/ Series Name"
                  className="mt-1 pl-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
    
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Movie/ Series Description"
                  className="mt-1 block pl-2 w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
    
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <input 
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Search Country"
                  className="mt-1 pl-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
    
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Year</label>
                <input 
                  type="date"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="mt-1 pl-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
    
              <div className="flex mb-4 space-x-4">
                <div>
                  <input 
                    type="radio"
                    name="type"
                    value="movie"
                    checked={formData.type === 'movie'}
                    onChange={handleChange}
                    className="focus:ring-indigo-500"
                  />
                  <label className="ml-2 text-sm font-medium text-gray-700">Movie</label>
                </div>
    
                <div>
                  <input 
                    type="radio"
                    name="type"
                    value="series"
                    checked={formData.type === 'series'}
                    onChange={handleChange}
                    className="focus:ring-indigo-500"
                  />
                  <label className="ml-2 text-sm font-medium text-gray-700">Series</label>
                </div>
              </div>
    
              <button 
                type="submit"
                className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-full w-full hover:bg-indigo-700"
              >
                Save
              </button>
            </div>
          </form>
        </div>
    </>
     );
};
