import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const [role, setRole] = useState("user");
  const [name, setName] = useState("");       // for user
  const [username, setUsername] = useState(""); // for admin
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    if (users.find((u) => u.email === email)) {
      alert("Email already registered!");
      return;
    }

    // Build user object based on role
    let newUser;
    if (role === "user") {
      newUser = { role, name, email, password };
    } else {
      newUser = { role, username, email, password };
    }

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please login.");
    navigate("/");
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>Register</h1>
      <form onSubmit={handleRegister} style={{ marginTop: "20px" }}>
        {/* Role first */}
        <label>
          Role:{" "}
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <br /><br />

        {/* Name for user, Username for admin */}
        {role === "user" && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        )}
        {role === "admin" && (
          <input
            type="text"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        <br /><br />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}