import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <div>

      <section className='max-w-7xl mx-auto px-12 py-12'>
        <h3 className='font-roboto text-4xl font-bold mb-8'>Ableton</h3>

        <div className='flex gap-12'>

          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1'>
              <a className='font-roboto text-base tracking-wide' href="#">Register Live, Push or Move -</a>
              <a className='font-roboto text-base tracking-wide' href="#">About Ableton -</a>
              <a className='font-roboto text-base tracking-wide' href="#">Jobs -</a>
            </div>
            <div className='flex gap-2'>
              <FaFacebook className='w-8 h-8 ' />
              <FaSquareXTwitter className='w-8 h-8 ' />
              <FaInstagramSquare className='w-8 h-8 ' />
              <FaFacebook className='w-8 h-8 ' />
              <FaSquareXTwitter className='w-8 h-8 ' />
              <FaInstagramSquare className='w-8 h-8 ' />
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <h4 className='font-roboto text-base tracking-wide font-bold'>Education</h4>
            <div className='flex flex-col gap-1'>
              <a className='font-roboto text-base tracking-wide' href="#">Offers for students and teachers -</a>
              <a className='font-roboto text-base tracking-wide' href="#">Ableton for the classroom -</a>
              <a className='font-roboto text-base tracking-wide' href="#">Ableton for Colleges and Universities -</a>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <h4 className='font-roboto text-base tracking-wide font-bold'>Sigin up to our newsletter</h4>
            <div className='flex flex-col gap-1'>
              <p className='font-roboto text-base tracking-wide leading-relaxed'>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
            </div>
            <form>
              <input 
                className='font-roboto outline-none p-2 bg-gray-200'
                placeholder='Email Address'
              />
              <button className='font-roboto py-2 px-4 bg-primary-6 text-white'>Sign up</button>
            </form>
          </div>

        </div>
      </section>


    </div>
  )
}

export default Footer