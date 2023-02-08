import React from "react";
import Layout from "../Layout";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const navigateToWeather = () => {
    navigate(`/weather`);
  };
  return (
    <Layout>
      <div className="flex flex-col-reverse sm:grid sm:grid-rows-3 sm:grid-flow-col sm:gap-3">
        <div className="flex flex-col row-span-3 sm:ml-[200px] items-center justify-center sm:h-[800px]">
          <div className="pl-5 sm:self-start">
            <h3 className="text-5xl text-white font-semibold mb-2">
              Welcome to the weather forcast web application.
            </h3>
            <p className="text-2xl my-10 sm:my-5 font-light text-white">
              Please login with your Github user to use the application and view
              the weather in your city
            </p>
          </div>
          <div className="pl-5 sm:self-start">
            {!isAuthenticated ? (
              <button
                className="text-2xl text-violet-700 hover:bg-violet-700 rounded-full border hover:text-white bg-white px-10 py-2"
                onClick={() =>
                  loginWithRedirect({
                    appState: {
                      returnTo: "/home",
                    },
                  })
                }
              >
                Login with Github
              </button>
            ) : (
              <button
                className="text-2xl text-violet-700 hover:bg-violet-700 border rounded-full hover:text-white bg-white px-10 py-2"
                onClick={navigateToWeather}
              >
                Go to Weather
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-col row-span-3 items-center justify-center sm: sm:h-[800px]">
          <img
            src="/img/logo.png"
            className="h-[300px] w-[300px] mr-3"
            alt="Logo"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
