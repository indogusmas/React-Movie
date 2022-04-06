import { Link } from "react-router-dom";

function MovieCard() {
    return ( 
        <Link>
            <div className="w-[21rem] max-w-[100%] bg-black rounded-xl p-3 text-white m-5 flex flex-col cursor-pointer text-xl hover:scale-110">
                <img
                    className="w-full self-center rounded-lg h-[476px]"
                    alt="poster"
                />
                <h3 className="my-1">Title</h3>
                <h2 className="my-1">Vote</h2>
            </div>

        </Link>
     );
}

export default MovieCard;