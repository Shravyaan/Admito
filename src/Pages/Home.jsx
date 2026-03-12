import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Welcome to Admitto</h1>
      <p style={{ maxWidth: "600px", margin: "20px auto", fontSize: "18px", lineHeight: "1.6" }}>
        Admitto is a Visitor Management System designed to keep track of everyone who visits your site.
        It helps you store visitor details such as name, contact number, email, vehicle information, and
        the purpose of their visit. With Admitto, you can easily manage visitor records, improve security,
        and maintain a professional check-in process.
      </p>
      <img 
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
        alt="Visitor Management Illustration" 
        style={{ width: "250px", margin: "20px auto", display: "block" }}
      />
      <div style={{ marginTop: "30px" }}>
        <Link to="/dashboard" style={{ marginRight: "15px" }}>Go to Dashboard</Link>
        <Link to="/visitorlist">View Visitor List</Link>
      </div>
    </div>
  );
}