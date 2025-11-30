import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function MyHistory() {
  const { token } = useAuth();
  const API = process.env.REACT_APP_API_URL;
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/attendance/my-history`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setHistory(res.data));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page-box">
      <h2>My Attendance History</h2>

      {history.length === 0 && <p>No attendance records found</p>}

      {history.map((item) => (
        <div key={item._id} className="card">
          <p><strong>Date:</strong> {item.date}</p>
          <p><strong>Status:</strong> {item.status}</p>
          <p><strong>Check In:</strong> {item.checkInTime}</p>
          <p><strong>Check Out:</strong> {item.checkOutTime}</p>
        </div>
      ))}
    </div>
  );
}
