import React from "react";
import { FaStar } from "react-icons/fa";

const Product = ({ product }) => {
  return (
    <div className="card bg-base-100 w-60 shadow-xl ">
      <figure>
        <img src={product.image} alt="Shoes" className="w-full h-72" />
      </figure>
      <div className="card-body px-6 py-2 h-32 p-card">
        <h4 className="card-title">
          {product.title}rg ergr thrt hrtyhty htyjhtyrj htyjytjytj y
        </h4>
        <div className="card-price justify-start flex flex-wrap">
          <h5 className="sale-price ">₹262</h5>
          <p className="mrp">₹385</p>
          <span className="discount">25% Off</span>
        </div>
        <div className="rating-box">
          <div>
            <span className="rating">
              <span className="rate">4.5</span>
              <FaStar className=" ml-1 items-center text-white w-3" />
            </span>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <button
            type="button"
            class="text-white bg-gradient-to-r bg-teal-500  focus:outline-none dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 text-xs px-4 py-2 text-center me-1 mb-2 hover:bg-transparent hover:border-teal-400 hover:border hover:text-teal-400 "
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
