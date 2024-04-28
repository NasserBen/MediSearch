"use client";
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchBox({ setDrugData, setKeyword }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();

    if (trimmedQuery !== "") {
      setKeyword(trimmedQuery);
      try {
        const apiUrl = `https://api.fda.gov/drug/label.json?search=openfda.substance_name:"${trimmedQuery}" OR openfda.brand_name:"${trimmedQuery}"&limit=100`;

        const response = await fetch(apiUrl);
        if (!response.ok) {
          if (response.status === 404) {
            setDrugData(`No Results Found found for ${trimmedQuery}!`);
          } else {
            throw new Error("Failed to fetch drug information!");
          }
        } else {
          const drugInfo = await response.json();
          setDrugData(drugInfo);
        }
      } catch (error) {
        console.error("Error fetching drug information:", error.message);
      }
    }
  };

  return (
    <search>
      <form
        onSubmit={handleSearch}
        className="flex items-center justify-center flex-col gap-3"
      >
        <label htmlFor="default-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-2 flex items-center">
            <IoSearchSharp className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="search"
            id="default-search"
            className="pl-10 pr-4 py-3 text-sm text-black rounded-full focus:outline-none focus:ring-2 focus:ring-primary shadow-lg w-full md:w-[300px]"
            placeholder="Search..."
            required
            value={query}
            onChange={handleInputChange}
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-primary hover:bg-secondary transition-all ease-linear text-white font-bold py-2 px-4 rounded md:hidden"
        >
          Search
        </button>
      </form>
    </search>
  );
}
