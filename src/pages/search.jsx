import useBreakpoint from "@/components/extraComponents/usebreakpoint";
import ProductList from "@/components/productList";
import SearchBar from "@/components/SearchBar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Search = () => {
  const products = [
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
    {
      id: 5,
      title: "Product 5",
      image: "/src/assets/products/product7.png",
      descriptio: "How to park your car at your garage?",
      btn: "Learn Now",
      sale: true,
    },
    {
      id: 2,
      title: "Product 2",
      image: "/src/assets/products/product2.png",
      descriptio: "How to park your car at your garage?",
      btn: "Learn Now",
    },
    {
      id: 5,
      title: "Product 5",
      image: "/src/assets/products/product7.png",
      descriptio: "How to park your car at your garage?",
      btn: "Learn Now",
      sale: true,
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
  const categories = ["Shirts", "Formal Shirts", "Pants"];

  const [searchQuery, setSearchQuery] = useState("");

  // Function to get query parameters from URL
  const getQueryParam = (param) => {
    const params = new URLSearchParams(location.search);
    return params.get(param);
  };

  useEffect(() => {
    const search = getQueryParam("search");
    setSearchQuery(search || ""); // Set the input value from the URL
    // console.log("Search in page", search);
  }, [location.search]);

  const [sortBy, setSortBy] = useState(null);
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState(5000);

  const [handleSortBy, setHandleSortBy] = useState(false);

  return (
    <>
      {/* Search only for mobile  */}
      {useBreakpoint() === "s" && (
        <div>
          <SearchBar />
        </div>
      )}
      {/* <SearchBar /> */}
      <div className="flex items-start flex-wrap mt-4 lg:mt-8 mb-12">
        <div className="sidebar relative w-full md:w-[20rem] pr-0">
          <div className="bg-white  ">
            <div className="relative  ">
              <ul className="list-none m-0 p-2 px-6 overflow-hidden border border-[#eaeaf2] rounded cursor-pointer">
                <li className="w-full inline-block mb-8">
                  <div
                    className="flex justify-between items-center p-0 no-underline min-w-[59px]"
                    onClick={(e) => setHandleSortBy(!handleSortBy)}
                  >
                    <div className="flex gap-0.5 bg-white rounded-lg">
                      <p className="text-[#4c4c58] font-normal text-[12px] leading-[20px] font-sans m-0 p-0">
                        Sort by :
                      </p>
                      <span className="text-[#2d2d35] font-semibold text-[12px] leading-[20px] font-sans m-0 p-0">
                        {sortBy ? sortBy : "None"}
                      </span>
                    </div>
                    <FaAngleDown className="flex items-center transform  ml-[9.5px] h-[12px] w-[12px] cursor-pointer" />
                  </div>
                  <div
                    className={`absolute ${
                      handleSortBy ? "block" : "hidden"
                    } z-10 cursor-pointer  bg-[#f8f8ff] rounded-b-lg border border-[#eaeaf2] min-w-[59px] max-h-[288px] overflow-y-scroll left-0 right-0 top-[45px] drop-shadow-[0px_2px_4px_rgba(34,34,34,0.12),0px_0px_1px_rgba(34,34,34,0.12)]`}
                  >
                    <ul>
                      <li
                        className="w-full inline-block px-6 py-3 hover:bg-[#f3f3f3]"
                        onClick={(e) => {
                          setSortBy(null);
                          setHandleSortBy(!handleSortBy);
                        }}
                      >
                        <p className="text-[#353543] font-semibold text-[12px] leading-[20px] font-[Mier\ demi]">
                          None
                        </p>
                      </li>
                      <li
                        className="w-full inline-block px-6 py-3 hover:bg-[#f3f3f3]"
                        onClick={(e) => {
                          setSortBy("Price (Low to High)");
                          setHandleSortBy(!handleSortBy);
                        }}
                      >
                        <p className="text-[#353543] font-semibold text-[12px] leading-[20px] font-[Mier\ demi]">
                          Price (Low to High)
                        </p>
                      </li>
                      <li
                        className="w-full inline-block px-6 py-3 hover:bg-[#f3f3f3]"
                        onClick={(e) => {
                          setSortBy("Price (High to Low)");
                          setHandleSortBy(!handleSortBy);
                        }}
                      >
                        <p className="text-[#353543] font-semibold text-[12px] leading-[20px] font-[Mier\ demi]">
                          Price (High to Low)
                        </p>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="w-full inline-block mb-8">
                  <div className="relative justify-between items-center p-0 no-underline min-w-[59px]">
                    <p className="text-[#4c4c58] text-[16px] leading-[20px] font-sans font-bold m-0 p-0 mb-3">
                      Category
                    </p>

                    <Select
                      onValueChange={(value) => {
                        setCategory(value);
                      }}
                    >
                      <SelectTrigger className="w-[280px] font-sans font-medium">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat, index) => (
                          <SelectItem
                            className=" font-sans font-medium"
                            value={cat}
                            key={index}
                          >
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </li>
                <li className="w-full inline-block mb-8">
                  <div className="relative justify-between items-center p-0 no-underline min-w-[59px]">
                    <p className="text-[#4c4c58] text-[16px] leading-[20px] font-sans font-bold m-0 p-0 mb-3">
                      Price
                    </p>
                    <div className="flex justify-between items-center p-0 no-underline min-w-[59px]">
                      <Slider
                        defaultValue={[price]}
                        max={10000}
                        step={100}
                        className="w-[60%]"
                        onValueChange={(price) => setPrice(price)}
                      />
                      <p className="text-sm font-sans text-slate-600">
                        Under : {price}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="products flex relative pr-2 pl-2 flex-1">
          <div className="w-full max-w-full px-0 md:max-w-[720px] lg:max-w-[960px]">
            <ProductList products={products} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
