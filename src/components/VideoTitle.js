import { PlayB } from "../utils/constants";
import { MoreI } from "../utils/constants";
const VideoTitle = ({title, overview}) => {
    return (
    <div className=" w-screen aspect-video pt-40 px-2 md:px-12  absolute bg-gradient-to-r from-black ">
        <h1 className="text-lg md:text-5xl mx-5 md:mx-11 font-bold text-white ">{title}</h1>
        <p className=" my-6 mx-11 text-lg w-1/4 hidden md:inline-block text-white">{overview}</p>
        <div className="flex mx-5 md:mx-11 my-2 md:my-5 ">
            <button className="px-2 md:px-8 py-1 md:py-2 bg-white font-bold text-black rounded-lg flex hover:bg-opacity-50"><img className="h-5 md:h-6 w-5 md:w-6 mx-2" alt ="play" src ={PlayB}/>Play</button>
            <button className=" hidden md:inline-block px-8 hover:bg-opacity-50 mx-3 py-2 bg-gray-700 text-white font-bold opacity-80 flex rounded-lg"><img className="h-6  w-6 mx-2 rounded-lg" alt="info" src={MoreI}/>More Info</button>
        </div>
    </div>
    );
};
export default VideoTitle;