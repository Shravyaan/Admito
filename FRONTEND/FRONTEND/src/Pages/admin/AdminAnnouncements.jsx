import { useState, useEffect } from "react";

export default function AdminAnnouncements() {
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  const [date, setDate] = useState("");
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("announcements")) || [];
    setAnnouncements(stored);
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    const newAnnouncement = { id: Date.now(), title, msg, date };
    const updated = [...announcements, newAnnouncement];
    setAnnouncements(updated);
    localStorage.setItem("announcements", JSON.stringify(updated));

    setTitle("");
    setMsg("");
    setDate("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Announcement</h2>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        /><br /><br />

        <textarea
          placeholder="Message"
          value={msg}
          required
          onChange={(e) => setMsg(e.target.value)}
        /><br /><br />

        <input
          type="date"
          value={date}
          required
          onChange={(e) => setDate(e.target.value)}
        /><br /><br />

        <button type="submit">Add Announcement</button>
      </form>

      <h3 style={{ marginTop: "30px" }}>All Announcements</h3>
      <ul>
        {announcements.map((a) => (
          <li key={a.id}>
            <strong>{a.title}</strong> — {a.msg} ({a.date})
          </li>
        ))}
      </ul>
    </div>
  );
}