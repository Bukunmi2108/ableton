import React from 'react'
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

const Story = ({Heading, Text}) => {
  return (
    <motion.section 
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 2 }}
    className='max-w-3xl mx-auto py-16 lg:py-24 font-roboto'>
      <div className='w-full mx-auto flex flex-col gap-4 px-4'>
        <h3 className='text-left font-bold leading-7 lg:leading-10 tracking-wide text-xl lg:text-3xl'>{Heading}</h3>
        <p className='text-left font-light lg:text-lg'>{Text}</p>
      </div>
    </motion.section>
  )
}

export default Story