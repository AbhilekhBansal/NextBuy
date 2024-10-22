import React from "react";
import Banner from "../components/banner";
import Productstab from "../components/productstab";

const Home = () => {
  const banner = [
    { title: "Home1", image: "/src/assets/banner1.png" },
    { title: "Home2", image: "/src/assets/banner2.png" },
    { title: "Home3", image: "/src/assets/banner3.png" },
  ];
  return (
    <div className="home">
      <section className="w-full ">
        <Banner bannerData={banner} />
      </section>

      <section className="home-products flex flex-col items-center justify-center pt-6 bg-slate-200 product-section">
        <h3 className="heading font-bold font-inknut ">Our Top Collections</h3>
        <img className="w-28 pb-4" src="/src/assets/underline.png" />
        <Productstab />
      </section>
    </div>
  );
};

export default Home;
