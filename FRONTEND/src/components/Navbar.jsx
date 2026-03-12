import { Link } from "react-router-dom";

export default function Navbar() {
  const role = localStorage.getItem("role");

  return (
    <nav style={{
      width: "100%", padding: "15px", background: "#007bff",
      color: "white", display: "flex", justifyContent: "space-between"
    }}>
      <h2>Admitto</h2>
      <div>
        {!role && (
          <Link to="/" style={{ color: "white" }}>Login</Link>
        )}

        {role === "admin" && (
          <>
            <Link to="/admin/home" style={{ marginRight: "15px", color: "white" }}>Home</Link>
            <Link to="/admin/visitorlist" style={{ marginRight: "15px", color: "white" }}>Visitor List</Link>
            <Link to="/admin/announcements" style={{ color: "white" }}>Announcements</Link>
          </>
        )}

        {role === "user" && (
          <>
            <Link to="/user/home" style={{ marginRight: "15px", color: "white" }}>Home</Link>
            <Link to="/user/dashboard" style={{ marginRight: "15px", color: "white" }}>Dashboard</Link>
            <Link to="/user/announcements" style={{ color: "white" }}>Announcements</Link>
          </>
        )}
      </div>
    </nav>
  );
}

