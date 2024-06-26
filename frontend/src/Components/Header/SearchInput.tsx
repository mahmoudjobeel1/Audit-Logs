import { useState, useEffect } from "react";
import { SearchIcon } from "../../assests";
import { useFilterStore } from "../../store/filters";
import React from "react";

export default React.memo(function SearchInput() {
  const { updateFilters } = useFilterStore();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      updateFilters({ searchText: searchTerm });
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, updateFilters]);

  return (
    <form className="flex items-center">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {SearchIcon}
        </div>
        <input
          type="text"
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Search name, email or action...."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
});
