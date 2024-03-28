import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


const Product = ({productInfo}) => {
   const {title,price} = productInfo;
   
   const dispatch = useDispatch();

   const handleAddItem = (itemData)=>{
     dispatch(addItem(itemData));
   }
  return (
    <div className="flex flex-col  justify-between w-72 min-h-[450px] rounded overflow-hidden shadow-lg p-5 m-5 transition-transform duration-200 ease-in-out transform hover:scale-95">
      <img
        className="w-[100%]  rounded-sm"
        src={productInfo.images[0]}
        alt="Product"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-sm  mb-2 font-serif">{title}</div>
        <p className="text-gray-700 font-mono text-base font-bold">Rs: {price} Only!</p>
        <button className="w-full mt-2 text-center bg-black text-white font-semibold p-1 hover:bg-gray-300 hover:text-black" onClick={
          ()=>handleAddItem(productInfo)
        }>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
