"use client"
import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';

export default function SearchBox({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();  // Prevent the default form submission behavior
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} class="max-w-md mx-auto"> {/* Form for handling the submission */}
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <IoSearchSharp className="w-5 h-5 text-gray-900 dark:text-gray-400" /> {/* React Icon used */}
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-full px-20 py-3 text-sm text-black-900 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-lg"
          placeholder="Search.."
          required
          value={query}
          onChange={handleInputChange}  // Handling input change
        />
        {/* <button
          type="submit"
          class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Search
        </button> */}
      </div>
    </form>
  );
}
