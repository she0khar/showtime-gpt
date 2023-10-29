import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import { useRef } from "react";
import { openai } from "../utils/openai";
import { TMDB_KEY } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      TMDB_KEY
    );
    const json = await data?.json();
    return (json?.results);
  };
  const handleGptSearch = async () => {
    const gptQuery =
      "act as a movie recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      "only give me name of 5 movies ,comma sepertated as shown in the example: gadar ,sholay ,don ,golmal ,uri ";
    // console.log();
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults?.choices);
    const gptMovies = gptResults?.choices?.[0]?.message?.content.split(",");
    const promiseArr = gptMovies?.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArr);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
 
  return (
    <div className="pt-[45%] md:pt-[20%] ml-1 md:ml-[30%]">
      <h1 className=" ml-[8%] text-white font-bold text-6xl ">GPT SEARCH</h1>
      <form
        className="  grid grid-cols-12 w-full md:w-1/2 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="px-10 py-4  m-4 col-span-9 rounded-lg"
          placeholder={lang[langKey].gptSeachPlaceholder}
        />
        <button
          className=" col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-opacity-70"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
