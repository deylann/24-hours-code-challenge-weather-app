import Navbar from "./components/Navbar";
import { Routes, Route,Navigate } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./auth/ProtectedRoute";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0()
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Home /> } />
        <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />}/>
      </Routes>
    </>
  );
}

export default App;
