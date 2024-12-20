import React from 'react'
import { motion } from 'framer-motion';
import secImg6 from '../assets/7.jpg'

const containerVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

const Jobs = () => {
  return (
    <div>
      <section className='w-full mx-auto px-12'>
        <div className='mx-auto max-w-7xl bg-primary-3 flex flex-col lg:flex-row'>
          <img className='w-full lg:w-1/2 object-cover' src={secImg6} />
          <div className='p-12 font-roboto flex flex-col gap-12'>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 2 }}className='text-left font-bold leading-7 lg:leading-10 tracking-wide text-xl lg:text-3xl'>
              We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.
            </motion.div>
            <a className='font-roboto text-lg lg:text-2xl font-bold text-primary-6' href='#'>See Latest -</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Jobs