import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <div className='mx-20 my-10 justify-center flex flex-col gap-5'>
        <h1 className='text-3xl font-bold text-center'>What Our Clients are Saying</h1>
        <div className='flex flex-row gap-5 mt-32 '>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
        </div>
    </div>
  )
}

export default Testimonials