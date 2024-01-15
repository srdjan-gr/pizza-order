import Image from "next/image";
import PizzaImage from "../../public/images/wood-plate-margarita.png";
import { MdEuroSymbol } from "react-icons/md";
import { IoReaderOutline } from "react-icons/io5";
import Link from "next/link";

const ProductCard = ({ item }) => {
  return (
    <article
      key={item.name}
      className="transparent_border hover:border-pizza_green-50/20 rounded-2xl hover:-translate-y-2 transition-all linear"
    >
      <div className="bg-white rounded-2xl max-w-[280px] pb-1 shadow-xl">
        <Image
          width={280}
          height={280}
          src={`/pizzaImages/${item.image}`}
          alt={item.name}
          className="rounded-tl-3xl rounded-tr-3xl p-3 pb-0"
        />

        <div className="p-3 text-pizza_black">
          <h2 className="text-xl mb-3 font-bold">Pizza {item.name}</h2>

          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col justify-start">
              <p className="text-gray-300">Avilable Sizes:</p>
              {item.sizeAndPrice.map((size) => {
                return (
                  <h3 key={size.size} className="text-sm font-semibold mb-2">
                    {size.size}
                  </h3>
                );
              })}
            </div>
            <div className="flex flex-col justify-start">
              <p className="text-gray-300">Price:</p>
              {item.sizeAndPrice.map((price) => {
                return (
                  <div
                    key={price.price}
                    className="flex items-center justify-start mb-1"
                  >
                    <MdEuroSymbol className="text-gray-300 text-md m-0 p-0 mt-[2px] me-1" />
                    <h3 className="font-semibold text-[18px]">{price.price}</h3>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between text-pizza_black ">
            <button className="btn_main bg-pizza_green-400 hover:bg-pizza_green-300 text-white">
              Order
            </button>

            <Link
              href={"/menu"}
              className="btn_ghost border-[1px] border-pizza_wood-400 hover:bg-pizza_wood-400 hover:text-white"
            >
              Check Menu
            </Link>

            <Link
              href={"/product"}
              className="text-3xl cursor-pointer text-gray-500 hover:text-gray-600"
            >
              <IoReaderOutline />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
