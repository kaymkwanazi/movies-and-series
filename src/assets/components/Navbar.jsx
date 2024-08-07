import React from 'react'
import onlyMurder from '../images/series/onlyMurder.png'

export const Navbar = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-no-repeat h-96' style={{ backgroundImage: `url(${onlyMurder})`}} >
            
            <nav className='flex items-center justify-between pr-12 pl-8 text-white'> 
              <a href='/' ><span className='text-blue-500'>Enter-</span>Stream</a>
                <ul className='list-none p-0 flex space-x-11 '>
                    <li><a href='/movies '>MOVIES</a></li>
                    <li><a href='/series '>SERIES</a></li>
                </ul>
                <button className='bg-purple-500 hover:bg-purple-700 font-bold rounded-full mt-8 py-2 px-4'>SUBSCRIBE</button>
            </nav>
        </div>
    </div>
  );
};
