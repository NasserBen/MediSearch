import { useState } from "react";
import { motion } from "framer-motion";
import DrugFacts from "./drugFacts";

export default function Results({ data }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [displayMore, setDisplayMore] = useState(15);

  const loadMoreResults = () => {
    setDisplayMore(displayMore + 15);
  };

  function capsFirstLetter(string) {
    return string.replace(/\b\w/g, (char) => char.toUpperCase());
  }

  if (!data || !data.results || data.results.length === 0) {
    return (
      <div className="flex justify-center items-center mt-60">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-2xl text-gray-500"
        >
          Try Another Search!
        </motion.p>
      </div>
    );
  }

  const openItemPage = (item) => {
    setSelectedItem(item);
  };

  const closeItemPage = () => {
    setSelectedItem(null);
  };

  function capsFirstLetter(string) {
    return string.replace(/\b\w/g, (char) => char.toUpperCase());
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-8 mb-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {data.results.slice(0, displayMore).map((result, index) => (
          <div
            key={index}
            onClick={() => openItemPage(result)}
            className="box-size w-full h-36 bg-blue-200 flex rounded-lg border-transparent hover:border-blue-500 border-2 hover:opacity-80 transition-all ease-linear cursor-pointer overflow-hidden py-1"
          >
            <div className="flex flex-col flex-start">
              <span className="pl-5 pt-2 pb-2 text-black font-bold text-xl">
                {capsFirstLetter(
                  result.openfda?.brand_name?.[0]?.substring(0, 50)
                )}
                {result.openfda?.brand_name?.[0]?.length > 50 ? "..." : ""}
              </span>
              <span className="px-5 text-sm">
                {result.indications_and_usage?.[0].substring(0, 170)}
                {result.indications_and_usage?.[0]?.length > 170 ? "..." : ""}
              </span>
            </div>
          </div>
        ))}
      </motion.div>

      {selectedItem && (
        <DrugFacts
          drugFacts={{
            drugName: capsFirstLetter(selectedItem.openfda?.brand_name?.[0]),
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

      {data.results.length > displayMore ? (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMoreResults}
            className="bg-primary hover:bg-secondary transition-all ease-linear text-white font-bold py-2 px-4 mb-10 rounded"
          >
            Load More
          </button>
        </div>
      ) : (
        <div className="flex justify-center mb-8 text-gray-500">
          <p>All Results Displayed.</p>
        </div>
      )}
    </div>
  );
}
