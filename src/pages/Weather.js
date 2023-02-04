import React from "react";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";
const Weather = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/home");
  };
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg sm:mx-[250px] my-10 ">
      <button
        className="bg-white ml-3 sm:ml-0 font-semibold rounded-full px-7 py-2 mt-5 sm:mt-0 text-violet-700 hover:bg-violet-700 hover:text-white hover:border border mb-10"
        onClick={navigateToHome}
      >
        Back
      </button>
      <Table />
    </div>
  );
};

export default Weather;
