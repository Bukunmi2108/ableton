import React from 'react'
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className='w-full font-roboto'>
      <nav className='flex justify-between max-w-8xl lg:px-6 mx-auto px-2 py-2 gap-6 items-center border-b-2 border-gray-200'>
        <div>
          <img className='w-16 h-16' src='logo.svg'/>
        </div>
        <ul className='hidden lg:flex flex-1 items-center justify-start gap-6 font-medium text-base'>
          <li>Live</li>
          <li>Push</li>
          <li>Move</li>
          <li>Note</li>
          <li>Link</li>
          <li>Shop</li>
          <li>Packs</li>
          <li>Help</li>
          <li className='flex items-center justify-center gap-1 text-primary-2'>
            <span>More</span>
            <span>+</span>
          </li>
        </ul>
        
        <div className='hidden lg:flex gap-4 text-base xl:text-lg items-center justify-center'>
          <span className='font-bold text-primary-6'>Try Live 12 for free</span>
          <span className='xl:font-semibold font-regular text-base'>Log in or register</span>
        </div>
      </nav>
      <nav className='flex items-center justify-start gap-6 max-w-8xl lg:px-6 px-2 font-roboto py-6 text-sm font-medium'>
        <span className='text-primary-2'>About</span>
        <span>Jobs</span>
        <span>Apprenticeship</span>
      </nav>
    </header>
  )
}

export default Header