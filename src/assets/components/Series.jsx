import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Navbar } from './Navbar'

export const Series = () => {
  const [series, setSeries] = useState([]);
  const pathToSeries = '../../../Database/series.json';

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
    <>
      <div>
        <Navbar title ='LATEST SERIES' />  
      </div>

      <div className="flex justify-end items-end">
          <button className='bg-custom-blue hover:bg-blue-600 rounded-full py-1 px-6 mr-64 mt-5 text-white text-xs'>
            <Link to='/Addmovie'>Add</Link>
          </button>
        </div>

    <div>
      <div className='flex flex-wrap justify-center space-x-16 mt-20'>
            {series.slice(0, 4).map((series, index) => (
              <Link to= {`/series/${series.seriesID}/${series.title}`} key={index} >
                  <img
                  src={series.imageUrl}
                  alt={series.title}
                  className='h-56 w-40 object-container'
                  />
              </Link>
            ))}
          </div>
          <div className='flex flex-wrap justify-center space-x-16'>
            {series.slice(4, 8).map((series, index) => (
              <Link to= {`/series/${series.seriesID}/${series.title}`} key={index} >
                <img
                    key={index}
                    src={series.imageUrl}
                    alt={series.title}
                    className='h-56 w-40 object-container mt-20'
                  />
             </Link>
            ))}
          </div>
          <div className='flex flex-wrap justify-center space-x-16'>
            {series.slice(8, 12).map((series, index) => (
              <Link to= {`/series/${series.seriesID}/${series.title}`} key={index} >
                <img
                    key={index}
                    src={series.imageUrl}
                    alt={series.title}
                    className='h-56 w-40 object-container mt-20'
                  />
             </Link>
            ))}
          </div>
          <div className='flex flex-wrap justify-center space-x-16'>
            {series.slice(12, 16).map((series, index) => (
              <Link to= {`/series/${series.seriesID}/${series.title}`} key={index} >
                <img
                    key={index}
                    src={series.imageUrl}
                    alt={series.title}
                    className='h-56 w-40 object-container mt-20'
                  />
             </Link>
            ))}
          </div>
          <div className='flex flex-wrap justify-center space-x-16'>
            {series.slice(16,20).map((series, index) => (
              <Link to= {`/series/${series.seriesID}/${series.title}`} key={index} >
                <img
                    key={index}
                    src={series.imageUrl}
                    alt={series.title}
                    className='h-56 w-40 object-container mt-20'
                  />
             </Link>
            ))}
          </div>
    </div>  
  
    </>  
    
  )
}
