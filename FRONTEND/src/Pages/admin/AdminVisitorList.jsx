import { useState, useEffect } from "react";
import { getAllVisitors } from "../../services/api"; // Ensure this import path is correct

export default function VisitorList() {
  // DEBUG 1: Initialize as an empty array [] so it doesn't show a blank row on start
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLiveLogs = async () => {
      try {
        const token = localStorage.getItem("token");
        const data = await getAllVisitors(token);
        
        // DEBUG 2: Ensure we set an array. Backend might send { visitors: [] } or just []
        const visitorData = Array.isArray(data) ? data : data.visitors || [];
        setVisitors(visitorData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching visitors:", err);
        setLoading(false);
      }
    };

    fetchLiveLogs();
  }, []);

  if (loading) return <div className="dashboard"><h2>Loading Visitor Records...</h2></div>;

  return (
    <div className="dashboard">
      <h2>Live Visitor Log</h2>
      <table className="visitor-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Contact No</th>
            <th>Address</th>
            <th>Vehicle No</th>
            <th>Reason</th>
            <th>Check-In Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {visitors.length > 0 ? (
            visitors.map((visitor, index) => (
              <tr key={visitor._id || index}>
                <td>{visitor.name}</td>
                <td>{visitor.visitCategory}</td>
                {/* DEBUG 3: Matching your backend model names */}
                <td>{visitor.contactNumber || visitor.contactNo}</td>
                <td>{visitor.address}</td>
                <td>{visitor.vehicleNumber || visitor.vehicleNo}</td>
                <td>{visitor.reasonOfVisit || visitor.reason}</td>
                <td>{new Date(visitor.createdAt).toLocaleString()}</td>
                <td>
                  <span className={visitor.status === "Out" ? "status-out" : "status-in"}>
                    {visitor.status || "In"}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" style={{ textAlign: "center" }}>No visitors registered in the database.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}