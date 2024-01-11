import React, { useState } from "react";

const Search = ({ searchData, setSearchResault }) => {
  const submitSerchForm = (e) => {
    e.preventDefault();
  };

  const handleSearchChange = (e) => {
    const search = e.target.value.toLowerCase();

    if (!search) return setSearchResault(searchData);

    const searchArray = searchData.filter(
      (item) => item.name.toLowerCase().includes(search)
      // || pizza.ingredients.includes(searchTerm)
    );

    setSearchResault(searchArray);
  };

  return (
    <form onSubmit={submitSerchForm}>
      <input
        type="text"
        autoFocus
        placeholder="Search..."
        className="input input-bordered w-full md:w-[280px] lg:w-[240px] input-md rounded-xl"
        onChange={handleSearchChange}
      />
    </form>
  );
};

export default Search;
