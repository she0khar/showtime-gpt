import { IMG_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => { 
    if(!posterPath) return null;
    return (
        <div className="w-20 md:w-48 pr-4 ">
            <img className="cursor-pointer hover:shadow-lg" alt="MovieC" src={IMG_URL + posterPath} />
        </div>
    );
};
export default MovieCard;