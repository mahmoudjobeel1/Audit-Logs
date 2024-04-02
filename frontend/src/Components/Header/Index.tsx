import { useState } from "react";
import { ExportIcon, FilterIcon, GreenLiveIcon, RedLiveIcon, SearchIcon } from "../../assests/svgIcons";

function FiltersButton() {
  return (
    <button
      className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      type="button"
    >
      {FilterIcon}
      Filters
    </button>
  );
}
function ExportButton() {
  return (
    <button
      className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      type="button"
    >
      {ExportIcon}
      Export
    </button>
  );
}
function LiveButton() {
  const [isLive, setIsLife] = useState(false);

  return (
    <button
      className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      type="button"
      onClick={() => {
        setIsLife(!isLive);
      }}
    >
      {!isLive ? RedLiveIcon : GreenLiveIcon}
      Live
    </button>
  );
}

function SearchInput() {
  // get state

  return (
    <form className="flex items-center">
      <label htmlFor="simple-search" className="sr-only">
        Search name, email or action...
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {SearchIcon}
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Search"
          required
        />
      </div>
    </form>
  );
}

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
      <SearchInput />
      <div className="flex items-center space-x-3 w-full md:w-auto">
        <ExportButton />
        <FiltersButton />
        <LiveButton />
      </div>
    </div>
  );
}