import { useState,useEffect } from "react";


const useCategoryProducts = (id) => {
    const [categoryProducts,setCategoryProducts] = useState([]);

    useEffect(()=>{
        fetchCatProducts();
     },[])
 
     const fetchCatProducts = async ()=>{
         const data = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`);
         const products =await data.json();
         setCategoryProducts(products);
     }

     return categoryProducts;

}

export default useCategoryProducts