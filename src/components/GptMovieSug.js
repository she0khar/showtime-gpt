import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSug = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames && !movieResults) return null;

  return (
    <div className="p-4 m-4 w-auto md:w-0 bg-black text-white bg-opacity-10">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};
export default GptMovieSug;
