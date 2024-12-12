import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <div>

      <section className='max-w-7xl mx-auto px-12 py-12'>
        <h3 className='font-roboto text-4xl font-bold mb-8'>Ableton</h3>

        <div className='flex gap-12 flex-col'>
          <div className='flex flex-col gap-12 lg:flex-row'>
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
              <form className='flex'>
                <input 
                  className='font-roboto outline-none p-2 bg-gray-200 w-full'
                  placeholder='Email Address'
                />
                <button className='font-roboto py-2 px-4 bg-primary-6 text-white text-nowrap'>Sign up</button>
              </form>
            </div>
          </div>
          
          <div className='flex gap-12'>

            <div className='flex flex-col gap-2'>
              <h4 className='font-roboto text-base tracking-wide font-bold'>Community</h4>
              <div className='flex flex-col gap-1'>
                <a className='font-roboto text-base tracking-wide' href="#">Find Ableton User Groups -</a>
                <a className='font-roboto text-base tracking-wide' href="#">Find Certified Training -</a>
                <a className='font-roboto text-base tracking-wide' href="#">Become Certified Trainer -</a>
              </div>
            </div>
          </div>

        </div>

        <div className='flex items-start gap-12 lg:gap-0 lg:items-center lg:justify-between font-roboto text-sm tracking-wide mt-12 flex-col lg:flex-row'>
          <ul className='flex flex-col lg:flex-row gap-2 lg:gap-6'>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>UsPress</a></li>
            <li><a href='#'>Resources</a></li>
            <li><a href='#'>Legal Info</a></li>
            <li><a href='#'>Privacy Policy</a></li>
            <li><a href='#'>Cookie Settings</a></li>
            <li><a href='#'>Imprint</a></li>
          </ul>

          <div className='flex items-center justify-center gap-4'>
            <img className='' src='logo.svg'/>
            <p>Made in Berlin</p>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Footer