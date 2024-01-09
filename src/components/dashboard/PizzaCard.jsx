import Image from "next/image";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import { LuEuro } from "react-icons/lu";

import testImage from "../../../public/pizzaImages/jfklr5fneq3-wood-plate-capricciosa.png";

const PizzaCard = () => {
  return (
    <div className="p-3 border-[1px] border-gray-300 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <div>
          <label className="text-gray-400 text-xs ">Pizza Name:</label>
          <h2 className="text-gray-700 font-bold">Pizza Capricciosa</h2>
        </div>
        <div className="flex items-start justify-end gap-3">
          <HiOutlinePencil className="h-5 w-5 text-gray-400 hover:text-pizza_blue-100 cursor-pointer" />
          <HiOutlineTrash className="h-5 w-5 text-gray-400 hover:text-pizza_red-200 cursor-pointer" />
        </div>
      </div>

      <div className="flex justify-between">
        <Image
          src={testImage}
          width={100}
          height={100}
          alt="testImage"
          className="rounded-xl"
        />
        <div className="flex justify-between w-full ms-5">
          <div className="w-2/3 flex flex-col justify-start">
            <label className="text-gray-400 text-xs mb-2">Size:</label>
            <h3 className="text-sm font-semibold mb-2">XL (23cm)</h3>
          </div>

          <div className="w-1/3 flex flex-col justify-start">
            <label className="text-gray-400 text-xs mb-2">Price:</label>

            <div className="flex items-center justify-start gap-1">
              <LuEuro className="h-4 w-4 text-gray-400" />
              <h3 className="font-semibold text-md mb-2">15</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
