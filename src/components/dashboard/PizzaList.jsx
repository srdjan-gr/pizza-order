import React from "react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { confirm } from "react-confirm-box";

import PopupOptions from "@/components/utility/ConfirmBox";
import PizzaCard from "@/components/dashboard/PizzaCard";

const CategoryList = ({ isEditedItem, setIsEditedItem }) => {
  const [allPizzas, setAllPizzas] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [handleEdit, setHandleEdit] = useState(false);
  const [editingItemValue, setEditingItemValue] = useState("");
  const [clickedItem, setClickedItem] = useState("");

  useEffect(() => {
    fetchItems();
  }, [isEditedItem]);

  const fetchItems = () => {
    setIsFetched(true);
    fetch("/api/menu").then((res) => {
      res.json().then((items) => {
        setAllPizzas(items);
        setIsFetched(false);
      });
    });
  };

  // Split time from db
  const splitTime = (t) => {
    const dbt = t.split("T");
    const date = dbt[1].split(".");
    return dbt[0] + " " + date[0];
  };

  // Edit form open function
  const openEditForm = (item) => {
    setHandleEdit(!handleEdit);
    setEditingItemValue(item.name);
  };

  // Update pizza info
  const handleCaregoryUpdate = async (item) => {
    setIsEditing(true);
    const response = await fetch("/api/categories", {
      method: "PUT",
      body: JSON.stringify({ _id: item._id, name: editingItemValue }),
      headers: { "Content-Type": "application/json" },
    });

    if (response) {
      toast.success("Category edited successfuly.");
      setHandleEdit(!handleEdit);
      setIsEditing(false);
      fetchCategories();
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <section className="">
      <h1 className="mb-5 text-xl text-gray-400 w-full max-w-xs underline">
        Pizza menu
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {allPizzas?.length > 0 &&
          allPizzas.map((item) => {
            return (
              <PizzaCard
                item={item}
                isEditedItem={isEditedItem}
                setIsEditedItem={setIsEditedItem}
                fetchItems={fetchItems}
              />
            );
          })}
      </div>
    </section>
  );
};

export default CategoryList;
