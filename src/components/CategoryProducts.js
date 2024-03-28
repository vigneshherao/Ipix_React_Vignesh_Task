import React, { useEffect, useState } from 'react'
import Shimmer from "./Shimmer"
import Product from './Product';
import { Link } from 'react-router-dom';

const CategoryProducts = () => {
    const [categoryProducts,setCategoryProducts] = useState([]);

    useEffect(()=>{
       fetchCatProducts();
    },[])

    const fetchCatProducts = async ()=>{
        const data = await fetch("https://api.escuelajs.co/api/v1/categories/2/products");
        const products =await data.json();
        setCategoryProducts(products);
    }


    if (categoryProducts.length === 0) {
        return <Shimmer />
    }
  return (
    <div className='mt-2'>
          <h2 className='text-center font-extralight text-2xl tracking-widest'>Products</h2>
          <div className="flex flex-wrap justify-center mt-10">
        {
            categoryProducts.map((product)=><Link to={"/product"} key={product.id}><Product key={product.id} productInfo={product}/></Link>)
        }
        </div>
    </div>
  )
}

export default CategoryProducts