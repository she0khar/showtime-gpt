import { useDispatch, useSelector } from "react-redux";
import { TMDB_KEY } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      TMDB_KEY
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};
export default useUpcomingMovies;
