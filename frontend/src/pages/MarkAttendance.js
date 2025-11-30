import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function MarkAttendance() {
  const { token } = useAuth();
  const API = process.env.REACT_APP_API_URL;

  const checkIn = async () => {
    await axios.post(`${API}/attendance/checkin`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    alert("Checked in!");
  };

  const checkOut = async () => {
    await axios.post(`${API}/attendance/checkout`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    alert("Checked out!");
  };

  return (
    <div className="page-box">
      <h2>Mark Attendance</h2>
      <button className="primary-btn" onClick={checkIn}>Check In</button>
      <button className="primary-btn" onClick={checkOut} style={{ marginTop: 10 }}>Check Out</button>
    </div>
  );
}
