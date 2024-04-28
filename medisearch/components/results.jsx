import React from "react";

export default function Results({ data }) {
  // Check if data is null or undefined before accessing its properties
  if (!data || !data.results || !data.results[0]) {
    // Render a message or placeholder if data is not available
    return (
      <div className="mt-8">
        <p>No drug information available.</p>
      </div>
    );
  }

  // Extract generic name from data
  const genericName = data.results[0].openfda?.generic_name?.[0];
  // Extract indications and usage from data
  const indicationsAndUsage = data.results[0].indications_and_usage?.[0];

  return (
    <div className="mt-8">
      {/* Display generic name if available */}
      {genericName && <p>Generic Name: {genericName}</p>}
      {/* Display indications and usage if available */}
      {indicationsAndUsage && <p>Indications and Usage: {indicationsAndUsage}</p>}
    </div>
  );
}
