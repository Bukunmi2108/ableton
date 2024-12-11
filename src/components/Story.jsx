import React from 'react'

const Story = ({Heading, Text}) => {
  return (
    <section className='max-w-3xl mx-auto py-16 lg:py-24 font-roboto'>
      <div className='w-full mx-auto flex flex-col gap-4 px-4'>
        <h3 className='text-left font-bold leading-7 lg:leading-10 tracking-wide text-xl lg:text-3xl'>{Heading}</h3>
        <p className='text-left font-light lg:text-lg'>{Text}</p>
      </div>
    </section>
  )
}

export default Story