import { Link } from "react-router-dom";

function MovieCard({movie}) {
    return ( 
        <Link to={`/movie/${movie.id}`}>
            <div className="w-[21rem] max-w-[100%] bg-black rounded-xl p-3 text-white m-5 flex flex-col cursor-pointer text-xl hover:scale-110">
                <img
                    className="w-full self-center rounded-lg h-[476px]"
                    alt="poster"
                    src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
                />
                <h3 className="flex flex-wrap justify-center my-1">{movie.title}</h3>
                <h2 className="flex flex-wrap justify-center my-1">{movie.vote_count}</h2>
            </div>
        </Link>
     );
}

export default MovieCard;