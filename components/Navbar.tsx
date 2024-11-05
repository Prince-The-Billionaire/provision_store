import React from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/button'
import { BiCart, BiHeadphone } from 'react-icons/bi'
import { Badge } from '@nextui-org/badge'
import { BsPersonHeart } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'

const Navbar = () => {
  return (
    <nav className='flex z-20 bg-white sticky top-0 flex-row justify-around items-center'>
        <Image
            src={'/kwikies.png'}
            alt='kwikies logo'
            width={70}
            height={30}
        />
        <div>
            <input type="search"  className='border rounded-lg h-10 w-96 border-orange-500'/>
            <Button variant='shadow' className='bg-orange-400'>
                Search
            </Button>
        </div>

        <div className='flex flex-row gap-4 items-center'>
            <div className='flex flex-row gap-4 items-center' >
                <BiHeadphone size={25}/>
                <p>Contact Us</p>
            </div>
            <div className='flex flex-row gap-4 items-center'>
                <BsPersonHeart size={25}/>
                <p>About</p>
            </div>
            <div className='flex flex-row gap-4 items-center'>
                <CgWebsite size={25}/>
                <p>Blog</p>
            </div>
            
            <Badge content={5} color='warning'>
                <BiCart size={40} />
            </Badge>
            
        </div>
    </nav>
  )
}

export default Navbar