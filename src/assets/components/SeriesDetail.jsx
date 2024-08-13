
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Navbar } from './Navbar';

export const SeriesDetails = () => {
  const pathToSeries = '../../../Database/series.json';
  const { id } = useParams();
  const [series, setSeries] = useState(null);

  useEffect(() => {
    axios.get(`../../../Database/series.json`)
      .then(response => {
        const seriesData = response.data.series.find(m => m.seriesID === parseInt(id));
        setSeries(seriesData);
      })
      .catch(error => {
        console.error('Error fetching series details:', error);
      });
  }, [id]);

  if (!series) return <div>Loading...</div>;

  return (
    <>
     <Navbar title={series.title} />
    <div className="flex justify-center items-center h-screen bg-gray-100">
        <img
          src={series.imageUrl}
          alt={series.title}
          className="w-64 h-auto rounded-lg shadow-md"
        />
        <div className="ml-20">
            <h1 className="text-3xl font-bold mb-4">{series.title}</h1>
          <p className="text-gray-700 mb-4 whitespace-pre-line">
            {series.description}</p>
          <p><strong>Country:</strong> {series.country}</p>
          <p><strong>Genre:</strong> {series.genre.join(', ')}</p>
          <p><strong>Year:</strong> {series.year}</p>
          <p><strong>Type:</strong> {series.type}</p>

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
                ><Link to='/Addmovie'>Edit</Link>
                
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
