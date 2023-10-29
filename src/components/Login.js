import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { useState, useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../utils/firebase";


const Login = () => {
  const [err, setErr] = useState();
  const [signIn, setSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  
  const handleButtonClick = () => {
    const msg = checkValidData(email.current.value, password.current.value);
    setErr(msg);
    if (msg) return;

    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
         console.log(user); 
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErr(errorCode + "-" + errorMessage);

          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErr(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignIn = () => {
    setSignIn(!signIn);
  };
  return (
    <div>
      <Header />

      <div className="absolute md:w-full ">
        <img className="h-screen object-cover md:w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-white w-3/4 md:w-4/12 absolute p-14 md:p-10 bg-black my-36 md:my-36 mx-auto right-0 left-0 bg-opacity-70"
      >
        <h1 className=" text-3xl py-4 text-white">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-900"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 my-4 w-full bg-gray-900"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-900"
        />
        <p className=" text-red-600 font-semibold">{err}</p>
        <button
          className="text-white p-4 my-6 bg-red-600 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer text-white" onClick={toggleSignIn}>
          {" "}
          {signIn ? "New to Showtime? Sign Up" : "Already a user? Sign In"}
        </p>
      </form>
    </div>
  );
};
export default Login;
