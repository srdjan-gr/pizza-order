import React from "react";
import { useEffect, useState } from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import toast, { Toaster } from "react-hot-toast";
import { confirm } from "react-confirm-box";

import PopupOptions from "../../components/utility/ConfirmBox";
import Spinner from "../utility/Spinner";

const CategoryList = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [handleEdit, setHandleEdit] = useState(false);
  const [editingItemValue, setEditingItemValue] = useState("");
  const [clickedItem, setClickedItem] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    setIsFetched(true);
    fetch("/api/categories").then((res) => {
      res.json().then((categories) => {
        setAllCategories(categories);
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

  // Delete pizza
  const handleCaregoryDelete = async (item) => {
    const resoult = await confirm(
      `Are you sure you wan to delete category '${item.name}'?`,
      PopupOptions
    );

    if (resoult) {
      const response = await fetch("/api/categories", {
        method: "DELETE",
        body: JSON.stringify({ _id: item._id }),
        headers: { "Content-Type": "application/json" },
      });

      if (response) {
        toast.success(`Category '${item.name}' deleted successfuly.`);
        setHandleEdit(!handleEdit);
        fetchCategories();
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  return (
    <section className="">
      <h1 className="mb-5 text-xl text-gray-400 w-full max-w-xs underline">
        Pizza menu
      </h1>
    </section>
  );
};

export default CategoryList;
