import React, { useState, useEffect } from "react";
import Spinner from "../utility/Spinner";
import toast from "react-hot-toast";

const DashboardCategoryForm = ({ setIsCreatedCategory, IsCreatedCategory }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [category, setCategory] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setIsCreating(true);
    setIsCreatedCategory(false);

    if (!category) {
      toast.error("All fields are required!");
      setIsCreating(false);
      return;
    }

    const response = await fetch("/api/categories", {
      method: "POST",
      body: JSON.stringify({ name: category }),
      headers: { "Content-Type": "application/json" },
    });

    if (response) {
      toast.success("Category created.");
      setIsCreating(false);
      setIsCreatedCategory(true);
      setCategory("");
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <section className="w-full">
      <h1 className="mb-5 text-xl text-gray-400 w-full underline">
        Add category
      </h1>

      <form
        className="w-full flex flex-col md:flex-row justify-start items-end gap-5"
        onSubmit={handleFormSubmit}
      >
        <div className="form-control w-full max-w-xs ">
          <label className="label">
            <span className="label-text text-gray-400">Add category</span>
          </label>

          <input
            type="text"
            placeholder="Category name"
            className="input input-bordered w-full max-w-xs input-md rounded-xl"
            disabled={isCreating}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className={`${
            isCreating
              ? "bg-gray-300"
              : "bg-pizza_green-500 border-0 hover:bg-pizza_green-400"
          } btn_second  text-white relative rounded-full w-full md:w-[160px]`}
          disabled={isCreating}
        >
          Create category
          {isCreating && <Spinner />}
        </button>
      </form>
    </section>
  );
};

export default DashboardCategoryForm;
