import React, { useRef, useState } from "react";
import { SignInValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const validateSingIn = () => {
    const message = SignInValidate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      // signUp Code
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign In Code
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <>
      <div className="absolute inset-0">
        <img
          alt="background"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_medium.jpg"
          className="w-full h-full object-cover"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black p-6 sm:p-12 mt-40 m-auto left-0 right-0 rounded-md bg-opacity-80 text-white sm:w-6/12 md:w-4/12 lg:w-3/12"
      >
        <h1 className="font-bold text-2xl sm:text-3xl text-white">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="py-2 my-2 w-full bg-gray-700 rounded-sm bg-opacity-20 border border-gray-800"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="py-2 my-2 w-full bg-gray-700 rounded-sm bg-opacity-20 border border-gray-800"
          type="text"
          placeholder="Email"
        />
        <input
          ref={password}
          className="py-2 my-2 w-full bg-gray-700 rounded-sm bg-opacity-20 border border-gray-800"
          type="password"
          placeholder="Password"
        />
        <p className="py-2 text-red-600 font-bold">{errorMessage}</p>
        <button
          className="bg-red-600 text-white py-2 w-full my-4 rounded-sm"
          onClick={validateSingIn}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="flex justify-center text-sm sm:text-base">
          {isSignIn ? "New to Netflix?" : "Already registered?"}{" "}
          <span
            className="pl-2 font-bold hover:underline cursor-pointer"
            onClick={() => {
              setIsSignIn(!isSignIn);
            }}
          >
            {isSignIn ? "Sign up now" : "Sign In"}
          </span>
        </p>
      </form>
    </>
  );
};

export default Login;
