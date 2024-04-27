"use client"
import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';

export default function SearchBox({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const apiUrl = `https://api.fda.gov/drug/label.json?search=indications_and_usage:"${query}"&limit=1`;

      const response = await fetch(apiUrl);
      if (!response.ok) {
        if (response.status === 404) {
          setDrugData(`No Results Found found for ${query}!`);
        } else {
          throw new Error("Failed to fetch drug information");
        }
      } else {
        const drugInfo = await response.json();
        setDrugData(drugInfo);
      }
    } catch (error) {
      console.error("Error fetching drug information:", error.message);
    }
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
      </div>
    </form>
  );
}
