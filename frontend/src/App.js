import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MarkAttendance from "./pages/MarkAttendance";
import MyHistory from "./pages/MyHistory";
import Navbar from "./components/Navbar";

function App() {
  const { token } = useAuth();

  return (
    <BrowserRouter>
      {token && <Navbar />}

      <Routes>
        <Route path="/" element={token ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/attendance" element={token ? <MarkAttendance /> : <Navigate to="/" />} />
        <Route path="/history" element={token ? <MyHistory /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
