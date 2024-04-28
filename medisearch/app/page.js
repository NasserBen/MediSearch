"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SearchBox from "@/components/searchBox";
import Header from "@/components/header";
import Results from "@/components/results";

export default function Home() {
  const [drugData, setDrugData] = useState(null);
  const [keyword, setKeyword] = useState("");

  return (
    <main className="bg-custom-bg">
      <div
        className={`flex items-center justify-center flex-col gap-10 ${
          keyword === "" ? "h-screen" : "mt-10"
        }`}
      >
        <Header />
        {keyword === "" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center md:text-2xl text-md text-gray-500"
          >
            Enter a medication for more information!
          </motion.p>
        )}

        <SearchBox setDrugData={setDrugData} setKeyword={setKeyword} />
      </div>

      {keyword !== "" && (
        <>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="ml-2 md:ml-20 mt-10 mb-5 text-gray-600"
          >
            Results for "{keyword}" (
            {drugData && drugData.results ? drugData.results.length : 0}).
          </motion.p>
          <div className="mx-2 md:mx-20">
            <Results data={drugData} />
          </div>
        </>
      )}
    </main>
  );
}
