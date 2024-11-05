import React from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/button'

const Hero = () => {
  return (
    <div className='relative h-screen p-12'>
        <div className='absolute ml-12 w-[85vw] h-[400px]'>
        <Image
            src={"/provisions.png"}
            alt='provisions'
            fill
            className='rounded-xl object-cover'
        />
        </div>
        <div className='text-black ml-24 relative'>
            <p className='text-5xl'>A one stop shop for all your provisions</p>
            <p>sign up to receive daily healthy meal tips and price </p>
            <div>
                <input className='rounded-xl h-12 w-[28rem] ' type='search'/>
                <Button className='-ml-20 bg-orange-500 text-white'>
                    Sign up 
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Hero