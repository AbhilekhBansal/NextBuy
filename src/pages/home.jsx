import React from "react";
import Banner from "../components/banner";
import Productstab from "../components/productstab";
import { Link } from "react-router-dom";
import StyledButton from "@/components/extraComponents/StyledButton";
import HighlightFeature from "@/components/highlightFeature";
import Brands from "@/components/brands";
import Footer from "@/components/footer";

const Home = () => {
  const banner = [
    { title: "Home2", image: "/src/assets/banner2.png" },
    { title: "Home1", image: "/src/assets/banner1.png" },
    { title: "Home3", image: "/src/assets/banner3.png" },
    { title: "Home3", image: "/src/assets/banner9.png" },
    { title: "Home3", image: "/src/assets/banner10.png" },
    { title: "Home3", image: "/src/assets/banner11.png" },
    { title: "Home3", image: "/src/assets/banner12.png" },
  ];
  return (
    <div className="home">
      {/* banner  */}
      <section className="w-full ">
        <Banner bannerData={banner} />
      </section>

      {/* prdoct section */}
      <section className="home-products flex flex-col items-center justify-center mt-10 pt-6 pb-6  product-section">
        <h3 className="heading font-bold font-inknut ">Our Top Collections</h3>
        <img className="w-36 pb-4" src="/src/assets/underline.png" />
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
