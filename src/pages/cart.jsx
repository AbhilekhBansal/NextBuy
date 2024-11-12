import CartItems from "@/components/cartItems";
import Product from "@/components/product";
import React from "react";

const Cart = () => {
  const p1 = [
    {
      id: 1,
      title: "Product 1",
      image: "/src/assets/products/product1.png",
      descriptio: "How to park your car at your garage?",
      btn: "Learn Now",
    },

    {
      id: 4,
      title: "Product 4",
      image: "/src/assets/products/product6.png",
      descriptio: "How to park your car at your garage?",
      btn: "Learn Now",
      sale: true,
    },
  ];
  return (
    <div className="flex ">
      <div className="flex-1">
        <CartItems items={p1} />
      </div>
      <div className=""></div>
    </div>
  );
};

export default Cart;
