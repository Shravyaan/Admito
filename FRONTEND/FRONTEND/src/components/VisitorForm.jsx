import { useState } from "react";

export default function VisitorForm() {
  const [formData, setFormData] = useState({
    name: "",
    visitCategory: "",
    contactNo: "",
    address: "",
    vehicleNo: "",
    reason: "",
    checkInTime: "",
    status: "Pending", // default status
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newVisitor = {
      id: Date.now(),
      ...formData,
    };

    const storedVisitors = JSON.parse(localStorage.getItem("visitors")) || [];
    storedVisitors.push(newVisitor);
    localStorage.setItem("visitors", JSON.stringify(storedVisitors));

    alert("Visitor added successfully!");

    // Reset form
    setFormData({
      name: "",
      visitCategory: "",
      contactNo: "",
      address: "",
      vehicleNo: "",
      reason: "",
      checkInTime: "",
      status: "Pending",
    });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Add Visitor</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <label>
          Visit Category:
          <input
            type="text"
            name="visitCategory"
            value={formData.visitCategory}
            required
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <label>
          Contact No:
          <input
            type="tel"
            name="contactNo"
            value={formData.contactNo}
            required
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            required
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <label>
          Vehicle No:
          <input
            type="text"
            name="vehicleNo"
            value={formData.vehicleNo}
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <label>
          Reason of Visit:
          <input
            type="text"
            name="reason"
            value={formData.reason}
            required
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <label>
          Check‑in Time:
          <input
            type="time"
            name="checkInTime"
            value={formData.checkInTime}
            required
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <label>
          Status:
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Pending">Pending</option>
            <option value="Checked In">Checked In</option>
            <option value="Checked Out">Checked Out</option>
          </select>
        </label>
        <br /><br />

        <button type="submit">Add Visitor</button>
      </form>
    </div>
  );
}