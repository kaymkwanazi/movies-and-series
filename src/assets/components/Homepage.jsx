import React from 'react'
import avengers from '../images/movies/Avengers.jpg'
import hidden from '../images/movies/hidden.png'
import wick from '../images/movies/johnWick.png'
import joker from '../images/movies/joker.png'
import queen from '../images/movies/queenSlim.png'
import us from '../images/movies/Us.png'
import minions from '../images/movies/minions.jpg'
import frozen from '../images/movies/frozen.jpg'
import loki from '../images/series/loki.jpg'
import wednesday from '../images/series/wednesday.jpg'
import strangerthings from '../images/series/stranger.png'
import HOTD from '../images/series/HoTD.jpg'
import TVD from '../images/series/TVD.jpg'
import got from '../images/series/got.jpg'
import rickmorty from '../images/series/rickMorty.png'
import squidgame from '../images/series/squid.png'
import {Link} from 'react-router-dom'

export const Homepage = () => {
  return (
    <div>
      {/* ------------mOVIES-------------- */}
        <div className='mt-20 mb-20 text-center decoration text-xl'>LATEST MOVIES</div>
        <div>
              <div  className='flex justify-center space-x-16'>
                  <img src={avengers} className='h-56 w-40 object-container'></img>
                  <img src={hidden} className='h-56 w-40 object-container '></img>
                  <img src={frozen} className='h-56 w-40 object-container '></img>
                  <img src={queen} className='h-56 w-40 object-container '></img>
              </div>
              <div  className='flex justify-center space-x-16'>
                  <img src={joker} className='h-56 w-40 object-container mt-20'></img>
                  <img src={minions} className='h-56 w-40 object-container mt-20'></img>
                  <img src={wick} className='h-56 w-40 object-container mt-20'></img>
                  <img src={us} className='h-56 w-40 object-container mt-20'></img>
              </div>
              {/* <div className='flex justify-end'>
                <Link to='/movies'>
                <button className='bg-custom-blue hover:bg-blue-600 rounded-full py-1 px-6 mr-64 mt-5 text-white text-xs'>More</button>
                </Link>
              </div> */}
              <div className="flex justify-end items-end"
              >
                
                  <button className='bg-custom-blue hover:bg-blue-600 rounded-full py-1 px-6 mr-64 mt-5 text-white text-xs'><Link to='/movies'>More </Link></button>
               
              </div>
        </div>
        {/* -------SERIES----------- */}
        <div className='mt-20 mb-20 text-center decoration text-xl'>LATEST SERIES</div>
        <div>
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
            <div className='flex justify-end'>
              <Link to='/series'>
              <button className='bg-custom-blue hover:bg-blue-600 rounded-full py-1 px-6 mr-64 mt-5 text-white text-xs'>More</button>
              </Link>
            </div>
        </div>
        
    </div>
  )
}
