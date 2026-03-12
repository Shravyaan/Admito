import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>About Us</h1>
      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        Admitto is a modern Visitor Management System built to simplify and
        professionalize the way organizations handle visitor check-ins. Our
        mission is to provide a seamless, secure, and user-friendly experience
        for both visitors and administrators.
      </p>

      <h2>🌟 Our Vision</h2>
      <p>
        We believe that managing visitors should be effortless and efficient.
        Admitto helps organizations maintain accurate records, improve security,
        and create a welcoming environment for guests.
      </p>

      <h2>💡 What We Offer</h2>
      <ul>
        <li>Easy visitor registration through the Dashboard.</li>
        <li>Editable visitor records with add, update, and delete options.</li>
        <li>A clear Visitor List view with all details stored safely.</li>
        <li>Automatic data persistence using localStorage.</li>
      </ul>

      <h2>🤝 Our Commitment</h2>
      <p>
        We are committed to building tools that blend functionality with
        simplicity. Admitto is designed to be intuitive, reliable, and adaptable
        to your organization’s needs.
      </p>

      <div style={{ marginTop: "30px" }}>
        <Link to="/" style={{ marginRight: "15px" }}>Back to Home</Link>
        <Link to="/dashboard" style={{ marginRight: "15px" }}>Go to Dashboard</Link>
        <Link to="/visitorlist">View Visitor List</Link>
      </div>
    </div>
  );
}