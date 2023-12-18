import React, { useState } from "react";
import ImageUpload from "./ImageUpload";

const CreatePizzaForm = () => {
  const [pizzaImage, setPizzaImage] = useState("");
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const handleFormSubmit = () => {};

  return (
    <section className="w-full ">
      <h2 className="text-xl underline text-gray-400 mb-8">New pizza</h2>

      <form onSubmit={handleFormSubmit}>
        <div className="flex items-start flex-wrap w-full gap-2 ">
          <div className="w-1/3">
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
                rows="4"
                disabled={isCreating}
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              ></textarea>
            </div>

            {/*Pizza Size*/}
            <div className="flex gap-4">
              <div className="form-control max-w-sm mb-2 w-1/2">
                <label className="label">
                  <span className="label-text text-gray-400">Pizza Size</span>
                </label>

                <select
                  className="select select-bordered max-w-xs rounded-xl"
                  value={size}
                  disabled={isCreating}
                  onChange={(e) => setSize(e.target.value)}
                >
                  <option disabled selected>
                    Size
                  </option>
                  <option value={"L (24cm)"}>L (24cm)</option>
                  <option value={"XL (32cm)"}>XL (32cm)</option>
                  <option value={"XXL (42cm)"}>XXL (42cm)</option>
                </select>
              </div>

              <div className="form-control max-w-sm mb-2 w-1/2">
                <label className="label">
                  <span className="label-text text-gray-400">Pizza Price</span>
                </label>

                <input
                  type="text"
                  placeholder="Pizza price"
                  className="input input-bordered w-full max-w-xs input-md rounded-xl"
                  disabled={isCreating}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <button
              className={`${
                isCreating
                  ? "bg-gray-300"
                  : "bg-pizza_green-500 hover:bg-pizza_green-400"
              } btn_main text-white w-full max-w-xs my-10 z-0 relative`}
              disabled={isCreating}
            >
              Create pizza
              {isCreating && <Spinner />}
            </button>
          </div>
          <div></div>
        </div>
      </form>
    </section>
  );
};

export default CreatePizzaForm;
