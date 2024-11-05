import React from 'react'
import ProductCard from './ProductCard'

const Popular_products = () => {
  return (
    <div className='px-10  flex-col gap-5 justify-center bg-orange-100 rounded-xl mx-20 py-10 '>
        <h1 className='text-3xl font-bold mb-10'>Popular products</h1>
        <div className='flex flex-row flex-wrap gap-4'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
  )
}

export default Popular_products