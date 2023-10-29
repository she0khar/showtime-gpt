import GptMovieSug from "./GptMovieSug";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
     <div className="fixed w-full -z-20 ">
          <img className="h-screen object-cover w-full bg-contain "
            alt="bg"
            src="https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?w=900&t=st=1698416588~exp=1698417188~hmac=deb576994b51f2686f23ff2e01d47230ce0676614153a9f1d3bb6b2764dd97ce"
          />
        </div>
      <div className=" md:p-0">
        <GptSearchBar />
        <GptMovieSug />
      </div>
    </>
  );
};
export default GptSearch;
