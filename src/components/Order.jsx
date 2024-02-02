"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { usePathname } from "next/navigation";

const Order = () => {
  const [data, setData] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
  const route = usePathname();

  const fetchParam = route.split("/");
  console.log(fetchParam[2]);

  useEffect(() => {
    // fetchMenuData();
  }, []);

  const fetchMenuData = () => {
    fetch("/api/menu", {
      method: POST,
      body: JSON.stringify({ slug: fetchParam[2] }),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <section className="w-full max-w-[1440px] m-auto">
      <div className="py-14 flex justify-between h-screen bg-[url('/images/bg-order-1080-white.jpg')] bg-center rounded-3xl overflow-y-scroll ">
        <div className="max-w-6xl m-auto "></div>
      </div>
    </section>
  );
};

export default Order;
