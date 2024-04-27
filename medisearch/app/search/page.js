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
        <p className="ml-20">Results for ...</p>
  
        <div className="ml-20 mr-20">
                <div className="flex justify-center grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="w-30 h-20 bg-blue-300 flex justify-center items-center rounded-lg">
                        <span className="text-white">g1</span>
                    </div>
                    <div className="w-30 h-20 bg-blue-300 flex justify-center items-center rounded-lg">
                        <span className="text-white">g2</span>
                    </div>
                    <div className="w-30 h-20 bg-blue-300 flex justify-center items-center rounded-lg">
                        <span className="text-white">g3</span>
                    </div>
                    <div className="w-30 h-20 bg-blue-300 flex justify-center items-center rounded-lg">
                        <span className="text-white">g3</span>
                    </div>
                    <div className="w-30 h-20 bg-blue-300 flex justify-center items-center rounded-lg">
                        <span className="text-white">g3</span>
                    </div>
                    <div className="w-30 h-20 bg-blue-300 flex justify-center items-center rounded-lg">
                        <span className="text-white">g3</span>
                    </div>
                    <div className="w-30 h-20 bg-blue-300 flex justify-center items-center rounded-lg">
                        <span className="text-white">g3</span>
                    </div>
                    <div className="w-30 h-20 bg-blue-300 flex justify-center items-center rounded-lg">
                        <span className="text-white">g3</span>
                    </div>
                    <div className="w-30 h-20 bg-blue-300 flex justify-center items-center rounded-lg">
                        <span className="text-white">g3</span>
                    </div>
                    <div className="w-30 h-20 bg-blue-300 flex justify-center items-center rounded-lg">
                        <span className="text-white">g3</span>
                    </div>
                    <div className="w-30 h-20 bg-blue-300 flex justify-center items-center rounded-lg">
                        <span className="text-white">g3</span>
                    </div>
                    <div className="w-30 h-20 bg-blue-300 flex justify-center items-center rounded-lg">
                        <span className="text-white">g3</span>
                    </div>

                    {/* Add more grid items as needed */}
                </div>
            </div>
    </div>


        
       
    );
}