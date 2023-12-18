import ProductCard from "@/components/ProductCard";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const BestSellers = () => {
  return (
    <section className="max-w-full  m-auto py-16 flex flex-col items-center justify-between">
      <h2 className="text-4xl font-ibm mb-2">Best Sellers</h2>

      <p className="text-lg mb-14 ">
        Discover perfect <span className="text-orange-500">pizza</span> best
        sellers.
      </p>

      <div className="flex flex-col md:flex-row translate-x-[190px] gap-20 items-end justify-center w-full ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <div className="flex items-center mt-16 gap-10">
        <IoIosArrowDropleft className="w-10 h-10 text-gray-300 cursor-pointer hover:text-gray" />
        <IoIosArrowDropright className="w-10 h-10 text-gray-300 cursor-pointer hover:text-gray" />
      </div>
    </section>
  );
};

export default BestSellers;
