import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

export default function Registration() {
  const [role, setRole] = useState("user");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await registerUser(name, email, password, role);
      
      alert("Registration successful! Please login.");
      navigate("/");
    } catch (err) {
      setError(err.message || "Registration failed");
      alert(err.message || "Registration failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>Register</h1>
      <form onSubmit={handleRegister} style={{ marginTop: "20px" }}>
        {/* Role first */}
        <label>
          Role:{" "}
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
            disabled={loading}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <br /><br />

        {/* Name for user, Username for admin */}
        <input
          type="text"
          placeholder={role === "user" ? "Name" : "Username"}
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
        />
        <br /><br />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        /><br /><br />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        /><br /><br />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}