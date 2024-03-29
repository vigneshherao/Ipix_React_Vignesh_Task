import React, { useEffect, useState } from "react";
import Product from "./Product";
import Shimmer from "./Shimmer";
import useProducts from "../utils/useProducts";


const Products = () => {
  
  const products = useProducts();


  if(products.length==0){
    return <Shimmer/>
  }

 
  return (
     <div className="mt-2">
      <h2 className='text-center font-extralight text-2xl tracking-widest'>PRODUCTS</h2>

        <div className="flex flex-wrap justify-center mt-10">
        {
            products.map((product)=><Product key={product.id} productInfo={product}/>)
        }
        </div>
     </div>
  );
};

export default Products;
