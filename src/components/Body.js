import React from 'react'
import Products from './Products'
import Categories from './Categories'
import ProductDetail from './ProductDetail'
import CategoryProducts from './CategoryProducts'

const Body = () => {
  return (
    <div className='px-10 sm:px-20'>
        <Categories/>
        <Products/>
    </div>
  )
}

export default Body