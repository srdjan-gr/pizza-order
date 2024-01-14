import Image from "next/image";
import PizzaImage from "../../public/images/wood-plate-margarita.png";
import { MdEuroSymbol } from "react-icons/md";
import { IoReaderOutline } from "react-icons/io5";
import Link from "next/link";

const ProductCard = ({ pizza }) => {
  console.log(pizza);
  return (
    <article className="bg-white rounded-3xl shadow-xl max-w-[300px] pb-1 transition-transform hover:-translate-y-1 z-0 my-10 ">
      <Image
        width={300}
        height={300}
        src={PizzaImage}
        // alt={item.name}
        alt="image"
        className="rounded-tl-3xl rounded-tr-3xl"
      />

      <div className="m-4 my-5 text-pizza_black">
        <h2 className="text-xl mb-5">me</h2>

        <div className="flex justify-between items-center mb-8">
          <div className="flex flex-col justify-start">
            <p className="text-gray-300">Sizes:</p>
            <h3 className="text-xl">M, L, XL</h3>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-gray-300">Price from:</p>
            <h3 className="flex justify-start items-center text-xl">
              15
              <MdEuroSymbol className="text-gray-300 text-xl m-0 p-0 mt-[2px] ms-1" />
            </h3>
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
  );
};

export default ProductCard;
