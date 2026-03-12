import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>About Us</h1>
      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        Admitto is a modern Visitor Management System built to simplify and professionalize visitor check-ins.
      </p>
      <h2>Our Vision</h2>
      <p>We believe managing visitors should be effortless and efficient.</p>
      <h2>What We Offer</h2>
      <ul>
        <li>Easy visitor registration</li>
        <li>Editable visitor records</li>
        <li>Visitor List view</li>
        <li>Automatic data persistence</li>
      </ul>
      <h2>Our Commitment</h2>
      <p>We are committed to building tools that blend functionality with simplicity.</p>
      <div style={{ marginTop: "30px" }}>
        <Link to="/" style={{ marginRight: "15px" }}>Back to Login</Link>
        <Link to="/admin/home" style={{ marginRight: "15px" }}>Admin Home</Link>
        <Link to="/user/home">User Home</Link>
      </div>
    </div>
  );
}