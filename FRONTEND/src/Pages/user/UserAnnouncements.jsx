import { useState, useEffect } from "react";
import { getAnnouncements } from "../../services/api"; // Corrected path to your api.js

export default function UserAnnouncements() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const data = await getAnnouncements();
        // MongoDB returns an array of objects. 
        // We reverse it so the newest announcements are at the top.
        setAnnouncements(Array.isArray(data) ? data.reverse() : []);
      } catch (err) {
        console.error("Error fetching announcements:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  if (loading) {
    return (
      <div className="dashboard">
        <p style={{ textAlign: "center", marginTop: "50px" }}>Loading announcements...</p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h2 style={{ color: "#007bff", marginBottom: "20px" }}>College Announcements</h2>
      
      {announcements.length === 0 ? (
        <div style={emptyStyle}>
          <p>No announcements yet. Check back later!</p>
        </div>
      ) : (
        <div className="announcement-list">
          {announcements.map((a) => (
            <div key={a._id} style={cardStyle}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <h3 style={{ margin: "0 0 10px 0", color: "#2c3e50" }}>{a.title}</h3>
                <span style={{ fontSize: "12px", color: "#888" }}>
                  {new Date(a.date).toLocaleDateString()}
                </span>
              </div>
              {/* Note: using 'message' or 'msg' based on what your DB stores */}
              <p style={{ color: "#555", lineHeight: "1.5", margin: 0 }}>
                {a.message || a.msg}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Styles to match your JIT project theme
const cardStyle = {
  background: "#fff",
  padding: "20px",
  marginBottom: "15px",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
  borderLeft: "6px solid #007bff",
  transition: "transform 0.2s",
};

const emptyStyle = {
  textAlign: "center",
  padding: "40px",
  background: "#f8f9fa",
  borderRadius: "10px",
  color: "#6c757d"
};