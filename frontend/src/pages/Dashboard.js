import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { user, token } = useAuth();
  const API = process.env.REACT_APP_API_URL;

  const [today, setToday] = useState(null);

  useEffect(() => {
    axios
      .get(`${API}/attendance/my-history`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.length > 0) {
          setToday(res.data[res.data.length - 1]);
        }
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page-box">
      <h2>Welcome, {user?.name}</h2>
      <p>Role: {user?.role}</p>

      <div className="card">
        <strong>Today's Status: </strong>
        {today?.status || "Not Marked"}
      </div>
    </div>
  );
}
