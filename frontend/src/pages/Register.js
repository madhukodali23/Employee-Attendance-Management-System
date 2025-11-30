import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    employeeId: "",
    department: "",
    role: "employee",
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    await register(form);
    alert("Registered successfully");
    window.location.href = "/";
  };

  return (
    <div className="card-container">
      <h2>Register</h2>

      <input className="input-field" name="name" placeholder="Name" onChange={update} />
      <input className="input-field" name="email" placeholder="Email" onChange={update} />
      <input className="input-field" type="password" name="password" placeholder="Password" onChange={update} />
      <input className="input-field" name="employeeId" placeholder="Employee ID" onChange={update} />
      <input className="input-field" name="department" placeholder="Department" onChange={update} />

      <select className="input-field" name="role" onChange={update}>
        <option value="employee">Employee</option>
        <option value="manager">Manager</option>
      </select>

      <button className="primary-btn" onClick={submit}>
        Register
      </button>

      <p className="link-text">
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
  );
}
