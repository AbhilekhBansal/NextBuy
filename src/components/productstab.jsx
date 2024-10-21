import React from "react";
import ProductList from "./productList";

const Productstab = () => {
  return (
    <div role="tablist" className="tabs tabs-bordered ">
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Best Sellers"
        defaultChecked
      />
      <div role="tabpanel" className="tab-content p-10 w-full">
        <ProductList />
      </div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Trending"
      />
      <div role="tabpanel" className="tab-content p-10">
        <ProductList />
      </div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="New Arrival"
      />
      <div role="tabpanel" className="tab-content p-10">
        <ProductList />
      </div>
    </div>
  );
};

export default Productstab;
