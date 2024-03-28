import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Category from './Category';
import { Link } from 'react-router-dom';

const Categories = () => {

    const [categories,setCategories] = useState([]);
    console.log(categories)

    useEffect(()=>{
        fetchCategores();
    },[])


    const fetchCategores = async ()=>{
        const data = await fetch("https://api.escuelajs.co/api/v1/categories");
        const categories =await data.json();
        setCategories(categories.slice(0, 5));
    }

  return (
    <div className='mt-4'>
        <h2 className='text-center font-extralight text-2xl tracking-widest'>CATEGORIES</h2>
        <div className='flex justify-evenly m-5 flex-wrap'>
        {
            categories.map((category)=><Link to={`/category/${category.id}/products`}><Category key={category.id} categoryInfo={category}/></Link>)
        }
        </div>
    </div>
  )
}

export default Categories;