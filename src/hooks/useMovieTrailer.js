import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_KEY } from "../utils/constants";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      TMDB_KEY
    );
    const json = await data.json();

    const filterD = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterD.length ? filterD[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getVideo();
  }, []);
};
export default useMovieTrailer;
