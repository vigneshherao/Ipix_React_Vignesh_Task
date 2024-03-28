import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState("");
  const [activeImg, setActiveImage] = useState("");
  const { productId } = useParams();

  useEffect(() => {
    fetchProductDetail();
  }, []);

  const fetchProductDetail = async () => {
    const data = await fetch(
      `https://api.escuelajs.co/api/v1/products/${productId}`
    );
    const productInfo = await data.json();
    setProductDetail(productInfo);
    setActiveImage(productInfo.images[0]);
  };

  const dispatch = useDispatch();

  const handleAddItem = (productDetail)=>{
    dispatch(addItem(productDetail));
  }

  if (productDetail.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="mt-10 flex px-10 flex-col justify-between lg:flex-row gap-16 lg:items-center">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          src={activeImg}
          alt=""
          className="w-full h-full aspect-square object-cover rounded-xl"
        />
        <div className="flex flex-row justify-around h-24">
          {productDetail.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(image)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className="text-orange-600 font-semibold">Category</span>
          <h1 className="text-3xl font-bold">{productDetail.title}</h1>
        </div>
        <p className="text-gray-700 font-light">{productDetail.description}</p>
        <h6 className="text-2xl font-semibold">Rs {productDetail.price}</h6>
        <div className="flex flex-row items-center gap-12">
          <button
            className="bg-black text-white font-semibold py-3 px-16  h-full"
            onClick={() => handleAddItem(productDetail)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
