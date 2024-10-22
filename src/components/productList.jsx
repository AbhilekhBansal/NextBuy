import React from "react";
import Product from "./product";

const ProductList = ({ products = [] }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-6 pt-4 ">
        {products &&
          products.map((product, index) => (
            <Product product={product} key={index} />
          ))}
      </div>
    </>
  );
};

export default ProductList;
