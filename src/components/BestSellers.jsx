"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { MdEuroSymbol } from "react-icons/md";
import { IoReaderOutline } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import getRandomProducts from "@/components/utility/getRandomProducts";
import Modal from "./utility/Modal";

const BestSellers = () => {
  const [randomData, setRandomData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalItem, setModalItem] = useState({});

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = () => {
    setIsLoading(true);
    fetch("/api/menu").then((res) => {
      res.json().then((data) => {
        setRandomData(getRandomProducts(data, 6));
        setIsLoading(false);
      });
    });
  };

  const openModal = (item) => {
    setModal(true);
    setModalItem(item);
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
    <>
      <section className="w-full max-w-[1440px] m-auto py-10 mb-8 flex flex-col items-center justify-between">
        <h2 className="text-4xl font-ibm mb-2">Best Sellers</h2>

        <p className="text-lg mb-8 ">
          Discover perfect <span className="text-orange-500">pizza</span> best
          sellers.
        </p>

        <div className="w-full bg-transparent">
          {isLoading ? (
            <p className="w-full text-center text-lg text-pizza_dark">
              Loading...
            </p>
          ) : (
            <Slider {...settings}>
              {randomData?.map((item) => {
                return (
                  item.published && (
                    <article
                      type="button"
                      onClick={() => openModal(item)}
                      key={item.name}
                      className="transition-transform linear hover:-translate-y-2  transparent_border hover:border-pizza_green-50/20 rounded-2xl linea ms-0 md:ms-[60px] max-w-[280px] my-10 cursor-pointer"
                    >
                      <div className="bg-white rounded-2xl max-w-[280px] pb-1 shadow-xl p-4">
                        <Image
                          width={280}
                          height={280}
                          src={`/pizzaImages/${item.image}`}
                          alt={item.name}
                          className="rounded-tl-xl rounded-tr-xl pb-3"
                        />

                        <div className=" text-pizza_black">
                          <h2 className="text-xl mb-3 font-bold">
                            Pizza {item.name}
                          </h2>

                          <div className="flex justify-between items-start mb-4 h-[100px]">
                            <div className="flex flex-col justify-start">
                              <p className="text-gray-400 mb-1">
                                Avilable Sizes:
                              </p>
                              {item.sizeAndPrice.map((size) => {
                                return (
                                  <h3
                                    key={size.size}
                                    className="text-sm font-semibold mb-2 text-start"
                                  >
                                    {size.size}
                                  </h3>
                                );
                              })}
                            </div>
                            <div className="flex flex-col justify-start">
                              <p className="text-gray-400 mb-1">Price:</p>
                              {item.sizeAndPrice.map((price) => {
                                return (
                                  <div
                                    key={price.price}
                                    className="flex items-center justify-start mb-2"
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

                          <div className="flex items-center justify-between text-pizza_black mb-3 gap-3">
                            <button className="btn_main bg-pizza_green-400 hover:bg-pizza_green-300 text-white w-1/2">
                              Order
                            </button>

                            <Link
                              href={"/menu"}
                              className="btn_ghost border-[1px] border-pizza_wood-400 hover:bg-pizza_wood-400 hover:text-white w-1/2"
                            >
                              Menu
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                );
              })}
            </Slider>
          )}
        </div>
      </section>
      <Modal
        modal={modal}
        setModal={setModal}
        label={"singleProduct"}
        data={modalItem}
      />
    </>
  );
};

export default BestSellers;
