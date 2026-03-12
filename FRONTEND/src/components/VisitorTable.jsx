import { useState } from "react";

export default function VisitorTable() {
  const [visitors, setVisitors] = useState(() => {
    const storedVisitors = JSON.parse(localStorage.getItem("visitors")) || [];
    return storedVisitors;
  });

  // Delete visitor
  const deleteVisitor = (id) => {
    const updated = visitors.filter((v) => v.id !== id);
    setVisitors(updated);
    localStorage.setItem("visitors", JSON.stringify(updated));
  };

  // Edit visitor inline
  const editVisitor = (id, field, value) => {
    const updated = visitors.map((v) =>
      v.id === id ? { ...v, [field]: value } : v
    );
    setVisitors(updated);
    localStorage.setItem("visitors", JSON.stringify(updated));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Visitor List</h2>
      {visitors.length === 0 ? (
        <p>No visitors added yet.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "10px" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Visit Category</th>
              <th>Contact No</th>
              <th>Address</th>
              <th>Vehicle No</th>
              <th>Reason of Visit</th>
              <th>Check‑in Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map((visitor) => (
              <tr key={visitor.id}>
                <td>
                  <input
                    type="text"
                    value={visitor.name}
                    onChange={(e) => editVisitor(visitor.id, "name", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={visitor.visitCategory}
                    onChange={(e) => editVisitor(visitor.id, "visitCategory", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="tel"
                    value={visitor.contactNo}
                    onChange={(e) => editVisitor(visitor.id, "contactNo", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={visitor.address}
                    onChange={(e) => editVisitor(visitor.id, "address", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={visitor.vehicleNo}
                    onChange={(e) => editVisitor(visitor.id, "vehicleNo", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={visitor.reason}
                    onChange={(e) => editVisitor(visitor.id, "reason", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="time"
                    value={visitor.checkInTime}
                    onChange={(e) => editVisitor(visitor.id, "checkInTime", e.target.value)}
                  />
                </td>
                <td>
                  <select
                    value={visitor.status}
                    onChange={(e) => editVisitor(visitor.id, "status", e.target.value)}
                  >
                    <option value="Checked In">Checked In</option>
                    <option value="Checked Out">Checked Out</option>
                  </select>
                </td>
                <td>
                  <button onClick={() => deleteVisitor(visitor.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}



