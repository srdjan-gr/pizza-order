import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import Spinner from "../utility/Spinner";
import { IoTrashOutline } from "react-icons/io5";

const CreatePizzaForm = () => {
  const [pizzaImage, setPizzaImage] = useState("");
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const [sizeAndPrice, setSizeAndPrice] = useState([]);

  // console.log(sizeAndPrice);

  const handleFormSubmit = () => {};

  const addSizeAdnPrice = () => {
    setSizeAndPrice((oldSizeAndPrice) => {
      return [...oldSizeAndPrice, { size: "", price: 0 }];
    });
  };

  const editSizeAndPrice = (e, idx, prop) => {
    const newValue = e.target.value;

    setSizeAndPrice((prevSizeAndPrice) => {
      const newSizeAndPrice = [...prevSizeAndPrice];
      newSizeAndPrice[idx][prop] = newValue;
      return newSizeAndPrice;
    });
  };

  const removeSizeAndPrice = (idx) => {
    setSizeAndPrice((prev) => prev.filter((value, index) => index !== idx));
  };

  return (
    <section className="w-full ">
      <h2 className="text-xl underline text-gray-400 mb-8">New pizza</h2>

      <form onSubmit={handleFormSubmit}>
        <div className="flex items-start justify-center flex-wrap w-full gap-10">
          <div>
            <ImageUpload
              image={pizzaImage}
              setImage={setPizzaImage}
              label={"Pizza Image"}
            />
          </div>

          <div className="w-1/3">
            {/*Pizza Name*/}
            <div className="form-control w-full max-w-sm mb-2">
              <label className="label">
                <span className="label-text text-gray-400">Pizza Name</span>
              </label>

              <input
                type="text"
                placeholder="Pizza name"
                className="input input-bordered w-full max-w-xs input-md rounded-xl"
                disabled={isCreating}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/*Pizza Ingredients*/}
            <div className="form-control w-full max-w-sm mb-2">
              <label className="label">
                <span className="label-text text-gray-400">
                  Pizza Ingredients
                </span>
              </label>

              <textarea
                className="textarea textarea-bordered w-full max-w-xs rounded-xl"
                placeholder="Pizza Ingredients"
                rows="5"
                disabled={isCreating}
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              ></textarea>
            </div>

            <button
              className={`${
                isCreating
                  ? "bg-gray-300"
                  : "bg-pizza_green-500 hover:bg-pizza_green-400"
              } btn_second text-white w-full max-w-xs my-10 z-0 relative`}
              disabled={isCreating}
            >
              Create pizza
              {isCreating && <Spinner />}
            </button>
          </div>

          {/*Pizza Size and Price */}
          <div className="w-1/3">
            <label className="label">
              <span className="label-text text-gray-400">Pizza Name</span>
            </label>
            <div className="border-[1px] border-gray-300 rounded-2xl bg-white p-4">
              {sizeAndPrice?.length > 0 &&
                sizeAndPrice.map((item, idx) => {
                  return (
                    <div className="flex gap-2" key={idx}>
                      {/*Pizza Size*/}
                      <div className="form-control max-w-sm mb-2 w-1/2">
                        <label className="label">
                          <span className="label-text text-gray-400">
                            Pizza Size
                          </span>
                        </label>

                        <select
                          className="select select-bordered max-w-xs rounded-xl"
                          value={item.size}
                          disabled={isCreating}
                          onChange={(e) => editSizeAndPrice(e, idx, "size")}
                        >
                          <option disabled value={""}>
                            Sellect size
                          </option>
                          <option value={"L (24cm)"}>L (24cm)</option>
                          <option value={"XL (32cm)"}>XL (32cm)</option>
                          <option value={"XXL (42cm)"}>XXL (42cm)</option>
                        </select>
                      </div>

                      {/*Pizza Price*/}
                      <div className="form-control max-w-sm mb-2 w-1/2">
                        <label className="label">
                          <span className="label-text text-gray-400">
                            Pizza Price
                          </span>
                        </label>

                        <input
                          type="text"
                          placeholder="Price"
                          className="input input-bordered w-full max-w-xs input-md rounded-xl"
                          disabled={isCreating}
                          value={item.price}
                          onChange={(e) => editSizeAndPrice(e, idx, "price")}
                        />
                      </div>

                      <div className="form-control max-w-sm flex items-end justify-end mb-2">
                        <div className="border-[1px] border-gray-300 rounded-xl px-2 py-[13px] flex justify-center items-center">
                          <IoTrashOutline
                            onClick={() => removeSizeAndPrice(idx)}
                            className="h-5 w-5 text-gray-500 hover:text-gray-400 cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}

              <button
                type="button"
                onClick={addSizeAdnPrice}
                className="btn_second w-full bg-pizza_orange-200 text-white hover:bg-pizza_orange-100"
              >
                Add pizza size
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreatePizzaForm;
