import React from "react";
import Banner from "../components/banner";
import Productstab from "../components/productstab";
import { Link } from "react-router-dom";
import StyledButton from "@/components/extraComponents/StyledButton";
import HighlightFeature from "@/components/highlightFeature";
import Brands from "@/components/brands";
import Footer from "@/components/footer";
import SearchBar from "@/components/SearchBar";
import useBreakpoint from "@/components/extraComponents/usebreakpoint";
import { banner } from "@/constant";
import underLine from "@/assets/underline.png";

const Home = () => {
  return (
    <div className="home mt-16">
      {/* Search only for mobile  */}
      {useBreakpoint() === "s" && (
        <div>
          <SearchBar />
        </div>
      )}
      {/* banner  */}
      <section className="w-full ">
        <Banner bannerData={banner} />
      </section>

      {/* prdoct section */}
      <section className="home-products flex flex-col items-center justify-center mt-10 pt-6 pb-6  product-section">
        <h3 className="heading font-bold font-inknut ">Our Top Collections</h3>
        <img className="w-36 pb-4" src={underLine} />
        <Productstab />
      </section>

      {/* highlight product or feature  */}
      <section className="highlight-feature flex flex-col items-center justify-center pt-6 bg-white product-section">
        <HighlightFeature />
      </section>

      {/* Brand & support section  */}
      <section className="highlight-feature flex flex-col pb-8 pt-8 my-5 items-center justify-between  bg-white ">
        <Brands />
      </section>
    </div>
  );
};

export default Home;
