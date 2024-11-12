import React from "react";

const CartItems = (items) => {
  return (
    items && items.map((item, index) => <CartItem item={item} key={index} />)
  );
};

export default CartItems;
