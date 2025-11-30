import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <nav style={{ padding: 10, background: "#222", color: "#fff" }}>
      <Link to="/dashboard" style={{ marginRight: 15, color: "#fff" }}>Dashboard</Link>
      <Link to="/attendance" style={{ marginRight: 15, color: "#fff" }}>Attendance</Link>
      <Link to="/history" style={{ marginRight: 15, color: "#fff" }}>History</Link>

      <button
        onClick={logout}
        style={{ float: "right", background: "red", padding: "5px 10px", color: "#fff" }}
      >
        Logout
      </button>
    </nav>
  );
}
