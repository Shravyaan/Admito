import { useState, useEffect } from "react";

export default function UserAnnouncements() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("announcements")) || [];
    setAnnouncements(stored);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Announcements</h2>
      {announcements.length === 0 ? (
        <p>No announcements yet.</p>
      ) : (
        <ul>
          {announcements.map((a) => (
            <li key={a.id}>
              <strong>{a.title}</strong> — {a.msg} <em>({a.date})</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}