"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SearchBox from "@/components/searchBox";
import Header from "@/components/header";
import Results from "@/components/results";

export default function Home() {
  const [drugData, setDrugData] = useState(null);
  const [keyword, setKeyword] = useState("");

  return (
    <main className="bg-custom-bg">
      <div className="flex flex-start ">
        <div className="mt-10 ml-20 mr-20 flex flex-start">
          <Header />
        </div>
        <div className="mt-10 mr-10 ml-40">
          <SearchBox setDrugData={setDrugData} setKeyword={setKeyword} />
        </div>
      </div>
      {keyword !== "" && (
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="ml-20 mb-5"
        >
            Results for "{keyword}" ({drugData && drugData.results ? drugData.results.length : 0}).
        </motion.p>
      )}
      <div className="ml-20 mr-20">
        <Results data={drugData} />
      </div>
    </main>
  );
}
