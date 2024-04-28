"use client";
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchBox({ setDrugData }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = `https://api.fda.gov/drug/label.json?search=openfda.substance_name:"${query}" OR openfda.brand_name:"${query}"&limit=100`;

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
    <form onSubmit={handleSearch} className="max-w-md mx-auto">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <IoSearchSharp className="w-5 h-5 text-gray-900 dark:text-gray-400"/>{" "}
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full px-20 py-3 text-sm text-black-500 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-lg"
          placeholder="Search.."
          required
          value={query}
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
}
