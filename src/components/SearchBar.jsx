import { useState } from "react";

const SearchBar = ({ setInputValue }) => {
  return (
    <>
      <div className="flex justify-center">
        <input
          type="text"
          className="border-2 rounded-md flex"
          placeholder="Rechercher"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
    </>
  );
};
export default SearchBar;
