import React, { useEffect, useState } from "react";
import Product from "./Product";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const data = await fetch("https://api.escuelajs.co/api/v1/products");
    const products = await data.json();
    setProducts(products.slice(0,47));
  };


  if(products.length==0){
    return <Shimmer/>
  }

 
  return (
     <div className="mt-2">
      <h2 className='text-center font-extralight text-2xl tracking-widest'>PRODUCTS</h2>

        <div className="flex flex-wrap justify-center mt-10">
        {
            products.map((product)=><Link to={"/product"} key={product.id}><Product key={product.id} productInfo={product}/></Link>)
        }
        </div>
     </div>
  );
};

export default Products;
