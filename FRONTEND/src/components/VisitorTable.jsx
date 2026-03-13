import { useState, useEffect } from "react";
import { getAllVisitors } from "../services/api"; // Ensure this path is correct

export default function VisitorTable() {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Load data from Backend (Reflection)
  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const token = localStorage.getItem("token"); // Get Admin Token
        const data = await getAllVisitors(token);
        
        // Ensure we are setting an array even if data is empty
        setVisitors(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch visitors from MongoDB:", err);
        setLoading(false);
      }
    };
    fetchVisitors();
  }, []);

  if (loading) return <p>Fetching live visitor logs...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Live Visitor Log (from Database)</h2>
      {visitors.length === 0 ? (
        <p>No visitors found in the system.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "10px", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#16b1c3" }}>
              <th>Name</th>
              <th>Category</th>
              <th>Contact No</th>
              <th>Vehicle No</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map((visitor) => (
              <tr key={visitor._id}>
                <td>{visitor.name}</td>
                <td>{visitor.visitCategory}</td>
                <td>{visitor.contactNumber}</td>
                <td>{visitor.vehicleNumber || "N/A"}</td>
                <td>{visitor.reasonOfVisit}</td>
                <td style={{ color: visitor.status === "In" ? "green" : "red", fontWeight: "bold" }}>
                  {visitor.status || "In"}
                </td>
                <td>{new Date(visitor.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}