import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { isAuthenticated, logout } = useAuth0();
  return (
    <>
      <nav className="px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <img
              src="/img/logo.png"
              className="h-6 mr-3 sm:h-9"
              alt="Logo"
            />
            <span className="self-center text-xl text-white font-semibold whitespace-nowrap dark:text-white">
              Weather App
            </span>
          </Link>
          {isAuthenticated &&  <div>
            <ul className="flex flex-col p-1 mt-4 sm:items-center sm:flex-row sm:space-x-8 sm:mt-0 sm:text-sm sm:font-medium ">
              <li>
                  <button
                    className="bg-white font-semibold rounded-full px-5 py-3 text-violet-700 hover:bg-violet-700 hover:text-white hover:border border"
                    onClick={() => {
                        //redirect to origin page
                      logout({ returnTo: window.location.origin });
                    }}
                  >
                    Logout
                  </button>
              </li>
            </ul>
          </div>}
         
        </div>
      </nav>
    </>
  );
};

export default Navbar;
