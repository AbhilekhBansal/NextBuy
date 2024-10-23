import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Brands = () => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 1000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem className="xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
          <img
            className="w-24 h-16 ml-7 mr-7 object-contain object-center"
            src="/src/assets/brands/brand1.png"
          />
        </CarouselItem>
        <CarouselItem className="xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
          <img
            className="w-24 h-16 ml-7 mr-7 object-contain object-center"
            src="/src/assets/brands/brand2.png"
          />
        </CarouselItem>
        <CarouselItem className="xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
          <img
            className="w-24 h-16 ml-7 mr-7 object-contain object-center"
            src="/src/assets/brands/brand6.png"
          />
        </CarouselItem>
        <CarouselItem className="xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
          <img
            className="w-24 h-16 ml-7 mr-7 object-contain object-center"
            src="/src/assets/brands/brand3.png"
          />
        </CarouselItem>
        <CarouselItem className="xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
          <img
            className="w-24 h-16 ml-7 mr-7 object-contain object-center"
            src="/src/assets/brands/brand4.png"
          />
        </CarouselItem>
        <CarouselItem className="xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
          <img
            className="w-24 h-16 ml-7 mr-7 object-contain object-center"
            src="/src/assets/brands/brand5.png"
          />
        </CarouselItem>
        <CarouselItem className="xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
          <img
            className="w-24 h-16 ml-7 mr-7 object-contain object-center"
            src="/src/assets/brands/brand7.png"
          />
        </CarouselItem>
        <CarouselItem className="xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
          <img
            className="w-24 h-16 ml-7 mr-7 object-contain object-center"
            src="/src/assets/brands/brand8.png"
          />
        </CarouselItem>
        <CarouselItem className="xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
          <img
            className="w-24 h-16 ml-7 mr-7 object-contain object-center"
            src="/src/assets/brands/brand9.jpg"
          />
        </CarouselItem>
        <CarouselItem className="xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
          <img
            className="w-24 h-16 ml-7 mr-7 object-contain object-center"
            src="/src/assets/brands/brand10.png"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Brands;
