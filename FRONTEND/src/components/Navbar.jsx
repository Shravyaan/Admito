import { Link } from "react-router-dom";

export default function Navbar() {
  const role = localStorage.getItem("role");

  return (
    <nav style={{
      width: "100%", 
      padding: "15px 30px", 
      background: "#007bff",
      color: "white", 
      display: "flex", 
      justifyContent: "space-between",
      alignItems: "center",
      position: "fixed", // KEEP IT AT THE TOP
      top: 0,
      left: 0,
      zIndex: 1000,      // ENSURE IT'S ABOVE CONTENT
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      {/* BRAND NAME */}
      <h2 style={{ margin: 0, fontSize: "24px", fontWeight: "bold" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Admitto</Link>
      </h2>

      <div>
        {!role && (
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Login</Link>
        )}

        {role === "admin" && (
          <>
            <Link to="/admin/home" style={linkStyle}>Home</Link>
            <Link to="/admin/visitorlist" style={linkStyle}>Visitor List</Link>
            <Link to="/admin/announcements" style={linkStyle}>Announcements</Link>
            <Link to="/logout" style={logoutStyle}>Logout</Link>
          </>
        )}

        {role === "user" && (
          <>
            <Link to="/user/home" style={linkStyle}>Home</Link>
            <Link to="/user/dashboard" style={linkStyle}>Dashboard</Link>
            <Link to="/user/announcements" style={linkStyle}>Announcements</Link>
            <Link to="/logout" style={logoutStyle}>Logout</Link>
          </>
        )}
      </div>
    </nav>
  );
}

const linkStyle = { 
  marginRight: "15px", 
  color: "white", 
  textDecoration: "none",
  fontSize: "14px"
};

const logoutStyle = { 
  marginLeft: "15px", 
  color: "#ffcccc",   
  fontWeight: "bold",
  textDecoration: "none",
  fontSize: "14px"
};
