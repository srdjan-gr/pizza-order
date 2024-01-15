"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

const Menu = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = () => {
    setIsLoading(true);
    fetch("/api/menu").then((res) => {
      res.json().then((data) => {
        setData(data);
        setIsLoading(false);
      });
    });
  };

  return (
    <section className="max-w-[1440px] m-auto rounded-3xl relative bg-gradient-to-r from-pizza_green-300/10 to-pizza_orange-400/10 mb-5">
      <div className="max-w-5xl m-auto py-16 flex flex-col items-center justify-between ">
        <h2 className="text-4xl font-ibm mb-2">Menu</h2>

        <p className="text-lg mb-14 ">
          Perfect <span className="text-orange-500">pizza</span> menu.
        </p>

        {isLoading ? (
          <p className="w-full text-center text-lg text-pizza_dark">
            Loading...
          </p>
        ) : (
          <div className="grid grid-col-1 md:grid-cols-3 md:gap-20">
            {data.slice(0, 6).map((item) => {
              return <ProductCard item={item} />;
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
  );
};

export default Menu;
