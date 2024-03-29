import React from 'react'
import Category from './Category';
import { Link } from 'react-router-dom';
import useCategories from '../utils/useCategories';

const Categories = () => {

  const categories = useCategories();

  return (
    <div className='mt-4'>
        <h2 className='text-center font-extralight text-2xl tracking-widest'>CATEGORIES</h2>
        <div className='flex justify-evenly m-5 flex-wrap'>
        {
            categories.map((category)=><Link to={`/category/${category.id}/products`} key={category.id}><Category  categoryInfo={category}/></Link>)
        }
        </div>
    </div>
  )
}

export default Categories;