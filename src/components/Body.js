import React from 'react'
import Products from './Products'
import Categories from './Categories'
import Users from './Users'

const Body = () => {
  return (
    <div className='px-10 sm:px-20'>
        <Categories/>
        <Products/>
    </div>
  )
}

export default Body;