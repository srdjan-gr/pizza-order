"use client";
import Image from "next/image";
import { useState } from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import { LuEuro } from "react-icons/lu";
import Divider from "../utility/Divider";
import toast from "react-hot-toast";
import { confirm } from "react-confirm-box";
import PopupOptions from "../../components/utility/ConfirmBox";

const PizzaCard = ({ item, isEditedItem, setIsEditedItem, fetchItems }) => {
  const [published, setPublished] = useState(item.published);
  const [editPublished, setEditPublished] = useState(false);

  const publishPizza = async (id, itmPublished) => {
    setIsEditedItem(false);

    const data = {
      _id: id,
      published: !itmPublished,
      prop: "editPublished",
    };

    const response = await fetch("/api/menu", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (response) {
      toast.success("Pizza 'published' state changed successfuly.");
      // setIsEditedItem(true);
      fetchItems();
    } else {
      toast.error("Something went wrong!");
    }
  };

  // Delete pizza
  const handleItemDelete = async (item) => {
    const resoult = await confirm(
      `Are you sure you wan to delete pizza '${item.name}'?`,
      PopupOptions
    );

    if (resoult) {
      const response = await fetch("/api/menu", {
        method: "DELETE",
        body: JSON.stringify({ _id: item._id }),
        headers: { "Content-Type": "application/json" },
      });

      if (response) {
        toast.success(`Pizza '${item.name}' deleted successfuly.`);
        fetchItems();
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  return (
    <div
      key={item.name}
      className="p-4 border-[1px] border-gray-300 rounded-xl"
    >
      <div className="flex flex-col items-start mb-4">
        <label className="text-gray-400 text-xs ">Pizza Name:</label>
        <h2 className="text-gray-700 font-bold text-lg">{item.name}</h2>
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

      <div className="flex w-full justify-between mt-4">
        <div className="tooltip tooltip-bottom" data-tip="Publish Pizza">
          {/* <div className="form-control">
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                className={`${
                  published
                    ? "bg-pizza_green-400 hover:bg-pizza_green-300 border-pizza_green-400"
                    : "bg-gray-400 hover:bg-ggray-300 border-gray-400"
                } toggle toggle-sm `}
                checked={published}
                onClick={() => publishPizza(item._id)}
              />
            </label>
          </div> */}
          <button
            type="button"
            className={`${
              published ? " bg-pizza_green-400 text-white" : "bg-gray-200"
            } border-[1px] p-2 rounded-lg`}
            onClick={() => publishPizza(item._id, item.published)}
          >
            {published ? "Published" : "Publish"}
          </button>
        </div>
        <div className="flex items-start justify-end gap-3 border-[1px] border-gray-300 rounded-lg p-2">
          <div className="tooltip tooltip-bottom" data-tip="Edit pizza">
            <HiOutlinePencil className="h-5 w-5 text-gray-400 hover:text-pizza_blue-100 cursor-pointer" />
          </div>
          <div className="tooltip tooltip-bottom" data-tip="Delete Pizza">
            <HiOutlineTrash
              onClick={() => handleItemDelete(item)}
              className="h-5 w-5 text-gray-400 hover:text-pizza_red-200 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
