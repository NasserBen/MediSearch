
import SearchBox from "@/components/searchBox";
import Header from "@/components/header";

export default function Search(){
    return(
        <div className="bg-custom-bg">
        <div className="flex flex-start ">
        <div className="mt-10 ml-20 mr-20 flex flex-start">
            <Header />
        </div>
        <div className="mt-10 mr-10 ml-40">
            <SearchBox />
        </div>
    </div> 
        <p className="ml-20 mb-5">Results for ...</p>
  
        <div className="ml-20 mr-20">
                <div className="flex grid grid-cols-2 md:grid-cols-3 gap-8 ">
                    <div className="w-30 h-32 bg-blue-200 flex  rounded-lg">
                        <div className="flex flex-col flex-start">
                        <span className="ml-5 mt-2 mb-2 text-black font-bold text-xl">Ibuprofen</span>
                        <span className="ml-5" >Ibuprofen tablets are indicated for relief of the signs and symptoms of rheumatoid arthritis and osteoarthritis...</span>
                        </div>
                    </div>
                    <div className="w-30 h-32 bg-blue-200 flex  rounded-lg">
                        <div className="flex flex-col flex-start">
                        <span className="ml-5 mt-2 mb-2 text-black font-bold text-xl">Ibuprofen</span>
                        <span className="ml-5" >Ibuprofen tablets are indicated for relief of the signs and symptoms of rheumatoid arthritis and osteoarthritis...</span>
                        </div>
                    </div>
                    <div className="w-30 h-32 bg-blue-200 flex  rounded-lg">
                        <div className="flex flex-col flex-start">
                        <span className="ml-5 mt-2 mb-2 text-black font-bold text-xl">Ibuprofen</span>
                        <span className="ml-5" >Ibuprofen tablets are indicated for relief of the signs and symptoms of rheumatoid arthritis and osteoarthritis...</span>
                        </div>
                    </div>
                    <div className="w-30 h-32 bg-blue-200 flex  rounded-lg">
                        <div className="flex flex-col flex-start">
                        <span className="ml-5 mt-2 mb-2 text-black font-bold text-xl">Ibuprofen</span>
                        <span className="ml-5" >Ibuprofen tablets are indicated for relief of the signs and symptoms of rheumatoid arthritis and osteoarthritis...</span>
                        </div>
                    </div>
                    <div className="w-30 h-32 bg-blue-200 flex  rounded-lg">
                        <div className="flex flex-col flex-start">
                        <span className="ml-5 mt-2 mb-2 text-black font-bold text-xl">Ibuprofen</span>
                        <span className="ml-5" >Ibuprofen tablets are indicated for relief of the signs and symptoms of rheumatoid arthritis and osteoarthritis...</span>
                        </div>
                    </div>
                    <div className="w-30 h-32 bg-blue-200 flex  rounded-lg">
                        <div className="flex flex-col flex-start">
                        <span className="ml-5 mt-2 mb-2 text-black font-bold text-xl">Ibuprofen</span>
                        <span className="ml-5" >Ibuprofen tablets are indicated for relief of the signs and symptoms of rheumatoid arthritis and osteoarthritis...</span>
                        </div>
                    </div>
                    <div className="w-30 h-32 bg-blue-200 flex  rounded-lg">
                        <div className="flex flex-col flex-start">
                        <span className="ml-5 mt-2 mb-2 text-black font-bold text-xl">Ibuprofen</span>
                        <span className="ml-5" >Ibuprofen tablets are indicated for relief of the signs and symptoms of rheumatoid arthritis and osteoarthritis...</span>
                        </div>
                    </div>
                    <div className="w-30 h-32 bg-blue-200 flex  rounded-lg">
                        <div className="flex flex-col flex-start">
                        <span className="ml-5 mt-2 mb-2 text-black font-bold text-xl">Ibuprofen</span>
                        <span className="ml-5" >Ibuprofen tablets are indicated for relief of the signs and symptoms of rheumatoid arthritis and osteoarthritis...</span>
                        </div>
                    </div>
                    <div className="w-30 h-32 bg-blue-200 flex  rounded-lg">
                        <div className="flex flex-col flex-start">
                        <span className="ml-5 mt-2 mb-2 text-black font-bold text-xl">Ibuprofen</span>
                        <span className="ml-5" >Ibuprofen tablets are indicated for relief of the signs and symptoms of rheumatoid arthritis and osteoarthritis...</span>
                        </div>
                    </div>

                    {/* Add more grid items as needed */}
                </div>
            </div>
    </div>


        
       
    );
}
