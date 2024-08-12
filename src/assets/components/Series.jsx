import React from 'react'
import loki from '../images/series/loki.jpg'
import wednesday from '../images/series/wednesday.jpg'
import strangerthings from '../images/series/stranger.png'
import HOTD from '../images/series/HoTD.jpg'
import TVD from '../images/series/TVD.jpg'
import got from '../images/series/got.jpg'
import rickmorty from '../images/series/rickMorty.png'
import squidgame from '../images/series/squid.png'
import {Link} from 'react-router-dom'

export const Series = () => {
  return (
    <>
        <div>
          <h1 className='absolute top-1/4 left-1/3 ml-20 text-white text-4xl font-bold'>LATEST SERIES</h1>
        </div>
        <div className='flex justify-end'>
        <Link to={'/Addmovie'}>
            <button className='bg-custom-blue hover:bg-blue-600 text-white text-xs rounded-full w-20 h-8 py-1 px-6 gap-2.5 top-96 mt-9 mb-16'>Add</button>
        </Link>
      </div>
      <div flex-row className='flex justify-center space-x-16'>
                <img src={loki} className='h-56 w-40 object-container '></img>
                <img src={TVD} className='h-56 w-40 object-container '></img>
                <img src={rickmorty} className='h-56 w-40 object-container '></img>
                <img src={squidgame} className='h-56 w-40 object-container '></img>
      </div>
        <div flex-row className='flex justify-center space-x-16'>
                <img src={got} className='h-56 w-40 object-container mt-20'></img>
                <img src={HOTD} className='h-56 w-40 object-container mt-20'></img>
                <img src={wednesday} className='h-56 w-40 object-container mt-20'></img>
                <img src={strangerthings} className='h-56 w-40 object-container mt-20'></img>
        </div>
    </>
    
  )
}
