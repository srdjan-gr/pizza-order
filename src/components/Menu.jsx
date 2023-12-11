import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

const Menu = () => {
  return (
    <section className="w-full relative bg-gradient-to-r from-pizza_green-300/5 to-pizza_orange-400/5 ">
      <div className="max-w-5xl m-auto py-16 flex flex-col items-center justify-between ">
        <h2 className="text-4xl font-ibm mb-2">Menu</h2>

        <p className="text-lg mb-14 ">
          Perfect <span className="text-orange-500">pizza</span> menu.
        </p>

        <div className="grid grid-cols-3 gap-16">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        <Link
          className="btn_ghost border-[1px] border-pizza_orange-500 hover:bg-pizza_orange-500 hover:text-white mt-20 text-xl"
          href={"/menu"}
        >
          Check full menu...
        </Link>
      </div>
    </section>
  );
};

export default Menu;
