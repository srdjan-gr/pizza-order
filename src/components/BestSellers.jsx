"use client";

import ProductCard from "@/components/ProductCard";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestSellers = () => {
  const settings = {
    infinite: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    speed: 500,
    dots: true,
    arrows: false,
    swipeToSlide: true,
  };

  return (
    <section className="w-full max-w-[1440px] m-auto py-16 mb-8 flex flex-col items-center justify-between ">
      <h2 className="text-4xl font-ibm mb-2">Best Sellers</h2>

      <p className="text-lg mb-8 ">
        Discover perfect <span className="text-orange-500">pizza</span> best
        sellers.
      </p>

      <div className="w-full bg-transparent ">
        <Slider {...settings}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Slider>
      </div>

      {/* <div className="flex items-center mt-12 gap-10">
        <IoIosArrowDropleft className="w-10 h-10 text-gray-300 cursor-pointer hover:text-gray" />
        <IoIosArrowDropright className="w-10 h-10 text-gray-300 cursor-pointer hover:text-gray" />
      </div> */}
    </section>
  );
};

export default BestSellers;
