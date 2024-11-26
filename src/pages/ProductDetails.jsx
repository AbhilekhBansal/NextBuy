import Banner from "@/components/banner";
import useBreakpoint from "@/components/extraComponents/usebreakpoint";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { productImgs } from "@/constant";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const ProductDetails = () => {
  const breakpoint = useBreakpoint();
  const sizes = ["S", "M", "L", "XL"];
  const [selectSize, setSeletcSize] = useState(null);

  const [mainImg, setMainImg] = useState(productImgs[0].image);
  console.log("selected size - ", selectSize);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="product-details mt-16 py-7">
      {/* top view  */}
      <div className="product-copntainer grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="col-span-1 lg:col-span-1 image-container ">
          <div className="media-box lg:flex ">
            <div className="main-img lg:max-w-[calc(100%-120px)] lg:px-0 px-4 w-full bg-neutral-100">
              <img
                src={mainImg}
                className="top-0 right-0 bottom-0 left-0  object-cover object-center w-full"
              />
            </div>
            <div className="lg:flex side-images -order-1 relative lg:flex-1 min-w-[6rem] lg:p-2 px-8">
              <Carousel
                orientation={breakpoint === "l" ? "vertical" : "horizontal"}
                className="w-full max-h-80 lg:mt-10"
              >
                <CarouselContent className=" h-auto max-h-[380px] p-3">
                  {productImgs.length > 0 &&
                    productImgs.map((p, index) => (
                      <CarouselItem
                        key={index}
                        className="pt-1  gap-3 basis-1/6 cursor-pointer"
                      >
                        <img
                          src={p.image}
                          alt={`Product image ${index + 1}`}
                          className="carousel-img object-center object-cover h-full"
                          onClick={() => setMainImg(p.image)}
                        />
                      </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="rounded-none lg:-top-16 lg:py-10 bg-neutral-200 text-black font-sans font-semibold" />
                <CarouselNext className="rounded-none lg:-bottom-28 lg:py-10 bg-neutral-200 text-black font-sans font-semibold" />
              </Carousel>
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-1 product-description flex flex-col">
          {/* product titles & price  */}
          <div className=" m-4 mt-0 p-6 bg-neutral-50 h-fit shadow-md">
            <h2 className="text-[rgb(139,139,163)] font-semibold text-lg leading-6 font-sans m-0 p-0">
              Ethnic Trendz Men's Solid Regular Spread Collar Blue Shirts
            </h2>
            <div className="card-price justify-start flex flex-wrap mt-3">
              <h5 className="sale-price text-2xl">₹262</h5>
              <p className="mrp">₹385</p>
              <span className="discount !font-semibold ">25% Off</span>
            </div>
            <div className="rating-box">
              <div>
                <span className="rating mt-6">
                  <span className="rate">4.5</span>
                  <FaStar className=" ml-1 items-center text-white w-3" />
                </span>
              </div>
            </div>
            {/* buttons  */}
            <div className="flex justify-end mt-5 border-t-2">
              <button
                onClick={() => console.log("Add to cart")}
                type="button"
                className="text-white  mt-1 bg-black focus:outline-none dark:focus:ring-black-800 shadow-lg dark:shadow-lg dark:shadow-green-800/80 text-xs px-4 py-2 text-center me-1 mb-2 hover:bg-transparent hover:border-black border  hover:text-black rounded-sm ease-in-out"
              >
                Add to cart
              </button>
              <button
                onClick={() => {
                  console.log("buy now");
                }}
                type="button"
                className="text-white  mt-1 bg-black focus:outline-none dark:focus:ring-black-800 shadow-lg dark:shadow-lg dark:shadow-green-800/80 text-xs px-4 py-2 text-center me-1 mb-2 hover:bg-transparent hover:border-black border  hover:text-black rounded-sm ease-in-out"
              >
                buy now
              </button>
            </div>
          </div>
          {/* sizes  */}
          <div className="m-4 p-6 bg-neutral-50 h-fit shadow-md">
            <h3 className="text-[rgb(31,31,31)] font-semibold text-lg leading-6 font-sans m-0 p-0">
              Select Size
            </h3>
            <div className="size-box">
              {sizes.length > 0 &&
                sizes.map((size, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      setSeletcSize(size);
                    }}
                    type="button"
                    className={`${
                      selectSize === size ? "active " : ""
                    } text-black rounded-full mt-1 bg-white focus:outline-none dark:focus:ring-black-800 shadow-lg dark:shadow-lg dark:shadow-green-800/80 text-xs px-6 py-2 text-center me-1 mb-2 hover:bg-transparent hover:border-black hover:bg-black hover:text-white border ease-in-out`}
                  >
                    {size}
                  </button>
                ))}
            </div>
          </div>
          {/* product description  */}
          <div className="m-4 p-6 bg-neutral-50 h-fit shadow-md">
            <h3 className="text-[rgb(31,31,31)] font-semibold text-lg leading-6 font-sans m-0 p-0">
              Description
            </h3>
            <div className="mt-4 ">
              <p className="font-sans font-normal text-[rgb(139,139,163)]">
                Sku: DGT_05 Available: instock Vendor: rokan-theme Collections:
                Camera & Photo , Cellphone , Home page , Laptop & Computer ,
                smartwatches , Speaker & Audio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
