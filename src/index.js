import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter  } from "react-router-dom";
// import history from "./utils/history";
import AuthProvider from "./auth/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
     <AuthProvider
     domain={process.env.REACT_APP_AUTH_DOMAIN}
     clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
     authorizationParams={{
       redirect_uri: window.location.origin,
     }}
      useRefreshTokens
      cacheLocation="localstorage"
      scope='user_metadata app_metadata slack_id'
     >
        <App />
     </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals