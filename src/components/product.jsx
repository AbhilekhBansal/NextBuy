import React from "react";
import { FaStar } from "react-icons/fa";
import StyledButton from "./extraComponents/StyledButton";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const addtoCart = (id) => {
    console.log("Add to cart with id ", id);
  };
  return (
    <div
      onClick={() => {
        navigate("/product/" + product.id);
      }}
      className="card bg-base-100 w-60 shadow-lg border border-white hover:border-teal-500 hover:shadow-teal-300"
    >
      <figure className="">
        <img
          src={product.image}
          alt="Shoes"
          className="w-full h-72 object-center object-cover"
        />
      </figure>
      <div className="card-body px-6 py-2 h-32 p-card">
        <h4 className="card-title">{product.title}</h4>
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
            onClick={(e) => {
              e.stopPropagation(); // Prevents click from propagating to parent
              addtoCart(product.id);
            }}
            type="button"
            className="text-white   bg-black focus:outline-none dark:focus:ring-black-800 shadow-lg dark:shadow-lg dark:shadow-green-800/80 text-xs px-4 py-2 text-center me-1 mb-2 hover:bg-transparent hover:border-black border  hover:text-black rounded-sm ease-in-out"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
