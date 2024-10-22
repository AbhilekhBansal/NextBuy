import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Banner = ({ bannerData }) => {
  return (
    <>
      <Carousel>
        <CarouselContent>
          {bannerData.length > 0 &&
            bannerData.map((banner, index) => (
              <CarouselItem key={index}>
                <img src={banner.image} className="banner-img" />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="banner-btn prev" />
        <CarouselNext className="banner-btn next" />
      </Carousel>
    </>
  );
};

export default Banner;
