import React from 'react'

export const Footer = () => {
  return (
    <div>
        <div className='pt-8'>
            <nav className='flex items-center justify-between pr-12 pl-8 text-gray-700 h-20 bg-gray-300'> 
              <p className='text-xl font-bold'>Enter-Stream</p>
                <ul className='list-none p-0 flex space-x-11 text-xs '>
                    <li><a href='/movies '>MOVIES</a></li>
                    <li><a href='/series '>SERIES</a></li>
                </ul>
                <p className='text-sm'>SUBSCRIBE</p>
            </nav>
        </div>
    </div>
  )
}
