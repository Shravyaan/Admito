import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user by email + password
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid credentials or user not registered!");
      return;
    }

    // Save role in localStorage
    localStorage.setItem("role", user.role);

    // Redirect based on role
    if (user.role === "admin") {
      navigate("/admin/home");
    } else {
      navigate("/user/home");
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
        /><br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />

        <button type="submit">Login</button>
      </form>
      <p style={{ marginTop: "10px" }}>
        Don’t have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
}