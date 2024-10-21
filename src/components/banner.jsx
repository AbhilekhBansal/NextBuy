import React from "react";

const Banner = ({ bannerData }) => {
  return (
    <>
      <div className="carousel mx-6 h-80 shadow-sm">
        {bannerData &&
          bannerData.map((b, index) => {
            return (
              <div
                id={`slider${index + 1}`}
                key={index + 1}
                className="carousel-item relative w-full"
              >
                <img src={b.image} className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a
                    href={`#slider${index === 0 ? bannerData.length : index}`}
                    className="btn btn-circle banner-btn"
                  >
                    ❮
                  </a>
                  <a
                    href={`#slider${
                      index === bannerData.length - 1 ? 1 : index + 2
                    }`}
                    className="btn btn-circle banner-btn"
                  >
                    ❯
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Banner;
