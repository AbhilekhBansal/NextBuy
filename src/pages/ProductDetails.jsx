import React from "react";

const ProductDetails = () => {
  return (
    <div className="product-details">
      {/* top view  */}
      <div className="product-copntainer grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="col-span-1 lg:col-span-1 image-container">
          <div className="media-box flex">
            <div className="main-img">
              <img
                src="/src/assets/products/product1.png"
                className="top-0 right-0 bottom-0 left-0  object-cover w-full h-full"
              />
            </div>
            <div className="side-images -order-1 relative flex-1"></div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-1 product-description">
          <h2>Product Name</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
