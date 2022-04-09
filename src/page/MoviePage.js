import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../component/Navbar";
import loading from "../asset/loading.gif";
import axios from "axios";


async function getMovie(movieId){
     const res =  await axios.get(`https://api.themoviedb.org/3/movie/${movieId.movieId}?api_key=${process.env.REACT_APP_MOVIEW_KEY_API}`)
     return res.data;
}

async function getClips(movieId){
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId.movieId}/videos?api_key=${process.env.REACT_APP_MOVIEW_KEY_API}`)
    console.log(res.data.results);
    return res.data.results;
}

function MoviePage() {
    const movieId = useParams();
    const [movie, setMovie] = useState("loading");
    const navigate = useNavigate();
    const [width, setWidth] = useState(window.screen.availWidth);
    const [clips, setClips] = useState([]);
    let mt = width > 786 ? (width * 9) / 16 - 250 : 0;

    window.addEventListener("resize", () => {
      setWidth(window.screen.availWidth);
    });

    useEffect(() => {
       getMovie(movieId)
       .then((res) => {
           setMovie(res);
           getClips(movieId)
           .then((res) => {
               setClips(res);
               console.log(clips);
           })
           .catch((err) => {
               console.log(err);
           })
       })
       .catch((err) => {
           console.log(err);
           alert(err);
           navigate("/",{replace:true})
       })
    },[movieId, navigate, mt, width])


    

    if(movie === "loading"){
        return(
            <div className="bg-gray-700 h-screen flex items-center justify-center">
                <img src={loading} alt="loading" />
            </div>
        )
    }
    

    return ( 
        <div className="bg-gray-700 min-h-[100vh] text-white text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-6xl font-bold">
            <div className="flex flex-col items-center justify-center md:flex-row md:ml-[50px]">
                    <img
                    src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
                    alt="postet"
                    className="rounded-xl border-white border-4 max-w-[min(400px),90%] md:h-[576px] z-10 sm:max-w-[-50%]" />
                    <h1 className="z-10 md:ml-10 text-center">{movie.title}</h1>
            </div>
            <div className="mt-5 md:mt-10 text-xl md:text-2xl lg:text-4xl">
                <div className="mt-5 md:mt-10 text-lg md:text-xl lg:text-2xl">
                    <div>
                        Release Data = 
                        <span className="font-normal"> {movie.release_date}</span>
                    </div>
                    <div>
                        Duration = 
                        <span className="font-normal">{parseInt(movie.runtime / 60)}:{movie.runtime % 60}</span>
                    </div>
                    <div>
                        Rating =
                        <span className="font-normal">{movie.vote_average}</span>
                    </div>
                    Clips And Trailers 
                    <div className="flex-overflow-scroll scrollbar-hide snap-x mt-5 md:mt-10">
                        {
                            clips.map((clip)=> {
                                <div className="ml-5"
                                onClick={() => {
                                    window.open(`https://youtube.com/watch?v=${clip.key}`);
                                  }}>
                                    <div className="relative flex-shrink-0 h-[180px] md:h-[250px] lg:h-[300px] aspect-video rounded-xl">
                                        <img 
                                        src={`https://img.youtube.com/vi/${clip.key}/hqdefault.jpg`} 
                                        alt="youtube thumbnail"
                                        className="absolute object-cover  h-[180px] md:h-[250px] lg:h-[300px] aspect-video rounded-xl"/>
                                    </div>
                                </div>
                            })
                        } 
                    </div>
                </div>
            </div>
        </div>
     );
}

export default MoviePage;