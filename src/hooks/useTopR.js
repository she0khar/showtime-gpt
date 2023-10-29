import { useDispatch, useSelector } from "react-redux";
import { TMDB_KEY } from "../utils/constants";
import { addTopMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopR = () => {
  const topMovies = useSelector((store) => store.movies.topMovies);
  const dispatch = useDispatch();
  const getTopMovies = async () => {
    const data = await fetch(
      " https://api.themoviedb.org/3/movie/top_rated?page=1",
      TMDB_KEY
    );
    const json = await data.json();
    dispatch(addTopMovies(json.results));
  };
  useEffect(() => {
    !topMovies && getTopMovies();
  }, []);
};
export default useTopR;
