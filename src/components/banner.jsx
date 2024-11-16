import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Banner = ({ bannerData = [] }) => {
  return (
    <>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {bannerData.length > 0 &&
            bannerData.map((banner, index) => (
              <CarouselItem key={index}>
                <img
                  src={banner.image}
                  className=" carousel-img object-center object-cover"
                />
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
