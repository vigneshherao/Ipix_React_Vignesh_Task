import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Product from "./Product";
import { Link, useParams } from "react-router-dom";
import useCategoryProducts from "../utils/useCategoryProducts";

const CategoryProducts = () => {
  const { id } = useParams();

  const categoryProducts = useCategoryProducts(id);

  if (categoryProducts.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="mt-2">
      <h2 className="text-center font-extralight text-2xl tracking-widest">
        Products
      </h2>
      <div className="flex flex-wrap justify-center mt-10">
        {categoryProducts.map((product) => (
            <Product key={product.id} productInfo={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
