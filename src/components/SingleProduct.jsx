import Image from "next/image";
import { MdEuroSymbol } from "react-icons/md";

const SingleProduct = ({ data }) => {
  if (Object.keys(data).length > 0) {
    return (
      <div className="w-2/3 h-3/4 bg-pizza_light p-5 rounded-2xl">
        <div style={{ width: "100%", height: "50%", position: "relative" }}>
          <Image
            src={`/pizzaImages/${data.image}`}
            layout="fill"
            objectFit="cover"
            alt={data.name}
            className="rounded-tl-xl rounded-tr-xl"
          />
        </div>
        <div className="w-full h-1/2 p-8 bg-pizza_light flex justify-center gap-5">
          <div className="flex flex-col w-1/2 text-pizza_black">
            <h3 className="text-2xl font-semibold mb-4">Pizza {data.name}</h3>

            <div className="w-full">
              <label className="text-gray-400">Ingredients:</label>
              <p className="text-xl capitalize ">{data.ingredients}</p>
            </div>
          </div>

          <div className="w-1/2 flex flex-col justify-center gap-8 mt-12">
            <div className=" flex justify-center gap-10">
              <div>
                <label className="text-gray-400">Size:</label>
                {data.sizeAndPrice.map((size) => {
                  return (
                    <p className="text-xl capitalize text-pizza_black mb-3 ">
                      {size.size}
                    </p>
                  );
                })}
              </div>
              <div>
                <label className="text-gray-400">Price:</label>
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

            <div className="w-full flex justify-center">
              <button className="btn_main bg-pizza_green-400 hover:bg-pizza_green-300 text-white w-1/2">
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleProduct;
