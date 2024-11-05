import Categories from '@/components/Categories'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Popular_products from '@/components/Popular_products'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Categories/>
      <Popular_products/>
      <Testimonials/>
    </div>
  )
}

export default page