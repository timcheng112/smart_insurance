import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const Searchbar = ({ query, onChange }) => {
  return (
    <div className="w-full max-w-lg lg:max-w-xs px-6 pt-6">
      <label htmlFor="search" className="sr-only font-dmSans">
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          id="search"
          name="search"
          className={
            "block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          }
          placeholder="Search"
          type="search"
          value={query}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Searchbar;
