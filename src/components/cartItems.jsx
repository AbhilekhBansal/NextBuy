import React from "react";
import CartItem from "./CartItem";

const CartItems = ({ items }) => {
  return (
    items && items.map((item, index) => <CartItem item={item} key={index} />)
  );
};

export default CartItems;
