
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Navbar } from './Navbar';
import React, {useEffect, useState} from 'react';
import fs from 'fs'


export const Addmovie = () => {

      const top100Countries = [
        { name: 'China' },
        { name: 'India' },
        { name: 'United States' },
        { name: 'Indonesia' },
        { name: 'Pakistan' },
        { name: 'Brazil' },
        { name: 'Nigeria' },
        { name: 'Bangladesh' },
        { name: 'Russia' },
        { name: 'Mexico' },
        { name: 'Japan' },
        { name: 'Ethiopia' },
        { name: 'Philippines' },
        { name: 'Egypt' },
        { name: 'Vietnam' },
        { name: 'DR Congo' },
        { name: 'Turkey' },
        { name: 'Iran' },
        { name: 'Germany' },
        { name: 'Thailand' },
        { name: 'United Kingdom' },
        { name: 'France' },
        { name: 'Italy' },
        { name: 'Tanzania' },
        { name: 'South Africa' }
    ];

    const [image, setImage] = useState (null);
    const [error, setError] = useState ('');
    const [title, setTitle] = useState ([]);
    const [description, setDescription] = useState ([]);
    const [country, setCountry] = useState ([]);
    const [year, setYear] = useState ([]);

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

    const handleSave = () => {
      if (title && description && country && year) {
        const newMovie = {
          title,
          description,
          country,
          year
    };
    
    // Readind existing file
    fs.readFile ('movies.json','utf-8',(err,data) => {
      if(err) {
        setError('Error finding file')
        return;
      }

      const movies = JSON.parse(data);
      movies.movies.push(newMovie);
    
        fs.writeFile('movies.json', JSON.stringify(movies, null, 2), (err) => {
          if (err) {
            setError('Error writing file');
            return;
          }

          setError('Movie saved successfully');
        });
      });
      } else {
        setError('Please fill out all fields');
      }
          
  };

  return (
    <div>
        <div>
          <Navbar title='Add Movie/Series' />
        </div>
        <div className='flex mt-20'>
        {/* First Column for poster uploading */}
        <div className='w-1/2'>
           <div className="ml-96 items-center justify-center min-h-screen bg-gray-100">
              <div className="w-80 h-96 border-2 border-none bg-slate-300 flex items-center justify-center text-center">
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
          <form className='w-full max-w-md'>

            <div className='mb-4'>
              <label  className='block text-black-500 text-sm font-normal mb-2'
                style={{
                  fontSize: '15px',
                  fontWeight: '400',
                  lineHeight: '18.15px',
                  textAlign: 'left'
                }} 
                htmlFor='title'>
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
              <label  className='block text-black-500 text-sm font-normal mb-2'
                style={{
                  fontSize: '15px',
                  fontWeight: '400',
                  lineHeight: '18.15px',
                  textAlign: 'left'
                }} 
                htmlFor='description'>
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
              <label  className='block text-black-500 text-sm font-normal mb-2'
                style={{
                  fontSize: '15px',
                  fontWeight: '400',
                  lineHeight: '18.15px',
                  textAlign: 'left'
                }} 
                htmlFor='country'>
                Country
              </label>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={top100Countries && top100Countries.map((option) => option.name)}
                renderInput={(params) => <TextField {...params} label="Search Country" />}
            />
            </div>

            <div className='mb-4'>
              <label  className='block text-black-500 text-sm font-normal mb-2'
                style={{
                  fontSize: '15px',
                  fontWeight: '400',
                  lineHeight: '18.15px',
                  textAlign: 'left'
                }} 
                htmlFor='Year'>
                Year
              </label>
              <input
                className='w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none border border-gray rounded'
                id='country'
                type='text'
                placeholder='2024 / 08 / 01'
                value={country}
                onChange={(e) => setCountry(e.target.value)}

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
                        />
                        <label
                        className='text-gray-700'
                        htmlFor='movie'
                        >
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
                        />
                        <label
                        className='text-gray-700'
                        htmlFor='series'
                        >
                        Series
                        </label>
                    </div>
                </div>
           </div>

             <div className='mb-4'>
                <div className='w-full'>
                    <button onClick='saveContent()' className='w-full py-2 px-6 bg-[#7379FF] text-white rounded-full'>Save</button>
                    {error && <p>{error}</p>}
                </div>
            </div>
           
         </form>

         
        </div>
      </div>
    </div>
  )
}
