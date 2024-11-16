import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const originalPrice = 3649;
  const discount = 2518;
  const deliveryCharge = 40;
  const totalPrice = originalPrice - discount;

  return (
    <div className="max-w-6xl mx-auto mt-20 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
      {/* Cart Item Section */}
      <div className="col-span-2 bg-white p-4 rounded-lg  pb-4 shadow-md">
        <h2 className="text-xl font-bold mb-4">CART ITEMS</h2>
        {/* Item  */}
        <div className="py-4 border-b">
          <div className="flex items-center gap-4  pb-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Product"
              className="w-24 h-24 rounded-md"
            />
            <div className="flex-1">
              <h3 className="line-clamp-3 text-lg font-semibold text-wrap break-all">
                The Indian Garage Co. Full Sleeve Solid
              </h3>
              <p className="text-sm text-gray-500">Size: L</p>
            </div>
            <div className="text-right">
              <p className="line-through text-gray-500">₹{originalPrice}</p>
              <p className="text-xl font-bold text-black">₹{totalPrice}</p>
            </div>
          </div>
          <div className="flex items-center justify-between ">
            {/* Quantity Controls */}
            <div className="flex items-center gap-4">
              <button
                className="p-2 bg-gray-200 rounded-full"
                onClick={handleDecrease}
              >
                <FaMinus />
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                className="p-2 bg-gray-200 rounded-full"
                onClick={handleIncrease}
              >
                <FaPlus />
              </button>
            </div>
            <div className="flex gap-4 text-sm font-semibold text-gray-600">
              <button className="hover:underline text-red-600">REMOVE</button>
            </div>
          </div>
        </div>
        <div className="py-4 border-b">
          <div className="flex items-center gap-4  pb-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Product"
              className="w-24 h-24 rounded-md"
            />
            <div className="flex-1">
              <h3 className="line-clamp-3 text-lg font-semibold text-wrap break-all">
                The Indian Garage Co. Full Sleeve Solid
              </h3>
              <p className="text-sm text-gray-500">Size: L</p>
            </div>
            <div className="text-right">
              <p className="line-through text-gray-500">₹{originalPrice}</p>
              <p className="text-xl font-bold text-black">₹{totalPrice}</p>
            </div>
          </div>
          <div className="flex items-center justify-between ">
            {/* Quantity Controls */}
            <div className="flex items-center gap-4">
              <button
                className="p-2 bg-gray-200 rounded-full"
                onClick={handleDecrease}
              >
                <FaMinus />
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                className="p-2 bg-gray-200 rounded-full"
                onClick={handleIncrease}
              >
                <FaPlus />
              </button>
            </div>
            <div className="flex gap-4 text-sm font-semibold text-gray-600">
              <button className="hover:underline text-red-600">REMOVE</button>
            </div>
          </div>
        </div>
        <button className="w-full mt-6 py-3 bg-orange-500 text-white font-bold rounded-md">
          PLACE ORDER
        </button>
      </div>

      {/* Price Details Section */}
      <div className="">
        <div className="w-full h-fit bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">PRICE DETAILS</h2>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-600">
              <p>Price (1 item)</p>
              <p>₹{originalPrice}</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p>Discount</p>
              <p className="text-green-600">- ₹{discount}</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p>Delivery Charges</p>
              <p className="text-green-600">
                ₹{deliveryCharge === 0 ? "Free" : deliveryCharge}
              </p>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg">
            <p>Total Amount</p>
            <p>₹{totalPrice}</p>
          </div>
          <p className="text-green-600 mt-4 text-sm">
            You will save ₹{discount} on this order
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 mt-4 text-gray-500 font-medium mx-auto text-wrap break-words">
          <IoShieldCheckmarkOutline className="h-12 w-12 " />
          <p>
            Safe and Secure Payments. Easy returns. 100% Authentic products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
