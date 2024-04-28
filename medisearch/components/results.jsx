import React, { useState } from "react";
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
            className="text-center text-4xl text-gray-500">Enter a medication for more information!
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

  return (
    <div>
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-8 mb-12 grid grid-cols-2 md:grid-cols-3 gap-8"
      >
        {data.results.slice(0, displayMore).map((result, index) => (
          <div
            key={index}
            onClick={() => openItemPage(result)}
            className="box-size w-full h-36 bg-blue-200 flex rounded-lg border-transparent hover:border-blue-500 border-2 hover:opacity-80 transition-all ease-linear cursor-pointer"
          >
            <div className="flex flex-col flex-start">
              <span className="pl-5 pt-2 pb-2 text-black font-bold text-xl">
                {capsFirstLetter(
                  result.openfda?.brand_name?.[0]?.substring(0, 50)
                )}
                {result.openfda?.brand_name?.[0]?.length > 50 ? "..." : ""}
              </span>
              <span className="px-5 text-sm">
                {result.indications_and_usage?.[0]
                  .substring(0, 170)}
                {result.indications_and_usage?.[0]?.length > 170 ? "..." : ""}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
        
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

      {selectedItem && (
        <DrugFacts
          drugFacts={{
            drugName: "Ibuprofen",
            usage:
              "Ibuprofen tablets are indicated for relief of the signs and symptoms of rheumatoid arthritis and osteoarthritis. Ibuprofen tablets are indicated for relief of mild to moderate pain. Ibuprofen tablets are also indicated for the treatment of primary dysmenorrhea. Controlled clinical trials to establish the safety and effectiveness of ibuprofen tablets in children have not been conducted.",
            genWarnings:
              "Cardiovascular Thrombotic Events Nonsteroidal anti-inflammatory drugs (NSAIDs) cause an increased risk of serious cardiovascular thrombotic events, including myocardial infarction and stroke, which can be fatal. This risk may occur early in treatment and may increase with duration of use. Ibuprofen tablets are contraindicated in the setting of coronary artery bypass graft (CABG) surgery. Gastrointestinal Risk NSAIDs cause an increased risk of serious gastrointestinal adverse events including bleeding, ulceration, and perforation of the stomach or intestines, which can be fatal. These events can occur at any time during use and without warning symptoms. Elderly patients are at greater risk for serious gastrointestinal events.",
            allergyWarnings:
              "Preexisting asthma Patients with asthma may have aspirin-sensitive asthma. The use of aspirin in patients with aspirin-sensitive asthma has been associated with severe bronchospasm, which can be fatal. Since cross reactivity, including bronchospasm, between aspirin and NSAIDs has been reported in such aspirin-sensitive patients, ibuprofen tablets should not be administered to patients with this form of aspirin sensitivity and should be used with caution in patients with preexisting asthma.",
            pregWarnings:
              "Information for Patients Patients should be informed of the following information before initiating therapy with an NSAID and periodically during the course of ongoing therapy. Patients should also be encouraged to read the NSAID Medication Guide that accompanies each prescription dispensed. Cardiovascular Thrombotic Events Advise patients to be alert for the symptoms of cardiovascular thrombotic events, including chest pain, shortness of breath, weakness, or slurring of speech, and to report any of these symptoms to their health care provider immediately [ see Warnings ]. Ibuprofen tablets, like other NSAIDs, can cause GI discomfort and, rarely, serious GI side effects, such as ulcers and bleeding, which may result in hospitalization and even death.",
            activeIngred: "Ibuprofen 400 mg, 600 mg, and 800 mg tablets",
            inactiveIngred:
              "colloidal silicon dioxide, croscarmellose sodium, microcrystalline cellulose, polyethylene glycol, polyvinyl alcohol-part. hydrolyzed, povidone, stearic acid, talc and titanium dioxide.",
          }}
          isOpen={openItemPage}
          onClose={closeItemPage}
        />
      )}
    </div>
  );
}
