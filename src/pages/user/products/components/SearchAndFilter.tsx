import React from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  search: string;
  onSearchChange: (value: string) => void;
}

const SearchAndFilter = ({ search, onSearchChange }: Props) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="w-full lg:w-[90rem] lg:mt-12 mt-8 lg:ml-8 ml-2">
      <div className="relative w-[90vw]">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search item by name"
          value={search}
          onChange={handleSearch}
          className="w-full p-2 pl-10 bg-red-50 rounded-full"
        />
      </div>
    </div>
  );
};

export default React.memo(SearchAndFilter);
