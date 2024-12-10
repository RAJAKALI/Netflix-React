import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const signOutHandle = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="w-full absolute bg-gradient-to-b from-zinc-950 z-10 flex justify-between">
      <img
        className="w-44 mx-8 my-4"
        alt="logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {user && (
        <div className="flex items-center">
          <h3 className="text-white pr-4">{user.email}</h3>
          <button 
  className="text-red-600 font-bold bg-black p-1 mr-1 rounded-sm text-base sm:text-sm whitespace-nowrap" 
  onClick={signOutHandle}
>
  Sign Out
</button>

        </div>
      )}
    </div>
  );
};

export default Header;
