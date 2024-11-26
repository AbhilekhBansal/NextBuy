import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import brand1 from "@/assets/brands/brand1.png";
import brand2 from "@/assets/brands/brand1.png";
import brand3 from "@/assets/brands/brand1.png";
import brand4 from "@/assets/brands/brand1.png";
import brand5 from "@/assets/brands/brand1.png";
import brand6 from "@/assets/brands/brand1.png";
import brand7 from "@/assets/brands/brand1.png";
import brand8 from "@/assets/brands/brand1.png";
import brand9 from "@/assets/brands/brand1.png";
import brand10 from "@/assets/brands/brand1.png";

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
        <CarouselItem className="basis-1/6">
          <img
            className="min:w-24 h-16 lg:ml-7 lg:mr-7 object-contain object-center"
            src={brand1}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/6">
          <img
            className="w-24 h-16 lg:ml-7 lg:mr-7 object-contain object-center"
            src={brand2}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/6">
          <img
            className="w-24 h-16 lg:ml-7 lg:mr-7 object-contain object-center"
            src={brand6}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/6">
          <img
            className="w-24 h-16 lg:ml-7 lg:mr-7 object-contain object-center"
            src={brand3}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/6">
          <img
            className="w-24 h-16 lg:ml-7 lg:mr-7 object-contain object-center"
            src={brand4}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/6">
          <img
            className="w-24 h-16 lg:ml-7 lg:mr-7 object-contain object-center"
            src={brand5}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/6">
          <img
            className="w-24 h-16 lg:ml-7 lg:mr-7 object-contain object-center"
            src={brand7}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/6">
          <img
            className="w-24 h-16 lg:ml-7 lg:mr-7 object-contain object-center"
            src={brand8}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/6">
          <img
            className="w-24 h-16 lg:ml-7 lg:mr-7 object-contain object-center"
            src={brand9}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/6">
          <img
            className="w-24 h-16 lg:ml-7 lg:mr-7 object-contain object-center"
            src={brand10}
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Brands;
