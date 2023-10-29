import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, PRO, supLang } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, name } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: name }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLang = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div className="absolute w-full md:px-8 md:py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-[30%] md:w-44 mx-auto md:mx-0 mt-4" src={LOGO} alt="logo" />
      {user && (
        <div className="mt-1 md:flex  md:p-2">
          {showGptSearch &&
            <select
              className="px-4 cursor-pointer  h-8 mt-7 mr-6 "
              onChange={handleLang}
            >
              {supLang.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          }
          <button
            className=" px-4 text-white hover:opacity-90 h-8 rounded-lg mt-7 mr-4"
            onClick={handleGptSearch}
          >
            {showGptSearch? "HOME PAGE" : "GPT SEARCH"}
          </button>
          <img className="h-12 hidden md:inline-block w-12 my-5" alt="userIcon" src={PRO} />
          <button
            onClick={handleSignOut}
            className=" mx-4 mt-7 md:mt-1 text-white cursor-pointer font-bold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
