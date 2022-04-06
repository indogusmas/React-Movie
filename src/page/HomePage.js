import { useState } from "react";
import MovieCard from "../component/MovieCard";
import NavBar from "../component/Navbar";

function HomePage() {

    const [pageNo, setPageNo] = useState(100);
    return ( 
       <div className="bg-gray-700 min-h-screen flex flex-col items-center h-full">
           <NavBar/>
           {/* <div className="flex flex-wrap justify-evenly">
               <MovieCard/>
               <MovieCard/>
               <MovieCard/>
               <MovieCard/>
               <MovieCard/>
           </div> */}
           <div className="w-[250px] mt-5 pb-10 font-bold">
               <button
                className="bg-white rounded-full px-4 mr-2 hover:border-black border-2 hover:font-bold">
                    Previous
               </button>
                    {pageNo}
               <button
                className="bg-white rounded-full px-4 ml-2 hover:border-black border-2 hover:font-bold">
                    Next
               </button>
           </div>
       </div> 
     );
}

export default HomePage;