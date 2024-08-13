/* eslint-disable no-unused-vars */
import React from 'react'
import avengers from '../images/movies/Avengers.jpg'
import hidden from '../images/movies/hidden.png'
import wick from '../images/movies/johnWick.png'
import joker from '../images/movies/joker.png'
import queen from '../images/movies/queenSlim.png'
import us from '../images/movies/Us.png'
import minions from '../images/movies/minions.jpg'
import frozen from '../images/movies/frozen.jpg'
import {Link} from 'react-router-dom'

export const Movies = () => {
  return (
    <div>
        <h1 className='absolute top-1/4 left-1/3 ml-20 text-white text-4xl font-bold'>LATEST MOVIES</h1>
      <div>
        <div className='flex justify-end'>
            <Link to={'/Addmovie'}>
                <button className='bg-custom-blue hover:bg-blue-600 text-white text-xs rounded-full w-20 h-8 py-1 px-6 gap-2.5 top-96 mt-9 mb-16'>Add</button>
            </Link>
         </div>
            <div className='flex justify-center space-x-16'>
                  <img src={avengers} className='h-56 w-40 object-container '></img>
                  <img src={hidden} className='h-56 w-40 object-container'></img>
                  <img src={frozen} className='h-56 w-40 object-container'></img>
                  <img src={queen} className='h-56 w-40 object-container'></img>
              </div>
              <div className='flex justify-center space-x-16'>
                  <img src={joker} className='h-56 w-40 object-container mt-20'></img>
                  <img src={minions} className='h-56 w-40 object-container mt-20'></img>
                  <img src={wick} className='h-56 w-40 object-container mt-20'></img>
                  <img src={us} className='h-56 w-40 object-container mt-20'></img>
                  
              </div>
      </div>
    </div>
  )
}
