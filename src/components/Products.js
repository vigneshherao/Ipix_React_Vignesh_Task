import React, { useEffect, useState } from "react";
import Product from "./Product";
import Shimmer from "./Shimmer";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const data = await fetch("https://api.escuelajs.co/api/v1/products");
    const products = await data.json();
    setProducts(products);
  };


  if(products.length==0){
    return <Shimmer/>
  }

 
  return (
     <div className="flex flex-wrap justify-center">
        {
            products.map((product)=><Product key={product.id} productInfo={product}/>)
        }
     </div>
  );
};

export default Products;
