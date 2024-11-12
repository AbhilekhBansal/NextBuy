import ProductList from "@/components/productList";
import Productstab from "@/components/productstab";
import React from "react";
import { FaAngleDown } from "react-icons/fa";

const Search = () => {
  const cat1 = [
    {
      id: 1,
      title: "Product 1",
      image: "/src/assets/products/product1.png",
      descriptio: "How to park your car at your garage?",
      btn: "Learn Now",
    },
    {
      id: 2,
      title: "Product 2",
      image: "/src/assets/products/product2.png",
      descriptio: "How to park your car at your garage?",
      btn: "Learn Now",
    },

    {
      id: 3,
      title: "Product 3",
      image: "/src/assets/products/product4.png",
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
    {
      id: 5,
      title: "Product 5",
      image: "/src/assets/products/product7.png",
      descriptio: "How to park your car at your garage?",
      btn: "Learn Now",
      sale: true,
    },
  ];

  return (
    <>
      <div className="flex mt-16 mb-12">
        <div className="sidebar flex-1 relative w-full min-h-[1px]: pr-0">
          <div className="bg-white border-r-8 mr-3">
            <div className="relative border-r-8 mr-3">
              <ul className="list-none m-0 p-2 px-6 overflow-hidden border border-[#eaeaf2] rounded cursor-pointer">
                <li className="w-full inline-block">
                  <div className="flex justify-between items-center p-0 no-underline min-w-[59px]">
                    <div className="flex gap-0.5 bg-white rounded-lg">
                      <p className="text-[#8b8ba3] font-normal text-[16px] leading-[20px] font-[Mier\ book] m-0 p-0">
                        Sort by :
                      </p>
                      <span className="text-[#353543] font-semibold text-[16px] leading-[20px] font-[Mier\ demi] m-0 p-0">
                        Relevance
                      </span>
                    </div>
                    <FaAngleDown className="flex items-center transform  ml-[9.5px] h-[12px] w-[12px] cursor-pointer" />
                  </div>
                  <div className="absolute hidden z-10 cursor-pointer  bg-[#f8f8ff] rounded-b-lg border border-[#eaeaf2] min-w-[59px] max-h-[288px] overflow-y-scroll left-0 right-0 top-[45px] drop-shadow-[0px_2px_4px_rgba(34,34,34,0.12),0px_0px_1px_rgba(34,34,34,0.12)]">
                    <li className="w-full inline-block px-6 py-3 hover:bg-[#f3f3f3]">
                      <p className="text-[#353543] font-semibold text-[16px] leading-[20px] font-[Mier\ demi]">
                        Relevance
                      </p>
                    </li>
                    <li className="w-full inline-block px-6 py-3 hover:bg-[#f3f3f3]">
                      <p className="text-[#353543] font-semibold text-[16px] leading-[20px] font-[Mier\ demi]">
                        Price (Low to High)
                      </p>
                    </li>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="products relative w-full min-h-[1px] pr-2 pl-2 md:flex md:w-[75%] md:max-w-[75%]">
          <div className="w-full max-w-full px-0 md:max-w-[720px] lg:max-w-[960px]">
            <ProductList products={cat1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
