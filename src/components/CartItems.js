import React from "react";

const CartItems = ({data}) => {
const {title,price} = data;
  return (
    <div className="w-[80%] flex justify-between py-3 px-3 sm:px-10 bg-gray-100 h-36 mx-auto my-2 shadow border">
      <div>
        <img
          className="w-20 h-[100%] "
          src={data.images[0]}
        ></img>
      </div>
      <div className="pr-3 text-center py-5">
        <p className="font-semibold">{title}</p>
        <span>Rs : {price}</span>
      </div>
    </div>
  );
};

export default CartItems;
