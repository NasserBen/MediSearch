"use client";

import { useState } from "react";
import SearchBox from "@/components/SearchBox";
import Header from "@/components/Header";
import Results from "@/components/Results";

export default function Home() {
  const [drugData, setDrugData] = useState(null);
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-custom-bg">
      <Header />
      <SearchBox setDrugData={setDrugData} />
      {<Results data={drugData} />}
    </main>
  );
}
