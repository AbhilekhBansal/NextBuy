import React from "react";
import Banner from "../components/banner";

const Home = () => {
  const banner = [
    { title: "Home", image: "", subtitle: "" },
    { title: "Home2" },
  ];
  return (
    <div className="home">
      <section className="w-full">
        <Banner bannerData={banner} />
      </section>
    </div>
  );
};

export default Home;
