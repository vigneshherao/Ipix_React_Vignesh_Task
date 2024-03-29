import { useEffect } from 'react';
import { useState } from 'react'
import { categoriesApi } from './constants';



const useCategories = ()=>{

    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        fetchCategores();
    },[])


    const fetchCategores = async ()=>{
        const data = await fetch(categoriesApi);
        const categories =await data.json();
        setCategories(categories.slice(0, 5));
    }
    return categories;

}


export default useCategories;