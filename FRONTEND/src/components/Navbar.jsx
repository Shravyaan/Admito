import { Link } from "react-router-dom";

export default function Navbar() {
  const role = localStorage.getItem("role");

  return (
    <nav style={{
      width: "100%", padding: "15px", background: "#007bff",
      color: "white", display: "flex", justifyContent: "space-between",
      alignItems: "center" // Added for vertical alignment
    }}>
      <h2 style={{ margin: 0 }}>Admitto</h2>
      <div>
        {!role && (
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Login</Link>
        )}

        {role === "admin" && (
          <>
            <Link to="/admin/home" style={linkStyle}>Home</Link>
            <Link to="/admin/visitorlist" style={linkStyle}>Visitor List</Link>
            <Link to="/admin/announcements" style={linkStyle}>Announcements</Link>
            {/* LOGOUT ADDED HERE */}
            <Link to="/logout" style={logoutStyle}>Logout</Link>
          </>
        )}

        {role === "user" && (
          <>
            <Link to="/user/home" style={linkStyle}>Home</Link>
            <Link to="/user/dashboard" style={linkStyle}>Dashboard</Link>
            <Link to="/user/announcements" style={linkStyle}>Announcements</Link>
            {/* LOGOUT ADDED HERE */}
            <Link to="/logout" style={logoutStyle}>Logout</Link>
          </>
        )}
      </div>
    </nav>
  );
}

// Inline styles for cleaner code
const linkStyle = { 
  marginRight: "15px", 
  color: "white", 
  textDecoration: "none" 
};

const logoutStyle = { 
  marginLeft: "15px", // Extra space to separate it from main links
  color: "#ffcccc",   // Slight reddish tint to indicate a destructive action
  fontWeight: "bold",
  textDecoration: "none"
};