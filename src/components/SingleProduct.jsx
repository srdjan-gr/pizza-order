import Image from "next/image";
import { MdEuroSymbol } from "react-icons/md";
import { FaHeartPulse } from "react-icons/fa6";
import sliced from "../../public/images/pzz-unsliced-60x60-gray.png";
import unsliced from "../../public/images/pzza-sliced-60x60-gray.png";
import ingredients from "../../public/images/ingredients.png";
import serving from "../../public/images/pizza.png";
import price from "../../public/images/money.png";
import size from "../../public/images/meter.png";

const SingleProduct = ({ data }) => {
  if (Object.keys(data).length > 0) {
    return (
      <div className="w-[70%] h-3/4 bg-pizza_light p-5 rounded-2xl">
        <div style={{ width: "100%", height: "50%", position: "relative" }}>
          <Image
            src={`/pizzaImages/${data.image}`}
            layout="fill"
            objectFit="cover"
            alt={data.name}
            className="rounded-tl-xl rounded-tr-xl"
          />
        </div>
        <div className="w-full h-1/2 p-6 bg-pizza_light flex justify-center gap-5">
          <div className="flex flex-col w-2/3 text-pizza_black">
            <h3 className="text-2xl font-semibold mb-6 underline">
              Pizza {data.name}
            </h3>

            <div className="w-full mb-4">
              <div className="flex items-center justify-start">
                <Image
                  src={ingredients}
                  className="h-4 w-4 me-2"
                  alt="ingredients icon"
                />
                <label className="text-gray-400">Ingredients:</label>
              </div>
              <p className="text-xl capitalize ">{data.ingredients}</p>
            </div>

            <div className="w-full mb-4">
              <label className="text-gray-400 flex items-center">
                <FaHeartPulse className="w-5 f-5 text-pizza_red-500 me-1" />
                Allergens:
              </label>
              <p className="text-xl capitalize ">{data.allergens}</p>
            </div>

            <div className="w-full mb-4">
              <div className="flex items-center justify-start ">
                <Image
                  src={serving}
                  width={50}
                  height={50}
                  className="me-2 h-4 w-4"
                  alt="serving icon"
                />
                <label className="text-gray-400 flex items-center">
                  Serving:
                </label>
              </div>
              <div className="flex items-center justify-start mt-1">
                <Image
                  src={sliced}
                  width={40}
                  height={40}
                  className="me-3"
                  alt="sliced serving icon"
                />
                <Image
                  src={unsliced}
                  width={40}
                  height={40}
                  alt="unliced serving icon"
                />
              </div>
            </div>
          </div>

          <div className="w-1/3 flex flex-col justify-start gap-8 mt-12">
            <div className=" flex justify-center gap-10">
              <div>
                <div className="flex items-center justify-start  h-4 w-4">
                  <Image
                    src={size}
                    height={40}
                    width={50}
                    alt="size icon"
                    className="h-4 w-4 me-2"
                  />
                  <label className="text-gray-400">Size:</label>
                </div>
                {data.sizeAndPrice.map((size) => {
                  return (
                    <p className="text-xl capitalize text-pizza_black mb-3 ">
                      {size.size}
                    </p>
                  );
                })}
              </div>
              <div>
                <div className="flex items-center justify-start h-4 w-4">
                  <Image
                    src={price}
                    height={40}
                    width={50}
                    alt="price icon"
                    className="me-2 h-4 w-4"
                  />
                  <label className="text-gray-400">Price:</label>
                </div>
                {data.sizeAndPrice.map((price) => {
                  return (
                    <p className="text-xl capitalize text-pizza_black mb-3 flex gap-1 items-center">
                      <MdEuroSymbol className="text-gray-300 text-md m-0 p-0 mt-[2px]" />
                      {price.price}
                    </p>
                  );
                })}
              </div>
            </div>

            <div className="w-full flex justify-center gap-5">
              <button className="btn_main bg-pizza_green-400 hover:bg-pizza_green-300 text-white w-1/2">
                Order
              </button>
              <button className="btn_ghost border-[1px] border-pizza_wood-400 hover:bg-pizza_wood-300 hover:text-white w-1/2">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleProduct;
