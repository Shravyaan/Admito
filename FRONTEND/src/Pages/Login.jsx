import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await loginUser(email, password);
      
      // Save token and user info in localStorage
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      localStorage.setItem("role", response.user.role);

      // Redirect based on role
      if (response.user.role === "admin") {
        navigate("/admin/home");
      } else {
        navigate("/user/home");
      }
    } catch (err) {
      setError(err.message || "Login failed");
      alert(err.message || "Invalid credentials or user not registered!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>Admitto</h1>
      <form onSubmit={handleLogin} style={{ marginTop: "20px" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        /><br /><br />

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
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p style={{ marginTop: "10px" }}>
        Don’t have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
}

