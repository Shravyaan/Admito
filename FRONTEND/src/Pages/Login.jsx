import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api"; // Ensure this path is correct

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // We pass email and password directly to match your api.js definition
      // If your backend also requires 'role', use: loginUser(email, password, role)
      const data = await loginUser(email, password);
      
      if (data.token) {
        // Store the session data
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role || role); 

        // NAVIGATION LOGIC: Sending users to their correct starting points
        if (data.role === "admin" || role === "admin") {
          navigate("/admin/home");
        } else {
          navigate("/user/dashboard"); 
        }
      } else {
        setError(data.message || "Login failed. Please check your credentials.");
      }
    } catch (err) {
      // This catches network errors or the 'throw Error' from your api.js
      setError(err.message || "Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="login-container">
        <h1 style={{ color: "#007bff", marginBottom: "10px" }}>Admitto</h1>
        <p style={{ marginBottom: "20px", color: "#666" }}>Visitor Management System</p>
        
        <form onSubmit={handleLogin}>
          <div style={{ textAlign: "left", marginBottom: "15px" }}>
            <label style={{ fontSize: "14px", fontWeight: "600" }}>Login as:</label>
            <select 
              value={role} 
              onChange={(e) => setRole(e.target.value)}
              disabled={loading}
              style={{ marginTop: "5px" }}
            >
              <option value="user">User / Security</option>
              <option value="admin">Administrator</option>
            </select>
          </div>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />

          {error && (
            <p style={{ 
              color: "#dc3545", 
              backgroundColor: "#f8d7da", 
              padding: "10px", 
              borderRadius: "5px", 
              fontSize: "13px",
              marginBottom: "15px" 
            }}>
              {error}
            </p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Verifying..." : "Login to Dashboard"}
          </button>
        </form>

        <p style={{ marginTop: "20px", fontSize: "14px" }}>
          Don’t have an account? <a href="/register" style={{ fontWeight: "bold" }}>Register here</a>
        </p>
      </div>
    </div>
  );
}