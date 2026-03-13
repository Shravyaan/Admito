import { useState, useEffect } from "react";
import { createAnnouncement, getAnnouncements } from "../../services/api";

export default function AdminAnnouncements() {
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState(""); // Changed to 'msg' to match your state
  const [date, setDate] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(false);

  // 1. Fetch from MongoDB on Load
  const fetchAnnouncements = async () => {
    try {
      const data = await getAnnouncements();
      setAnnouncements(data);
    } catch (err) {
      console.error("Failed to fetch:", err.message);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  // 2. Save to MongoDB
  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("token");
    // Ensure the object keys match what your Backend Controller expects (title, message, date)
    const newAnnouncement = { title, message: msg, date };

    try {
      await createAnnouncement(newAnnouncement, token);
      alert("Announcement published to database!");
      
      // Reset fields
      setTitle("");
      setMsg("");
      setDate("");
      
      // Refresh list from DB
      fetchAnnouncements();
    } catch (err) {
      alert("Error saving: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard">
      <div className="login-container" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <h2>Add Announcement</h2>
        <form onSubmit={handleAdd}>
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Message</label>
          <textarea
            placeholder="Enter Message"
            value={msg}
            required
            onChange={(e) => setMsg(e.target.value)}
            style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ddd", minHeight: "100px" }}
          />

          <label>Date</label>
          <input
            type="date"
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Posting..." : "Add Announcement"}
          </button>
        </form>
      </div>

      <h3 style={{ marginTop: "40px", textAlign: "center" }}>Live Announcements (from DB)</h3>
      <div className="visitor-log-container">
        <table className="visitor-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {announcements.map((a) => (
              <tr key={a._id}>
                <td><strong>{a.title}</strong></td>
                <td>{a.message || a.msg}</td>
                <td>{new Date(a.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}