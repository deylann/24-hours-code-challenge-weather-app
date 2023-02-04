import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Weather from "./components/Weather";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<ProtectedRoute component={Home} />} />
        <Route
          path="/weather"
          element={<ProtectedRoute component={Weather} />}
        />
      </Routes>
    </>
  );
}

export default App;
