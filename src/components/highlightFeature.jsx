import React from "react";
import { Link } from "react-router-dom";
import StyledButton from "./extraComponents/StyledButton";

const HighlightFeature = () => {
  return (
    <div className="hdt-container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 rounded overflow-hidden bg-neutral-100 shadow-lg">
        <div className="inherit  overflow-hidden block w-full h-full">
          <img
            src="https://demo-ecomus-global.myshopify.com/cdn/shop/files/wm_img_text_1.jpg?v=1706499104&width=1200"
            alt="Image description"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="hdt-content_wrap grid md:order-last">
          <div className="place-self-center text-center  md:text-start lg:font-medium  lg:text-left">
            <h2 className=" font-normal font-sans text-3xl lg:text-5xl lg:leading-tight">
              Redefining Fashion Excellence
            </h2>
            <p className="text-base font-normal font-sans text-[#545454] pt-3 pb-3">
              Here is your chance to upgrade your wardrobe with a variation of
              styles
            </p>
            <Link to={"/search"}>
              <StyledButton />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightFeature;
