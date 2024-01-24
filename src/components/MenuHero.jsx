"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const MenuHero = () => {
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
    <section className="w-full max-w-[1440px] m-auto">
      <div className="py-14 flex justify-between h-screen bg-[url('/images/bg-single-1080-white.jpg')] bg-center rounded-3xl overflow-y-scroll ">
        {isLoading ? (
          <p className="w-full text-center text-lg text-pizza_dark">
            Loading...
          </p>
        ) : (
          <div className="max-w-6xl m-auto grid grid-col-1 md:grid-cols-3 md:gap-24">
            {data?.map((item) => {
              return <ProductCard item={item} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuHero;
