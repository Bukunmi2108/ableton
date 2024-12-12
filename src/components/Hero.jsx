import React from 'react'
import HeroImg from '../assets/8.jpg'


const Hero = () => {
  return (
    <section className='w-full mx-auto block'>
      <div className='max-w-7xl relative px-4 md:px-20 mx-auto'>
        <img className='w-full h-[600px] object-cover' src={HeroImg} />
        <span className='w-fit h-fit text-5xl md:text-8xl text-primary-2 font-bold absolute top-0 left-0 right-0 bottom-0 m-auto'>Ableton</span>
      </div>
    </section>
  )
}

export default Hero