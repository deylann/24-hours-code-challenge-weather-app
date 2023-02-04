import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { isAuthenticated, logout } = useAuth0();
  const [open, setOpen] = useState(false);
  const handleOpenNav = () => {
    setOpen(!open);
  };

  console.log(open);
  return (
    <>
      <nav className="px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <img src="/img/logo.png" className="h-6 mr-3 sm:h-9" alt="Logo" />
            <span className="self-center text-xl text-white font-semibold whitespace-nowrap dark:text-white">
              Weather App
            </span>
          </Link>
          {isAuthenticated && (
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg sm:hidden hover:text-violet-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={handleOpenNav}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
            </button>
          )}

          {isAuthenticated && (
            <div
              className={`${
                open ? "block" : "hidden"
              } w-full sm:block sm:w-auto`}
            >
              <ul class="flex flex-col border p-2 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                {/* <ul className="flex flex-col p-1 mt-4 sm:items-center sm:flex-row sm:space-x-8 sm:mt-0 sm:text-sm sm:font-medium "> */}
                <li>
                  <Link
                    to="/"
                    class="block py-2 pl-3 pr-4 text-white rounded-lg hover:bg-white hover:text-violet-700"
                  >
                    Welcome
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    class="block py-2 pl-3 pr-4 text-white rounded-lg hover:bg-white hover:text-violet-700"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/weather"
                    class="block py-2 pl-3 pr-4 text-white rounded-lg hover:bg-white hover:text-violet-700"
                  >
                    Weather
                  </Link>
                </li>
                <li className="text-center">
                  <button
                    className="bg-white font-semibold rounded-full px-7 py-2 mt-5 sm:mt-0 text-violet-700 hover:bg-violet-700 hover:text-white hover:border border"
                    onClick={() => {
                      //redirect to origin page
                      logout({ returnTo: window.location.origin });
                    }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
