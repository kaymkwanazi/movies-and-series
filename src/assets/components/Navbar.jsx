/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import onlyMurder from '../images/series/onlyMurder.png'

export const Navbar = ({ title }) => {
  return (
    <div>

        <div className='bg-cover bg-center bg-no-repeat position-absolute h-96 object-contain' 
        style={{ 
              backgroundImage: `url(${onlyMurder})`,
              width: 'full'
              }} >
            
            <nav className='flex items-center justify-between pr-12 pl-8 text-white'> 
              <a href='/' className='text-xl'><span className='text-blue-500'>Enter-</span>Stream</a>
                <ul className='list-none p-0 flex space-x-11 text-xs'>
                    <li><a href='/movies '>MOVIES</a></li>
                    <li><a href='/series '>SERIES</a></li>
                </ul>
                <button className='bg-purple-500 hover:bg-purple-700 font-bold rounded-full mt-8 py-2 px-4 text-sm'>SUBSCRIBE</button>
            </nav>



            <div
            className='flex items-center justify-center ml-20'
              style={{
                width: '427px',
                height: '100px',
                position: 'absolute',
                top: '177px',
                left: '30%',
                gap: '0px',
                opacity: '100',
                //fontFamily: 'Inter',
                fontSize: '40px',
                fontWeight: '600',
                lineHeight: '48.41px',
                textAlign: 'center',
                color: 'white',
                
              }}
            >
              {title}
            </div>
        </div>
    </div>
  );
};
