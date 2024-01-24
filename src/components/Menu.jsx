"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { MdEuroSymbol } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import Modal from "./utility/Modal";
import Image from "next/image";

const Menu = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalItem, setModalItem] = useState({});

  const openModal = (modalItem) => {
    setModal(true);
    setModalItem(modalItem);
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = () => {
    setIsLoading(true);
    fetch("/api/menu").then((res) => {
      res.json().then((resdata) => {
        const res = resdata.filter((items) => items.published);

        setData(res.slice(0, 6));
        setIsLoading(false);
      });
    });
  };

  return (
    <>
      <section className="max-w-[1440px] m-auto rounded-3xl relative bg-gradient-to-r from-pizza_green-300/10 to-pizza_orange-400/10 mb-5">
        <div className="max-w-6xl m-auto py-16 flex flex-col items-center justify-between ">
          <h2 className="text-4xl font-ibm mb-2">Menu</h2>

          <p className="text-lg mb-14 ">
            Perfect <span className="text-orange-500">pizza</span> menu.
          </p>

          {isLoading ? (
            <p className="w-full text-center text-lg text-pizza_dark">
              Loading...
            </p>
          ) : (
            <div className="grid grid-col-1 md:grid-cols-3 gap-4 md:gap-24">
              {/* {data?.map((item) => {
              <ProductCard item={item} />;
            })} */}

              {data?.map((item) => {
                return (
                  <article
                    key={item.name}
                    className="transparent_border hover:border-pizza_green-50/20 rounded-2xl hover:-translate-y-2 transition-all linear cursor-pointer"
                    onClick={() => openModal(item)}
                  >
                    <div className="bg-white rounded-2xl max-w-[280px] pb-1 shadow-xl h-full p-4">
                      <Image
                        width={280}
                        height={280}
                        src={`/pizzaImages/${item.image}`}
                        alt={item.name}
                        className="rounded-tl-xl rounded-tr-xl pb-3"
                      />

                      <div className=" text-pizza_black">
                        <h2 className="text-xl mb-3 font-bold underline">
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
                                  className="text-sm font-semibold mb-2"
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

                        <div className="flex items-center justify-between text-pizza_black mb-3 gap-4 w-full">
                          <button className="btn_main bg-pizza_green-400 hover:bg-pizza_green-300 text-white w-full">
                            Order
                          </button>

                          <Link
                            href={"/menu"}
                            className="btn_ghost border-[1px] border-pizza_wood-400 hover:bg-pizza_wood-400 hover:text-white w-full"
                          >
                            Menu
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          <Link
            className="btn_ghost border-[1px] border-pizza_wood-100 hover:bg-pizza_wood-100 hover:text-white mt-20 text-xl"
            href={"/menu"}
          >
            Check full menu...
          </Link>
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

export default Menu;
