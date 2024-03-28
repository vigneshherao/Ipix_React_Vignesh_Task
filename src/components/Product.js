import React from "react";

const Product = ({productInfo}) => {

    const {title,price} = productInfo;

  return (
    <div className="w-72 rounded overflow-hidden shadow-lg p-5 m-5 transition-transform duration-200 ease-in-out transform hover:scale-95">
      <img
        className="w-[100%] h-62 rounded-sm"
        src={productInfo.images[0]}
        alt="Product"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-sm  mb-2 font-serif">{title}</div>
        <p className="text-gray-700 font-mono text-base font-bold">Rs: {price} Only!</p>
      </div>
    </div>
  );
};

export default Product;
