import React from 'react'
import Image from 'next/image'

const Categories = () => {
    const categories = [
        {name: 'Beverages', image: '/beverages.png'},
        {name: 'Biscuit', image: '/biscuit.png'},
        {name: 'Deodorant', image: '/deodorant.png'},
        {name: 'Soap', image: '/soaps.png'},
        {name: 'Sweets', image:'/sweets.png'},
        {name: 'Toiletries', image:'/toiletries.png'}
    ]
  return (
    <div className='px-24'>
        <div className='grid grid-cols-3 gap-2'>
            {categories.map((item, index) => (
                <div key={index} className='cursor-pointer ' >
                    
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={500}
                        height={500}
                        className='-z-10 peer-hover:blur hover:blur-sm'
                    />
                    <div className='z-20'>
                        <h3 className='text-3xl text-center text-white '>{item.name}</h3>
                    </div>
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default Categories