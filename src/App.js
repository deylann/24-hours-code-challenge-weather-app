import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<ProtectedRoute component={Home} />} />
        <Route
          path="/weather/:country?"
          element={<ProtectedRoute component={Weather} />}
        />
      </Routes>
    </>
  );
}

export default App;
