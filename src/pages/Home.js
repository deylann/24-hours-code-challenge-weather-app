import React, { useState, useRef } from "react";
import Layout from "../Layout";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const inputEl = useRef(null);
  const { user } = useAuth0();
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  const handleChangeTextCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleRequestWeather = () => {
    if (country) {
      navigate(`/weather/${country}`);
    } else {
      inputEl.current.focus();
    }
  };
  return (
    <Layout>
      <div className="ml-10 mr-10 sm:ml-[250px] sm:mr-[250px]">
        <h2 className="text-3xl text-white font-semibold">
          Hello,{" "}
          <span>
            {user.nickname.charAt(0).toUpperCase() + user.nickname.slice(1)}
          </span>
        </h2>
        <p className="text-white font-light">
          Github Link: https://github.com/{user.nickname}
        </p>
        <div className="mt-10">
          <div class="relative mb-6">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                fill="#000000"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-violet-700"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="m14.91 13.09-3.68-3.21a4.86 4.86 0 0 0 .86-2.77A5.34 5.34 0 0 0 6.59 2a5.35 5.35 0 0 0-5.5 5.15 5.34 5.34 0 0 0 5.5 5.15 5.71 5.71 0 0 0 3.82-1.44L14.08 14zM6.59 11a4.09 4.09 0 0 1-4.25-3.9 4.09 4.09 0 0 1 4.25-3.9 4.09 4.09 0 0 1 4.25 3.9A4.08 4.08 0 0 1 6.59 11z"></path>
                </g>
              </svg>
            </div>
            <input
              type="text"
              ref={inputEl}
              id="input-group-1"
              class="bg-gray-50 border w-full text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-violet block pl-10 p-2.5 w-300"
              placeholder="Enter City or County ex: (London)"
              onChange={(e) => handleChangeTextCountry(e)}
            />
          </div>
          <div>
            <button
              className="text-2xl rounded-lg text-violet-700 hover:bg-violet-700 border hover:text-white bg-white px-10 py-2"
              onClick={handleRequestWeather}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </Layout>
  );
};

export default Dashboard;
