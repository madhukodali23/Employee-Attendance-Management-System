import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    await login(email, password);
    window.location.href = "/dashboard";
  };

  return (
    <div className="card-container">
      <h2>Login</h2>

      <input
        className="input-field"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="input-field"
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="primary-btn" onClick={submit}>
        Login
      </button>

      <p className="link-text">
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
}
