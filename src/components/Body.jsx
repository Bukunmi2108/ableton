import React from 'react'
import ReactPlayer from 'react-player'
import { Story } from '../components'
import secImg1 from '../assets/2.jpg'
import secImg2 from '../assets/6.jpg'
import secImg3 from '../assets/4.jpg'
import secImg4 from '../assets/8.jpg'
import secImg5 from '../assets/1.jpg'
import secImg6 from '../assets/7.jpg'
import secImg7 from '../assets/5.jpg'
import secImg8 from '../assets/3.jpg'

const Body = () => {
  return (
    <div className='w-full mx-auto'>
      <section className='max-w-3xl mx-auto py-16 lg:py-24 font-roboto'>
        <div className='w-full mx-auto flex flex-col gap-4 px-4'>
          <h3 className='text-left font-bold leading-7 lg:leading-10 tracking-wide text-xl lg:text-3xl'>
          We make <a href='#' className='text-primary-6'>Live</a>, <a href='#' className='text-primary-6'>Push</a>, <a href='#' className='text-primary-6'>Note</a>, <a href='#' className='text-primary-6'>Move</a> and <a href='#' className='text-primary-6'>Link</a> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.
          </h3>
          <p className='text-left font-light lg:text-lg'>
            Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.
          </p>
        </div>
      </section>
      
      <section className='w-full h-[540px] lg:h-[640px] mx-auto relative'>
        <div className='w-3/5 h-full bg-primary-1 absolute top-0 right-0 -z-10'></div>
        <div className='mx-auto max-w-7xl w-full h-full flex items-center justify-center p-12 gap-8'>
          <div className='w-1/2 h-full'>
            <img className='object-cover w-full h-full' src={secImg1}/>
          </div>
          <div className='w-1/2 h-[240px]'>
            <img className='object-cover w-full h-full' src={secImg2}/>
          </div>
        </div>
      </section>

      <Story 
        Heading={'Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.'}
        Text={'We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.'}
      />

      <section className='mx-auto w-full max-w-7xl px-12'>
        <ReactPlayer className='mx-auto' width={'100%'} url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
        <span className='font-roboto text-gray-600 text-sm py-2'>Why Ableton - Juanpe Bolivar</span>
      </section>

      <Story 
        Heading={'We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.'}
        Text={'Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.'}
      />

      <section className='w-full h-[540px] lg:h-[640px] mx-auto relative'>
        <div className='w-3/5 h-full bg-primary-5 absolute top-0 left-0 -z-10'></div>
        <div className='mx-auto max-w-7xl w-full h-full flex items-center justify-center p-12 gap-8 lg:gap-20'>
          <div className='w-1/2 h-full flex flex-col gap-4 lg:gap-16'>
            <img className='object-cover w-full h-1/2' src={secImg3}/>
            <img className='object-cover w-full h-1/2' src={secImg4}/>
          </div>
          <div className='w-1/2 h-[240px]'>
            <img className='object-cover w-full h-full' src={secImg5}/>
          </div>
        </div>
      </section>

      <Story 
        Heading={'We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.'}
        Text={'Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.'}
      />

      <section className='w-full mx-auto'>
        <div className='mx-auto max-w-7xl px-12'>
          <img className='w-full object-cover' src={secImg6} />
        </div>
      </section>

      <Story 
        Heading={'We’re passionate about what we do, but we’re equally passionate about improving who we are.'}
        Text={'We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other. Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.'}
      />

      <section className='w-full h-[540px] lg:h-[640px] mx-auto relative'>
        <div className='w-3/5 h-full bg-primary-4 absolute top-0 left-32 -z-10'></div>
        <div className='mx-auto max-w-7xl w-full h-full flex items-center justify-center p-12 gap-8 lg:gap-20'>
          <div className='w-1/2 h-[240px]'>
            <img className='object-cover w-full h-full' src={secImg7}/>
          </div>
          <div className='w-1/2 h-full'>
            <img className='object-cover w-full h-full' src={secImg8}/>
          </div>
        </div>
      </section>

      <Story 
        Heading={'We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.'}
        Text={"If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities."}
      />

    </div>
  )
}

export default Body