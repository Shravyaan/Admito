import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        width: "100%",              
        padding: "10px",
        background: "#007bff",
        color: "white",
        display: "flex",            
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",          
        top: 0,
        left: 0,
        zIndex: 1000
      }}
    >
      <h2 style={{ margin: 0 }}>Admitto</h2>
      <div>
        <Link to="/" style={{ marginRight: "15px", color: "white" }}>Home</Link>
        <Link to="/dashboard" style={{ marginRight: "15px", color: "white" }}>Dashboard</Link>
        <Link to="/visitorlist" style={{ marginRight: "15px", color: "white" }}>Visitor List</Link>
        <Link to="/about" style={{ color: "white" }}>About Us</Link>
      </div>
    </nav>
  );
}