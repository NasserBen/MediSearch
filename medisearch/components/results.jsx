import React from "react";

export default function Results({ data }) {

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
  console.log(data);

  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-8">
      {data.results.map((result, index) => (
        <div key={index} className="w-full h-36 bg-blue-200 flex rounded-lg border border-transparent hover:border-blue-500 border-2 hover:opacity-80 cursor-pointer">
          <div className="flex flex-col flex-start">
            <span className="ml-5 mt-2 mb-2 text-black font-bold text-xl ">
              {capitalizeFirstLetter(result.openfda?.brand_name?.[0]?.substring(0, 50))}
              {result.openfda?.brand_name?.[0]?.length > 50 ? '...' : ''}
            </span>
            <span className="ml-5 text-sm">{result.indications_and_usage?.[0]?.replace(/•/g, '').substring(0, 170)}{result.indications_and_usage?.[0]?.length > 170 ? '...' : ''}</span>

          </div>
      </div>
      ))}
    </div>
  );
}
