import React, { useState } from "react";

export default function SearchBox({ setDrugData }) {
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
    <div className="flex items-center justify-center mt-8">
      <input
        type="text"
        placeholder="Search for medication or symptom..."
        value={query}
        onChange={handleInputChange}
        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
}
