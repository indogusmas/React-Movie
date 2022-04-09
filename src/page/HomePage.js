import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../component/MovieCard";
import NavBar from "../component/Navbar";
import loading from "../asset/loading.gif"

async function getMovie(pageNo){
    const respon = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_MOVIEW_KEY_API}&page=${pageNo}`
    );
    return respon.data.results;
}
function HomePage() {
    const [pageNo, setPageNo] = useState(1);
    const [movies, setMovies] = useState("loading")
    useEffect(() => {
        getMovie(pageNo)
        .then((response) => {
            setMovies(response);
        }).catch((err) => {
            console.error(err);
        })
    },[pageNo]);
    
    if(movies === "loading"){
        return(
            <div className="flex items-center justify-center h-screen bg-gray-700">
                <img src={loading} alt="loading" height="200px" width="200px" />
            </div>
        )
    }else{
        return ( 
            <div className="bg-gray-700 min-h-screen flex flex-col items-center h-full">
                <NavBar/>
                <div className="flex flex-wrap justify-center">
                    {
                        movies.map((movie) => (
                            <MovieCard movie={movie} key={movie.id}/>
                        ))
                    }
                </div>
                <div className="w-[400px] mt-5 pb-10 font-bold">
                    <button
                     className="bg-white rounded-full px-4 mr-2 hover:border-black border-2 hover:font-bold">
                         Previous
                    </button>
                         {pageNo} 
                    <button
                     className="bg-white rounded-full px-4 ml-2 hover:border-black border-2 hover:font-bold"
                     onClick={() => {
                         if(pageNo < 20){
                             setMovies("loading")
                             setPageNo(pageNo+1)
                         }
                     }}
                     >
                         Next
                    </button>
                </div>
            </div> 
          );
    }
}

export default HomePage;