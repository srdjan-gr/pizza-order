import Image from "next/image";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import { LuEuro } from "react-icons/lu";

const PizzaCard = ({ item }) => {
  return (
    <div
      key={item.name}
      className="p-4 border-[1px] border-gray-300 rounded-xl"
    >
      <div className="flex justify-between items-center mb-4">
        <div>
          <label className="text-gray-400 text-xs ">Pizza Name:</label>
          <h2 className="text-gray-700 font-bold text-lg">{item.name}</h2>
        </div>
        <div className="flex items-start justify-end gap-3 border-[1px] border-gray-300 rounded-lg p-2">
          <HiOutlinePencil className="h-5 w-5 text-gray-400 hover:text-pizza_blue-100 cursor-pointer" />
          <HiOutlineTrash className="h-5 w-5 text-gray-400 hover:text-pizza_red-200 cursor-pointer" />
        </div>
      </div>

      <div className="flex justify-between">
        <Image
          src={`/pizzaImages/${item.image}`}
          width={120}
          height={120}
          alt={item.name}
          className="rounded-xl"
        />
        <div className="flex justify-between w-full ms-5">
          <div className="w-2/3 flex flex-col justify-start">
            <label className="text-gray-400 text-xs mb-2">Size:</label>
            {item.sizeAndPrice.map((size) => {
              return (
                <h3 key={size.size} className="text-sm font-semibold mb-2">
                  {size.size}
                </h3>
              );
            })}
          </div>

          <div className=" flex flex-col justify-start">
            <label className="text-gray-400 text-xs mb-2">Price:</label>

            <div className="flex flex-col items-center justify-start">
              {item.sizeAndPrice.map((price) => {
                return (
                  <div
                    key={price.price}
                    className="flex items-center justify-start mb-2"
                  >
                    <LuEuro className="h-4 w-4 text-gray-300 mr-1" />
                    <h3 className="font-semibold text-md">{price.price}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
