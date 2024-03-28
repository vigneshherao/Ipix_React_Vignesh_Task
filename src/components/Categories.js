import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Category from './Category';

const Categories = () => {

    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        fetchCategores();
    },[])


    const fetchCategores = async ()=>{
        const data = await fetch("https://api.escuelajs.co/api/v1/categories");
        const categories =await data.json();
        setCategories(categories);
    }

  return (
    <div className='mt-4'>
        <h2 className='text-center font-extralight text-2xl tracking-widest'>CATEGORIES</h2>
        <div className='flex justify-evenly m-5 flex-wrap'>
        {
            categories.map((category)=><Category key={category.id} categoryInfo={category}/>)
        }
        </div>
    </div>
  )
}

export default Categories