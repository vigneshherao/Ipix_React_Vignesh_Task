import { useState,useEffect } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    console.log(products);
  
    useEffect(() => {
      fetchProduct();
    }, []);
  
    const fetchProduct = async () => {
      const data = await fetch("https://api.escuelajs.co/api/v1/products");
      const products = await data.json();
      setProducts(products);
    };

    return products;
}

export default useProducts