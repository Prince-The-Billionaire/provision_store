import React from 'react'
import Image from 'next/image'
import { BsStarFill } from 'react-icons/bs'

const TestimonialCard = () => {
  return (
    <div className='shadow p-8 rounded-3xl  w-[20rem]'>
        <div className='flex  flex-col gap-6 items-center justify-center'>
            <Image src="/deodorant.png" alt="profile_pic" width={140} height={60} className=' -mt-20 shadow-md rounded-full size-24 object-cover'/>
            <div className='text-center mb-4'>
                <p className='text-xl font-bold'>John snow</p>
                <p className='text-slate-400 font-light'>Covenant university student</p>
            </div>
        </div>
        <p className='text-lg text-center font-medium'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis at nisi consequat, at pellentesque nisi. Nulla facilisi."
        </p>
        <div className='mt-4 flex justify-center  flex-row'>
            <BsStarFill color='orange' size={20}/>
            <BsStarFill color='orange' size={20}/>
            <BsStarFill color='orange' size={20}/>
            <BsStarFill color='orange' size={20}/>
            <BsStarFill color='orange' size={20}/>
        </div>
    </div>
  )
}

export default TestimonialCard