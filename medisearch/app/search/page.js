"use client";

import { useState } from "react";
import SearchBox from "@/components/searchBox";
import Header from "@/components/header";
import Results from "@/components/results";

export default function Search(){

    const [drugData, setDrugData] = useState(null);

    return(
        <div className="bg-custom-bg">
            <div className="flex flex-start ">
                <div className="mt-10 ml-20 mr-20 flex flex-start">
                    <Header />
                </div>
                <div className="mt-10 mr-10 ml-40">
                    <SearchBox setDrugData={setDrugData} />
                </div>
            </div> 
            <p className="ml-20 mb-5">Results for ... WIP</p>
            <div className="ml-20 mr-20">
                {<Results data={drugData} />}
            </div>
        </div>
    );
}
