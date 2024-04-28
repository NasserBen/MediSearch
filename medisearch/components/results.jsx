import React, { useState } from "react";

export default function Results({ data }) {
  const [displayMore, setDisplayMore] = useState(15);

  const loadMoreResults = () => {
    setDisplayMore(displayMore + 15);
  };

  function capitalizeFirstLetter(string) {
    return string.replace(/\b\w/g, (char) => char.toUpperCase());
  }

  if (!data || !data.results || data.results.length === 0) {
    return (
      <div className="mt-8">
        <p>No drug information available.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-8">
        {data.results.slice(0, displayMore).map((result, index) => (
          <div key={index} className="w-full h-32 bg-blue-200 flex rounded-lg">
            <div className="flex flex-col flex-start">
              <span className="ml-5 mt-2 mb-2 text-black font-bold text-xl">
                {capitalizeFirstLetter(
                  result.openfda?.brand_name?.[0]?.substring(0, 50)
                )}
                {result.openfda?.brand_name?.[0]?.length > 50 ? "..." : ""}
              </span>
              <span className="ml-5">
                {result.indications_and_usage?.[0]
                  .substring(0, 170)}
                {result.indications_and_usage?.[0]?.length > 170 ? "..." : ""}
              </span>
            </div>
          </div>
        ))}
      </div>
      {data.results.length > displayMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMoreResults}
            className="bg-primary hover:bg-secondary transition-all ease-linear text-white font-bold py-2 px-4 mb-10 rounded"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
