"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { MdEuroSymbol } from "react-icons/md";
import { IoReaderOutline } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import getRandomProducts from "@/components/utility/getRandomProducts";

const BestSellers = () => {
  const [randomData, setRandomData] = useState([]);

  // console.log(randomData);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = () => {
    fetch("/api/menu").then((res) => {
      res.json().then((data) => {
        setRandomData(getRandomProducts(data, 6));
      });
    });
  };

  const settings = {
    infinite: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "120px",
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
    <section className="w-full max-w-[1440px] m-auto py-10 mb-8 flex flex-col items-center justify-between">
      <h2 className="text-4xl font-ibm mb-2">Best Sellers</h2>

      <p className="text-lg mb-8 ">
        Discover perfect <span className="text-orange-500">pizza</span> best
        sellers.
      </p>

      <div className="w-full bg-transparent">
        <Slider {...settings}>
          {randomData?.map((pizza) => {
            return (
              pizza.published && (
                <article
                  key={pizza.name}
                  className="bg-white rounded-2xl shadow-xl max-w-[280px] pb-1 transition-transform hover:-translate-y-1 z-0 my-10 ms-0 md:ms-[60px] "
                >
                  <Image
                    width={280}
                    height={280}
                    src={`/pizzaImages/${pizza.image}`}
                    alt={pizza.name}
                    className="rounded-tl-3xl rounded-tr-3xl p-4 pb-0"
                  />

                  <div className="p-4 text-pizza_black">
                    <h2 className="text-xl mb-3 font-bold">
                      Pizza {pizza.name}
                    </h2>

                    <div className="flex justify-between items-center mb-4">
                      <div className="flex flex-col justify-start">
                        <p className="text-gray-300">Avilable Sizes:</p>
                        {pizza.sizeAndPrice.map((size) => {
                          return (
                            <h3
                              key={size.size}
                              className="text-sm font-semibold mb-2"
                            >
                              {size.size}
                            </h3>
                          );
                        })}
                      </div>
                      <div className="flex flex-col justify-start">
                        <p className="text-gray-300">Price:</p>
                        {pizza.sizeAndPrice.map((price) => {
                          return (
                            <div
                              key={price.price}
                              className="flex items-center justify-start mb-1"
                            >
                              <MdEuroSymbol className="text-gray-300 text-md m-0 p-0 mt-[2px] me-1" />
                              <h3 className="font-semibold text-[18px]">
                                {price.price}
                              </h3>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-pizza_black ">
                      <button className="btn_main bg-pizza_green-400 hover:bg-pizza_green-300 text-white">
                        Order
                      </button>

                      <button className="btn_ghost border-[1px] border-pizza_wood-400 hover:bg-pizza_wood-400 hover:text-white">
                        Check Menu
                      </button>

                      <Link
                        href={"/product"}
                        className="text-3xl cursor-pointer text-gray-500 hover:text-gray-600"
                      >
                        <IoReaderOutline />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            );
          })}
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
