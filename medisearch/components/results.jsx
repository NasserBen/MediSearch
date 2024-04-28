import { useState } from "react";
import DrugFacts from "./drugFacts";

export default function Results({ data }) {
  const [selectedItem, setSelectedItem] = useState(null);
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

  const openItemPage = (item) => {
    setSelectedItem(item);
  };

  const closeItemPage = () => {
    setSelectedItem(null);
  };

  console.log(data);

  return (
    <div>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-8">
        {data.results.slice(0, displayMore).map((result, index) => (
          <div key={index}>
            <div
              onClick={() => openItemPage(result)}
              className="w-full h-36 bg-blue-200 flex rounded-lg border border-transparent hover:border-blue-500 border-2 hover:opacity-80 cursor-pointer overflow-hidden"
            >
              <div className="flex flex-col flex-start">
                <span className="pl-5 pt-2 pb-2 text-black font-bold text-xl">
                  {capitalizeFirstLetter(
                    result.openfda?.brand_name?.[0]?.substring(0, 50)
                  )}
                  {result.openfda?.brand_name?.[0]?.length > 50 ? "..." : ""}
                </span>
                <span className="px-5 text-sm">
                  {result.indications_and_usage?.[0]
                    ?.replace(/•/g, "")
                    .substring(0, 170)}
                  {result.indications_and_usage?.[0]?.length > 170 ? "..." : ""}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <DrugFacts
          drugFacts={{
            drugName: capitalizeFirstLetter(
              selectedItem.openfda?.brand_name?.[0]
            ),
            usage: selectedItem.indications_and_usage?.[0] || "",
            directions: selectedItem.dosage_and_administration?.[0] || "",
            genWarnings:
              selectedItem.warnings?.[0] ||
              selectedItem.warnings_and_cautions?.[0] ||
              selectedItem.boxed_warning?.[0] ||
              "",
            allergyWarnings:
              selectedItem.do_not_use?.[0] ||
              selectedItem.adverse_reactions?.[0] ||
              "",
            pregWarnings:
              selectedItem.pregnancy_or_breast_feeding?.[0] ||
              selectedItem.pregnancy?.[0] ||
              selectedItem.nursing_mothers?.[0] ||
              "",
            activeIngred: selectedItem.active_ingredient?.[0] || "",
            inactiveIngred: selectedItem.inactive_ingredient?.[0] || "",
          }}
          onClose={closeItemPage}
        />
      )}

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
